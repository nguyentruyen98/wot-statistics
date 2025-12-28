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

export default function TechTreeItem() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="relative w-full max-w-40 cursor-pointer">
          <div className="absolute inset-0 bg-[url('http:\/\/api.worldoftanks.asia\/static\/2.77.0\/wot\/encyclopedia\/vehicle\/ussr-R228_KR_1.png')] bg-cover bg-center opacity-50" />
          <CardHeader className="z-10 flex items-center justify-between px-4">
            <div className="flex flex-row items-center gap-2">
              <HeavyTankIcon width={12} />
              <CardDescription>XI</CardDescription>
            </div>
            <CardTitle>KR-1</CardTitle>
          </CardHeader>
        </Card>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Card</p>
      </TooltipContent>
    </Tooltip>
  );
 
}
