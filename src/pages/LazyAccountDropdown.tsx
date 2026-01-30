import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./AccountDropdownPage'))

export function LazyAccountDropdown() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

