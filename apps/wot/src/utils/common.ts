import { TANK_TIERS_ROMAN } from "@/constants/common";
import { Nations } from "@/enums/common";

export function toRoman(tier: number): string {
  if (tier < 0 || tier > 11) return "";
  return TANK_TIERS_ROMAN[tier - 1] || "";
}

export function getNationName(nation: Nations) {
  switch (nation) {
    case Nations.USSR:
      return "U.S.S.R";
    case Nations.FRANCE:
      return "France";
    case Nations.JAPAN:
      return "Japan";
    case Nations.CHINA:
      return "China";
    case Nations.CZECHOSLOVAKIA:
      return "Czechoslovakia";
    case Nations.USA:
      return "U.S.A";
    case Nations.UK:
      return "U.K";
    case Nations.GERMANY:
      return "Germany";
    case Nations.SWEDEN:
      return "Sweden";
    case Nations.POLAND:
      return "Poland";
    case Nations.ITALY:
      return "Italy";
    default:
      return "Unknown Nation";
  }
}
