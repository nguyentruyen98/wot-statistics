import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

import TechTreeHeader from "@/components/tech-tree-header";
import { QUERY_KEY } from "@/constants/query-key";
import { Nations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

import { TechTree } from "./tech-tree";

export default async function TechTreePage({
  params,
}: {
  params: Promise<{ nation: Nations }>;
}) {
  const { nation } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.TECH_TREE, nation],
    queryFn: () => tankServices.getTechTree(nation),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col items-center justify-center py-20 gap-8">
        <TechTreeHeader nation={nation} />
        <TechTree nation={nation} />
      </div>
    </HydrationBoundary>
  );
}
