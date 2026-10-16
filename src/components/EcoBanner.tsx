"use client";

import React from "react";
import { Icon } from "./Icon";

export function EcoBanner() {
  return (
    <section className="w-full bg-surface-container-low rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 space-y-4 sm:space-y-5 border border-outline-variant/30">
      <div className="flex items-center space-x-2.5 text-primary">
        <Icon name="eco" size={24} className="text-primary" />
        <h3 className="font-label-md text-label-md uppercase tracking-wider font-bold text-sm sm:text-base">
          Preserve Nosso Patrimônio Natural
        </h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed text-sm sm:text-base max-w-4xl">
        O Monumento Natural das Falésias de Beberibe é uma unidade de conservação integral. É expressamente proibido retirar areias coloridas das paredes das falésias, riscar ou degradar as estruturas rochosas e descartar resíduos plásticos nas praias e lagoas.
      </p>
      <div className="flex flex-wrap items-center gap-3 sm:gap-4.5 pt-3 text-secondary font-label-sm text-label-sm font-medium">
        <span className="flex items-center gap-2 bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl border border-outline-variant/20 shadow-xs">
          <Icon name="delete" size={18} className="text-tertiary" />
          Leve seu lixo de volta.
        </span>
        <span className="flex items-center gap-2 bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl border border-outline-variant/20 shadow-xs">
          <Icon name="handshake" size={18} className="text-tertiary" />
          Apoie os guias credenciados.
        </span>
        <span className="flex items-center gap-2 bg-surface-container-lowest/80 px-4 py-2.5 rounded-xl border border-outline-variant/20 shadow-xs">
          <Icon name="nature_people" size={18} className="text-tertiary" />
          Respeite a fauna marinha.
        </span>
      </div>
    </section>
  );
}
