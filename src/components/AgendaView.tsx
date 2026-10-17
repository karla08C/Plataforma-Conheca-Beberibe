"use client";

import React, { useState } from "react";
import { LOCAL_EVENTS } from "@/data/beberibeData";
import { Icon } from "./Icon";
import { useRealtime } from "@/hooks/useRealtime";

export function AgendaView() {
  const [filterType, setFilterType] = useState<"todos" | "eventos" | "mares">("todos");
  const { tides, clock, weather } = useRealtime();

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 animate-fadeIn select-none">
      {/* Banner da Agenda */}
      <div className="bg-gradient-to-br from-tertiary via-tertiary-container to-secondary text-on-tertiary rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 flex-wrap gap-y-1">
          <Icon name="calendar_month" size={20} className="text-tertiary-fixed" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed font-bold text-xs sm:text-sm">
            Agenda &amp; Marés
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-fixed/60" />
          <span className="bg-surface-container-lowest/20 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm text-xs sm:text-sm">
            {clock.timeStr} • {weather.temperature}°C {weather.condition}
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md font-bold leading-tight text-white text-2xl sm:text-3xl lg:text-4xl">
          O que fazer em Beberibe
        </h2>
        <p className="font-body-sm text-body-sm text-tertiary-fixed-dim text-sm sm:text-base max-w-2xl leading-relaxed">
          Fique por dentro de eventos culturais, feiras de artesanato de rendas e a previsão oficial de marés calculada para planejar suas visitas às falésias e lagoas.
        </p>
      </div>

      {/* Filtro no Mobile */}
      <div className="flex lg:hidden bg-surface-container rounded-2xl p-1 gap-1 border border-outline-variant/30">
        <button
          onClick={() => setFilterType("todos")}
          className={`flex-1 py-2 sm:py-2.5 rounded-xl font-label-md text-label-md transition-all duration-200 cursor-pointer active:scale-95 text-xs sm:text-sm ${
            filterType === "todos"
              ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Tudo
        </button>
        <button
          onClick={() => setFilterType("eventos")}
          className={`flex-1 py-2 sm:py-2.5 rounded-xl font-label-md text-label-md transition-all duration-200 cursor-pointer active:scale-95 text-xs sm:text-sm ${
            filterType === "eventos"
              ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Eventos &amp; Feiras
        </button>
        <button
          onClick={() => setFilterType("mares")}
          className={`flex-1 py-2 sm:py-2.5 rounded-xl font-label-md text-label-md transition-all duration-200 cursor-pointer active:scale-95 text-xs sm:text-sm ${
            filterType === "mares"
              ? "bg-surface-container-lowest text-primary font-bold shadow-sm"
              : "text-on-surface-variant hover:text-on-surface"
          }`}
        >
          Tábua de Marés
        </button>
      </div>

      {/* Grade Responsiva de Duas Colunas no Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-start">
        {/* Tábua de Marés */}
        {(filterType === "todos" || filterType === "mares") && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-tertiary">
              <Icon name="water" size={22} className="text-tertiary" />
              <h3 className="font-title-md text-title-md text-on-surface font-bold text-xl">
                Previsão de Marés da Semana
              </h3>
            </div>

            <div className="space-y-3">
              {tides.map((tide, i) => (
                <div
                  key={i}
                  className={`bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border shadow-sm flex flex-col space-y-2.5 hover:shadow-md transition-shadow ${
                    tide.isToday ? "border-tertiary/50 ring-2 ring-tertiary/20" : "border-outline-variant/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-headline-sm text-headline-sm text-on-surface font-bold text-base sm:text-lg">
                        {tide.day}
                      </span>
                      <span className="text-xs text-secondary font-medium">
                        ({tide.dateStr})
                      </span>
                      {tide.isToday && (
                        <span className="bg-tertiary text-on-tertiary px-2 py-0.5 rounded-full text-[11px] font-bold">
                          Hoje • {clock.timeStr}
                        </span>
                      )}
                    </div>
                    <span className="bg-tertiary/10 text-tertiary px-2.5 sm:px-3 py-1 rounded-full font-label-sm text-label-sm font-semibold text-xs sm:text-sm">
                      Janela Ideal: {tide.ideal}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-on-surface-variant font-body-sm text-xs sm:text-sm pt-2 border-t border-surface-container">
                    <div className="flex items-center space-x-2 text-secondary">
                      <Icon name="arrow_downward" size={18} className="text-tertiary shrink-0" />
                      <span>Maré Baixa: <strong>{tide.low1}</strong></span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary">
                      <Icon name="arrow_upward" size={18} className="text-primary shrink-0" />
                      <span>Maré Alta: <strong>{tide.high1}</strong></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Eventos Culturais */}
        {(filterType === "todos" || filterType === "eventos") && (
          <section className="space-y-4">
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="festival" size={22} className="text-primary" />
              <h3 className="font-title-md text-title-md text-on-surface font-bold text-xl">
                Eventos &amp; Manifestações Culturais
              </h3>
            </div>

            <div className="space-y-3">
              {LOCAL_EVENTS.map((ev) => (
                <div
                  key={ev.id}
                  className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border border-outline-variant/30 shadow-sm space-y-2.5 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary font-bold">
                      {ev.category}
                    </span>
                    <div className="flex items-center space-x-1.5 text-secondary font-label-sm text-label-sm">
                      <Icon name="schedule" size={16} className="text-secondary" />
                      <span>{ev.time}</span>
                    </div>
                  </div>

                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight text-lg">
                    {ev.title}
                  </h4>

                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {ev.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-secondary font-label-sm text-label-sm border-t border-surface-container">
                    <Icon name="location_on" size={16} className="text-primary" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
