import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"

const spinnerVariants = cva("rounded-full animate-spin", {
  variants: {
    size: {
      default: "w-6 h-6 border-4",
      sm: "w-4 h-4 border-default",
    },
    color: {
      default: "border-secondary border-t-transparent",
      onDark: "border-primary border-t-transparent",
    },
  },
  defaultVariants: {
    size: "default",
    color: "default",
  },
})

interface LoadingSpinnerProps extends VariantProps<typeof spinnerVariants> {}

export default function LoadingSpinner({ size, color }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col gap-y-2 justify-center items-center w-full">
      <div className={clsx(spinnerVariants({ size, color }))}></div>
    </div>
  )
}
