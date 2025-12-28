import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import { TankNations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

import { ItemDemo } from "./components/ItemDemo";
import TechTreeItem from "./components/tech-tree-item";

export default async function TechTreePage({
  params,
}: {
  params: Promise<{ nation: TankNations }>;
}) {
  const { nation } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => tankServices.getTechTree(nation),
  });

  return (
    <div className="p-8">
      <TechTreeItem />
    </div>
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TechTreeItem />
    </HydrationBoundary>
  );
}
