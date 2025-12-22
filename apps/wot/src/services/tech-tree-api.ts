import { connections,nodes } from "@/components/tanks";
import type { TechTreeApiResponse } from "@/types/tech-tree";

/**
 * Fetch tech tree data từ API
 * @param nation - Quốc gia (vd: 'ussr', 'germany', 'usa')
 * @param type - Loại xe (vd: 'heavy', 'medium', 'all')
 */
export async function fetchTechTree(
  nation: string = 'ussr',
  type: string = 'all'
): Promise<TechTreeApiResponse> {
  // Sử dụng mock data trực tiếp thay vì gọi API
  // Khi nào có API thật, uncomment phần bên dưới
  
  // Simulate API delay (optional - xóa khi không cần)
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    nodes,
    connections,
  };

  /* Uncomment khi integrate API thật:
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
    const apiUrl = baseUrl 
      ? `${baseUrl}/tech-tree?nation=${nation}&type=${type}`
      : `/api/tech-tree?nation=${nation}&type=${type}`;
    
    const response = await fetch(apiUrl, {
        next: { 
          revalidate: 3600
        }
      }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data: TechTreeApiResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch tech tree:', error);
    throw error;
  }
  */
}

/**
 * Validate API response structure
 */
export function validateTechTreeData(data: any): data is TechTreeApiResponse {
  return (
    data &&
    Array.isArray(data.nodes) &&
    Array.isArray(data.connections) &&
    data.nodes.every((node: any) => 
      typeof node.id !== 'undefined' &&
      typeof node.name === 'string' &&
      typeof node.tier === 'number'
    ) &&
    data.connections.every((conn: any) =>
      typeof conn.from === 'string' &&
      typeof conn.to === 'string'
    )
  );
}
