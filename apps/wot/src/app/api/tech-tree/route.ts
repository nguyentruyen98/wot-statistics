import { NextRequest, NextResponse } from "next/server";

import { connections, nodes } from "@/components/tanks";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nation = searchParams.get("nation") || "ussr";
  const type = searchParams.get("type") || "all";

  // Simulate API delay (optional - remove in production)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Mock data - currently returning hardcoded USSR data
  // In the future, you can filter by nation and type
  const response = {
    nodes,
    connections,
    metadata: {
      nation,
      type,
      lastUpdated: new Date().toISOString(),
    },
  };

  return NextResponse.json(response);
}
