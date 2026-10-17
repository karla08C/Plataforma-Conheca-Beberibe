"use client";

import React from "react";
import { NavTab } from "./BottomNav";
import { Icon } from "./Icon";
import { useRealtime } from "@/hooks/useRealtime";

interface HeaderProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenCadastrar: () => void;
  onSearchClick: () => void;
  onNotificationsClick: () => void;
  activeTabTitle: string;
}

export function Header({
  currentTab,
  onTabChange,
  onOpenCadastrar,
  onSearchClick,
  onNotificationsClick,
  activeTabTitle,
}: HeaderProps) {
  const { weather, clock, todayTide } = useRealtime();

  const navLinks: { id: NavTab; label: string; icon: string }[] = [
    { id: "explorar", label: "Explorar", icon: "explore" },
    { id: "comercios", label: "Comércios", icon: "storefront" },
    { id: "roteiros", label: "Roteiros", icon: "alt_route" },
    { id: "agenda", label: "Agenda & Marés", icon: "calendar_month" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(184,83,47,0.06)] border-b border-outline-variant/30 pt-safe select-none">
      <div className="h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 max-w-6xl mx-auto">
        {/* Logo & Marca */}
        <div
          onClick={() => onTabChange("explorar")}
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 cursor-pointer group active:scale-98 transition-transform"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Logo Conheça Beberibe"
            className="h-8 sm:h-9 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            src="https://lh3.googleusercontent.com/aida/AEtjO1X6Ucd-0jMtU8pC9UgmlNadtBedYf24gR0J69_BBdK9hqPlS0RW2kzJi0yRKyQfSlBNxLECTSE9HZMqlZ5BftUqEpT4Goad2Ynt8qSxCqOwepxvw_SdLfURPCB-p39NvSJcTd3Q77_XeFF-AOJrlNqKcyoWStLBUWV67oo7zyVDlpw4qnBKr7THiGUtKoH970dg62pBTcopoW5BOKhekrhHY2zw8aOOeDkrirySxjAdThhfo9AAv01Mqg"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-title-md text-title-md text-primary tracking-tight font-bold whitespace-nowrap text-base sm:text-lg">
                Conheça Beberibe
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary shrink-0 md:hidden" />
              <span className="font-label-sm text-label-sm text-secondary truncate md:hidden text-xs sm:text-sm">
                {activeTabTitle}
              </span>
            </div>
            <div className="hidden xl:flex items-center gap-1.5 text-tertiary font-label-sm text-[11px] sm:text-xs whitespace-nowrap">
              <Icon name="waves" size={13} className="text-tertiary shrink-0" />
              <span className="font-medium">
                {weather.temperature}°C • {weather.condition} • {clock.timeStr}
              </span>
            </div>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 xl:gap-2 shrink-0">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onTabChange(link.id)}
                className={`flex items-center space-x-1.5 px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-xl text-xs lg:text-[13px] xl:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-primary-fixed text-on-primary-fixed font-bold shadow-xs border border-primary/20"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container font-medium"
                }`}
              >
                <Icon name={link.icon} size={16} className="shrink-0" />
                <span className="whitespace-nowrap">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Ações da Direita */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Botão Cadastrar no Header Desktop */}
          <button
            onClick={onOpenCadastrar}
            className="hidden md:flex items-center space-x-1.5 bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-on-primary px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-xs lg:text-[13px] xl:text-sm font-bold shadow-sm shadow-primary/25 active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
          >
            <Icon name="add_circle" size={16} className="shrink-0" />
            <span>Cadastrar<span className="hidden lg:inline"> Negócio</span></span>
          </button>

          {/* Botão Buscar */}
          <button
            onClick={onSearchClick}
            aria-label="Buscar no diretório"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container active:scale-90 transition-all cursor-pointer"
          >
            <Icon name="search" size={20} />
          </button>

          {/* Botão Notificações */}
          <button
            onClick={onNotificationsClick}
            aria-label="Notificações e Alertas"
            className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl text-on-surface-variant hover:text-primary hover:bg-surface-container active:scale-90 transition-all cursor-pointer"
          >
            <Icon name="notifications" size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-surface animate-pulse" />
          </button>

          {/* Botão Perfil (Oculto em telas ultra-pequenas para evitar compressão) */}
          <div
            className="hidden sm:flex w-9 h-9 rounded-xl bg-primary text-on-primary items-center justify-center shrink-0 shadow-xs cursor-pointer hover:opacity-90 active:scale-90 transition-all ml-0.5 sm:ml-1"
            title="Perfil do Visitante"
          >
            <Icon name="person" size={18} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
