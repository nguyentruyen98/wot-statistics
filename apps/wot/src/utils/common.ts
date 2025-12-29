import { TANK_TIERS_ROMAN } from "@/constants/common";

export function toRoman(num: number): string {
  if (num < 1 || num > 11) return "";
  return TANK_TIERS_ROMAN[num] || "";
}
