import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./CartPage'))

export function LazyCart() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

