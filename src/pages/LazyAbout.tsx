import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./AboutPage'))

export function LazyAbout() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

