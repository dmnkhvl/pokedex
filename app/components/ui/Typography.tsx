import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const typographyStyles = cva("uppercase", {
  variants: {
    variant: {
      h1: "font-semibold text-2xl",
      h2: "font-bold text-xl",
      body1: "uppercase text-lg",
      body2: "uppercase",
      body3: "uppercase text-sm",
    },
    onDark: {
      false: "text-secondary",
      true: "text-primary",
    },
  },
  defaultVariants: {
    variant: "h1",
    onDark: true,
  },
})

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyStyles> {
  children: React.ReactNode
}

export default function Typography({
  variant,
  onDark,
  children,
  className,
  ...props
}: TypographyProps) {
  const Tag = variant === "h1" ? "h1" : "h2"

  return (
    <Tag className={typographyStyles({ variant, onDark, className })} {...props}>
      {children}
    </Tag>
  )
}
