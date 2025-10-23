"use client";

import { Card, CardContent } from "@workspace/ui/components/card";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type TankNode = {
  id: string | number;
  name: string;
  tier: number;
};

type Connection = {
  from: string;
  to: string;
};

const nodes: TankNode[] = [
  { id: "1", name: "MS-1", tier: 1 },
  { id: "2", name: "BT-1", tier: 2 },
  { id: "3", name: "BT-5", tier: 3 },
  { id: "4", name: "T-28", tier: 4 },
  { id: "5", name: "KV-1", tier: 5 },
  { id: "6", name: "KV-1S", tier: 6 },
  { id: "7", name: "IS-1", tier: 7 },
  { id: "8", name: "IS-3", tier: 8 },
  { id: "9", name: "Obj. 257", tier: 9 },
  { id: "10", name: "IS-7", tier: 10 },
  { id: "11", name: "IS-M", tier: 8 },
  { id: "12", name: "Obj. 705", tier: 9 },
  { id: "13", name: "Obj. 705A", tier: 10 },
  { id: "14", name: "T-10", tier: 9 },
  { id: "15", name: "Obj. 277", tier: 10 },
  { id: "16", name: "T-150", tier: 6 },
  { id: "17", name: "KV-3", tier: 7 },
  { id: "18", name: "KV-4", tier: 8 },
  { id: "19", name: "ST-1", tier: 9 },
  { id: "20", name: "IS-4", tier: 10 },
  { id: "21", name: "IS-2-II", tier: 8 },
  { id: "22", name: "IS-3-II", tier: 9 },
  { id: "23", name: "ST-II", tier: 10 },
  { id: "24", name: "KV-2", tier: 6 },
  { id: "25", name: "T-60", tier: 2 },
  { id: "26", name: "T-70", tier: 3 },
  { id: "27", name: "SU-76M", tier: 4 },
  { id: "28", name: "SU-85", tier: 5 },
  { id: "29", name: "SU-100", tier: 6 },
  { id: "30", name: "SU-152", tier: 7 },
  { id: "31", name: "ISU-152", tier: 8 },
  { id: "32", name: "Obj. 704", tier: 9 },
  { id: "33", name: "Obj. 268", tier: 10 },
  { id: "34", name: "SU-100M1", tier: 7 },
  { id: "35", name: "SU-101", tier: 8 },
  { id: "36", name: "Obj. 263", tier: 9 },
  { id: "37", name: "Obj. 268/4", tier: 10 },
  { id: "38", name: "SU-122A", tier: 5 },
  { id: "39", name: "SU-8", tier: 6 },
  { id: "40", name: "S-51", tier: 7 },
  { id: "41", name: "S-14-2", tier: 8 },
  { id: "42", name: "212A", tier: 9 },
  { id: "43", name: "Obj. 261", tier: 10 },
  { id: "44", name: "BT-7", tier: 4 },
  { id: "45", name: "T-34", tier: 5 },
  { id: "46", name: "T-34-85", tier: 6 },
  { id: "47", name: "T-43", tier: 7 },
  { id: "48", name: "T-44", tier: 8 },
  { id: "49", name: "T-54", tier: 9 },
  { id: "50", name: "Obj. 140", tier: 10 },
  { id: "51", name: "A-43", tier: 6 },
  { id: "52", name: "A-44", tier: 7 },
  { id: "53", name: "Obj. 416", tier: 8 },
  { id: "54", name: "Obj. 430 II", tier: 9 },
  { id: "55", name: "K-91", tier: 10 },
  { id: "56", name: "A-20", tier: 5 },
  { id: "57", name: "MT-25", tier: 6 },
  { id: "58", name: "LTG", tier: 7 },
  { id: "59", name: "LTTB", tier: 8 },
  { id: "60", name: "T-54 Ltwt.", tier: 9 },
  { id: "61", name: "T-100 LT.", tier: 10 },
  { id: "62", name: "KR-1", tier: 11 },
];

const connections: Connection[] = [
  { from: "1", to: "25" },
  { from: "1", to: "2" },
  { from: "2", to: "3" },
  { from: "3", to: "4" },
  { from: "4", to: "5" },
  { from: "24", to: "30" },
  { from: "5", to: "24" },
  { from: "5", to: "6" },
  { from: "6", to: "7" },
  { from: "7", to: "8" },
  { from: "8", to: "14" },
  { from: "8", to: "9" },
  { from: "9", to: "10" },
  { from: "7", to: "11" },
  { from: "11", to: "12" },
  { from: "12", to: "13" },
  { from: "14", to: "15" },
  { from: "5", to: "16" },
  { from: "16", to: "17" },
  { from: "17", to: "18" },
  { from: "18", to: "19" },
  { from: "19", to: "20" },
  { from: "17", to: "21" },
  { from: "21", to: "22" },
  { from: "22", to: "23" },
  { from: "25", to: "26" },
  { from: "26", to: "27" },
  { from: "27", to: "38" },
  { from: "27", to: "28" },
  { from: "28", to: "29" },
  { from: "29", to: "30" },
  { from: "30", to: "31" },
  { from: "31", to: "32" },
  { from: "32", to: "33" },
  { from: "29", to: "34" },
  { from: "34", to: "35" },
  { from: "35", to: "36" },
  { from: "36", to: "37" },
  { from: "38", to: "39" },
  { from: "39", to: "40" },
  { from: "40", to: "41" },
  { from: "41", to: "42" },
  { from: "42", to: "43" },
  { from: "3", to: "44" },
  { from: "44", to: "45" },
  { from: "45", to: "46" },
  { from: "46", to: "47" },
  { from: "47", to: "48" },
  { from: "48", to: "49" },
  { from: "49", to: "50" },
  { from: "45", to: "51" },
  { from: "51", to: "52" },
  { from: "52", to: "53" },
  { from: "53", to: "54" },
  { from: "54", to: "55" },
  { from: "44", to: "56" },
  { from: "56", to: "57" },
  { from: "57", to: "58" },
  { from: "58", to: "59" },
  { from: "59", to: "60" },
  { from: "60", to: "61" },
  { from: "10", to: "62" },
];

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

    let currentY = 0;

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

    roots.forEach(root => layoutNode(root.id, 100));

    return pos;
  }, []);

  const totalWidth =
    Math.max(...Object.values(positions).map(p => p.x)) + nodeWidth + 30;
  const totalHeight =
    Math.max(...Object.values(positions).map(p => p.y)) + nodeHeight + 100;

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
    <div className="border-border relative overflow-auto rounded-xl border bg-neutral-950">
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
    </div>
  );
}
