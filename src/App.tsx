import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react'
import { Navigate, NavLink, Route, Routes } from 'react-router-dom'

function cn(...values: Array<string | null | undefined | false>) {
  return values.filter(Boolean).join(' ')
}

function Icon({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={className} draggable={false} />
}

type ButtonVariant = 'primary' | 'outline' | 'ghost'
function Button({
  variant = 'primary',
  className,
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }) {
  const base =
    'inline-flex items-center justify-center rounded-sm font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed'
  const styles =
    variant === 'primary'
      ? 'h-11 px-6 bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-hover)] active:bg-[var(--color-brand-active)]'
      : variant === 'outline'
        ? 'h-11 px-6 border border-[color:var(--color-line)] bg-white text-[var(--color-title-active)] hover:bg-neutral-50 active:bg-neutral-100'
        : 'h-11 px-3 bg-transparent text-[var(--color-title-active)] hover:bg-neutral-100 active:bg-neutral-200'

  return <button type={type} className={cn(base, styles, className)} {...props} />
}

function Input({
  className,
  error,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <div className="w-full">
      <input
        className={cn(
          'h-12 w-full rounded-sm border border-transparent bg-[var(--color-input-bg)] px-4 text-sm text-[var(--color-title-active)] outline-none transition-colors duration-150 placeholder:text-[var(--color-placeholder)] focus:border-[var(--color-title-active)]',
          error ? 'border-[var(--color-error)] focus:border-[var(--color-error)]' : null,
          className
        )}
        {...props}
      />
      {error ? <p className="mt-1 text-xs text-[var(--color-error)]">{error}</p> : null}
    </div>
  )
}

function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1170px] px-4', className)}>{children}</div>
}

