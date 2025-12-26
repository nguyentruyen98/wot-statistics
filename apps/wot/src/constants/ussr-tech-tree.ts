import { BranchType } from "@/enums/tech-tree";
import { USSRTankID } from "@/enums/ussr-tank";
import { BranchConfig } from "@/types/tech-tree";

const MAIN_BRANCH = [
  USSRTankID["MS-1"],
  USSRTankID["BT-2"],
  USSRTankID["BT-5"],
  USSRTankID["T-28"],
  USSRTankID["KV-1"],
  USSRTankID["KV-1S"],
  USSRTankID.IS,
  USSRTankID["IS-3"],
  USSRTankID["Obj. 257"],
  USSRTankID["IS-7"],
  USSRTankID["KR-1"],
];

const OBJ_277_BRANCH = [
  USSRTankID["IS-3"],
  USSRTankID["T-10"],
  USSRTankID["Obj. 277"],
];

const OBJ_705A_BRANCH = [
  USSRTankID.IS,
  USSRTankID["IS-M"],
  USSRTankID["Obj. 705"],
  USSRTankID["Obj. 705A"],
];

const IS4_BRANCH = [
  USSRTankID["KV-1"],
  USSRTankID["T-150"],
  USSRTankID["KV-3"],
  USSRTankID["KV-4"],
  USSRTankID["ST-I"],
  USSRTankID["IS-4"],
];

const ST2_BRANCH = [
  USSRTankID["KV-3"],
  USSRTankID["IS-2-II"],
  USSRTankID["IS-3-II"],
  USSRTankID["ST-II"],
];

const T60_TO_SU100_BRANCH = [
  USSRTankID["MS-1"],
  USSRTankID["T-60"],
  USSRTankID["T-70"],
  USSRTankID["SU-76M"],
  USSRTankID["SU-85"],
  USSRTankID["SU-100"],
];

const OBJ_268_4_BRANCH = [
  USSRTankID["SU-100"],
  USSRTankID["SU-100M1"],
  USSRTankID["SU-101"],
  USSRTankID["Obj. 263"],
  USSRTankID["Obj. 268/4"],
];
const OBJ_268_BRANCH = [
  USSRTankID["SU-100"],
  USSRTankID["SU-152"],
  USSRTankID["ISU-152"],
  USSRTankID["Obj. 704"],
  USSRTankID["Obj. 268"],
];

const OBJ_261_BRANCH = [
  USSRTankID["SU-76M"],
  USSRTankID["SU-122A"],
  USSRTankID["SU-8"],
  USSRTankID["S-51"],
  USSRTankID["SU-14-2"],
  USSRTankID["212A"],
  USSRTankID["Obj. 261"],
];

const OBJ_140_BRANCH = [
  USSRTankID["BT-5"],
  USSRTankID["BT-7"],
  USSRTankID["T-34"],
  USSRTankID["T-34-85"],
  USSRTankID["T-43"],
  USSRTankID["T-44"],
  USSRTankID["T-54"],
  USSRTankID["Obj. 140"],
];

const OBJ_430U_BRANCH = [
  USSRTankID["T-44"],
  USSRTankID["Obj. 430"],
  USSRTankID["Obj. 430U"],
  USSRTankID["Obj. 432U"],
];

const K91_BRANCH = [
  USSRTankID["T-34"],
  USSRTankID["A-43"],
  USSRTankID["A-44"],
  USSRTankID["Obj. 416"],
  USSRTankID["Obj. 430 II"],
  USSRTankID["K-91"],
];

const T100_LT_BRANCH = [
  USSRTankID["BT-7"],
  USSRTankID["A-20"],
  USSRTankID["MT-25"],
  USSRTankID["LTG"],
  USSRTankID["LTTB"],
  USSRTankID["T-54 ltwt."],
  USSRTankID["T-100 LT"],
];

export const MAIN_BRANCH_CONFIG: BranchConfig = {
  path: MAIN_BRANCH,
  branchType: BranchType.MAIN,
  priorityOffset: 0,
  isMainLine: true,
};

export const OBJ_277_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_277_BRANCH,
  branchType: BranchType.BRANCH_UP,
  priorityOffset: 1,
};

export const OBJ_705A_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_705A_BRANCH,
  branchType: BranchType.BRANCH_DOWN,
  priorityOffset: 1,
};

export const IS4_BRANCH_CONFIG: BranchConfig = {
  path: IS4_BRANCH,
  branchType: BranchType.MAIN,
  priorityOffset: 2,
};

export const ST2_BRANCH_CONFIG: BranchConfig = {
  path: ST2_BRANCH,
  branchType: BranchType.BRANCH_DOWN,
  priorityOffset: 3,
};

export const T60_TO_SU100_BRANCH_CONFIG: BranchConfig = {
  path: T60_TO_SU100_BRANCH,
  branchType: BranchType.BRANCH_UP,
  priorityOffset: 1,
};

export const OBJ_268_4_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_268_4_BRANCH,
  branchType: BranchType.MAIN,
  priorityOffset: 1,
};

export const OBJ_261_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_261_BRANCH,
  branchType: BranchType.BRANCH_UP,
  priorityOffset: 0.5,
};

export const OBJ_140_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_140_BRANCH,
  branchType: BranchType.MAIN,
  priorityOffset: 1,
};

export const OBJ_430U_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_430U_BRANCH,
  branchType: BranchType.BRANCH_UP,
  priorityOffset: 0.5,
};

export const K91_BRANCH_CONFIG: BranchConfig = {
  path: K91_BRANCH,
  branchType: BranchType.BRANCH_DOWN,
  priorityOffset: 2,
};

const KV2_BRANCH = [USSRTankID["KV-1"], USSRTankID["KV-2"]];

export const T100_LT_BRANCH_CONFIG: BranchConfig = {
  path: T100_LT_BRANCH,
  branchType: BranchType.BRANCH_DOWN,
  priorityOffset: 3,
};

export const OBJ_268_BRANCH_CONFIG: BranchConfig = {
  path: OBJ_268_BRANCH,
  branchType: BranchType.BRANCH_DOWN,
  priorityOffset: 2,
};

export const KV2_BRANCH_CONFIG: BranchConfig = {
  path: KV2_BRANCH,
  branchType: BranchType.BRANCH_UP,
  priorityOffset: 0,
  mergeToTankId: USSRTankID["SU-152"],
};

export const ALL_BRANCHES_CONFIG = [
  MAIN_BRANCH_CONFIG,
  OBJ_277_BRANCH_CONFIG,
  OBJ_705A_BRANCH_CONFIG,
  IS4_BRANCH_CONFIG,
  ST2_BRANCH_CONFIG,
  T60_TO_SU100_BRANCH_CONFIG,
  OBJ_268_4_BRANCH_CONFIG,
  OBJ_268_BRANCH_CONFIG,
  OBJ_261_BRANCH_CONFIG,
  OBJ_140_BRANCH_CONFIG,
  OBJ_430U_BRANCH_CONFIG,
  K91_BRANCH_CONFIG,
  T100_LT_BRANCH_CONFIG,
  KV2_BRANCH_CONFIG,
];

export const ALL_PATHS = [
  ...new Set(ALL_BRANCHES_CONFIG.flatMap(branch => branch.path)),
];
