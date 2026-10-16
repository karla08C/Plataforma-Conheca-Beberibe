"use client";

import React from "react";
import { Attraction } from "@/data/beberibeData";
import { Icon } from "./Icon";

interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export function AttractionModal({
  attraction,
  onClose,
  isFavorite,
  onToggleFavorite,
}: AttractionModalProps) {
  if (!attraction) return null;

  const mapsQuery = encodeURIComponent(`${attraction.title}, Beberibe, Ceará, Brasil`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface rounded-2xl sm:rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden shadow-2xl border border-outline-variant/30 flex flex-col">
        {/* Imagem do Atrativo */}
        <div className="relative w-full h-60 sm:h-64 bg-surface-container shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={attraction.image}
            alt={attraction.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <button
            onClick={onClose}
            aria-label="Fechar"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 active:scale-90 transition-all cursor-pointer shadow-md"
          >
            <Icon name="close" size={20} className="text-white" />
          </button>

          <button
            onClick={() => onToggleFavorite(attraction.id)}
            aria-label={isFavorite ? "Remover favorito" : "Favoritar"}
            className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 active:scale-75 transition-all cursor-pointer shadow-md"
          >
            <Icon
              name={isFavorite ? "favorite" : "favorite_border"}
              size={20}
              className={isFavorite ? "text-rose-500 scale-110" : "text-white"}
              filled={isFavorite}
            />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed-dim font-bold">
              {attraction.district}
            </span>
            <h3 className="font-headline-md text-headline-md font-bold leading-tight text-xl sm:text-2xl pt-0.5">
              {attraction.title}
            </h3>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 sm:p-7 overflow-y-auto space-y-5">
          <div className="flex items-center gap-3 text-secondary font-label-sm text-label-sm flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <Icon name="near_me" size={16} className="text-primary" />
              {attraction.distance}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Icon name="schedule" size={16} className="text-primary" />
              {attraction.duration}
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold ml-auto text-xs">
              {attraction.tag}
            </span>
          </div>

          <p className="font-body-md text-body-md text-on-surface leading-relaxed text-[15px] sm:text-base">
            {attraction.description}
          </p>

          <div className="bg-surface-container-low p-4.5 sm:p-5 rounded-2xl border border-outline-variant/30 space-y-2.5">
            <h4 className="font-label-md text-label-md font-bold text-on-surface flex items-center space-x-2">
              <Icon name="recommend" size={18} className="text-primary" />
              <span>Recomendações do Guia Local</span>
            </h4>
            <ul className="text-on-surface-variant font-body-sm text-[13px] sm:text-sm space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Visite preferencialmente durante a maré baixa (entre 13h e 16h).</li>
              <li>Utilize calçados confortáveis e leve água para hidratação.</li>
              <li>Não retire areia das falésias (área de preservação ambiental permanente).</li>
            </ul>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-13 rounded-2xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-label-md text-label-md font-bold flex items-center justify-center space-x-2 shadow-md shadow-primary/25 active:scale-95 transition-all cursor-pointer select-none"
          >
            <Icon name="map" size={19} className="text-white" />
            <span>Ver Rota no Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  );
}
