import { useQuery } from "@tanstack/react-query";

import { Nations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

export function useTechTree(nation: Nations) {
  return useQuery({
    queryKey: ["tech-tree"],
    queryFn: () => tankServices.getTechTree(nation),
  });
}
