import { ButtonHTMLAttributes, forwardRef } from 'react'

import { cn } from './cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const stylesByVariant: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] active:bg-[var(--color-brand-active)] disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-black text-white hover:bg-neutral-900 active:bg-neutral-950 disabled:opacity-50 disabled:cursor-not-allowed',
  outline:
    'border border-[color:var(--color-line)] bg-white text-[var(--color-title-active)] hover:bg-neutral-50 active:bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed',
  ghost:
    'bg-transparent text-[var(--color-title-active)] hover:bg-neutral-100 active:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed'
}

const stylesBySize: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-8 text-base'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = 'primary', size = 'md', type = 'button', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-150',
        stylesByVariant[variant],
        stylesBySize[size],
        className
      )}
      {...props}
    />
  )
})

