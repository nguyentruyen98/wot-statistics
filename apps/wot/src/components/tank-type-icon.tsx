import HeavyTankIcon from "@public/icons/heavy-tank-icon.svg";
import LightTankIcon from "@public/icons/light-tank-icon.svg";
import MediumTankIcon from "@public/icons/medium-tank-icon.svg";
import SPGIcon from "@public/icons/spg-icon.svg";
import TankDestroyIcon from "@public/icons/tank-destroy-icon.svg";
import type { ComponentType, SVGProps } from "react";

import { TankTypes } from "@/enums/tank";

const ICON_MAP: Record<TankTypes, ComponentType<SVGProps<SVGSVGElement>>> = {
  [TankTypes.HeavyTank]: HeavyTankIcon,
  [TankTypes.MediumTank]: MediumTankIcon,
  [TankTypes.TankDestroyer]: TankDestroyIcon,
  [TankTypes.SPG]: SPGIcon,
  [TankTypes.LightTank]: LightTankIcon,
};

type TankTypeIconProps = {
  type?: TankTypes;
};

function TankTypeIcon({ type }: TankTypeIconProps) {
  if (!type) return null;
  const Icon = ICON_MAP[type];
  return <Icon width={12} />;
}

export default TankTypeIcon;
