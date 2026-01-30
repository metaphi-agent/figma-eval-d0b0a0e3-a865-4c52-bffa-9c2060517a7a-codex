import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Icon } from '../components/ui/Icon'

export default function WishlistPage() {
  const wishlistItems = [
    {
      title: 'Gucci duffle bag',
      price: '$960',
      originalPrice: '$1160',
      badgeText: '-35%',
      imageSrc: './assets/images/figma/I61-2478;61-2210.png',
      imageAlt: 'Bag'
    },
    {
      title: 'RGB liquid CPU Cooler',
      price: '$1960',
      originalPrice: '$2060',
      badgeText: undefined,
      imageSrc: './assets/images/figma/I61-2152;79-1169.png',
      imageAlt: 'CPU Cooler'
    },
    {
      title: 'GP11 Shooter USB Gamepad',
      price: '$550',
      originalPrice: '$600',
      badgeText: undefined,
      imageSrc: './assets/images/figma/I61-2061;61-1844.png',
      imageAlt: 'Gamepad'
    },
    {
      title: 'Quilted Satin Jacket',
      price: '$750',
      originalPrice: '$860',
      badgeText: undefined,
      imageSrc: './assets/images/figma/I61-2090;61-551.png',
      imageAlt: 'Jacket'
    }
  ]

  return (
    <PageLayout activeUser>
      <main>
        <Container className="py-16">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Wishlist (4)</h1>
            <Button variant="outline" className="w-40">
              Move All To Bag
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {wishlistItems.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="group relative overflow-hidden rounded-sm bg-[var(--color-input-bg)]">
                  {item.badgeText ? (
                    <span className="absolute left-3 top-3 z-10 rounded-sm bg-[var(--color-brand)] px-2 py-1 text-xs font-semibold text-white">
                      {item.badgeText}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
                    aria-label={`Remove ${item.title}`}
                  >
                    <span className="text-base leading-none">×</span>
                  </button>
                  <div className="grid aspect-[1/1] place-items-center p-8">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                      draggable={false}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0">
                    <Button className="w-full rounded-none gap-2">
                      <Icon src="./assets/icons/cart.svg" alt="" className="h-5 w-5 invert" />
                      Add To Cart
                    </Button>
                  </div>
                </div>
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-sm">
                  <span className="font-semibold text-[var(--color-brand)]">{item.price}</span>{' '}
                  {item.originalPrice ? (
                    <span className="text-[var(--color-placeholder)] line-through">{item.originalPrice}</span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-between">
            <div className="inline-flex items-center gap-3 text-sm font-semibold">
              <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
              Just For You
            </div>
            <Button variant="outline" className="w-32">
              See All
            </Button>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {wishlistItems.map((item) => (
              <div key={`jfy-${item.title}`} className="space-y-3">
                <div className="group relative overflow-hidden rounded-sm bg-[var(--color-input-bg)]">
                  <button
                    type="button"
                    className="absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
                    aria-label={`Add ${item.title} to wishlist`}
                  >
                    <Icon src="./assets/icons/heart.svg" alt="" className="h-5 w-5" />
                  </button>
                  <div className="grid aspect-[1/1] place-items-center p-8">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain"
                      draggable={false}
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0">
                    <Button className="w-full rounded-none">Add To Cart</Button>
                  </div>
                </div>
                <div className="text-sm font-medium">{item.title}</div>
                <div className="text-sm">
                  <span className="font-semibold text-[var(--color-brand)]">{item.price}</span>{' '}
                  {item.originalPrice ? (
                    <span className="text-[var(--color-placeholder)] line-through">{item.originalPrice}</span>
                  ) : null}
                </div>
                <div className="text-xs text-[var(--color-label)]">★★★★★ (65)</div>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
