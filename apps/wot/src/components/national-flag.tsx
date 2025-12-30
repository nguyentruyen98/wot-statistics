import germanyFlag from "@public/images/nation-flag/germany.png";
import ussrFlag from "@public/images/nation-flag/ussr.png";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import React from "react";

import { Nations } from "@/enums/common";

const nationFlagVariants = cva("w-auto", {
  variants: { sizes: { default: "", xs: "h-10", sm: "h-24", lg: "h-32" } },
  defaultVariants: { sizes: "default" },
});

export type NationalFlagProps = VariantProps<typeof nationFlagVariants> & {
  nation: Nations;
};

/**
 * Renders the national flag image for a given nation.
 *
 * Displays the appropriate flag based on the provided `nation` prop.
 * Currently supports USSR and Germany. Returns `null` if the nation is not supported.
 *
 * @param nation - The nation for which to display the flag.
 * @param sizes - The size variant(s) to apply to the flag image.
 * @returns The flag image for the specified nation, or `null` if not supported.
 */
export default function NationalFlag({ nation, sizes }: NationalFlagProps) {
  if (nation === Nations.USSR)
    return (
      <Image
        src={ussrFlag}
        alt="USSR Flag"
        className={nationFlagVariants({ sizes })}
      />
    );
  if (nation === Nations.GERMANY)
    return (
      <Image
        src={germanyFlag}
        alt="Germany Flag"
        className={nationFlagVariants({ sizes })}
      />
    );

  return null;
}
