"use client";

import { useMemo } from "react";

import TechTreeComponent from "@/components/tech-tree";
import { ALL_BRANCHES_CONFIG, ALL_PATHS } from "@/constants/ussr-tech-tree";
import { TankNations } from "@/enums/common";
import { useTechTree } from "@/hooks/use-tech-tree";
import { buildTechTree } from "@/utils/tech-tree-builder";

export function TechTree() {
  const { data, isLoading } = useTechTree(TankNations.USSR);

  const techTreeData = useMemo(() => {
    if (!data) return { nodes: [], connections: [] };
    return buildTechTree(data, ALL_BRANCHES_CONFIG, ALL_PATHS);
  }, [data]);

  return (
    <TechTreeComponent
      nodes={techTreeData.nodes}
      connections={techTreeData.connections}
      isLoading={isLoading}
    />
  );
}
