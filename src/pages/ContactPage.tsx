import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function ContactPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-16">
          <div className="text-xs text-[var(--color-label)]">Home / Contact</div>

          <div className="grid gap-10 md:grid-cols-[340px_1fr]">
            <aside className="rounded-sm border border-[color:var(--color-line)] p-8">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-brand)] text-white">
                    ☎
                  </span>
                  <div className="text-sm font-semibold">Call To Us</div>
                </div>
                <p className="text-xs text-[var(--color-label)]">We are available 24/7, 7 days a week.</p>
                <p className="text-xs">Phone: +8801611112222</p>
              </div>
              <div className="my-8 h-px bg-[var(--color-line)]" />
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-brand)] text-white">
                    ✉
                  </span>
                  <div className="text-sm font-semibold">Write To Us</div>
                </div>
                <p className="text-xs text-[var(--color-label)]">
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-xs">Emails: customer@exclusive.com</p>
                <p className="text-xs">Emails: support@exclusive.com</p>
              </div>
            </aside>

            <section className="rounded-sm border border-[color:var(--color-line)] p-8">
              <div className="grid gap-4 md:grid-cols-3">
                <Input placeholder="Your Name *" />
                <Input placeholder="Your Email *" />
                <Input placeholder="Your Phone *" />
              </div>
              <textarea
                className="mt-6 h-52 w-full resize-none rounded-sm bg-[var(--color-input-bg)] p-4 text-sm outline-none placeholder:text-[var(--color-placeholder)] focus:border focus:border-[var(--color-title-active)]"
                placeholder="Your Message"
              />

              <div className="mt-6 flex justify-end">
                <Button className="w-48">Send Message</Button>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
