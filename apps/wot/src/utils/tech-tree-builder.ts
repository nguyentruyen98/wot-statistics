import { TankTypes } from "@/enums/tank";
import type { BranchConfig, Connection, TankNode } from "@/types/tech-tree";

// Tank data structure từ API
export type TankData = {
  tank_id: number;
  name: string;
  short_name: string;
  tier: number;
  type: TankTypes;
  nation: string;
  big_icon_url: string;
  is_premium: boolean;
  next_tanks: Record<string, number> | null;
  prices_xp: Record<string, number> | null;
};

// Định nghĩa TankDataMap nếu cần dùng lại, nhưng không còn dùng cho buildTechTree
// export type TankDataMap = Record<string, TankData>;

/**
 * Build connections array từ tank data (TankData[] version)
 */
function buildConnections(
  tankData: TankData[],
  branches: BranchConfig[] = [],
  path: number[] = []
): Connection[] {
  const connections: Connection[] = [];
  const allPathsSet = new Set(path.map(String));

  // Tạo map từ tank ID đến branch config
  const tankToBranchMap = new Map<string, BranchConfig>();
  branches.forEach(branch => {
    branch.path.forEach((tankId, index) => {
      const nextTankId = branch.path[index + 1];
      if (nextTankId !== undefined) {
        const key = `${tankId}-${nextTankId}`;
        tankToBranchMap.set(key, branch);
      }
    });
  });

  // Build parent map để xác định parent của mỗi tank
  const parentMap: Record<string, string[]> = {};
  tankData.forEach(tank => {
    const tankId = String(tank.tank_id);
    if (tank.next_tanks) {
      Object.keys(tank.next_tanks).forEach(nextTankId => {
        if (!parentMap[nextTankId]) {
          parentMap[nextTankId] = [];
        }
        parentMap[nextTankId].push(tankId);
      });
    }
  });

  tankData.forEach(tank => {
    const tankId = String(tank.tank_id);
    // Chỉ xử lý tanks trong ALL_PATHS
    if (!allPathsSet.has(tankId)) return;
    if (tank.is_premium) return;

    if (tank.next_tanks) {
      Object.entries(tank.next_tanks).forEach(([nextTankId]) => {
        const nextTank = tankData.find(t => String(t.tank_id) === nextTankId);
        if (!nextTank || nextTank.is_premium) return;

        // Chỉ tạo connection nếu cả 2 tanks đều trong ALL_PATHS
        if (!allPathsSet.has(nextTankId)) return;

        // Tìm branch config cho connection này
        const key = `${tankId}-${nextTankId}`;
        const branchConfig = tankToBranchMap.get(key);

        // Chỉ tạo connection nếu có trong branch config (tránh tạo connection không mong muốn)
        if (!branchConfig) return;

        // Dùng config từ branch definition
        const branchType = branchConfig.branchType;
        const priority = branchConfig.priorityOffset;
        const isMainLine = branchConfig.isMainLine ?? false;

        connections.push({
          from: tankId,
          to: nextTankId,
          branchType,
          isMainLine,
          priority,
        });
      });
    }
  });

  // Thêm các merge connections (từ tank cuối của branch đến mergeToTankId)
  branches.forEach(branch => {
    if (branch.mergeToTankId) {
      const lastTankId = branch.path[branch.path.length - 1];
      connections.push({
        from: String(lastTankId),
        to: String(branch.mergeToTankId),
        branchType: branch.branchType,
        isMainLine: false,
        priority: branch.priorityOffset,
        skipLayout: true, // Chỉ vẽ đường, không ảnh hưởng layout
      });
    }
  });

  return connections;
}

/**
 * Build nodes array từ tank data (TankData[] version)
 */
export function buildNodes(
  tankData: TankData[],
  path: number[] = [],
  onlyMainLine = false
): TankNode[] {
  const allPathsSet = new Set(path.map(String));

  return tankData
    .filter(tank => {
      const tankId = String(tank.tank_id);
      if (tank.is_premium) return false;
      if (onlyMainLine && !allPathsSet.has(tankId)) return false;
      return true;
    })
    .map(tank => ({
      id: String(tank.tank_id),
      name: tank.short_name || tank.name,
      tier: tank.tier,
      big_icon_url: tank.big_icon_url,
      type: tank.type,
    }));
}

/**
 * Build cả nodes và connections từ tank data (TankData[] version)
 */
export function buildTechTree(
  tankData: TankData[],
  branches: BranchConfig[] = [],
  path: number[] = [],
  onlyMainLine = true
) {
  const allPathsSet = new Set(path.map(String));

  const nodes = buildNodes(tankData, path, onlyMainLine);
  const allConnections = buildConnections(tankData, branches, path);

  // Nếu chỉ lấy main line, filter connections
  const connections = onlyMainLine
    ? allConnections.filter(
        conn => allPathsSet.has(conn.from) && allPathsSet.has(conn.to)
      )
    : allConnections;

  return {
    nodes,
    connections,
  };
}
