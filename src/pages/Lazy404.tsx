import { lazy, Suspense } from 'react'

const Page = lazy(() => import('./NotFoundPage'))

export function Lazy404() {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

