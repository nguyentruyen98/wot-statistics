"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import { DotPattern } from "@workspace/ui/components/dot-pattern";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { connections, nodes } from "./tanks";

export default function TechTree() {
  const nodeWidth = 120;
  const nodeHeight = 58;
  const tierSpacing = 150;
  const verticalSpacing = 80;
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const positions = useMemo(() => {
    const pos: Record<string, { x: number; y: number }> = {};

    const tierStepX = tierSpacing;
    const levelStepY = verticalSpacing;

    // Build children map
    const childrenMap = connections.reduce(
      (acc, { from, to }) => {
        acc[from] = acc[from] || [];
        acc[from].push(to);
        return acc;
      },
      {} as Record<string, string[]>
    );

    const parentMap = connections.reduce(
      (acc, { from, to }) => {
        acc[to] = from;
        return acc;
      },
      {} as Record<string, string>
    );

    const roots = nodes.filter(n => !parentMap[n.id]);

    let currentY = 40;

    function layoutNode(id: string, x: number): number {
      const children = childrenMap[id];
      if (!children || children.length === 0) {
        // lá → đặt node ở dòng mới
        const y = currentY;
        pos[id] = { x, y };
        currentY += levelStepY;
        return y;
      }

      // Có con → layout con trước để biết trung bình y
      const childYs = children.map(childId =>
        layoutNode(childId, x + tierStepX)
      );
      const avgY = childYs.reduce((sum, y) => sum + y, 0) / childYs.length;
      pos[id] = { x, y: avgY };
      return avgY;
    }

    roots.forEach(root => layoutNode(root.id, 40));

    return pos;
  }, []);

  const totalWidth =
    Math.max(...Object.values(positions).map(p => p.x)) + nodeWidth + 40;
  const totalHeight =
    Math.max(...Object.values(positions).map(p => p.y)) + nodeHeight + 40;

  // 🔹 Hàm vẽ path bo góc
  const drawPath = (
    index: number,
    fromX: number,
    fromY: number,
    toX: number,
    toY: number,
    color: string,
    width: number
  ) => {
    const midX = (fromX + toX) / 2;
    const radius = 4;
    const path = `
      M ${fromX} ${fromY}
      L ${midX - radius} ${fromY}
      Q ${midX} ${fromY} ${midX} ${fromY + Math.sign(toY - fromY) * radius}
      L ${midX} ${toY - Math.sign(toY - fromY) * radius}
      Q ${midX} ${toY} ${midX + radius} ${toY}
      L ${toX} ${toY}
    `;
    return (
      <motion.path
        className="duration-300"
        key={index}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={"4 1"}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: index * 0.05,
          ease: "easeInOut",
        }}
      />
    );
  };

  return (
    <ScrollArea
      type="hover"
      scrollHideDelay={1000}
      className="h-[800px] w-[1350px] border border-dashed"
    >
      <DotPattern className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]" />
      <div
        className="relative"
        style={{ width: totalWidth, height: totalHeight }}
      >
        <svg
          className="absolute left-0 top-0"
          style={{ width: totalWidth, height: totalHeight }}
        >
          {connections.map((link, i) => {
            const from = positions[link.from];
            const to = positions[link.to];
            if (!from || !to) return null;

            const isHighlighted = hoveredId === link.from;

            return (
              <g key={i}>
                {drawPath(
                  i,
                  from.x + nodeWidth,
                  from.y + nodeHeight / 2,
                  to.x,
                  to.y + nodeHeight / 2,
                  isHighlighted ? "#ac1818ff" : "#fff",
                  2
                )}
              </g>
            );
          })}
        </svg>
        {/* 🔹 Nodes */}
        {nodes.map(node => {
          const pos = positions[node.id];
          if (!pos) return null;
          return (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                position: "absolute",
                top: pos.y,
                left: pos.x,
                width: nodeWidth,
              }}
              onMouseEnter={() => setHoveredId(node.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card className={"cursor-pointer rounded-sm py-2"}>
                <CardContent className={"px-2"}>
                  <div className="font-semibold">{node.name}</div>
                  <div className="text-xs text-gray-400">Tier {node.tier}</div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
