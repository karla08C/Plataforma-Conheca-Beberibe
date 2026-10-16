"use client";

import React from "react";
import {
  Compass,
  Store,
  Route,
  Calendar,
  Plus,
  PlusCircle,
  Search,
  SlidersHorizontal,
  Bell,
  BellRing,
  User,
  MapPin,
  Navigation,
  Sun,
  Sunset,
  Waves,
  Droplets,
  BadgeCheck,
  Check,
  CheckCircle2,
  X,
  Heart,
  ArrowRight,
  ChevronRight,
  Star,
  MessageCircle,
  Phone,
  Leaf,
  Trees,
  Trash2,
  Handshake,
  Clock,
  Map,
  Upload,
  Sparkles,
  Lightbulb,
  PartyPopper,
  ArrowDown,
  ArrowUp,
  Palette,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  // Navegação e Ações
  explore: Compass,
  storefront: Store,
  store: Store,
  alt_route: Route,
  calendar_month: Calendar,
  calendar_today: Calendar,
  add: Plus,
  add_circle: PlusCircle,
  search: Search,
  tune: SlidersHorizontal,
  notifications: Bell,
  notifications_active: BellRing,
  person: User,
  close: X,
  publish: Upload,

  // Localização e Clima
  location_on: MapPin,
  near_me: Navigation,
  wb_sunny: Sun,
  wb_twilight: Sunset,
  waves: Waves,
  water: Droplets,
  schedule: Clock,
  map: Map,

  // Validação e Status
  verified: BadgeCheck,
  check: Check,
  check_circle: CheckCircle2,
  star: Star,

  // Favoritos
  favorite: Heart,
  favorite_border: Heart,

  // Setas
  arrow_forward: ArrowRight,
  chevron_right: ChevronRight,
  arrow_downward: ArrowDown,
  arrow_upward: ArrowUp,

  // Comunicação
  chat: MessageCircle,
  call: Phone,

  // Sustentabilidade e Ecologia
  eco: Leaf,
  nature_people: Trees,
  delete: Trash2,
  handshake: Handshake,

  // Diversos
  recommend: Sparkles,
  lightbulb: Lightbulb,
  festival: PartyPopper,
  palette: Palette,
};

interface IconProps {
  name: string;
  size?: number | string;
  className?: string;
  filled?: boolean;
}

export function Icon({ name, size = 20, className = "", filled = false }: IconProps) {
  const IconComponent = ICON_MAP[name] || Sparkles;

  // Tratar ícones com preenchimento (como favorite ou star)
  const isHeartFilled = name === "favorite" || (name === "favorite_border" && filled);
  const isStar = name === "star";

  const numSize = typeof size === "string" ? parseInt(size, 10) || 20 : size;

  return (
    <IconComponent
      size={numSize}
      className={`shrink-0 select-none pointer-events-none transition-transform ${className}`}
      aria-hidden="true"
      fill={isHeartFilled || (isStar && filled) ? "currentColor" : "none"}
      strokeWidth={isHeartFilled ? 0 : 2}
    />
  );
}
