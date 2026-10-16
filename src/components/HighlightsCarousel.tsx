"use client";

import React from "react";
import { Attraction } from "@/data/beberibeData";
import { Icon } from "./Icon";

interface HighlightsCarouselProps {
  highlights: Attraction[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectAttraction: (attraction: Attraction) => void;
  onViewMore: () => void;
}

export function HighlightsCarousel({
  highlights,
  favorites,
  onToggleFavorite,
  onSelectAttraction,
  onViewMore,
}: HighlightsCarouselProps) {
  if (highlights.length === 0) {
    return (
      <div className="w-full p-8 text-center bg-surface-container-low rounded-2xl text-on-surface-variant font-body-sm border border-outline-variant/30">
        Nenhum ponto turístico encontrado para os filtros selecionados.
      </div>
    );
  }

  return (
    <section className="w-full space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface font-bold text-xl sm:text-2xl">
            Destaques Imperdíveis
          </h2>
          <p className="font-body-sm text-body-sm text-secondary">
            Riquezas naturais e pontos turísticos icônicos de Beberibe
          </p>
        </div>
        <button
          onClick={onViewMore}
          className="h-10 px-3.5 rounded-xl font-label-md text-label-md text-primary hover:bg-primary/10 active:scale-95 flex items-center space-x-1.5 transition-all cursor-pointer group"
        >
          <span>Ver mais</span>
          <Icon name="arrow_forward" size={18} className="group-hover:translate-x-1" />
        </button>
      </div>

      {/* Grid responsivo */}
      <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory">
        {highlights.map((item) => {
          const isFavorite = favorites.includes(item.id);

          const tagBgClass =
            item.tagColor === "primary"
              ? "bg-primary/95 text-on-primary"
              : item.tagColor === "secondary"
              ? "bg-secondary/95 text-on-secondary"
              : "bg-tertiary/95 text-on-tertiary";

          return (
            <article
              key={item.id}
              onClick={() => onSelectAttraction(item)}
              className="w-[min(20rem,82vw)] sm:w-auto shrink-0 snap-start bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer border border-outline-variant/30 group active:scale-[0.99]"
            >
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-surface-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3.5 left-3.5 backdrop-blur-md font-label-sm text-label-sm px-3.5 py-1 rounded-full shadow-sm font-semibold ${tagBgClass}`}
                >
                  {item.tag}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(item.id);
                  }}
                  aria-label={isFavorite ? "Remover dos favoritos" : "Salvar como favorito"}
                  className="absolute top-3.5 right-3.5 w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-primary active:scale-75 transition-all shadow-md cursor-pointer hover:bg-surface-container-lowest hover:scale-105"
                >
                  <Icon
                    name={isFavorite ? "favorite" : "favorite_border"}
                    size={20}
                    className={isFavorite ? "text-rose-600 scale-110" : "text-outline hover:text-rose-600"}
                    filled={isFavorite}
                  />
                </button>
              </div>

              <div className="p-5 sm:p-6 flex flex-col space-y-3 flex-grow">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider text-[11px]">
                    {item.district}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight mt-1 group-hover:text-primary transition-colors text-lg font-bold">
                    {item.title}
                  </h3>
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3.5 flex items-center justify-between text-secondary font-label-sm text-label-sm mt-auto border-t border-surface-container/70">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Icon name="near_me" size={16} className="text-primary" />
                    {" "}{item.distance}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Icon name="schedule" size={16} className="text-primary" />
                    {" "}{item.duration}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
