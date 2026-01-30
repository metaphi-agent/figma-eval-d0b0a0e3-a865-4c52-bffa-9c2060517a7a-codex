import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./CategoryDropdownPage'))

export function LazyCategoryDropdown() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

