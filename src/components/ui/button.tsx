import * as React from 'react';
import {cva, type VariantProps} from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva (
  "inline-flex item-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring:ring disabled:pointer-events-none disable:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg--destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondry: "bg-secondry text-secondry-foreground shadow-sm hover:bg-secondry/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants:{
      variant: "default",
      size: "default",
    }
  }
);
export interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondry" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icons";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps> (
  ({ className, variant = "default", size = "default", asChild = false, ...props}, ref) => {
const Comp = "button";
return(
  <Comp
  // className={cn(buttonVariants({variant, size, className}))}
  className={cn(buttonVariants({variant,  className}))}
  ref={ref}
  {...props} />
)
  }
);

Button.displayName ="Button";
export {Button, buttonVariants};

