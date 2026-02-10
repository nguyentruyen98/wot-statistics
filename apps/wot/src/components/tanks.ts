import { TankTypes } from "@/enums/tank";

type TankNode = {
  id: string | number;
  name: string;
  tier: number;
  type: TankTypes;
};

type Connection = {
  from: string;
  to: string;
  branchType?: "main" | "branch-up" | "branch-down"; // main: nhánh chính (thẳng), branch-up: rẽ lên, branch-down: rẽ xuống
  skipLayout?: boolean; // Chỉ vẽ đường, không tham gia layout
  priority?: number; // Thứ tự ưu tiên trong cùng branchType (số càng nhỏ càng ưu tiên, mặc định 0)
  rowGroup?: string; // Các nodes cùng rowGroup sẽ chia sẻ cùng hàng Y
  isMainLine?: boolean; // Đánh dấu nhánh chủ lực (IS-7) để highlight
};

// Nhánh IS-7 - Heavy Tank Line (USSR)
export const nodes: TankNode[] = [
  { id: "ms1", name: "MS-1", tier: 1, type: TankTypes.LightTank },
  { id: "bt2", name: "BT-2", tier: 2, type: TankTypes.LightTank },
  { id: "t46", name: "T-46", tier: 3, type: TankTypes.LightTank },
  { id: "bt5", name: "BT-5", tier: 4, type: TankTypes.LightTank },
  { id: "bt7", name: "BT-7", tier: 4, type: TankTypes.LightTank },
  { id: "kv1", name: "KV-1", tier: 5, type: TankTypes.HeavyTank },
  { id: "kv85", name: "KV-85", tier: 6, type: TankTypes.HeavyTank },
  { id: "is", name: "IS", tier: 7, type: TankTypes.HeavyTank },
  { id: "is3", name: "IS-3", tier: 8, type: TankTypes.HeavyTank },
  // Nhánh chính IS-7
  { id: "t10", name: "T-10", tier: 9, type: TankTypes.HeavyTank },
  { id: "is7", name: "IS-7", tier: 10, type: TankTypes.HeavyTank },
  { id: "kr1", name: "KR-1", tier: 11, type: TankTypes.HeavyTank },
  // Nhánh rẽ Object 277 (từ IS-3)
  { id: "obj257", name: "Obj. 257", tier: 9, type: TankTypes.HeavyTank },
  { id: "obj277", name: "Obj. 277", tier: 10, type: TankTypes.HeavyTank },
  // Nhánh rẽ Object 705A (từ IS)
  { id: "ism", name: "IS-M", tier: 8, type: TankTypes.HeavyTank },
  { id: "obj705", name: "Obj. 705", tier: 9, type: TankTypes.HeavyTank },
  { id: "obj705a", name: "Obj. 705A", tier: 10, type: TankTypes.HeavyTank },
  // Nhánh rẽ IS-4 (từ KV-1)
  { id: "t150", name: "T-150", tier: 6, type: TankTypes.HeavyTank },
  { id: "kv3", name: "KV-3", tier: 7, type: TankTypes.HeavyTank },
  { id: "kv4", name: "KV-4", tier: 8, type: TankTypes.HeavyTank },
  { id: "st1", name: "ST-I", tier: 9, type: TankTypes.HeavyTank },
  { id: "is4", name: "IS-4", tier: 10, type: TankTypes.HeavyTank },
  // Nhánh rẽ ST-II (từ KV-3)
  { id: "is2ii", name: "IS-2-II", tier: 8, type: TankTypes.HeavyTank },
  { id: "is3ii", name: "IS-3-II", tier: 9, type: TankTypes.HeavyTank },
  { id: "stii", name: "ST-II", tier: 10, type: TankTypes.HeavyTank },
  // Nhánh rẽ Object 140 (từ T-46) - Medium Tank Line
  { id: "t34", name: "T-34", tier: 5, type: TankTypes.MediumTank },
  { id: "t3485", name: "T-34-85", tier: 6, type: TankTypes.MediumTank },
  { id: "t43", name: "T-43", tier: 7, type: TankTypes.MediumTank },
  { id: "t44", name: "T-44", tier: 8, type: TankTypes.MediumTank },
  { id: "t54", name: "T-54", tier: 9, type: TankTypes.MediumTank },
  { id: "obj140", name: "Obj. 140", tier: 10, type: TankTypes.MediumTank },
  // Nhánh rẽ Object 430U (từ T-44)
  { id: "obj430ii", name: "Obj. 430 II", tier: 9, type: TankTypes.MediumTank },
  { id: "obj430u", name: "Obj. 430U", tier: 10, type: TankTypes.MediumTank },
  { id: "432u", name: "Obj. 432U", tier: 11, type: TankTypes.MediumTank },
  // Nhánh rẽ K-91 (từ T-34)
  { id: "a43", name: "A-43", tier: 6, type: TankTypes.MediumTank },
  { id: "a44", name: "A-44", tier: 7, type: TankTypes.MediumTank },
  { id: "obj416", name: "Obj. 416", tier: 8, type: TankTypes.MediumTank },
  { id: "obj430v2", name: "Obj. 430 V.II", tier: 9, type: TankTypes.MediumTank },
  { id: "k91", name: "K-91", tier: 10, type: TankTypes.MediumTank },
  // Nhánh rẽ T-100 LT (từ BT-7) - Light Tank Line
  { id: "t50", name: "T-50", tier: 5, type: TankTypes.LightTank },
  { id: "mt25", name: "MT-25", tier: 6, type: TankTypes.LightTank },
  { id: "lttb", name: "LTTB", tier: 7, type: TankTypes.LightTank },
  { id: "ltg", name: "LTG", tier: 8, type: TankTypes.LightTank },
  { id: "t54ltwt", name: "T-54 ltwt.", tier: 9, type: TankTypes.LightTank },
  { id: "t100lt", name: "T-100 LT", tier: 10, type: TankTypes.LightTank },
  // Nhánh rẽ Obj. 268 (từ MS-1) - Tank Destroyer Line
  { id: "at1", name: "AT-1", tier: 2, type: TankTypes.TankDestroyer },
  { id: "su76", name: "SU-76", tier: 3, type: TankTypes.TankDestroyer },
  { id: "su85b", name: "SU-85B", tier: 4, type: TankTypes.TankDestroyer },
  { id: "su85", name: "SU-85", tier: 5, type: TankTypes.TankDestroyer },
  { id: "su100", name: "SU-100", tier: 6, type: TankTypes.TankDestroyer },
  { id: "kv2", name: "KV-2", tier: 6, type: TankTypes.HeavyTank },
  { id: "su152", name: "SU-152", tier: 7, type: TankTypes.TankDestroyer },
  { id: "isu152", name: "ISU-152", tier: 8, type: TankTypes.TankDestroyer },
  { id: "obj704", name: "Obj. 704", tier: 9, type: TankTypes.TankDestroyer },
  { id: "obj268", name: "Obj. 268", tier: 10, type: TankTypes.TankDestroyer },
  // Nhánh Obj. 268 V4 (rẽ lên từ SU-100)
  { id: "su100m1", name: "SU-100M1", tier: 7, type: TankTypes.TankDestroyer },
  { id: "su101", name: "SU-101", tier: 8, type: TankTypes.TankDestroyer },
  { id: "obj263", name: "Obj. 263", tier: 9, type: TankTypes.TankDestroyer },
  { id: "obj268v4", name: "Obj. 268 V4", tier: 10, type: TankTypes.TankDestroyer },
  // Nhánh SPG Obj. 261 (rẽ lên từ SU-85B)
  { id: "su122a", name: "SU-122A", tier: 5, type: TankTypes.SPG },
  { id: "su8", name: "SU-8", tier: 6, type: TankTypes.SPG },
  { id: "s51", name: "S-51", tier: 7, type: TankTypes.SPG },
  { id: "su142", name: "SU-14-2", tier: 8, type: TankTypes.SPG },
  { id: "212a", name: "212A", tier: 9, type: TankTypes.SPG },
  { id: "obj261", name: "Obj. 261", tier: 10, type: TankTypes.SPG },
];

