import HeavyTankIcon from "@public/icons/heavy-tank-icon.svg";
import LightTankIcon from "@public/icons/light-tank-icon.svg";
import MediumTankIcon from "@public/icons/medium-tank-icon.svg";
import SPGIcon from "@public/icons/spg-icon.svg";
import TankDestroyIcon from "@public/icons/tank-destroy-icon.svg";
import React, { memo } from "react";

import { TankTypes } from "@/enums/tank";

type TankTypeIconProps = {
  type?: TankTypes;
};

const TankTypeIcon = memo(function TankTypeIcon({ type }: TankTypeIconProps) {
  if (type === TankTypes.HeavyTank) {
    return <HeavyTankIcon width={12} />;
  }
  if (type === TankTypes.MediumTank) {
    return <MediumTankIcon width={12} />;
  }
  if (type === TankTypes.TankDestroyer) {
    return <TankDestroyIcon width={12} />;
  }
  if (type === TankTypes.SPG) {
    return <SPGIcon width={12} />;
  }
  if (type === TankTypes.LightTank) {
    return <LightTankIcon width={12} />;
  }
  return null;
});

export default TankTypeIcon;
