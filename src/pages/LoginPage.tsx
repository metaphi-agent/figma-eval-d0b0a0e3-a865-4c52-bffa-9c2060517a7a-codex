import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function LoginPage() {
  return (
    <PageLayout>
      <main>
        <Container className="grid gap-10 py-14 md:grid-cols-2">
          <div className="hidden overflow-hidden rounded-r-sm bg-[rgb(203,228,232)] md:block">
            <img
              src="./assets/images/figma/155-1717.png"
              alt="Shopping"
              className="h-full w-full object-cover"
              draggable={false}
            />
          </div>

          <div className="max-w-md space-y-10 md:pt-20">
            <div className="space-y-2">
              <h1 className="text-4xl font-medium tracking-tight">Log in to Exclusive</h1>
              <p className="text-base text-[var(--color-label)]">Enter your details below</p>
            </div>

            <div className="space-y-8">
              <Input variant="underline" placeholder="Email or Phone Number" />
              <Input variant="underline" placeholder="Password" type="password" />
            </div>

            <div className="flex items-center justify-between">
              <Button className="w-36">Log In</Button>
              <a href="#/forgot" className="text-sm text-[var(--color-brand)] hover:underline">
                Forget Password?
              </a>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
