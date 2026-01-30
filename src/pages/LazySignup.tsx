import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./SignupPage'))

export function LazySignup() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

