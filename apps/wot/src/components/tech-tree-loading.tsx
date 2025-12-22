import { Card, CardContent } from "@workspace/ui/components/card";

export function TechTreeLoading() {
  return (
    <div className="flex h-[600px] items-center justify-center">
      <Card className="p-8">
        <CardContent className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-500" />
          <p className="text-sm text-gray-600">Loading tech tree...</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function TechTreeError({ error }: { error: Error }) {
  return (
    <div className="flex h-[600px] items-center justify-center">
      <Card className="p-8">
        <CardContent className="flex flex-col items-center gap-4">
          <p className="text-lg font-semibold text-red-600">Error loading tech tree</p>
          <p className="text-sm text-gray-600">{error.message}</p>
        </CardContent>
      </Card>
    </div>
  );
}
