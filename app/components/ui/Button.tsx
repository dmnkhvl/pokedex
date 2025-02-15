import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import type { ButtonHTMLAttributes } from "react"

const buttonVariants = cva(
  "uppercase font-bold rounded-md transition-all duration-200 ease-out h-10",
  {
    variants: {
      size: {
        default: "w-[120px] text-lg",
        sm: "w-[92px] text-sm",
      },
      variant: {
        primary: [
          "bg-primary",
          "text-secondary",
          "hover:opacity-90",
          "outline-2 outline-offset-4 outline-primary",
        ],
        secondary: [
          "bg-transparent",
          "text-secondary",
          "border-default border-secondary border-b-card",
          "hover:border-b-default",
        ],
      },
    },
    defaultVariants: {
      size: "default",
      variant: "primary",
    },
  }
)

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
