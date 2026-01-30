import { ReactNode } from 'react'

import { cn } from '../ui/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-[1170px] px-4', className)}>{children}</div>
}

