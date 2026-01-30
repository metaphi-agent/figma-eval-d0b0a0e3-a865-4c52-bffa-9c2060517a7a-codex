import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'
import { ProductCard } from '../components/blocks/ProductCard'

export default function ProductDetailsPage() {
  const galleryThumbs = [
    './assets/images/figma/251-4902.png',
    './assets/images/figma/251-4904.png',
    './assets/images/figma/251-4910.png',
    './assets/images/figma/251-4904.png'
  ]

  return (
    <PageLayout>
      <main>
        <Container className="py-16">
          <div className="text-xs text-[var(--color-label)]">Account / Gaming / Havic HV G-92 Gamepad</div>

          <div className="mt-10 grid gap-10 md:grid-cols-[80px_1fr_380px]">
            <div className="space-y-4">
              {galleryThumbs.map((src, idx) => (
                <button
                  key={`${src}-${idx}`}
                  type="button"
                  className="grid aspect-square place-items-center rounded-sm bg-[var(--color-input-bg)] p-2"
                  aria-label={`Select image ${idx + 1}`}
                >
                  <img
                    src={src}
                    alt=""
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                </button>
              ))}
            </div>

            <div className="grid rounded-sm bg-[var(--color-input-bg)] p-8">
              <img
                src="./assets/images/figma/251-4920.png"
                alt="Havic HV G-92 Gamepad"
                className="m-auto max-h-[520px] w-full max-w-[520px] object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>

            <section className="space-y-4">
              <h1 className="text-xl font-semibold">Havic HV G-92 Gamepad</h1>
              <div className="text-xs text-[var(--color-label)]">★★★★★ (150 Reviews) · In Stock</div>
              <div className="text-xl font-medium">$192.00</div>
              <p className="text-xs text-[var(--color-label)]">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install
                & mess free removal.
              </p>
              <div className="h-px bg-[var(--color-line)]" />

              <div className="flex items-center gap-3 text-sm">
                <div className="w-16 text-[var(--color-label)]">Colours:</div>
                <div className="flex items-center gap-2">
                  <button type="button" className="h-5 w-5 rounded-full bg-rose-400 ring-2 ring-transparent ring-offset-2 ring-offset-white focus:ring-black" />
                  <button type="button" className="h-5 w-5 rounded-full bg-slate-600 ring-2 ring-black ring-offset-2 ring-offset-white" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="w-16 text-[var(--color-label)]">Size:</div>
                <div className="flex items-center gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={[
                        'grid h-8 w-10 place-items-center rounded-sm border border-[color:var(--color-line)] text-xs',
                        size === 'M' ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)]' : null
                      ].join(' ')}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 items-center overflow-hidden rounded-sm border border-[color:var(--color-line)]">
                  <button type="button" className="grid h-11 w-11 place-items-center text-lg">
                    −
                  </button>
                  <div className="grid h-11 w-14 place-items-center text-sm">2</div>
                  <button type="button" className="grid h-11 w-11 place-items-center bg-[var(--color-brand)] text-lg text-white">
                    +
                  </button>
                </div>
                <Button className="flex-1">Buy Now</Button>
                <button type="button" className="grid h-11 w-11 place-items-center rounded-sm border border-[color:var(--color-line)]" aria-label="Wishlist">
                  <Icon src="./assets/icons/heart.svg" alt="" className="h-6 w-6" />
                </button>
              </div>

              <div className="rounded-sm border border-[color:var(--color-line)] p-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-black/10" aria-hidden />
                  <div>
                    <div className="font-semibold">Free Delivery</div>
                    <div className="text-[var(--color-label)]">Enter your postal code for Delivery Availability</div>
                  </div>
                </div>
                <div className="my-4 h-px bg-[var(--color-line)]" />
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-black/10" aria-hidden />
                  <div>
                    <div className="font-semibold">Return Delivery</div>
                    <div className="text-[var(--color-label)]">Free 30 Days Delivery Returns. Details</div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-16 space-y-6">
            <div className="inline-flex items-center gap-3 text-sm font-semibold">
              <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
              Related Item
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  title: 'IPS LCD Gaming Monitor',
                  price: '$370',
                  originalPrice: '$400',
                  ratingText: '★★★★★ (99)',
                  badgeText: '-30%',
                  imageSrc: './assets/images/figma/I61-2152;79-1169.png',
                  imageAlt: 'Monitor'
                },
                {
                  title: 'AK-900 Wired Keyboard',
                  price: '$960',
                  originalPrice: '$1160',
                  ratingText: '★★★★★ (75)',
                  badgeText: '-35%',
                  imageSrc: './assets/images/figma/I61-2090;61-551.png',
                  imageAlt: 'Keyboard'
                },
                {
                  title: 'GP11 Shooter USB Gamepad',
                  price: '$550',
                  ratingText: '★★★★★ (65)',
                  badgeText: 'NEW',
                  imageSrc: './assets/images/figma/I61-2061;61-1844.png',
                  imageAlt: 'Gamepad'
                },
                {
                  title: 'S-Series Comfort Chair',
                  price: '$375',
                  originalPrice: '$400',
                  ratingText: '★★★★★ (99)',
                  badgeText: '-25%',
                  imageSrc: './assets/images/figma/I61-2478;61-2210.png',
                  imageAlt: 'Chair'
                }
              ].map((product) => (
                <ProductCard key={product.title} {...product} />
              ))}
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
