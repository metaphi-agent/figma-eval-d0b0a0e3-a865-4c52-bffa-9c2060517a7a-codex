import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./LoginPage'))

export function LazyLogin() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

