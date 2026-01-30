import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./HomePage'))

export function LazyHome() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

