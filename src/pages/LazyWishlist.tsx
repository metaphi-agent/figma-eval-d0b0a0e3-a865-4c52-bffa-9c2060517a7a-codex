import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./WishlistPage'))

export function LazyWishlist() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

