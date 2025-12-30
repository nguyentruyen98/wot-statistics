import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { SlashIcon } from "lucide-react";
import Link from "next/link";

import NationalFlag from "@/components/national-flag";
import TechTreeHeader from "@/components/tech-tree-header";
import { Nations } from "@/enums/common";
import { tankServices } from "@/services/tank-services";

import { ItemDemo } from "./components/ItemDemo";
import TechTreeItem from "./components/tech-tree-item";
import { TechTree } from "./tech-tree";

export default async function TechTreePage({
  params,
}: {
  params: Promise<{ nation: Nations }>;
}) {
  const { nation } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => tankServices.getTechTree(nation),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <TechTreeHeader nation={nation} /> */}
      {/* <div className="flex flex-1 justify-center items-center"> */}
      <TechTree />
      {/* </div> */}
    </HydrationBoundary>
  );
}
