"use client";

import React from "react";
import { Commerce } from "@/data/beberibeData";
import { Icon } from "./Icon";

interface CommerceCardProps {
  commerce: Commerce;
  onSelect?: (commerce: Commerce) => void;
}

export function CommerceCard({ commerce, onSelect }: CommerceCardProps) {
  const whatsappUrl = `https://wa.me/${commerce.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Olá! Vi o anúncio da ${commerce.name} no app Conheça Beberibe e gostaria de mais informações.`
  )}`;

  return (
    <div
      onClick={() => onSelect && onSelect(commerce)}
      className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4 sm:gap-4.5 items-center border border-outline-variant/30 group cursor-pointer"
    >
      <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-2xl overflow-hidden bg-surface-container shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={commerce.image}
          alt={commerce.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 min-w-0 justify-between h-full py-0.5 space-y-1.5">
        <div>
          <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
            <span className="font-label-sm text-label-sm text-primary font-bold text-xs sm:text-sm">
              {commerce.category}
            </span>
            {commerce.verified && (
              <Icon name="verified" size={15} className="text-tertiary" />
            )}
            {commerce.rating && (
              <div className="flex items-center space-x-0.5 ml-auto bg-surface-container-low px-1.5 sm:px-2 py-0.5 rounded-md">
                <Icon name="star" size={13} className="text-primary" filled={true} />
                <span className="font-label-sm text-label-sm font-bold text-on-surface text-xs">
                  {commerce.rating.toFixed(1)}
                </span>
                {commerce.reviewsCount && (
                  <span className="font-label-sm text-label-sm text-outline text-[11px]">
                    ({commerce.reviewsCount})
                  </span>
                )}
              </div>
            )}
          </div>

          <h4 className="font-title-md text-title-md text-on-surface truncate group-hover:text-primary transition-colors font-bold text-[15px] sm:text-base mt-0.5 sm:mt-1">
            {commerce.name}
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 text-xs sm:text-[13px] leading-relaxed">
            {commerce.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2.5 gap-2">
          <span className="font-label-sm text-label-sm text-secondary truncate font-medium text-xs sm:text-sm">
            {commerce.district}
          </span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="h-10 px-3.5 sm:px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-label-sm text-label-sm font-bold flex items-center space-x-1.5 shadow-sm shadow-emerald-700/20 active:scale-95 transition-all shrink-0 cursor-pointer text-xs sm:text-sm"
          >
            <Icon name={commerce.actionIcon || "chat"} size={15} className="text-white" />
            <span>{commerce.actionText || "WhatsApp"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
