import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

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
      {/* <TechTreeHeader nation={nation} /> */}
      {/* <div className="flex flex-1 justify-center items-center"> */}
      <TechTree nation={nation} />
      {/* </div> */}
    </HydrationBoundary>
  );
}
