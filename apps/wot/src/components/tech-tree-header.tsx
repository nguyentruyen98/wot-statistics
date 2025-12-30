import React from "react";

import { Nations } from "@/enums/common";
import { getNationName } from "@/utils/common";

import NationalFlag from "./national-flag";

type TechTreeHeaderProps = {
  nation: Nations;
};

export default function TechTreeHeader({ nation }: TechTreeHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <NationalFlag nation={nation} sizes="sm" />
      <p className="text-3xl font-bold">{getNationName(nation)}</p>
    </div>
  );
}
