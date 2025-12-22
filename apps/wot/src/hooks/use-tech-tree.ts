import { useEffect, useState } from "react";
import type { TechTreeApiResponse } from "@/types/tech-tree";
import { fetchTechTree } from "@/services/tech-tree-api";

export function useTechTree(nation: string = 'ussr', type: string = 'all') {
  const [data, setData] = useState<TechTreeApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchTechTree(nation, type);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [nation, type]);

  return { data, isLoading, error };
}
