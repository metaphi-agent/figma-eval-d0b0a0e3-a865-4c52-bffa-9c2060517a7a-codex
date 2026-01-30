import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function SignupPage() {
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
              <h1 className="text-4xl font-medium tracking-tight">Create an account</h1>
              <p className="text-base text-[var(--color-label)]">Enter your details below</p>
            </div>

            <div className="space-y-8">
              <Input variant="underline" placeholder="Name" />
              <Input variant="underline" placeholder="Email or Phone Number" />
              <Input variant="underline" placeholder="Password" type="password" />
            </div>

            <div className="space-y-4">
              <Button className="w-full">Create Account</Button>
              <Button variant="outline" className="w-full gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white" aria-hidden>
                  <span className="text-sm font-semibold leading-none text-[var(--color-brand)]">G</span>
                </span>
                Sign up with Google
              </Button>
            </div>

            <p className="text-center text-sm text-[var(--color-label)]">
              Already have account?{' '}
              <a href="#/login" className="text-[var(--color-title-active)] underline underline-offset-4">
                Log in
              </a>
            </p>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
