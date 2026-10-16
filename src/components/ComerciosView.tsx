"use client";

import React, { useState } from "react";
import { Commerce, CATEGORIES, DISTRICTS } from "@/data/beberibeData";
import { CommerceCard } from "./CommerceCard";
import { Icon } from "./Icon";

interface ComerciosViewProps {
  commerces: Commerce[];
  onOpenCadastrar: () => void;
}

export function ComerciosView({
  commerces,
  onOpenCadastrar,
}: ComerciosViewProps) {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("todas");
  const [selectedDist, setSelectedDist] = useState("todos");

  const filtered = commerces.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.district.toLowerCase().includes(search.toLowerCase());

    const matchesCat =
      selectedCat === "todas" || item.categorySlug === selectedCat;
    const matchesDist =
      selectedDist === "todos" || item.districtSlug === selectedDist;

    return matchesSearch && matchesCat && matchesDist;
  });

  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Top Banner de Comércios */}
      <div className="bg-gradient-to-r from-primary via-primary-container to-secondary text-on-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm space-y-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed font-bold bg-black/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full w-fit">
            Guia Comercial &amp; Serviços
          </span>
          <span className="bg-surface-container-lowest/20 px-3.5 py-1.5 rounded-full font-label-sm text-label-sm w-fit font-medium text-xs sm:text-sm">
            {filtered.length} estabelecimentos encontrados
          </span>
        </div>

        <div className="max-w-2xl space-y-2">
          <h2 className="font-headline-md text-headline-md font-bold leading-tight text-2xl sm:text-3xl lg:text-4xl text-white">
            Comércio, Gastronomia &amp; Passeios em Beberibe
          </h2>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim text-sm sm:text-base leading-relaxed">
            Encontre os melhores restaurantes de frutos do mar, bugueiros oficiais credenciados, pousadas pé na areia e artesãos de areias coloridas.
          </p>
        </div>

        <button
          onClick={onOpenCadastrar}
          className="mt-2 w-full sm:w-auto h-12 px-6 bg-surface text-primary hover:bg-surface-bright rounded-2xl font-label-md text-label-md font-bold flex items-center justify-center space-x-2 shadow-sm active:scale-95 transition-all cursor-pointer text-sm sm:text-base"
        >
          <Icon name="add_circle" size={20} className="text-primary" />
          <span>Cadastrar Meu Negócio Gratuitamente</span>
        </button>
      </div>

      {/* Busca */}
      <div className="relative">
        <Icon
          name="search"
          size={21}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-primary"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar comércio, peixada, bugueiro, pousada..."
          className="w-full h-13 sm:h-14 pl-12.5 pr-4 bg-surface-container-lowest rounded-2xl font-body-md text-body-md text-on-surface border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm text-sm sm:text-base"
        />
      </div>

      {/* Categorias (com wrap responsivo) */}
      <div className="flex overflow-x-auto sm:flex-wrap space-x-2 sm:space-x-2.5 sm:gap-y-2.5 pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const active = selectedCat === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`shrink-0 h-10 sm:h-11 px-4 sm:px-5 rounded-full font-label-md text-label-md transition-all cursor-pointer text-xs sm:text-sm ${
                active
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Distritos */}
      <div className="flex overflow-x-auto sm:flex-wrap space-x-2 sm:space-x-2.5 sm:gap-y-2.5 pb-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
        {DISTRICTS.map((dist) => {
          const active = selectedDist === dist.id;
          return (
            <button
              key={dist.id}
              onClick={() => setSelectedDist(dist.id)}
              className={`shrink-0 h-9 sm:h-10 px-4 sm:px-4.5 rounded-xl font-label-md text-label-md transition-all cursor-pointer text-xs sm:text-sm flex items-center justify-center ${
                active
                  ? "bg-primary-fixed text-on-primary-fixed font-bold shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              {dist.label}
            </button>
          );
        })}
      </div>

      {/* Grid de Comércios: 1 coluna no mobile, 2 no tablet, 3 no desktop */}
      <div className="pt-2">
        {filtered.length === 0 ? (
          <div className="py-16 text-center bg-surface-container-low rounded-2xl p-6 space-y-3 border border-outline-variant/30">
            <Icon name="storefront" size={48} className="text-outline mx-auto" />
            <p className="font-title-md text-title-md text-on-surface font-semibold text-lg">
              Nenhum comércio encontrado
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
              Tente buscar por outro termo ou cadastre o primeiro negócio nesta categoria!
            </p>
            <button
              onClick={onOpenCadastrar}
              className="mt-3 h-11 px-6 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold mx-auto cursor-pointer hover:bg-primary-container transition-colors shadow-sm"
            >
              Cadastrar Agora
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {filtered.map((item) => (
              <CommerceCard key={item.id} commerce={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
