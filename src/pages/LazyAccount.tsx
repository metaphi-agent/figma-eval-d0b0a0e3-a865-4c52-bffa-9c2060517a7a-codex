import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./AccountPage'))

export function LazyAccount() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

