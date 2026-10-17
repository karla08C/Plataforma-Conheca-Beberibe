"use client";

import { useState, useEffect } from "react";
import {
  WeatherData,
  RealtimeClock,
  DynamicTideDay,
  DEFAULT_WEATHER,
  DEFAULT_CLOCK,
  DEFAULT_TIDES,
  fetchBeberibeWeather,
  getBeberibeRealtimeClock,
  calculateDynamicTides,
} from "@/lib/realtime";

export function useRealtime() {
  const [weather, setWeather] = useState<WeatherData>(DEFAULT_WEATHER);
  const [clock, setClock] = useState<RealtimeClock>(DEFAULT_CLOCK);
  const [tides, setTides] = useState<DynamicTideDay[]>(DEFAULT_TIDES);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Inicialização segura no cliente (evita erros de prerendering estático do Next.js)
    const now = new Date();
    setClock(getBeberibeRealtimeClock(now));
    setTides(calculateDynamicTides(now));

    // 1. Atualização do relógio a cada 10 segundos
    const clockInterval = setInterval(() => {
      setClock(getBeberibeRealtimeClock(new Date()));
    }, 10000);

    // 2. Busca do clima em tempo real
    let isMounted = true;
    async function loadWeather() {
      try {
        const live = await fetchBeberibeWeather();
        if (isMounted) {
          setWeather(live);
          setIsLoading(false);
        }
      } catch {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadWeather();

    // Atualiza o clima a cada 5 minutos
    const weatherInterval = setInterval(loadWeather, 5 * 60 * 1000);

    return () => {
      isMounted = false;
      clearInterval(clockInterval);
      clearInterval(weatherInterval);
    };
  }, []);

  return {
    weather,
    clock,
    tides,
    todayTide: tides[0] || DEFAULT_TIDES[0],
    isLoading,
  };
}
