import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "@/constants/query-key";
import { Nations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

export function useTechTree(nation: Nations) {
  return useQuery({
    queryKey: [QUERY_KEY.TECH_TREE, nation],
    queryFn: () => tankServices.getTechTree(nation),
  });
}
