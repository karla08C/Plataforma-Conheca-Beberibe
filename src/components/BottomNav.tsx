"use client";

import React from "react";
import { Icon } from "./Icon";

export type NavTab = "explorar" | "comercios" | "cadastrar" | "roteiros" | "agenda";

interface BottomNavProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  onOpenCadastrar: () => void;
}

export function BottomNav({
  currentTab,
  onTabChange,
  onOpenCadastrar,
}: BottomNavProps) {
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/95 backdrop-blur-xl shadow-[0_-4px_16px_rgba(22,45,74,0.08)] border-t border-outline-variant/30 select-none">
      <div className="flex items-center justify-around h-16 px-3 sm:px-4 max-w-lg mx-auto">
        {/* Explorar */}
        <button
          onClick={() => onTabChange("explorar")}
          aria-current={currentTab === "explorar" ? "page" : undefined}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-13 transition-all duration-200 cursor-pointer active:scale-90 ${
            currentTab === "explorar"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <div
            className={`flex items-center justify-center px-3 py-0.5 rounded-full transition-colors ${
              currentTab === "explorar" ? "bg-primary/10" : ""
            }`}
          >
            <Icon name="explore" size={20} />
          </div>
          <span className="font-label-sm text-[11px] leading-tight tracking-tight">
            Explorar
          </span>
        </button>

        {/* Comércios */}
        <button
          onClick={() => onTabChange("comercios")}
          aria-current={currentTab === "comercios" ? "page" : undefined}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-13 transition-all duration-200 cursor-pointer active:scale-90 ${
            currentTab === "comercios"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <div
            className={`flex items-center justify-center px-3 py-0.5 rounded-full transition-colors ${
              currentTab === "comercios" ? "bg-primary/10" : ""
            }`}
          >
            <Icon name="storefront" size={20} />
          </div>
          <span className="font-label-sm text-[11px] leading-tight tracking-tight">
            Comércios
          </span>
        </button>

        {/* Botão Cadastrar (FAB Central Elevado) */}
        <button
          onClick={onOpenCadastrar}
          className="flex flex-col items-center justify-center -mt-6 min-w-[56px] h-16 group cursor-pointer active:scale-90 transition-transform select-none"
          aria-label="Cadastrar novo comércio ou serviço"
        >
          <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-primary to-primary-container text-on-primary flex items-center justify-center shadow-lg shadow-primary/35 ring-4 ring-surface group-hover:shadow-primary/50 group-hover:scale-105 transition-all">
            <Icon name="add" size={24} className="text-white" />
          </div>
          <span className="font-label-sm text-[11px] text-primary mt-1 font-bold">
            Cadastrar
          </span>
        </button>

        {/* Roteiros */}
        <button
          onClick={() => onTabChange("roteiros")}
          aria-current={currentTab === "roteiros" ? "page" : undefined}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-13 transition-all duration-200 cursor-pointer active:scale-90 ${
            currentTab === "roteiros"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <div
            className={`flex items-center justify-center px-3 py-0.5 rounded-full transition-colors ${
              currentTab === "roteiros" ? "bg-primary/10" : ""
            }`}
          >
            <Icon name="alt_route" size={20} />
          </div>
          <span className="font-label-sm text-[11px] leading-tight tracking-tight">
            Roteiros
          </span>
        </button>

        {/* Agenda */}
        <button
          onClick={() => onTabChange("agenda")}
          aria-current={currentTab === "agenda" ? "page" : undefined}
          className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-13 transition-all duration-200 cursor-pointer active:scale-90 ${
            currentTab === "agenda"
              ? "text-primary font-bold"
              : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <div
            className={`flex items-center justify-center px-3 py-0.5 rounded-full transition-colors ${
              currentTab === "agenda" ? "bg-primary/10" : ""
            }`}
          >
            <Icon name="calendar_month" size={20} />
          </div>
          <span className="font-label-sm text-[11px] leading-tight tracking-tight">
            Agenda
          </span>
        </button>
      </div>
    </nav>
  );
}
