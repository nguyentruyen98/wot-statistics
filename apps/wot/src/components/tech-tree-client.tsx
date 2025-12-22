"use client";

import TechTree from "@/components/tech-tree";
import { TechTreeLoading, TechTreeError } from "@/components/tech-tree-loading";
import { useTechTree } from "@/hooks/use-tech-tree";

export default function TechTreeClient() {
  const { data, isLoading, error } = useTechTree('ussr', 'all');

  if (isLoading) return <TechTreeLoading />;
  if (error) return <TechTreeError error={error} />;
  if (!data) return null;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">USSR Tech Tree</h1>
      <TechTree nodes={data.nodes} connections={data.connections} />
    </div>
  );
}
