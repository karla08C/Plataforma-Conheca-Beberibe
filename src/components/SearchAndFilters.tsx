"use client";

import React, { RefObject } from "react";
import { CATEGORIES, DISTRICTS } from "@/data/beberibeData";
import { Icon } from "./Icon";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedDistrict: string;
  onDistrictChange: (district: string) => void;
  inputRef?: RefObject<HTMLInputElement | null>;
  onOpenAdvancedFilters?: () => void;
}

export function SearchAndFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedDistrict,
  onDistrictChange,
  inputRef,
  onOpenAdvancedFilters,
}: SearchAndFiltersProps) {
  return (
    <div className="w-full space-y-5 sm:space-y-6">
      {/* Barra de Busca Inteligente */}
      <div className="flex items-center space-x-2.5 sm:space-x-3">
        <div className="relative flex-1">
          <Icon
            name="search"
            size={21}
            className="absolute left-4 sm:left-4.5 top-1/2 -translate-y-1/2 text-primary"
          />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar praias, falésias, bugueiros, pousadas..."
            className="w-full h-13 sm:h-14 pl-12 sm:pl-13 pr-11 bg-surface-container-lowest rounded-2xl font-body-md text-body-md text-on-surface placeholder-outline shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/80 transition-all border border-outline-variant/40 text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-on-surface active:scale-90 transition-all cursor-pointer"
              title="Limpar busca"
              aria-label="Limpar campo de busca"
            >
              <Icon name="close" size={16} />
            </button>
          )}
        </div>

        <button
          onClick={onOpenAdvancedFilters}
          aria-label="Abrir filtros avançados"
          className="h-13 sm:h-14 px-4 sm:px-5 bg-surface-container hover:bg-surface-container-high active:scale-95 rounded-2xl flex items-center justify-center space-x-2 text-on-surface transition-all shadow-sm cursor-pointer border border-outline-variant/30 shrink-0 font-medium select-none"
        >
          <Icon name="tune" size={20} className="text-primary" />
          <span className="hidden sm:inline font-label-md text-label-md">Filtros</span>
        </button>
      </div>

      {/* Tags de Categoria - Botões em formato Pill */}
      <div className="space-y-2.5">
        <div className="flex overflow-x-auto sm:flex-wrap space-x-2.5 sm:space-x-2.5 sm:gap-y-2.5 pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`shrink-0 h-10 sm:h-11 px-4 sm:px-5 rounded-full font-label-md text-label-md flex items-center space-x-2 transition-all duration-200 cursor-pointer select-none active:scale-95 text-xs sm:text-sm ${
                  isActive
                    ? "bg-primary text-on-primary shadow-md shadow-primary/25 font-bold ring-2 ring-primary ring-offset-2 ring-offset-surface"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-outline-variant/40 shadow-xs"
                }`}
              >
                {isActive && <Icon name="check" size={16} className="text-white" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Seletor Rápido de Distrito */}
      <div className="w-full space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="font-title-md text-title-md text-on-surface font-semibold text-[15px] sm:text-base">
            Explorar por Distrito
          </h2>
          <span className="font-label-sm text-label-sm text-secondary font-medium text-xs sm:text-sm">
            7 localidades
          </span>
        </div>

        <div className="flex overflow-x-auto sm:flex-wrap space-x-2 sm:space-x-2.5 sm:gap-y-2.5 pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {DISTRICTS.map((dist) => {
            const isActive = selectedDistrict === dist.id;
            return (
              <button
                key={dist.id}
                onClick={() => onDistrictChange(dist.id)}
                className={`shrink-0 h-9 sm:h-10 px-4 sm:px-4.5 rounded-xl font-label-md text-label-md transition-all duration-200 cursor-pointer select-none active:scale-95 flex items-center justify-center text-xs sm:text-sm ${
                  isActive
                    ? "bg-primary-fixed text-on-primary-fixed shadow-sm font-bold ring-2 ring-primary/40 border border-primary/30"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface border border-outline-variant/20"
                }`}
              >
                {dist.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
