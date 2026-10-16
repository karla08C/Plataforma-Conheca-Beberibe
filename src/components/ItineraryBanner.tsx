"use client";

import React from "react";
import { Icon } from "./Icon";

interface ItineraryBannerProps {
  onExploreClick: () => void;
}

export function ItineraryBanner({ onExploreClick }: ItineraryBannerProps) {
  return (
    <section className="w-full rounded-2xl sm:rounded-3xl bg-secondary-container text-on-secondary-container p-5 sm:p-8 lg:p-9 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6 border border-secondary/20">
      <div className="space-y-2 z-10">
        <div className="inline-flex items-center space-x-1.5 bg-surface-container-lowest/90 text-secondary font-label-sm text-label-sm px-3.5 py-1 rounded-full backdrop-blur-sm font-semibold">
          <Icon name="map" size={15} className="text-primary" />
          <span>Planejamento Fácil</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-xl sm:text-2xl">
          Roteiros Prontos de 1 a 3 dias
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg text-sm sm:text-base leading-relaxed">
          Roteiros otimizados com maré, gastronomia caiçara e pontos para o pôr do sol nas dunas de Beberibe.
        </p>
      </div>

      <button
        onClick={onExploreClick}
        className="w-full sm:w-auto h-12 sm:h-13 px-6 sm:px-7 rounded-2xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-label-md text-label-md font-bold flex items-center justify-center space-x-2 shadow-md shadow-primary/30 active:scale-95 transition-all z-10 shrink-0 cursor-pointer group select-none text-sm sm:text-base"
      >
        <span>Explorar Roteiros</span>
        <Icon name="arrow_forward" size={18} className="group-hover:translate-x-1" />
      </button>
    </section>
  );
}