export const connections: Connection[] = [
  // Nhánh chính Heavy Tank (IS-7 - Highlight)
  { from: "ms1", to: "bt2", branchType: "main", isMainLine: true },
  // Nhánh rẽ TD (lên trên từ MS-1)
  { from: "ms1", to: "at1", branchType: "branch-up" },
  // Tiếp tục nhánh TD
  { from: "at1", to: "su76", branchType: "main" },
  { from: "su76", to: "su85b", branchType: "main" },
  // Nhánh rẽ SPG (lên trên từ SU-85B)
  { from: "su85b", to: "su122a", branchType: "branch-up" },
  { from: "su122a", to: "su8", branchType: "main" },
  { from: "su8", to: "s51", branchType: "main" },
  { from: "s51", to: "su142", branchType: "main" },
  { from: "su142", to: "212a", branchType: "main" },
  { from: "212a", to: "obj261", branchType: "main" },
  // Tiếp tục nhánh TD
  { from: "su85b", to: "su85", branchType: "main" },
  { from: "su85", to: "su100", branchType: "main" },
  { from: "su100", to: "su152", branchType: "main" },
  // Nhánh rẽ Obj. 268 V4 (lên trên từ SU-100)
  { from: "su100", to: "su100m1", branchType: "branch-up" },
  { from: "su100m1", to: "su101", branchType: "main" },
  { from: "su101", to: "obj263", branchType: "main" },
  { from: "obj263", to: "obj268v4", branchType: "main" },
  // Tiếp tục nhánh Obj. 268
  { from: "su152", to: "isu152", branchType: "main" },
  { from: "isu152", to: "obj704", branchType: "main" },
  { from: "obj704", to: "obj268", branchType: "main" },
  // Tiếp tục nhánh heavy
  { from: "bt2", to: "t46", branchType: "main", isMainLine: true },
  // Nhánh chính Heavy: BT-5
  { from: "t46", to: "bt5", branchType: "main", isMainLine: true },
  // Nhánh rẽ Medium: BT-7 (xuống dưới từ T-46)
  { from: "t46", to: "bt7", branchType: "branch-down" },
  { from: "bt7", to: "t34", branchType: "main" },
  // Tiếp tục nhánh chính KV-1
  { from: "bt5", to: "kv1", branchType: "main", isMainLine: true },
  // Nhánh chính T-34-85 → Object 140
  { from: "t34", to: "t3485", branchType: "main" },
  // Nhánh rẽ K-91 (xuống dưới từ T-34)
  { from: "t34", to: "a43", branchType: "branch-down" },
  { from: "a43", to: "a44", branchType: "main" },
  { from: "a44", to: "obj416", branchType: "main" },
  { from: "obj416", to: "obj430v2", branchType: "main" },
  { from: "obj430v2", to: "k91", branchType: "main" },
  // Nhánh rẽ T-100 LT (xuống dưới từ BT-7)
  { from: "bt7", to: "t50", branchType: "branch-down" },
  { from: "t50", to: "mt25", branchType: "main" },
  { from: "mt25", to: "lttb", branchType: "main" },
  { from: "lttb", to: "ltg", branchType: "main" },
  { from: "ltg", to: "t54ltwt", branchType: "main" },
  { from: "t54ltwt", to: "t100lt", branchType: "main" },
  // Tiếp tục nhánh medium tank
  { from: "t3485", to: "t43", branchType: "main" },
  { from: "t43", to: "t44", branchType: "main" },
  // Nhánh rẽ Object 430U (lên trên từ T-44)
  { from: "t44", to: "obj430ii", branchType: "branch-up" },
  { from: "obj430ii", to: "obj430u", branchType: "main" },
  { from: "obj430u", to: "432u", branchType: "main" },
  // Nhánh chính Object 140
  { from: "t44", to: "t54", branchType: "main" },
  { from: "t54", to: "obj140", branchType: "main" },
  // Tiếp tục nhánh chính heavy
  { from: "kv1", to: "kv85", branchType: "main", isMainLine: true },
  // Nhánh rẽ KV-2 (lên trên từ KV-1, cùng hàng với Obj 277, gần main hơn) - Cầu nối sang TD (chỉ vẽ đường)
  {
    from: "kv1",
    to: "kv2",
    branchType: "branch-up",
  },
  { from: "kv2", to: "su152", branchType: "branch-down", skipLayout: true },
  // Nhánh rẽ IS-4 (xuống dưới)
  { from: "kv1", to: "t150", branchType: "branch-down" },
  { from: "t150", to: "kv3", branchType: "main" },
  // Nhánh chính KV-4 → IS-4
  { from: "kv3", to: "kv4", branchType: "main" },
  { from: "kv4", to: "st1", branchType: "main" },
  { from: "st1", to: "is4", branchType: "main" },
  // Nhánh rẽ ST-II (xuống dưới từ KV-3)
  { from: "kv3", to: "is2ii", branchType: "branch-down" },
  { from: "is2ii", to: "is3ii", branchType: "main" },
  { from: "is3ii", to: "stii", branchType: "main" },
  // Tiếp tục nhánh chính
  { from: "kv85", to: "is", branchType: "main", isMainLine: true },
  // Nhánh chính IS-3
  { from: "is", to: "is3", branchType: "main", isMainLine: true },
  // Nhánh rẽ Object 705A (xuống dưới)
  { from: "is", to: "ism", branchType: "branch-down" },
  { from: "ism", to: "obj705", branchType: "main" },
  { from: "obj705", to: "obj705a", branchType: "main" },
  // Nhánh chính IS-7
  { from: "is3", to: "t10", branchType: "main", isMainLine: true },
  { from: "t10", to: "is7", branchType: "main", isMainLine: true },
  { from: "is7", to: "kr1", branchType: "main", isMainLine: true },
  // Nhánh rẽ Object 277 (lên trên, cùng hàng với KV-2, gần main hơn)
  { from: "is3", to: "obj257", branchType: "branch-up", priority: 1 },
  { from: "obj257", to: "obj277", branchType: "main" },
];
