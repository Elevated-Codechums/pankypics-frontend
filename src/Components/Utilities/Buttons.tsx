import * as React from 'react'
import Link from 'next/link'
import { VariantProps, cva } from 'class-variance-authority'

import { cn } from '@/libs/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 focus:ring-gray disabled:pointer-events-none data-[state=open]:bg-black-opacity-40',
  {
    variants: {
      variant: {
        default:
          'bg-black text-white hover:bg-black hover:bg-opacity-90',
        destructive:
          'bg-red-500 text-white hover:bg-red-600',
        outline:
          'bg-black backdrop-blur-sm bg-opacity-50 border border-white hover:bg-gray text-white',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200',
        ghost:
          'bg-transparent dark:bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-300 hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-5 p-6 text-xl',
        lg: 'h-10 px-8 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }