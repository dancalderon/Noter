import { cn } from "@/lib/utils";
import { type VariantProps, cva } from "class-variance-authority";
import Link, { type LinkProps } from "next/link";
import React from "react";

export const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-extrabold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-bold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "",
      // [&:not(:first-child)]:mt-6
    },
    affects: {
      default: "",
      lead: "text-xl text-muted-foreground/90",
      large: "text-lg font-bold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground/90",
    },
  },
  defaultVariants: {
    variant: "h1",
    affects: "default",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, affects, ...props }, ref) => {
    const Comp = variant || "p";
    return (
      <Comp
        className={cn(typographyVariants({ variant, affects, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = "H1";

interface StyledLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const StyledLink = ({ children, className, ...props }: StyledLinkProps) => {
  return (
    <Link
      {...props}
      className={cn(
        "text-foreground hover:text-foreground/90 transition-colors font-semibold",
        className,
      )}
    >
      {children}
    </Link>
  );
};

export { Typography, StyledLink };
