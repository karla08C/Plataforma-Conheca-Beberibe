"use client";

import React, { useState } from "react";
import { CATEGORIES, DISTRICTS, Commerce } from "@/data/beberibeData";
import { Icon } from "./Icon";

interface CadastrarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCommerce: (newCommerce: Commerce) => void;
}

export function CadastrarModal({
  isOpen,
  onClose,
  onAddCommerce,
}: CadastrarModalProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("barracas");
  const [district, setDistrict] = useState("morro-branco");
  const [whatsapp, setWhatsapp] = useState("");
  const [description, setDescription] = useState("");
  const [locationDetails, setLocationDetails] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCategoryObj = CATEGORIES.find((c) => c.id === category);
    const selectedDistrictObj = DISTRICTS.find((d) => d.id === district);

    const defaultImages = [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAVhdQmOeBLXzWtXqBjjRtZZ_T_fyjjqh_Ea2F37POxjvlD69ZVRhxo4cqduPPzWeDjx52S04i3nsPVAMJd1G9vrZEB6Nb7IzJ6YYMj6w6XVypQjqA-bZytd9Z3f9C4F0aPnwrnp29_13Y21iNaplImID23ux6eoofmfih5XI1ox8wSjM0l3vLlNJYwMpAn6nleZaZdbbopHHmALH1ODA-T-LZ2OdbF6YNkiXrIJTRFjJbamWfUxfoY",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLKi4m80ob-9WIcUZBht9Qyzw58mqUpz3tWIPU-xaFqQ0pDZ6vwixJx_GG97XjxDLUobQlawdssPolmxO1iFksenPAhTNjAZEEGHxBw-kCleD-oqEQ5cmZK1wAnaov7Ea0pGj-yx3PLkEYUQpu012BfxwwwFTZ5hUuEs4xs6N47JUcMiYwlrdLKajSIdWPZFvs-BhMW4rc_9BXO4emJtssCT27s44Cm_qH8gl8pJaXod4BfCfiWBty",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7uf7OwWJwCOO2u2kaP98LZFnSSvk6TQHjJw4iQVWsU3FMSPxgB8KdaBWbgiSlVFAahNGi7ecDWa74YundqsN9E9Cg4fEqsw0QaVaLJXHMl5KoUiayYgb0nq82mxsTwVxMbmiNNso_vpeVVP6MhxFeehniasAr5woxE5DgZfO4STxrWPJohtabnum-ilhUB1kYefaZsz8DdY8FBbzlPL-xsLwEAiRbsACtAEyTPhjNKe3XlRMBP0a",
    ];

    const randomDefaultImage =
      defaultImages[Math.floor(Math.random() * defaultImages.length)];

    const newCommerceItem: Commerce = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      category: selectedCategoryObj ? selectedCategoryObj.label : "Comércio",
      categorySlug: category,
      district: selectedDistrictObj ? selectedDistrictObj.label : "Beberibe",
      districtSlug: district,
      description: description.trim(),
      locationDetails: locationDetails.trim() || "Beberibe - CE",
      image: image.trim() || randomDefaultImage,
      whatsapp: whatsapp.replace(/\D/g, "") || "5585999999999",
      phone: whatsapp || "(85) 99999-9999",
      rating: 5.0,
      reviewsCount: 1,
      verified: true,
      actionText: "WhatsApp",
      actionIcon: "chat",
    };

    onAddCommerce(newCommerceItem);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface rounded-2xl sm:rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto p-6 sm:p-7 shadow-2xl border border-outline-variant/30 flex flex-col relative">
        <button
          onClick={onClose}
          aria-label="Fechar formulário"
          className="absolute right-4 top-4 w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-all cursor-pointer"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="flex items-center space-x-2.5 text-primary mb-1">
          <Icon name="store" size={26} className="text-primary" />
          <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold text-lg sm:text-xl">
            Cadastrar Comércio ou Serviço
          </h2>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 text-sm sm:text-base">
          Divulgue gratuitamente seu negócio para turistas e moradores de Beberibe.
        </p>

        {success ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Icon name="check_circle" size={36} className="text-primary" />
            </div>
            <h3 className="font-title-md text-title-md text-on-surface font-bold text-lg sm:text-xl">
              Cadastro Realizado!
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Seu estabelecimento agora está visível no guia local de Beberibe.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                Nome do Estabelecimento ou Serviço *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Passeio de Buggy do Didi, Barraca Mar Azul"
                className="w-full h-12 px-3.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                  Categoria *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-12 px-3 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
                >
                  {CATEGORIES.filter((c) => c.id !== "todas").map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                  Distrito *
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full h-12 px-3 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none cursor-pointer"
                >
                  {DISTRICTS.filter((d) => d.id !== "todos").map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="(85) 99999-9999"
                className="w-full h-12 px-3.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                Ponto de Referência / Endereço
              </label>
              <input
                type="text"
                value={locationDetails}
                onChange={(e) => setLocationDetails(e.target.value)}
                placeholder="Ex: Ao lado do Mirante de Morro Branco"
                className="w-full h-12 px-3.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                Breve Descrição &amp; Especialidade *
              </label>
              <textarea
                required
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ex: Peixe fresco frito, passeios ecológicos com segurança e guia experiente."
                className="w-full p-3.5 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-1 font-semibold">
                URL da Foto (opcional)
              </label>
              <input
                type="url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://exemplo.com/foto.jpg"
                className="w-full h-12 px-3.5 bg-surface-container-lowest rounded-xl font-body-md text-body-md text-on-surface border border-outline-variant/40 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="pt-3.5 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="h-12 px-5 rounded-xl border border-outline-variant/40 text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md font-semibold active:scale-95 transition-all cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="h-12 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-container hover:from-primary-container hover:to-primary text-white font-label-md text-label-md font-bold shadow-md shadow-primary/25 active:scale-95 transition-all cursor-pointer flex items-center space-x-2"
              >
                <Icon name="publish" size={18} className="text-white" />
                <span>Publicar Anúncio</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
