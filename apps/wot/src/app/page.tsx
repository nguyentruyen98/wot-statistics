import { Button } from "@workspace/ui/components/button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
      <div className="bg-card border-border rounded-xl border p-4">
        <Button>Click me</Button>
        <p className="font-sans text-3xl font-semibold">$15,231.89</p>
        <p className="font-mono text-3xl font-semibold">$15,231.89</p>
      </div>
    </div>
  );
}
