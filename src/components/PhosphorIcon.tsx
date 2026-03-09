"use client";

/**
 * Dynamic Phosphor icon renderer.
 * Pass `name` (exact Phosphor icon name, e.g. "Coffee", "MapPin") +
 * optional `weight` and `size`.
 *
 * We import only what we need so tree-shaking stays happy.
 */

import {
  Baby,
  Basket,
  Car,
  Clock,
  Coffee,
  CreditCard,
  Door,
  GenderFemale,
  MapPin,
  MusicNote,
  MusicNotes,
  Phone,
  Tag,
  WifiHigh,
  // Nav / CTA icons
  WhatsappLogo,
  InstagramLogo,
  ArrowRight,
  List,
  X,
} from "@phosphor-icons/react";

import type { Icon as PhosphorIconType } from "@phosphor-icons/react";

type Weight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

const ICON_MAP: Record<string, PhosphorIconType> = {
  Baby,
  Basket,
  Car,
  Clock,
  Coffee,
  CreditCard,
  Door,
  GenderFemale,
  MapPin,
  MusicNote,
  MusicNotes,
  Phone,
  Tag,
  WifiHigh,
  WhatsappLogo,
  InstagramLogo,
  ArrowRight,
  List,
  X,
};

interface Props {
  name: string;
  size?: number;
  weight?: Weight;
  className?: string;
}

export default function PhosphorIcon({
  name,
  size = 24,
  weight = "light",
  className,
}: Props) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;
  return <Icon size={size} weight={weight} className={className} />;
}
