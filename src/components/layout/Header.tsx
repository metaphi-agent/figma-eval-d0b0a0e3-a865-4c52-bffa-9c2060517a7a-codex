import { NavLink } from 'react-router-dom'

import { cn } from '../ui/cn'
import { Icon } from '../ui/Icon'
import { Container } from './Container'

type HeaderProps = {
  cartCount?: number
  wishlistCount?: number
  activeUser?: boolean
  showCategoryDropdown?: boolean
  showAccountDropdown?: boolean
}

export function Header({
  cartCount = 0,
  wishlistCount = 0,
  activeUser = false,
  showCategoryDropdown = false,
  showAccountDropdown = false
}: HeaderProps) {
  return (
    <header className="border-b border-[color:var(--color-line)] bg-white">
      <Container className="relative flex h-20 items-center gap-10">
        <div className="text-2xl font-bold tracking-tight">Exclusive</div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {[
            ['Home', '/'],
            ['Contact', '/contact'],
            ['About', '/about'],
            ['Sign Up', '/signup']
          ].map(([label, href]) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                cn(
                  'text-[var(--color-title-active)] hover:underline hover:underline-offset-4',
                  isActive ? 'underline underline-offset-4' : null
                )
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-4">
          <div className="relative hidden w-[243px] md:block">
            <input
              className="h-10 w-full rounded-sm bg-[var(--color-input-bg)] pl-4 pr-10 text-sm placeholder:text-[var(--color-placeholder)]"
              placeholder="What are you looking for?"
            />
            <Icon
              src="./assets/icons/search.svg"
              alt=""
              className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2"
            />
          </div>

          <button type="button" className="relative" aria-label="Wishlist">
            <Icon src="./assets/icons/heart.svg" alt="" className="h-6 w-6" />
            {wishlistCount ? (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[var(--color-brand)] px-1 text-[10px] font-semibold leading-none text-white">
                {wishlistCount}
              </span>
            ) : null}
          </button>

          <button type="button" className="relative" aria-label="Cart">
            <Icon src="./assets/icons/cart.svg" alt="" className="h-6 w-6" />
            {cartCount ? (
              <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-[var(--color-brand)] px-1 text-[10px] font-semibold leading-none text-white">
                {cartCount}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            className={cn('relative grid h-8 w-8 place-items-center rounded-full', activeUser ? 'bg-[var(--color-brand)]' : null)}
            aria-label="Account"
          >
            <Icon src="./assets/icons/user.svg" alt="" className={cn('h-5 w-5', activeUser ? 'invert' : null)} />
          </button>
        </div>

        {showCategoryDropdown ? (
          <div className="absolute left-4 top-[88px] w-[220px] rounded-sm border border-[color:var(--color-line)] bg-white p-4 text-sm shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
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
              <div key={item} className="flex items-center justify-between py-2">
                <span>{item}</span>
                <span className="text-[var(--color-placeholder)]">›</span>
              </div>
            ))}
          </div>
        ) : null}

        {showAccountDropdown ? (
          <div className="absolute right-4 top-[88px] w-[220px] rounded-sm bg-[rgba(0,0,0,0.70)] p-4 text-sm text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            {[
              'Manage My Account',
              'My Order',
              'My Cancellations',
              'My Reviews',
              'Logout'
            ].map((item) => (
              <div key={item} className="py-2">
                {item}
              </div>
            ))}
          </div>
        ) : null}
      </Container>
    </header>
  )
}
