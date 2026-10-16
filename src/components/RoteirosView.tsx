"use client";

import React, { useState } from "react";
import { ITINERARIES } from "@/data/beberibeData";
import { Icon } from "./Icon";

export function RoteirosView() {
  const [selectedItineraryId, setSelectedItineraryId] = useState(ITINERARIES[0].id);

  const currentItinerary =
    ITINERARIES.find((it) => it.id === selectedItineraryId) || ITINERARIES[0];

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 animate-fadeIn select-none">
      {/* Header do Roteiro */}
      <div className="bg-gradient-to-br from-secondary via-secondary to-tertiary text-on-secondary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-3">
        <div className="flex items-center space-x-2">
          <Icon name="alt_route" size={20} className="text-secondary-fixed" />
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed font-bold">
            Roteiros Especializados
          </span>
        </div>
        <h2 className="font-headline-md text-headline-md font-bold leading-tight text-white text-2xl sm:text-3xl lg:text-4xl">
          Planejamento de Viagem em Beberibe
        </h2>
        <p className="font-body-sm text-body-sm text-secondary-fixed-dim text-sm sm:text-base max-w-2xl leading-relaxed">
          Sugestões de roteiros otimizados por tempo de permanência, tábua de marés e melhores horários de luz solar para fotos inesquecíveis.
        </p>
      </div>

      {/* Layout de Duas Colunas no Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Seletor de Roteiros */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="font-title-md text-title-md text-on-surface font-bold text-lg">
            Escolha seu Tempo
          </h3>

          <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5">
            {ITINERARIES.map((it) => {
              const active = it.id === selectedItineraryId;
              return (
                <button
                  key={it.id}
                  onClick={() => setSelectedItineraryId(it.id)}
                  className={`p-4 rounded-2xl flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-200 cursor-pointer active:scale-95 border ${
                    active
                      ? "bg-primary text-on-primary border-primary shadow-md shadow-primary/20 font-bold ring-2 ring-primary/40 ring-offset-2 ring-offset-surface"
                      : "bg-surface-container-lowest text-on-surface border-outline-variant/30 hover:bg-surface-container hover:border-outline-variant/60 shadow-xs"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-label-md text-label-md uppercase tracking-wider">
                      {it.days === 1 ? "1 Dia" : `${it.days} Dias`}
                    </span>
                    <span
                      className={`text-[12px] px-2 py-0.5 rounded-full font-semibold ${
                        active
                          ? "bg-white/20 text-white"
                          : "bg-surface-container text-secondary"
                      }`}
                    >
                      {it.days === 1 ? "Essencial" : it.days === 2 ? "Mar & Lagoa" : "Imersão"}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-[13px] opacity-90 mt-1 line-clamp-1">
                    {it.tagline}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Dica de Maré no Desktop */}
          <div className="hidden lg:flex bg-tertiary/10 border border-tertiary/20 rounded-2xl p-4 items-start space-x-3 text-tertiary mt-4">
            <Icon name="waves" size={24} className="text-tertiary shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="font-label-md text-label-md font-bold text-on-surface">
                Atenção às Marés
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] mt-1 leading-relaxed">
                As caminhadas no Labirinto e a entrada nas grutas devem ser feitas na maré baixa. Acompanhe a aba Agenda para ver a tábua de marés da semana.
              </p>
            </div>
          </div>
        </div>

        {/* Linha do Tempo e Detalhes do Roteiro */}
        <div className="lg:col-span-8 space-y-5">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 space-y-1.5 shadow-sm">
            <div className="inline-block px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
              {currentItinerary.days} {currentItinerary.days === 1 ? "Dia Sugerido" : "Dias Sugeridos"}
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold text-xl sm:text-2xl pt-1">
              {currentItinerary.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-base">
              {currentItinerary.tagline}
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4 relative pl-6 border-l-2 border-primary/20 ml-3">
            {currentItinerary.schedule.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-surface ring-offset-0" />

                <div className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/30 space-y-2 hover:shadow-md transition-shadow">
                  <span className="inline-block text-tertiary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    {step.period}
                  </span>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold text-lg">
                    {step.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-[15px]">
                    {step.description}
                  </p>

                  {step.tip && (
                    <div className="mt-3 p-3 bg-surface-container-low rounded-xl flex items-start space-x-2 text-on-surface-variant">
                      <Icon name="lightbulb" size={18} className="text-primary shrink-0 mt-0.5" />
                      <p className="font-body-sm text-body-sm text-[13px] leading-relaxed">
                        <strong className="text-on-surface">Dica Local:</strong> {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dica de Maré no Mobile */}
          <div className="lg:hidden bg-tertiary/10 border border-tertiary/20 rounded-2xl p-4 flex items-center space-x-3 text-tertiary">
            <Icon name="waves" size={24} className="text-tertiary shrink-0" />
            <div className="min-w-0">
              <p className="font-label-md text-label-md font-bold text-on-surface">
                Atenção às Marés
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px]">
                O Labirinto das Falésias e as grutas são melhor aproveitados durante a maré baixa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
