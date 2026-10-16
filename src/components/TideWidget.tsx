"use client";

import React from "react";
import { Icon } from "./Icon";

export function TideWidget() {
  return (
    <section className="w-full bg-gradient-to-br from-tertiary via-tertiary-container to-secondary rounded-2xl sm:rounded-3xl text-on-tertiary shadow-md p-6 sm:p-8 lg:p-10 relative overflow-hidden">
      <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-surface-container-lowest/10 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-8 lg:gap-10">
        {/* Lado Esquerdo: Mensagem e Localidade */}
        <div className="space-y-3 md:max-w-md lg:max-w-xl">
          <div className="flex items-center space-x-2">
            <Icon name="location_on" size={17} className="text-tertiary-fixed shrink-0" />
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary-fixed font-bold">
              Litoral Leste do Ceará
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary-fixed/60" />
            <span className="font-label-sm text-label-sm text-tertiary-fixed/90 font-medium">
              Beberibe
            </span>
          </div>

          <h1 className="font-headline-md text-headline-md tracking-tight leading-tight text-surface font-bold text-2xl sm:text-3xl lg:text-[34px]">
            Descubra os encantos de Beberibe
          </h1>

          <p className="font-body-sm text-body-sm text-tertiary-fixed/90 leading-relaxed text-sm sm:text-base">
            Falésias esculpidas pelo vento, lagoas cristalinas, praias paradisíacas e a autêntica hospitalidade cearense.
          </p>
        </div>

        {/* Lado Direito: Tábua de Marés & Clima */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto md:min-w-[290px] shrink-0">
          <div className="flex items-center justify-between bg-surface-container-lowest/15 px-4 py-3 rounded-xl backdrop-blur-sm border border-surface-container-lowest/10">
            <div className="flex items-center space-x-2">
              <Icon name="wb_sunny" size={18} className="text-primary-fixed shrink-0" />
              <span className="font-label-md text-label-md font-semibold text-surface text-sm sm:text-base">
                30°C • Ensolarado
              </span>
            </div>
            <span className="text-[12px] text-tertiary-fixed font-medium">
              UV Alto (Índice 9)
            </span>
          </div>

          <div className="bg-surface-container-lowest/15 backdrop-blur-md rounded-xl p-4 sm:p-5 flex items-center justify-between gap-3 border border-surface-container-lowest/10 shadow-sm">
            <div className="flex items-center space-x-3.5 min-w-0">
              <div className="w-11 h-11 rounded-full bg-surface-container-lowest/20 flex items-center justify-center shrink-0">
                <Icon name="waves" size={20} className="text-tertiary-fixed" />
              </div>
              <div className="min-w-0">
                <p className="font-label-sm text-label-sm text-tertiary-fixed font-bold leading-none text-xs sm:text-sm">
                  Tábua de Marés • Janela Ideal
                </p>
                <p className="font-body-sm text-body-sm text-surface font-medium truncate mt-1 text-xs sm:text-sm">
                  Maré Baixa no Labirinto (0.3m às 13:45)
                </p>
              </div>
            </div>
            <Icon
              name="verified"
              size={20}
              className="text-surface-tint shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
