"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  HIGHLIGHTS,
  INITIAL_COMMERCES,
  Attraction,
  Commerce,
} from "@/data/beberibeData";
import { Header } from "@/components/Header";
import { BottomNav, NavTab } from "@/components/BottomNav";
import { TideWidget } from "@/components/TideWidget";
import { SearchAndFilters } from "@/components/SearchAndFilters";
import { HighlightsCarousel } from "@/components/HighlightsCarousel";
import { ItineraryBanner } from "@/components/ItineraryBanner";
import { CommerceCard } from "@/components/CommerceCard";
import { EcoBanner } from "@/components/EcoBanner";
import { CadastrarModal } from "@/components/CadastrarModal";
import { ComerciosView } from "@/components/ComerciosView";
import { RoteirosView } from "@/components/RoteirosView";
import { AgendaView } from "@/components/AgendaView";
import { NotificationsModal } from "@/components/NotificationsModal";
import { AttractionModal } from "@/components/AttractionModal";
import { Icon } from "@/components/Icon";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<NavTab>("explorar");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todas");
  const [selectedDistrict, setSelectedDistrict] = useState("todos");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [commerces, setCommerces] = useState<Commerce[]>(INITIAL_COMMERCES);

  // Modais
  const [isCadastrarOpen, setIsCadastrarOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Carregar dados salvos do localStorage após a montagem inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const savedFavorites = localStorage.getItem("beberibe_favorites");
        if (savedFavorites) {
          setFavorites(JSON.parse(savedFavorites));
        }

        const savedCommerces = localStorage.getItem("beberibe_custom_commerces");
        if (savedCommerces) {
          const parsed = JSON.parse(savedCommerces);
          setCommerces([...INITIAL_COMMERCES, ...parsed]);
        }
      } catch (e) {
        console.warn("Erro ao acessar localStorage:", e);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Alternar favoritos
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("beberibe_favorites", JSON.stringify(next));
      } catch (e) {
        console.warn(e);
      }
      return next;
    });
  };

  // Cadastrar novo comércio
  const handleAddCommerce = (newCommerce: Commerce) => {
    setCommerces((prev) => {
      const updated = [newCommerce, ...prev];
      try {
        const customOnly = updated.filter((item) => item.id.startsWith("custom-"));
        localStorage.setItem("beberibe_custom_commerces", JSON.stringify(customOnly));
      } catch (e) {
        console.warn(e);
      }
      return updated;
    });
  };

  // Foco na busca ao clicar na lupa do Header
  const handleHeaderSearchClick = () => {
    if (activeTab !== "explorar") {
      setActiveTab("explorar");
    }
    setTimeout(() => {
      searchInputRef.current?.focus();
      searchInputRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  // Filtragem dos Destaques
  const filteredHighlights = HIGHLIGHTS.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "todas" || item.category === selectedCategory;

    const matchesDistrict =
      selectedDistrict === "todos" ||
      item.district.toLowerCase().replace(/\s+/g, "-") === selectedDistrict ||
      (selectedDistrict === "morro-branco" && item.district.includes("Morro Branco")) ||
      (selectedDistrict === "praia-das-fontes" && item.district.includes("Fontes")) ||
      (selectedDistrict === "lagoa-do-uruau" && item.district.includes("Uruaú"));

    return matchesSearch && matchesCategory && matchesDistrict;
  });

  // Filtragem dos Comércios na Home
  const filteredCommerces = commerces.filter((item) => {
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.district.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "todas" || item.categorySlug === selectedCategory;

    const matchesDistrict =
      selectedDistrict === "todos" || item.districtSlug === selectedDistrict;

    return matchesSearch && matchesCategory && matchesDistrict;
  });

  const tabTitles: Record<NavTab, string> = {
    explorar: "Explorar",
    comercios: "Comércios",
    cadastrar: "Cadastrar",
    roteiros: "Roteiros",
    agenda: "Agenda",
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Top Header Responsivo */}
      <Header
        currentTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenCadastrar={() => setIsCadastrarOpen(true)}
        activeTabTitle={tabTitles[activeTab]}
        onSearchClick={handleHeaderSearchClick}
        onNotificationsClick={() => setIsNotificationsOpen(true)}
      />

      {/* Main Container Responsivo: se adapta a mobile (100%), tablet e desktop (max-w-6xl) */}
      <main className="flex flex-col relative w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-32 sm:pb-36 md:pb-20 bg-surface flex-grow max-w-6xl mx-auto overflow-x-hidden">
        {/* ABA: EXPLORAR */}
        {activeTab === "explorar" && (
          <div className="flex flex-col w-full space-y-8 sm:space-y-12 lg:space-y-16 animate-fadeIn">
            {/* Widget de Boas-vindas & Tábua de Marés */}
            <TideWidget />

            {/* Barra de Busca e Filtros Rápidos */}
            <SearchAndFilters
              inputRef={searchInputRef}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedDistrict={selectedDistrict}
              onDistrictChange={setSelectedDistrict}
              onOpenAdvancedFilters={() => setActiveTab("comercios")}
            />

            {/* Destaques Imperdíveis (Grid Responsivo de 3 colunas no Desktop) */}
            <HighlightsCarousel
              highlights={filteredHighlights}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              onSelectAttraction={setSelectedAttraction}
              onViewMore={() => setActiveTab("roteiros")}
            />

            {/* Banner de Roteiros Prontos */}
            <ItineraryBanner onExploreClick={() => setActiveTab("roteiros")} />

            {/* Comércio Local em Evidência (Grid Responsivo de 3 colunas) */}
            <section className="w-full space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-title-md text-title-md text-on-surface font-bold text-xl sm:text-2xl">
                    Comércio Local em Evidência
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary text-xs sm:text-sm">
                    Apoie os prestadores de serviço e empreendedores locais de Beberibe
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("comercios")}
                  className="font-label-md text-label-md text-primary flex items-center hover:underline cursor-pointer group text-xs sm:text-sm"
                >
                  <span>Ver catálogo completo</span>
                  <Icon name="chevron_right" size={16} className="group-hover:translate-x-0.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                {filteredCommerces.slice(0, 6).map((commerce) => (
                  <CommerceCard key={commerce.id} commerce={commerce} />
                ))}
              </div>

              {filteredCommerces.length === 0 && (
                <div className="p-8 text-center bg-surface-container-low rounded-2xl text-on-surface-variant font-body-sm border border-outline-variant/30">
                  Nenhum comércio encontrado para esta combinação de filtros.
                </div>
              )}
            </section>

            {/* Rodapé Educativo & Consciência Ambiental */}
            <EcoBanner />
          </div>
        )}

        {/* ABA: COMÉRCIOS */}
        {activeTab === "comercios" && (
          <ComerciosView
            commerces={commerces}
            onOpenCadastrar={() => setIsCadastrarOpen(true)}
          />
        )}

        {/* ABA: ROTEIROS */}
        {activeTab === "roteiros" && <RoteirosView />}

        {/* ABA: AGENDA */}
        {activeTab === "agenda" && <AgendaView />}
      </main>

      {/* Barra de Navegação Inferior (Exclusiva para Telas Mobile - md:hidden) */}
      <BottomNav
        currentTab={activeTab}
        onTabChange={(tab) => {
          if (tab === "cadastrar") {
            setIsCadastrarOpen(true);
          } else {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        onOpenCadastrar={() => setIsCadastrarOpen(true)}
      />

      {/* Modal: Cadastrar Negócio */}
      <CadastrarModal
        isOpen={isCadastrarOpen}
        onClose={() => setIsCadastrarOpen(false)}
        onAddCommerce={handleAddCommerce}
      />

      {/* Modal: Notificações & Alertas */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
      />

      {/* Modal: Detalhes da Atração */}
      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
        isFavorite={selectedAttraction ? favorites.includes(selectedAttraction.id) : false}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}
