import { BranchType } from "@/enums/tech-tree";

// Types cho Tech Tree
export type TankNode = {
  id: string | number;
  name: string;
  tier: number;
  big_icon?: string;
};

export type Connection = {
  from: string;
  to: string;
  branchType?: "main" | "branch-up" | "branch-down";
  skipLayout?: boolean;
  priority?: number;
  rowGroup?: string;
  isMainLine?: boolean;
};

// Response từ API
export type TechTreeApiResponse = {
  nodes: TankNode[];
  connections: Connection[];
};

// Props cho component
export type TechTreeProps = {
  nodes: TankNode[];
  connections: Connection[];
  tierSpacing?: number;
  verticalSpacing?: number;
  isLoading?: boolean;
};

/**
 * Configuration for a branch in the tech tree.
 * Defines the path, type, and priority of a branch connection.
 */
export type BranchConfig = {
  /** Array of tank IDs that form the branch path */
  path: number[];
  /** Type of branch (main, branch-up, branch-down) */
  branchType: BranchType;
  /** Offset value for determining branch priority in rendering */
  priorityOffset: number;
  /** Indicates if this branch is part of the main progression line */
  isMainLine?: boolean;
  /** ID of the tank where this branch merges into another line */
  mergeToTankId?: number;
};
