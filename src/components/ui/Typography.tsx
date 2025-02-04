import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const typographyStyles = cva('uppercase', {
  variants: {
    variant: {
      h1: 'font-semibold text-2xl',
      h2: 'font-semibold text-lg',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyStyles> {
  children: React.ReactNode
}

export default function Typography({ variant, children, className, ...props }: TypographyProps) {
  const Tag = variant === 'h1' ? 'h1' : 'h2'
  return (
    <Tag className={typographyStyles({ variant, className })} {...props}>
      {children}
    </Tag>
  )
}
