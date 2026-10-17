// Utilitário de Dados em Tempo Real para Beberibe, Ceará (America/Fortaleza)

export interface WeatherData {
  temperature: number;
  condition: string;
  uvIndex: number;
  uvDescription: string;
  humidity: number;
  windSpeed: number;
  iconName: string;
  isDay: boolean;
  lastUpdated: string;
}

export interface RealtimeClock {
  timeStr: string;
  dateStr: string;
  isDay: boolean;
}

export interface DynamicTideDay {
  day: string;
  dateStr: string;
  low1: string;
  high1: string;
  low2: string;
  high2: string;
  ideal: string;
  isToday: boolean;
}

// Fallbacks estáveis para prerendering estático do Next.js
export const DEFAULT_WEATHER: WeatherData = {
  temperature: 29,
  condition: "Ensolarado",
  uvIndex: 8,
  uvDescription: "UV Alto (Índice 8)",
  humidity: 75,
  windSpeed: 18,
  iconName: "wb_sunny",
  isDay: true,
  lastUpdated: "Tempo Real",
};

export const DEFAULT_CLOCK: RealtimeClock = {
  timeStr: "14:30",
  dateStr: "Horário Local de Beberibe",
  isDay: true,
};

export const DEFAULT_TIDES: DynamicTideDay[] = [
  {
    day: "Hoje",
    dateStr: "Maré Baixa",
    low1: "0.3m às 13:45",
    high1: "2.9m às 08:15",
    low2: "0.4m às 02:30",
    high2: "3.0m às 20:30",
    ideal: "13:00 às 15:30",
    isToday: true,
  },
  {
    day: "Amanhã",
    dateStr: "Maré Baixa",
    low1: "0.3m às 14:30",
    high1: "2.9m às 09:00",
    low2: "0.4m às 03:15",
    high2: "3.0m às 21:15",
    ideal: "13:45 às 16:15",
    isToday: false,
  },
  {
    day: "Depois de amanhã",
    dateStr: "Maré Baixa",
    low1: "0.3m às 15:15",
    high1: "3.0m às 09:45",
    low2: "0.3m às 04:00",
    high2: "3.1m às 22:00",
    ideal: "14:30 às 17:00",
    isToday: false,
  },
  {
    day: "Quinta-feira",
    dateStr: "Maré Baixa",
    low1: "0.2m às 16:00",
    high1: "3.0m às 10h30",
    low2: "0.3m às 04:45",
    high2: "3.1m às 22:45",
    ideal: "15:00 às 17:30",
    isToday: false,
  },
];

/**
 * Mapeia o WMO Weather Code da Open-Meteo para rótulos em português
 */
export function mapWmoCode(code: number, isDay: boolean): { condition: string; icon: string } {
  if (code === 0) {
    return isDay
      ? { condition: "Ensolarado", icon: "wb_sunny" }
      : { condition: "Céu Limpo", icon: "wb_twilight" };
  }
  if (code === 1) {
    return isDay
      ? { condition: "Predominantemente Ensolarado", icon: "wb_sunny" }
      : { condition: "Noite Limpa", icon: "wb_twilight" };
  }
  if (code === 2) {
    return { condition: "Parcialmente Nublado", icon: "wb_cloudy" };
  }
  if (code === 3) {
    return { condition: "Nublado", icon: "cloud" };
  }
  if (code === 45 || code === 48) {
    return { condition: "Nevoeiro", icon: "cloud" };
  }
  if (code >= 51 && code <= 55) {
    return { condition: "Garoa Leve", icon: "grain" };
  }
  if (code >= 61 && code <= 65) {
    return { condition: "Chuva", icon: "water_drop" };
  }
  if (code >= 80 && code <= 82) {
    return { condition: "Pancadas de Chuva", icon: "water_drop" };
  }
  if (code >= 95) {
    return { condition: "Trovoada", icon: "thunderstorm" };
  }
  return { condition: "Tempo Agradável", icon: "wb_sunny" };
}

/**
 * Descreve o índice UV
 */
export function formatUvIndex(uv: number, isDay: boolean): string {
  if (!isDay || uv <= 0.5) return "UV Nulo";
  if (uv < 3) return `UV Baixo (${uv.toFixed(0)})`;
  if (uv < 6) return `UV Moderado (${uv.toFixed(0)})`;
  if (uv < 8) return `UV Alto (${uv.toFixed(0)})`;
  if (uv < 11) return `UV Muito Alto (${uv.toFixed(0)})`;
  return `UV Extremo (${uv.toFixed(0)})`;
}

/**
 * Busca o clima em tempo real para Beberibe - CE via Open-Meteo
 */
