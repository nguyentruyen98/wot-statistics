import { Suspense } from "react";

import TechTree from "@/components/tech-tree";
import { TechTreeError,TechTreeLoading } from "@/components/tech-tree-loading";
import { fetchTechTree } from "@/services/tech-tree-api";

// Server Component - tự động fetch data khi render
export default async function TechTreePage({
  searchParams,
}: {
  searchParams: { nation?: string; type?: string };
}) {
  const nation = searchParams.nation || 'ussr';
  const type = searchParams.type || 'all';

  try {
    const data = await fetchTechTree(nation, type);

    return (
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-2xl font-bold">
          {nation.toUpperCase()} Tech Tree
        </h1>
        <TechTree 
          nodes={data.nodes} 
          connections={data.connections} 
        />
      </div>
    );
  } catch (error) {
    return <TechTreeError error={error as Error} />;
  }
}

// Loading UI
export function Loading() {
  return <TechTreeLoading />;
}
