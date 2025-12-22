import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DotPattern } from "@workspace/ui/components/dot-pattern";
import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import { useTranslations } from "next-intl";

import LocaleSwitcher from "@/components/locale-switchers";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import TechTree from "@/components/tech-tree";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {/* <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg border p-20"> */}
      {/* <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
          )}
          // className={cn(
          //   "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          // )}
        /> */}
      {/* <p>hihi</p> */}
      <div className="flex items-center justify-center">
        <TechTree />
      </div>
      {/* <LocaleSwitcher /> <h1 className="font-sans">{t("title")}</h1>
        <p className="font-sans">{t("title")}</p>
        <Button type="submit">Submit</Button> */}

      {/* <TechTree /> */}
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
