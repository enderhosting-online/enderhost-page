import type React from "react";
import { cn } from "@/lib/utils";

type TitleProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Title<T extends React.ElementType = "h1">({
  as,
  className,
  children,
  ...props
}: TitleProps<T>) {
  const Component = as || "h1";
  return (
    <Component
      className={cn(
        "grid w-full rounded-lg py-4 text-center font-black text-4xl text-foreground uppercase md:text-[2.65rem]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Title;