function TopPromoBar() {
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

function Header({
  cartCount = 2,
  wishlistCount = 4,
  activeUser = false,
  showCategoryDropdown = false,
  showAccountDropdown = false
}: {
  cartCount?: number
  wishlistCount?: number
  activeUser?: boolean
  showCategoryDropdown?: boolean
  showAccountDropdown?: boolean
}) {
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
            className={cn(
              'grid h-8 w-8 place-items-center rounded-full',
              activeUser ? 'bg-[var(--color-brand)]' : null
            )}
            aria-label="Account"
          >
            <Icon
              src="./assets/icons/user.svg"
              alt=""
              className={cn('h-5 w-5', activeUser ? 'invert' : null)}
            />
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
            {['Manage My Account', 'My Order', 'My Cancellations', 'My Reviews', 'Logout'].map((item) => (
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

function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-5">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Exclusive</div>
          <div className="text-sm font-semibold">Subscribe</div>
          <p className="text-xs text-white/70">Get 10% off your first order</p>
          <div className="flex items-center gap-2">
            <Input
              className="h-11 bg-black text-white placeholder:text-white/50 focus:border-white"
              placeholder="Enter your email"
            />
            <Button variant="ghost" className="h-11 w-11 border border-white/30 px-0 text-white hover:bg-white/10">
              <Icon src="./assets/icons/send.svg" alt="Send" className="h-5 w-5 invert" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">Support</div>
          <div className="space-y-2 text-xs text-white/70">
            <p>111 Bijoy sarani, Dhaka, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">Account</div>
          <ul className="space-y-2 text-xs text-white/70">
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">Quick Link</div>
          <ul className="space-y-2 text-xs text-white/70">
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">Download App</div>
          <p className="text-xs text-white/70">Save $3 with App New User Only</p>
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-sm border border-white/20 bg-white/5" aria-hidden />
            <div className="space-y-2">
              <div className="h-9 w-28 rounded-sm border border-white/20 bg-white/5" aria-hidden />
              <div className="h-9 w-28 rounded-sm border border-white/20 bg-white/5" aria-hidden />
            </div>
          </div>
          <div className="flex items-center gap-4 pt-2">
            {[
              ['Facebook', './assets/icons/facebook.svg'],
              ['Twitter', './assets/icons/twitter.svg'],
              ['Instagram', './assets/icons/instagram.svg'],
              ['LinkedIn', './assets/icons/linkedin.svg']
            ].map(([label, src]) => (
              <a key={label} href="#/" aria-label={label} className="opacity-80 hover:opacity-100">
                <Icon src={src} alt="" className="h-5 w-5 invert" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex items-center justify-center gap-2 text-xs text-white/50">
          <Icon src="./assets/icons/copyright.svg" alt="" className="h-4 w-4 invert opacity-70" />
          <span>Copyright Rimel 2022. All right reserved</span>
        </Container>
      </div>
    </footer>
  )
}

function PageLayout({
  children,
  showCategoryDropdown,
  showAccountDropdown,
  activeUser
}: {
  children: ReactNode
  showCategoryDropdown?: boolean
  showAccountDropdown?: boolean
  activeUser?: boolean
}) {
  return (
    <div className="min-h-screen bg-white text-[var(--color-title-active)]">
      <TopPromoBar />
      <Header
        showCategoryDropdown={showCategoryDropdown}
        showAccountDropdown={showAccountDropdown}
        activeUser={activeUser}
      />
      {children}
      <Footer />
    </div>
  )
}

function HomeBody() {
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

        <section className="overflow-hidden rounded-sm bg-black text-white">
          <div className="grid gap-6 p-10 md:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-white/70">iPhone 14 Series</div>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">Up to 10% off Voucher</h1>
              <a href="#/shop" className="inline-flex items-center gap-2 text-sm underline underline-offset-4">
                Shop Now <span aria-hidden>→</span>
              </a>
            </div>
            <div className="h-56 rounded-sm bg-gradient-to-br from-purple-500/60 to-fuchsia-500/20" aria-hidden />
          </div>
        </section>
      </Container>

      <Container className="space-y-12 pb-20">
        <section className="space-y-6">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-brand)]">
                <span className="h-7 w-3 rounded-sm bg-[var(--color-brand)]" aria-hidden />
                Today&apos;s
              </div>
              <h2 className="text-2xl font-semibold">Flash Sales</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div key={idx} className="group space-y-3">
                <div className="relative grid aspect-[1/1] place-items-center rounded-sm bg-[var(--color-input-bg)]">
                  <span className="absolute left-3 top-3 rounded-sm bg-[var(--color-brand)] px-2 py-1 text-xs font-semibold text-white">
                    -35%
                  </span>
                  <div className="h-28 w-28 rounded-sm bg-white/60 shadow-sm" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                    <Button className="w-full rounded-none">Add To Cart</Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">HAVIT HV-G92 Gamepad</div>
                  <div className="text-sm">
                    <span className="font-semibold text-[var(--color-brand)]">$120</span>{' '}
                    <span className="text-[var(--color-placeholder)] line-through">$160</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Button className="mx-auto block">View All Products</Button>
          </div>
        </section>
      </Container>
    </main>
  )
}

function HomePage() {
  return (
    <PageLayout>
      <HomeBody />
    </PageLayout>
  )
}

function CategoryDropdownPage() {
  return (
    <PageLayout showCategoryDropdown>
      <HomeBody />
    </PageLayout>
  )
}

function AccountDropdownPage() {
  return (
    <PageLayout showAccountDropdown activeUser>
      <HomeBody />
    </PageLayout>
  )
}

function LoginPage() {
  return (
    <PageLayout>
      <main>
        <Container className="grid gap-10 py-14 md:grid-cols-2">
          <div className="hidden h-[420px] rounded-sm bg-gradient-to-br from-sky-200 to-sky-50 md:block" />
          <div className="max-w-md space-y-8 md:pt-14">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Log in to Exclusive</h1>
              <p className="text-sm text-[var(--color-label)]">Enter your details below</p>
            </div>
            <div className="space-y-4">
              <Input placeholder="Email or Phone Number" />
              <Input placeholder="Password" type="password" />
            </div>
            <div className="flex items-center justify-between">
              <Button className="w-36">Log In</Button>
              <a href="#/forgot" className="text-sm text-[var(--color-brand)] hover:underline">
                Forget Password?
              </a>
            </div>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}

function SignupPage() {
  return (
    <PageLayout>
      <main>
        <Container className="grid gap-10 py-14 md:grid-cols-2">
          <div className="hidden h-[420px] rounded-sm bg-gradient-to-br from-sky-200 to-sky-50 md:block" />
          <div className="max-w-md space-y-8 md:pt-14">
            <div className="space-y-2">
              <h1 className="text-3xl font-medium">Create an account</h1>
              <p className="text-sm text-[var(--color-label)]">Enter your details below</p>
            </div>
            <div className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email or Phone Number" />
              <Input placeholder="Password" type="password" />
            </div>
            <div className="space-y-4">
              <Button className="w-full">Create Account</Button>
              <Button variant="outline" className="w-full gap-2">
                <span className="inline-block h-5 w-5 rounded-full bg-[conic-gradient(from_180deg,#ea4335,#fbbc05,#34a853,#4285f4,#ea4335)]" />
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

function SimplePage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <PageLayout activeUser={title === 'Account'}>
      <main>
        <Container className="py-16">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="mt-8">{children}</div>
        </Container>
      </main>
    </PageLayout>
  )
}

function WishlistPage() {
  return (
    <SimplePage
      title="Wishlist"
      children={
        <div className="grid gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="space-y-3">
              <div className="grid aspect-[1/1] place-items-center rounded-sm bg-[var(--color-input-bg)]">
                <div className="h-28 w-28 rounded-sm bg-white/60 shadow-sm" aria-hidden />
              </div>
              <div className="text-sm font-medium">Gucci duffle bag</div>
              <div className="text-sm text-[var(--color-brand)]">$960</div>
            </div>
          ))}
        </div>
      }
    />
  )
}

function CartPage() {
  return (
    <SimplePage
      title="Cart"
      children={
        <div className="grid gap-10 md:grid-cols-[1fr_420px]">
          <div className="rounded-sm border border-[color:var(--color-line)]">
            <div className="grid grid-cols-4 gap-4 px-6 py-4 text-xs text-[var(--color-label)]">
              <div>Product</div>
              <div>Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Subtotal</div>
            </div>
            <div className="h-px bg-[var(--color-line)]" />
            <div className="grid grid-cols-4 items-center gap-4 px-6 py-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-sm bg-[var(--color-input-bg)]" />
                <div className="text-sm">LCD Monitor</div>
              </div>
              <div className="text-sm">$650</div>
              <div className="flex justify-center">
                <input className="h-10 w-16 rounded-sm border border-[color:var(--color-line)] text-center text-sm" defaultValue={1} />
              </div>
              <div className="text-right text-sm">$650</div>
            </div>
          </div>
          <div className="rounded-sm border border-[color:var(--color-title-active)] p-6">
            <div className="text-base font-semibold">Cart Total</div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[var(--color-label)]">Subtotal:</span>
                <span>$650</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[var(--color-label)]">Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>$650</span>
              </div>
            </div>
            <Button className="mt-6 w-full">Procees to checkout</Button>
          </div>
        </div>
      }
    />
  )
}

function CheckoutPage() {
  return (
    <SimplePage
      title="Checkout"
      children={
        <div className="grid gap-12 md:grid-cols-[1fr_420px]">
          <section className="space-y-4">
            <div className="text-lg font-semibold">Billing Details</div>
            <Input placeholder="First Name*" />
            <Input placeholder="Street Address*" />
            <Input placeholder="Town/City*" />
            <label className="flex items-center gap-2 text-xs text-[var(--color-label)]">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-[var(--color-brand)]" />
              Save this information for faster check-out next time
            </label>
          </section>
          <section className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>LCD Monitor</span>
              <span>$650</span>
            </div>
            <div className="h-px bg-[var(--color-line)]" />
            <div className="flex justify-between text-sm font-semibold">
              <span>Total:</span>
              <span>$650</span>
            </div>
            <Button className="w-40">Place Order</Button>
          </section>
        </div>
      }
    />
  )
}

function AccountPage() {
  return (
    <SimplePage
      title="Account"
      children={
        <div className="rounded-sm border border-[color:var(--color-line)] p-10">
          <div className="text-sm font-semibold text-[var(--color-brand)]">Edit Your Profile</div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Input defaultValue="Md" />
            <Input defaultValue="Rimel" />
            <Input defaultValue="rimelllll@gmail.com" />
            <Input defaultValue="Kingston, 5236, United State" />
          </div>
          <div className="mt-8 flex justify-end">
            <Button className="w-44">Save Changes</Button>
          </div>
        </div>
      }
    />
  )
}

function ContactPage() {
  return (
    <SimplePage
      title="Contact"
      children={
        <div className="grid gap-10 md:grid-cols-[340px_1fr]">
          <aside className="rounded-sm border border-[color:var(--color-line)] p-8">
            <div className="space-y-2">
              <div className="text-sm font-semibold">Call To Us</div>
              <p className="text-xs text-[var(--color-label)]">We are available 24/7, 7 days a week.</p>
              <p className="text-xs">Phone: +8801611112222</p>
            </div>
          </aside>
          <section className="rounded-sm border border-[color:var(--color-line)] p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <Input placeholder="Your Name *" />
              <Input placeholder="Your Email *" />
              <Input placeholder="Your Phone *" />
            </div>
            <textarea
              className="mt-6 h-40 w-full resize-none rounded-sm bg-[var(--color-input-bg)] p-4 text-sm outline-none placeholder:text-[var(--color-placeholder)] focus:border focus:border-[var(--color-title-active)]"
              placeholder="Your Message"
            />
            <div className="mt-6 flex justify-end">
              <Button className="w-48">Send Message</Button>
            </div>
          </section>
        </div>
      }
    />
  )
}

function AboutPage() {
  return (
    <SimplePage
      title="About"
      children={
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <div className="text-4xl font-semibold">Our Story</div>
            <p className="text-sm text-[var(--color-label)]">
              Exclusive is a fast-growing online shopping marketplace with millions of customers.
            </p>
          </div>
          <div className="h-72 rounded-sm bg-gradient-to-r from-pink-200 to-pink-100" />
        </div>
      }
    />
  )
}

function ProductDetailsPage() {
  return (
    <SimplePage
      title="Product Details"
      children={
        <div className="grid gap-10 md:grid-cols-[1fr_380px]">
          <div className="rounded-sm bg-[var(--color-input-bg)] p-10">Gallery</div>
          <div className="space-y-4">
            <div className="text-xl font-semibold">Havic HV G-92 Gamepad</div>
            <div className="text-xl font-medium">$192.00</div>
            <p className="text-xs text-[var(--color-label)]">
              High quality controller skin with easy installation and mess-free removal.
            </p>
            <div className="flex items-center gap-3">
              <Button className="flex-1">Buy Now</Button>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center rounded-sm border border-[color:var(--color-line)]"
                aria-label="Wishlist"
              >
                <Icon src="./assets/icons/heart.svg" alt="" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      }
    />
  )
}

function NotFoundPage() {
  return (
    <PageLayout>
      <main>
        <Container className="py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-6xl font-medium tracking-tight md:text-7xl">404 Not Found</h1>
            <p className="mt-6 text-sm text-[var(--color-label)]">
              Your visited page not found. You may go home page.
            </p>
            <Button className="mt-10 w-56">Back to home page</Button>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category-dropdown" element={<CategoryDropdownPage />} />
      <Route path="/account-dropdown" element={<AccountDropdownPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/product-details" element={<ProductDetailsPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  )
}
