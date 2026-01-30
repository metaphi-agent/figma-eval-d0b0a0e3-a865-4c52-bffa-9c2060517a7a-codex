import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function CartPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-16">
          <div className="text-xs text-[var(--color-label)]">Home / Cart</div>

          <div className="rounded-sm border border-[color:var(--color-line)]">
            <div className="grid grid-cols-4 gap-4 px-8 py-5 text-xs text-[var(--color-label)]">
              <div>Product</div>
              <div>Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>
            <div className="h-px bg-[var(--color-line)]" />
            {[
              ['LCD Monitor', 650, 1, './assets/images/figma/I61-2152;79-1169.png'],
              ['H1 Gamepad', 550, 2, './assets/images/figma/I61-2061;61-1844.png']
            ].map(([name, price, qty, imgSrc]) => (
              <div key={name} className="grid grid-cols-4 items-center gap-4 px-8 py-6">
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
                  <div className="text-sm">{name}</div>
                </div>
                <div className="text-sm">${price}</div>
                <div className="flex justify-center">
                  <input
                    className="h-10 w-16 rounded-sm border border-[color:var(--color-line)] bg-white text-center text-sm"
                    defaultValue={qty}
                    aria-label={`${name} quantity`}
                  />
                </div>
                <div className="text-right text-sm">${Number(price) * Number(qty)}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Button variant="outline" className="w-40">
              Return To Shop
            </Button>
            <Button variant="outline" className="w-40">
              Update Cart
            </Button>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_420px]">
            <div className="flex flex-wrap items-center gap-4">
              <Input className="max-w-xs" placeholder="Coupon Code" />
              <Button className="w-40">Apply Coupon</Button>
            </div>

            <div className="rounded-sm border border-[color:var(--color-title-active)] p-6">
              <div className="text-base font-semibold">Cart Total</div>
              <div className="mt-6 space-y-4 text-sm">
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
              <Button className="mt-6 w-full">Proceed to checkout</Button>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
