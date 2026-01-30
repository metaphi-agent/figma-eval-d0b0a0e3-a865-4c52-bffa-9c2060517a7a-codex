import { Icon } from '../ui/Icon'
import { Container } from './Container'

export function TopPromoBar() {
  return (
    <div className="bg-black text-white">
      <Container className="flex h-10 items-center justify-between text-xs">
        <p className="mx-auto text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
          <a href="#/shop" className="underline underline-offset-2">
            ShopNow
          </a>
        </p>
        <button
          type="button"
          className="ml-6 hidden items-center gap-2 text-xs text-white/90 hover:text-white md:flex"
          aria-label="Language"
        >
          English
          <Icon src="./assets/icons/chevron-down.svg" alt="" className="h-3 w-3 invert" />
        </button>
      </Container>
    </div>
  )
}

