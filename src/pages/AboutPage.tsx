import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'

export default function AboutPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold">Our Story</h1>
              <p className="text-sm text-[var(--color-label)]">
                Launced in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace with an active
                presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
                Exclusive has 10,500 sellers and 300 brands and serves 3 millions customers across the region.
              </p>
              <p className="text-sm text-[var(--color-label)]">
                Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a
                diverse assortment in categories ranging from consumer.
              </p>
            </div>
            <div className="overflow-hidden rounded-sm bg-[rgb(235,126,168)]">
              <img
                src="./assets/images/figma/226-4550.png"
                alt="About Exclusive"
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ['10.5k', 'Sellers active our site'],
              ['33k', 'Monthly Product Sale'],
              ['45.5k', 'Customer active in our site'],
              ['25k', 'Annual gross sale in our site']
            ].map(([value, label], i) => (
              <div
                key={label}
                className={[
                  'rounded-sm border border-[color:var(--color-line)] p-6 text-center',
                  i === 1 ? 'bg-[var(--color-brand)] text-white' : 'bg-white'
                ].join(' ')}
              >
                <div className="text-2xl font-semibold">{value}</div>
                <div className="mt-2 text-xs opacity-80">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {['Tom Cruise', 'Emma Watson', 'Will Smith'].map((name) => (
              <div key={name} className="rounded-sm border border-[color:var(--color-line)] p-6">
                <div className="h-56 rounded-sm bg-[var(--color-input-bg)]" />
                <div className="mt-4 text-lg font-semibold">{name}</div>
                <div className="text-xs text-[var(--color-label)]">Product Designer</div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
