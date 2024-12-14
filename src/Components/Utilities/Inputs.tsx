import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/libs/utils';

const inputVariants = cva(
    'inline-flex items-center justify-center rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 focus:ring-gray disabled:pointer-events-none text-raleway',
    {
        variants: {
            variant: {
                black: 'bg-black text-white hover:bg-black hover:bg-opacity-90',
                gray: 'bg-gray-500 text-white hover:bg-gray-600',
                white: 'bg-white text-black hover:bg-gray-100',
            },
            size: {
                default: 'h-10 px-4',
                lg: 'h-12 px-6',
            },
        },
        defaultVariants: {
            variant: 'white',
            size: 'default',
        },
    }
);

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
        VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <input
                className={cn(inputVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = 'Input';

export { Input, inputVariants };