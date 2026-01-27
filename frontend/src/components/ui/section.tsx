import { cn } from "@/lib/utils";

export default function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex w-full max-w-6xl items-center justify-center px-5 md:px-6",
        className,
      )}
      {...props}
    />
  );
}
