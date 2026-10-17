"use client";

import React from "react";
import { Icon } from "./Icon";
import { useRealtime } from "@/hooks/useRealtime";

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationsModal({ isOpen, onClose }: NotificationsModalProps) {
  const { weather, clock, todayTide } = useRealtime();

  if (!isOpen) return null;

  const notifications = [
    {
      id: "notif-1",
      title: "Alerta de Maré Baixa",
      time: `Hoje às ${clock.timeStr}`,
      type: "mare",
      icon: "waves",
      color: "text-tertiary bg-tertiary/10",
      content: `Janela de maré ideal no Labirinto de Morro Branco hoje entre ${todayTide?.ideal || "13:00 e 15:30"} (${todayTide?.low1 || "maré baixa de 0.3m"}). Ótimo momento para caminhadas e fotos!`,
    },
    {
      id: "notif-2",
      title: "Clima em Tempo Real",
      time: `Atualizado às ${clock.timeStr}`,
      type: "clima",
      icon: weather.iconName,
      color: "text-primary bg-primary/10",
      content: `Temperatura atual de ${weather.temperature}°C em Beberibe, condição de ${weather.condition.toLowerCase()} e ${weather.uvDescription}.`,
    },
    {
      id: "notif-3",
      title: "Pôr do Sol nas Dunas",
      time: "Hoje às 17h15",
      type: "clima",
      icon: "wb_twilight",
      color: "text-primary bg-primary/10",
      content:
        "Céu limpo previsto para o fim de tarde nas dunas de Morro Branco e Uruaú.",
    },
    {
      id: "notif-4",
      title: "Feira de Rendas e Artesanato",
      time: "Sábado no Centro",
      type: "evento",
      icon: "palette",
      color: "text-secondary bg-secondary/10",
      content:
        "Encontro de rendeiras com demonstração ao vivo na Praça da Matriz a partir das 16h.",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface rounded-2xl sm:rounded-3xl w-full max-w-md max-h-[85vh] overflow-hidden shadow-2xl border border-outline-variant/30 flex flex-col">
        <div className="p-5 sm:p-6 border-b border-surface-container flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Icon name="notifications_active" size={24} className="text-primary" />
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg sm:text-xl">
              Notificações &amp; Alertas
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar notificações"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all cursor-pointer"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-3.5 overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="p-4 sm:p-4.5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${n.color}`}
                  >
                    <Icon name={n.icon} size={18} />
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface font-semibold text-sm sm:text-base">
                    {n.title}
                  </h4>
                </div>
                <span className="font-label-sm text-label-sm text-secondary text-[12px] font-medium">
                  {n.time}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] sm:text-sm leading-relaxed pl-10.5">
                {n.content}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 sm:p-5 bg-surface-container-low text-center border-t border-surface-container">
          <button
            onClick={onClose}
            className="w-full h-12 rounded-xl bg-primary hover:bg-primary-container text-white font-label-md text-label-md font-bold shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
