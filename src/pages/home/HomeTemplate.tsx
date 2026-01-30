import { Container } from '../../components/layout/Container'
import { Button } from '../../components/ui/Button'
import { ProductCard } from '../../components/blocks/ProductCard'
import { cn } from '../../components/ui/cn'

export function HomeTemplate() {
  const flashProducts = [
    {
      title: 'HAVIT HV-G92 Gamepad',
      price: '$120',
      originalPrice: '$160',
      ratingText: '★★★★★ (88)',
      badgeText: '-40%',
      imageSrc: './assets/images/figma/I61-2061;61-1844.png',
      imageAlt: 'Gamepad'
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
      title: 'IPS LCD Gaming Monitor',
      price: '$370',
      originalPrice: '$400',
      ratingText: '★★★★★ (99)',
      badgeText: '-30%',
      imageSrc: './assets/images/figma/I61-2152;79-1169.png',
      imageAlt: 'Monitor'
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
  ]

  const exploreProducts = [
    flashProducts[0],
    flashProducts[1],
    flashProducts[2],
    flashProducts[3],
    { ...flashProducts[1], title: 'RGB liquid CPU Cooler', badgeText: 'NEW', price: '$160' },
    { ...flashProducts[2], title: 'Quilted Satin Jacket', badgeText: undefined, price: '$660' },
    { ...flashProducts[0], title: 'GP11 Shooter USB Gamepad', badgeText: undefined, price: '$550' },
    { ...flashProducts[3], title: 'Small Bookshelf', badgeText: undefined, price: '$360' }
  ]

  return (
    <main>
      <Container className="grid gap-8 py-10 md:grid-cols-[220px_1fr]">
        <aside className="hidden space-y-3 text-sm md:block">
          {[
            "Woman's Fashion",
            "Men's Fashion",
            'Electronics',
            'Home & Lifestyle',
            'Medicine',
            'Sports & Outdoor',
            "Baby's & Toys",
            'Groceries & Pets',
            'Health & Beauty'
          ].map((item) => (
            <div key={item} className="flex items-center justify-between">
              <span>{item}</span>
              <span className="text-[var(--color-placeholder)]">›</span>
            </div>
          ))}
        </aside>

        <section className="relative overflow-hidden rounded-sm bg-black text-white">
          <div className="grid h-full gap-6 px-12 py-10 md:grid-cols-[1fr_520px]">
            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-6 text-base text-white/90">
                <img
                  src="./assets/images/figma/45-265.png"
                  alt="Apple"
                  className="h-12 w-10 object-contain"
                  draggable={false}
                />
                <span className="text-sm">iPhone 14 Series</span>
              </div>
              <h1 className="max-w-[300px] text-4xl font-semibold leading-[1.25] tracking-[0.04em]">
                Up to 10% off Voucher
              </h1>
              <a
                href="#/shop"
                className="inline-flex items-center gap-2 text-base underline underline-offset-8 hover:opacity-90"
              >
                Shop Now <span aria-hidden>→</span>
              </a>
            </div>

            <div className="relative">
              <img
                src="./assets/images/figma/45-261.png"
                alt="iPhone 14"
                className="absolute right-0 top-1/2 w-[520px] -translate-y-1/2 object-contain"
                draggable={false}
              />
            </div>
          </div>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  'h-2.5 w-2.5 rounded-full bg-white/50',
                  i === 2 ? 'h-3 w-3 bg-[var(--color-brand)] ring-2 ring-white/70' : null
                )}
                aria-hidden
              />
            ))}
          </div>
        </section>
      </Container>

      <Container className="space-y-16 pb-20">
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
                <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
                Today&apos;s
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Flash Sales</h2>
            </div>
            <div className="hidden items-end gap-4 md:flex">
              {[
                ['Days', '03'],
                ['Hours', '23'],
                ['Minutes', '19'],
                ['Seconds', '56']
              ].map(([label, value], idx) => (
                <div key={label} className="text-center">
                  <div className="text-xs font-medium text-[var(--color-title-active)]">{label}</div>
                  <div className="text-3xl font-semibold leading-none">{value}</div>
                  {idx < 3 ? (
                    <div className="mx-auto mt-2 hidden h-4 w-4 items-center justify-center text-[var(--color-brand)] md:flex">
                      :
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {flashProducts.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>

          <div className="pt-4">
            <Button size="lg" className="mx-auto block">
              View All Products
            </Button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
              <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
              Categories
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">Browse By Category</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
            {['Phones', 'Computers', 'SmartWatch', 'Camera', 'HeadPhones', 'Gaming'].map((label) => (
              <div
                key={label}
                className={cn(
                  'grid h-36 place-items-center rounded-sm border border-[color:var(--color-line)] text-sm transition-colors duration-150 hover:bg-[var(--color-brand)] hover:text-white',
                  label === 'Computers' ? 'bg-[var(--color-brand)] text-white' : 'bg-white'
                )}
              >
                <div className="space-y-2 text-center">
                  <div className="mx-auto h-10 w-10 rounded-full bg-black/10" aria-hidden />
                  <div>{label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
                <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
                This Month
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Best Selling Products</h2>
            </div>
            <Button size="md" className="hidden w-40 md:inline-flex">
              View All
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {flashProducts.map((product) => (
              <ProductCard key={`best-${product.title}`} {...product} />
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-sm bg-black text-white">
          <div className="grid gap-10 px-14 py-16 md:grid-cols-[1fr_540px]">
            <div className="space-y-8">
              <div className="text-base font-semibold text-[var(--color-success)]">Categories</div>
              <h2 className="max-w-[460px] text-5xl font-semibold leading-[1.2] tracking-[0.04em]">
                Enhance Your Music Experience
              </h2>
              <div className="flex flex-wrap gap-4">
                {[
                  ['23', 'Hours'],
                  ['05', 'Days'],
                  ['59', 'Minutes'],
                  ['35', 'Seconds']
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="grid h-16 w-16 place-items-center rounded-full bg-white text-center text-[10px] text-black"
                  >
                    <div className="leading-tight">
                      <div className="text-base font-semibold">{num}</div>
                      <div className="font-medium">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="w-44 bg-[var(--color-success)] hover:bg-[color:color-mix(in_srgb,var(--color-success),black_15%)] active:bg-[color:color-mix(in_srgb,var(--color-success),black_25%)]"
              >
                Buy Now!
              </Button>
            </div>

            <div className="relative grid place-items-center">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-[120px]" aria-hidden />
              <img
                src="./assets/images/figma/79-1199.png"
                alt="Speaker"
                className="relative w-full max-w-[560px] object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
                <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
                Our Products
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">Explore Our Products</h2>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              {['←', '→'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-input-bg)] text-lg hover:bg-neutral-200"
                  aria-label={label === '←' ? 'Previous' : 'Next'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {exploreProducts.map((product) => (
              <ProductCard key={`explore-${product.title}`} {...product} />
            ))}
          </div>

          <div className="pt-4">
            <Button size="lg" className="mx-auto block">
              View All Products
            </Button>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
              <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
              Featured
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">New Arrival</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
            <div className="relative overflow-hidden rounded-sm bg-black text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
              <div className="relative p-8">
                <div className="text-2xl font-semibold">PlayStation 5</div>
                <div className="mt-2 max-w-xs text-sm text-white/70">
                  Black and White version of the PS5 coming out on sale.
                </div>
                <a href="#/shop" className="mt-4 inline-block text-sm underline underline-offset-4">
                  Shop Now
                </a>
              </div>
              <div className="h-64 bg-[radial-gradient(circle_at_center,#ffffff22,transparent_60%)]" aria-hidden />
            </div>

            <div className="grid gap-6">
              <div className="relative overflow-hidden rounded-sm bg-black text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
                <div className="relative p-8">
                  <div className="text-2xl font-semibold">Women&apos;s Collections</div>
                  <div className="mt-2 max-w-xs text-sm text-white/70">
                    Featured woman collections that give you another vibe.
                  </div>
                  <a href="#/shop" className="mt-4 inline-block text-sm underline underline-offset-4">
                    Shop Now
                  </a>
                </div>
                <div className="h-44 bg-[radial-gradient(circle_at_center,#ffffff22,transparent_60%)]" aria-hidden />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ['Speakers', 'Amazon wireless speakers'],
                  ['Perfume', 'GUCCI INTENSE OUD EDP']
                ].map(([title, desc]) => (
                  <div key={title} className="relative overflow-hidden rounded-sm bg-black text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" aria-hidden />
                    <div className="relative p-6">
                      <div className="text-xl font-semibold">{title}</div>
                      <div className="mt-1 text-sm text-white/70">{desc}</div>
                      <a href="#/shop" className="mt-3 inline-block text-sm underline underline-offset-4">
                        Shop Now
                      </a>
                    </div>
                    <div className="h-28 bg-[radial-gradient(circle_at_center,#ffffff22,transparent_60%)]" aria-hidden />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 py-12 md:grid-cols-3">
          {[
            ['FREE AND FAST DELIVERY', 'Free delivery for all orders over $140'],
            ['24/7 CUSTOMER SERVICE', 'Friendly 24/7 customer support'],
            ['MONEY BACK GUARANTEE', 'We return money within 30 days']
          ].map(([title, desc]) => (
            <div key={title} className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-black text-white">
                <div className="h-10 w-10 rounded-full bg-white/20" aria-hidden />
              </div>
              <div className="mt-6 text-sm font-semibold">{title}</div>
              <div className="mt-2 text-xs text-[var(--color-label)]">{desc}</div>
            </div>
          ))}
        </section>
      </Container>
    </main>
  )
}
