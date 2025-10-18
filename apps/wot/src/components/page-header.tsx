import { cn } from "@workspace/ui/lib/utils";

function PageHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("border-grid", className)} {...props}>
      <div className="container-wrapper">
        <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-20 xl:gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}
function PageHeaderHeading({
  className,
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-primary leading-tighter max-w-2xl text-balance text-4xl font-semibold tracking-tight lg:font-semibold lg:leading-[1.1] xl:text-5xl xl:tracking-tighter",
        className
      )}
      {...props}
    />
  );
}

function PageHeaderDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-foreground max-w-3xl text-balance text-base sm:text-lg",
        className
      )}
      {...props}
    />
  );
}

function PageActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "**:data-[slot=button]:shadow-none flex w-full items-center justify-center gap-2 pt-2",
        className
      )}
      {...props}
    />
  );
}

export { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading };
