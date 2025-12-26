import { useQuery } from "@tanstack/react-query";

import { TankNations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

export function useTechTree(nation: TankNations) {
  return useQuery({
    queryKey: ["tech-tree"],
    queryFn: () => tankServices.getTechTree(nation),
  });
}
