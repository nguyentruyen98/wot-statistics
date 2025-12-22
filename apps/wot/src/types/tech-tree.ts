// Types cho Tech Tree
export type TankNode = {
  id: string | number;
  name: string;
  tier: number;
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
