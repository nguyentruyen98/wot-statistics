"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import { DotPattern } from "@workspace/ui/components/dot-pattern";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

import TechTreeItem from "@/app/tech-tree/[nation]/components/tech-tree-item";
import { TANK_TIERS_ROMAN } from "@/constants/common";
import { TankNations } from "@/enums/common";
import { useTechTree } from "@/hooks/use-tech-tree";
import type { TechTreeProps } from "@/types/tech-tree";

const TIER_SPACING = 150;
const VERTICAL_SPACING = 90;

export default function TechTree({
  nodes = [],
  connections = [],
  tierSpacing = TIER_SPACING,
  verticalSpacing = VERTICAL_SPACING,
  isLoading = false,
}: TechTreeProps) {
  const nodeWidth = 126;
  const nodeHeight = 52;

  // Track nodes trong nhánh chính (IS-7)
  const mainLineNodes = useMemo(() => {
    const nodeSet = new Set<string | number>();
    connections.forEach(conn => {
      if (conn.isMainLine) {
        nodeSet.add(conn.from);
        nodeSet.add(conn.to);
      }
    });
    return nodeSet;
  }, [connections]);

  const positions = useMemo(() => {
    const pos: Record<string, { x: number; y: number }> = {};

    const tierStepX = tierSpacing;
    const levelStepY = verticalSpacing;

    // Build children map với thông tin branchType, priority và rowGroup (bỏ qua connections có skipLayout)
    const childrenMap = connections.reduce(
      (acc, { from, to, branchType, skipLayout, priority, rowGroup }) => {
        if (skipLayout) return acc; // Bỏ qua connection chỉ để vẽ đường
        acc[from] = acc[from] || [];
        acc[from].push({
          id: to,
          branchType: branchType || "main",
          priority: priority ?? 0,
          rowGroup,
        });
        return acc;
      },
      {} as Record<
        string,
        Array<{
          id: string;
          branchType: string;
          priority: number;
          rowGroup?: string;
        }>
      >
    );

    // Build parent map với thông tin branchType (bỏ qua skipLayout connections)
    const parentMap = connections.reduce(
      (acc, { from, to, branchType, skipLayout }) => {
        if (skipLayout) return acc; // Bỏ qua connections chỉ để vẽ đường
        if (!acc[to]) {
          acc[to] = [];
        }
        acc[to].push({ id: from, branchType: branchType || "main" });
        return acc;
      },
      {} as Record<string, Array<{ id: string; branchType: string }>>
    );

    const roots = nodes.filter(n => !parentMap[n.id]);

    let currentY = 70; // Tăng từ 40 lên 70 để có khoảng cách với tier numbers
    const visited = new Set<string | number>();
    const rowGroupYs: Record<string, number> = {}; // Track Y positions cho mỗi rowGroup

    function layoutNode(
      id: string | number,
      x: number,
      fromBranchType?: string,
      rowGroup?: string
    ): number {
      // Nếu node có nhiều parent, chỉ layout từ parent với connection "main"
      const parents = parentMap[id];
      if (parents && parents.length > 1 && fromBranchType !== "main") {
        // Nếu đang đến từ non-main connection, bỏ qua (sẽ được layout từ main parent)
        return pos[id]?.y ?? currentY;
      }

      // Nếu đã layout rồi, trả về vị trí hiện tại
      if (visited.has(id)) {
        return pos[id]?.y ?? currentY;
      }
      visited.add(id);

      const children = childrenMap[id];
      if (!children || children.length === 0) {
        let y: number;
        if (rowGroup && rowGroupYs[rowGroup] !== undefined) {
          // Dùng Y đã có của rowGroup
          y = rowGroupYs[rowGroup];
        } else {
          // Tạo Y mới
          y = currentY;
          currentY += levelStepY;
          if (rowGroup) rowGroupYs[rowGroup] = y;
        }
        pos[id] = { x, y };
        return y;
      }

      // Sắp xếp con: branch-up trước, main ở giữa, branch-down sau (trong cùng type thì theo priority)
      const sortedChildren = [...children].sort((a, b) => {
        const order = { "branch-up": 0, main: 1, "branch-down": 2 };
        const typeOrder =
          order[a.branchType as keyof typeof order] -
          order[b.branchType as keyof typeof order];
        if (typeOrder !== 0) return typeOrder;
        // Cùng branchType thì sắp xếp theo priority (số nhỏ hơn lên trước)
        return a.priority - b.priority;
      });

      // Layout tất cả con theo thứ tự đã sắp xếp, truyền branchType và rowGroup
      const childYs = sortedChildren.map(child =>
        layoutNode(child.id, x + tierStepX, child.branchType, child.rowGroup)
      );

      // Tìm vị trí y của nhánh main
      const mainIndex = sortedChildren.findIndex(c => c.branchType === "main");
      let mainY =
        mainIndex >= 0
          ? childYs[mainIndex]
          : (childYs[childYs.length - 1] ?? currentY);

      // Nếu node này có rowGroup và rowGroup đã có Y, override mainY
      if (rowGroup && rowGroupYs[rowGroup] !== undefined) {
        mainY = rowGroupYs[rowGroup];
      } else if (rowGroup) {
        rowGroupYs[rowGroup] = mainY;
      }

      pos[id] = { x, y: mainY };
      return mainY;
    }

    roots.forEach(root => layoutNode(root.id, 40));

    return pos;
  }, [connections, nodes, tierSpacing, verticalSpacing]);

  const totalWidth =
    Math.max(...Object.values(positions).map(p => p.x)) + nodeWidth + 40;
  const totalHeight =
    Math.max(...Object.values(positions).map(p => p.y)) + nodeHeight + 40;

  return (
    <ScrollArea
      type="hover"
      scrollHideDelay={1000}
      className="h-[800px] w-[1350px] border border-dashed"
    >
      {/* <DotPattern /> */}
      <div
        className="relative"
        style={{ width: totalWidth, height: totalHeight }}
      >
        {/* Tier numbers header with Roman numerals */}
        {TANK_TIERS_ROMAN.map((roman, index) => (
          <div
            key={index}
            className="absolute text-center text-lg font-bold"
            style={{
              left: 40 + index * tierSpacing,
              top: 20,
              width: nodeWidth,
            }}
          >
            {roman}
          </div>
        ))}

        <svg
          className="absolute left-0 top-0"
          style={{ width: totalWidth, height: totalHeight }}
        >
          {/* Background cho nhánh IS-7 */}
          {(() => {
            const mainLinePositions = nodes
              .filter(n => mainLineNodes.has(n.id))
              .map(n => positions[n.id])
              .filter(Boolean);

            if (mainLinePositions.length === 0) return null;

            const minX = Math.min(...mainLinePositions.map(p => p.x));
            const maxX = Math.max(...mainLinePositions.map(p => p.x));
            const minY = Math.min(...mainLinePositions.map(p => p.y));
            const maxY = Math.max(...mainLinePositions.map(p => p.y));

            const padding = 10;
            const y = minY - padding;
            const height = maxY - minY + nodeHeight + padding * 2;
            const segmentWidth = 60; // Độ rộng mỗi lát
            const gap = 5; // Khoảng cách giữa các lát
            const tipOffset = 15; // Độ nhô ra của mũi >

            const segments = [];
            const startX = minX - padding;
            const endX = maxX + nodeWidth + padding;

            for (let x = startX; x < endX; x += segmentWidth + gap) {
              const width = Math.min(segmentWidth, endX - x);
              // Tạo path hình dấu > cho mỗi segment
              const pathData = `
                M ${x} ${y}
                L ${x + width} ${y}
                L ${x + width + tipOffset} ${y + height / 2}
                L ${x + width} ${y + height}
                L ${x} ${y + height}
                L ${x + tipOffset} ${y + height / 2}
                Z
              `;

              segments.push(
                <path key={x} d={pathData} fill="#60a5fa" opacity={0.15} />
              );
            }

            return <>{segments}</>;
          })()}

          {connections.map((link, i) => {
            const from = positions[link.from];
            const to = positions[link.to];
            if (!from || !to) return null;

            return (
              <g key={i}>
                {drawPath(
                  i,
                  from.x + nodeWidth,
                  from.y + nodeHeight / 2,
                  to.x,
                  to.y + nodeHeight / 2,
                  "#303030",
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
              transition={{
                delay: 0.05,
              }}
              style={{
                position: "absolute",
                top: pos.y,
                left: pos.x,
                width: nodeWidth,
              }}
            >
              <TechTreeItem
                name={node.name}
                url={node.big_icon}
                tier={node.tier}
              />
            </motion.div>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

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
  const radius = 0;
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
