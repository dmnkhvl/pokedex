import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react"

const buttonVariants = cva("uppercase  rounded-xs transition-all duration-200 ease-out h-10", {
  variants: {
    size: {
      default: "w-[120px]",
      sm: "w-[92px] text-sm",
    },
    variant: {
      primary: [
        "bg-secondary",
        "text-primary font-bold",
        "border-transparent border-default",
        "hover:opacity-80",
      ],
      secondary: [
        "bg-transparent",
        "text-secondary",
        "border-default border-secondary",
        "hover:border-b-card",
      ],
    },
  },
  defaultVariants: {
    size: "default",
    variant: "primary",
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ children, size, variant, ...props }: ButtonProps) {
  return (
    <button className={clsx(buttonVariants({ size, variant }))} {...props}>
      {children}
    </button>
  )
}
