import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-24">
          <div className="text-xs text-[var(--color-label)]">Home / 404 Error</div>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-20 text-7xl font-medium tracking-tight md:text-8xl">404 Not Found</h1>
            <p className="mt-8 text-base text-[var(--color-label)]">
              Your visited page not found. You may go home page.
            </p>
            <Button size="lg" className="mt-12 w-64">
              Back to home page
            </Button>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
