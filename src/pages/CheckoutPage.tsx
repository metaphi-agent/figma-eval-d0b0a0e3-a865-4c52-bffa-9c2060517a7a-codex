import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function CheckoutPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-16">
          <div className="text-xs text-[var(--color-label)]">
            Account / My Account / Product / View Cart / CheckOut
          </div>

          <div className="grid gap-12 md:grid-cols-[1fr_420px]">
            <section className="space-y-6">
              <h1 className="text-2xl font-semibold">Billing Details</h1>
              <div className="grid gap-4">
                {[
                  'First Name*',
                  'Company Name',
                  'Street Address*',
                  'Apartment, floor, etc. (optional)',
                  'Town/City*',
                  'Phone Number*',
                  'Email Address*'
                ].map((label) => (
                  <div key={label} className="space-y-2">
                    <div className="text-xs text-[var(--color-label)]">{label}</div>
                    <Input />
                  </div>
                ))}
              </div>
              <label className="flex items-center gap-2 text-xs text-[var(--color-label)]">
                <input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--color-brand)]" />
                Save this information for faster check-out next time
              </label>
            </section>

            <section className="space-y-6">
              <div className="space-y-4">
                {[
                  ['LCD Monitor', 650, './assets/images/figma/I61-2152;79-1169.png'],
                  ['H1 Gamepad', 1100, './assets/images/figma/I61-2061;61-1844.png']
                ].map(([name, price, imgSrc]) => (
                  <div key={name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3">
                      <div className="grid h-12 w-12 place-items-center rounded-sm bg-[var(--color-input-bg)] p-1">
                        <img
                          src={String(imgSrc)}
                          alt={String(name)}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain"
                          draggable={false}
                        />
                      </div>
                      <span>{name}</span>
                    </div>
                    <span>${price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-label)]">Subtotal:</span>
                  <span>$1750</span>
                </div>
                <div className="h-px bg-[var(--color-line)]" />
                <div className="flex items-center justify-between">
                  <span className="text-[var(--color-label)]">Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="h-px bg-[var(--color-line)]" />
                <div className="flex items-center justify-between font-semibold">
                  <span>Total:</span>
                  <span>$1750</span>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <label className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <input type="radio" name="payment" className="h-4 w-4 accent-black" />
                    Bank
                  </span>
                  <span className="text-xs text-[var(--color-label)]">VISA · MasterCard</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked className="h-4 w-4 accent-black" />
                  Cash on delivery
                </label>
              </div>

              <div className="flex items-center gap-4">
                <Input className="max-w-xs" placeholder="Coupon Code" />
                <Button className="w-40">Apply Coupon</Button>
              </div>

              <Button className="w-40">Place Order</Button>
            </section>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