export async function fetchBeberibeWeather(): Promise<WeatherData> {
  try {
    const lat = -4.1797;
    const lon = -38.1306;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,uv_index,wind_speed_10m&timezone=America%2FFortaleza`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      return DEFAULT_WEATHER;
    }

    const data = await res.json();
    const current = data.current;

    const now = new Date();
    const localHourStr = now.toLocaleTimeString("pt-BR", {
      timeZone: "America/Fortaleza",
      hour: "2-digit",
      hour12: false,
    });
    const hour = parseInt(localHourStr, 10);
    const isDay = hour >= 6 && hour < 18;

    const weatherInfo = mapWmoCode(current.weather_code, isDay);
    const uvVal = current.uv_index || 0;

    return {
      temperature: Math.round(current.temperature_2m),
      condition: weatherInfo.condition,
      uvIndex: uvVal,
      uvDescription: formatUvIndex(uvVal, isDay),
      humidity: Math.round(current.relative_humidity_2m),
      windSpeed: Math.round(current.wind_speed_10m),
      iconName: weatherInfo.icon,
      isDay,
      lastUpdated: now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Fortaleza",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  } catch {
    return DEFAULT_WEATHER;
  }
}

/**
 * Obtém horário e data em tempo real no fuso de Beberibe (America/Fortaleza)
 */
export function getBeberibeRealtimeClock(date: Date): RealtimeClock {
  const timeStr = date.toLocaleTimeString("pt-BR", {
    timeZone: "America/Fortaleza",
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateStr = date.toLocaleDateString("pt-BR", {
    timeZone: "America/Fortaleza",
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const localHourStr = date.toLocaleTimeString("pt-BR", {
    timeZone: "America/Fortaleza",
    hour: "2-digit",
    hour12: false,
  });
  const hour = parseInt(localHourStr, 10);
  const isDay = hour >= 6 && hour < 18;

  return {
    timeStr,
    dateStr: dateStr.charAt(0).toUpperCase() + dateStr.slice(1),
    isDay,
  };
}

/**
 * Calcula a tábua de marés dinâmica para a costa de Beberibe / Morro Branco
 */
export function calculateDynamicTides(startDate: Date): DynamicTideDay[] {
  const refTime = new Date("2026-01-01T03:15:00Z").getTime();
  const halfCycleMs = ((12 * 60 + 25.2) * 60 * 1000) / 2;

  const daysResult: DynamicTideDay[] = [];

  for (let i = 0; i < 4; i++) {
    const targetDate = new Date(startDate.getTime() + i * 24 * 3600 * 1000);
    const dayName =
      i === 0
        ? "Hoje"
        : i === 1
        ? "Amanhã"
        : targetDate.toLocaleDateString("pt-BR", { timeZone: "America/Fortaleza", weekday: "long" });

    const formattedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    const dateFormatted = targetDate.toLocaleDateString("pt-BR", {
      timeZone: "America/Fortaleza",
      day: "2-digit",
      month: "2-digit",
    });

    const startOfDay = new Date(targetDate);
    startOfDay.setHours(0, 0, 0, 0);

    const events: { timeStr: string; isLow: boolean; height: string; dateObj: Date }[] = [];
    let t = refTime;
    while (t < startOfDay.getTime()) {
      t += halfCycleMs;
    }

    while (t < startOfDay.getTime() + 24 * 3600 * 1000) {
      const isLow = Math.round((t - refTime) / halfCycleMs) % 2 === 0;
      const d = new Date(t);
      const timeStr = d.toLocaleTimeString("pt-BR", {
        timeZone: "America/Fortaleza",
        hour: "2-digit",
        minute: "2-digit",
      });
      const height = isLow ? "0.3m" : "2.9m";
      events.push({ timeStr, isLow, height, dateObj: d });
      t += halfCycleMs;
    }

    const lowEvents = events.filter((e) => e.isLow);
    const highEvents = events.filter((e) => !e.isLow);

    const low1 = lowEvents[0] ? `${lowEvents[0].height} às ${lowEvents[0].timeStr}` : "0.3m às 13:45";
    const low2 = lowEvents[1] ? `${lowEvents[1].height} às ${lowEvents[1].timeStr}` : "0.4m às 02:30";
    const high1 = highEvents[0] ? `${highEvents[0].height} às ${highEvents[0].timeStr}` : "2.9m às 08:15";
    const high2 = highEvents[1] ? `${highEvents[1].height} às ${highEvents[1].timeStr}` : "3.0m às 20:30";

    let idealWindow = "13:00 às 15:30";
    if (lowEvents[0]) {
      const lowDate = lowEvents[0].dateObj;
      const beforeDate = new Date(lowDate.getTime() - 90 * 60 * 1000);
      const afterDate = new Date(lowDate.getTime() + 90 * 60 * 1000);
      const beforeStr = beforeDate.toLocaleTimeString("pt-BR", {
        timeZone: "America/Fortaleza",
        hour: "2-digit",
        minute: "2-digit",
      });
      const afterStr = afterDate.toLocaleTimeString("pt-BR", {
        timeZone: "America/Fortaleza",
        hour: "2-digit",
        minute: "2-digit",
      });
      idealWindow = `${beforeStr} às ${afterStr}`;
    }

    daysResult.push({
      day: formattedDayName,
      dateStr: dateFormatted,
      low1,
      high1,
      low2,
      high2,
      ideal: idealWindow,
      isToday: i === 0,
    });
  }

  return daysResult;
}
