import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./ContactPage'))

export function LazyContact() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

