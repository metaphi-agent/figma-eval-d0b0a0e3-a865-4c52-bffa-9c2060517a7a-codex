import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./ProductDetailsPage'))

export function LazyProductDetails() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

