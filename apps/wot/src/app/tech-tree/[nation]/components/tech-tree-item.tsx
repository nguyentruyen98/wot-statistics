import HeavyTankIcon from "@public/icons/heavy-tank-icon.svg";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import React from "react";

import TankTypeIcon from "@/components/tank-type-icon";
import { TankTypes } from "@/enums/tank";
import { toRoman } from "@/utils/common";

type TechTreeItemProps = {
  name: string;
  url?: string;
  tier: number;
  type: TankTypes;
};

export default function TechTreeItem({
  name,
  url = "",
  tier,
  type,
}: TechTreeItemProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="relative w-full max-w-48 cursor-pointer">
          <div
            className={`absolute inset-0 bg-cover bg-center opacity-40`}
            style={{ backgroundImage: `url('${url}')` }}
          />
          <CardHeader className="z-10 flex items-center justify-between px-2">
            <div className="flex flex-row items-center gap-2">
              <TankTypeIcon type={type} />
              <CardDescription>{toRoman(tier)}</CardDescription>
            </div>
            <CardTitle>{name}</CardTitle>
          </CardHeader>
        </Card>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Card</p>
      </TooltipContent>
    </Tooltip>
  );
}
