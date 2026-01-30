import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./CheckoutPage'))

export function LazyCheckout() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

