import germanyFlag from "@public/images/nation-flag/germany.png";
import ussrFlag from "@public/images/nation-flag/ussr.png";
import { cn } from "@workspace/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { memo } from "react";

import { Nations } from "@/enums/common";
import { getNationName } from "@/utils/common";

const nationalFlagVariants = cva("w-auto", {
  variants: {
    size: { default: "", xs: "h-10", sm: "h-24", lg: "h-32" },
  },
  defaultVariants: { size: "default" },
});

const FLAG_MAP: Partial<Record<Nations, StaticImageData>> = {
  [Nations.USSR]: ussrFlag,
  [Nations.GERMANY]: germanyFlag,
};

export type NationalFlagProps = VariantProps<typeof nationalFlagVariants> & {
  nation: Nations;
  className?: string;
};

const NationalFlag = memo(function NationalFlag({
  nation,
  size,
  className,
}: NationalFlagProps) {
  const flag = FLAG_MAP[nation];
  if (!flag) return null;

  return (
    <Image
      data-slot="national-flag"
      src={flag}
      alt={`${getNationName(nation)} Flag`}
      className={cn(nationalFlagVariants({ size }), className)}
    />
  );
});

export { nationalFlagVariants };
export default NationalFlag;
