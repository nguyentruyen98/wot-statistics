import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import TechTree from "@/components/test";

export default function Home() {
  return (
    <div>
      <TechTree />
      {/* <div className="flex flex-col items-center justify-center gap-4">
      <PageHeaderHeading>Pick a Color. Make it yours.</PageHeaderHeading>
      <PageHeaderDescription className="text-center">
        Try our hand-picked themes. Copy and paste them into your project. New
        theme editor coming soon.
      </PageHeaderDescription>
      </div>
      <Card>
      <CardHeader>
        <CardDescription>Total Revenue</CardDescription>
        <CardTitle className="text-3xl">$15,231.89</CardTitle>
        <CardDescription>+20.1% from last month</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <p>Test ne</p>
        <Button>Click me</Button>
      </CardContent>
      </Card> */}
    </div>
  );
}
