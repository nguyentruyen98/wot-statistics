import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { TankNations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

import { TechTree } from "./tech-tree";

export default async function TechTreePage({
  nation,
}: {
  nation: TankNations;
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => tankServices.getTechTree(nation),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TechTree />
    </HydrationBoundary>
  );
}
