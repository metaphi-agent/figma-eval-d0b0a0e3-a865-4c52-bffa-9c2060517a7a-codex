import { InputHTMLAttributes, forwardRef } from 'react'

import { cn } from './cn'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
  variant?: 'filled' | 'underline'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, error, variant = 'filled', ...props },
  ref
) {
  const stylesByVariant =
    variant === 'underline'
      ? 'h-10 w-full rounded-none border-0 border-b border-[color:var(--color-line)] bg-transparent px-0 text-base placeholder:text-[var(--color-placeholder)] focus:border-b-[color:var(--color-title-active)]'
      : 'h-12 w-full rounded-sm border border-transparent bg-[var(--color-input-bg)] px-4 text-sm placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-title-active)]'

  return (
    <div className="w-full">
      <input
        ref={ref}
        className={cn(
          'text-[var(--color-title-active)] outline-none transition-colors duration-150',
          stylesByVariant,
          error ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:border-b-[var(--color-error)]' : null,
          className
        )}
        {...props}
      />
      {error ? <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p> : null}
    </div>
  )
})
