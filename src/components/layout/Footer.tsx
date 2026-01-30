import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { Input } from '../ui/Input'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="mt-20 bg-black text-white">
      <Container className="grid gap-10 py-16 md:grid-cols-5">
        <div className="space-y-4">
          <div className="text-xl font-semibold">Exclusive</div>
          <div className="text-sm font-semibold">Subscribe</div>
          <p className="text-xs text-white/70">Get 10% off your first order</p>
          <div className="relative max-w-xs">
            <Input
              className="h-12 border border-white/30 bg-transparent pr-12 text-white placeholder:text-white/50 focus:border-white"
              placeholder="Enter your email"
            />
            <Button
              variant="ghost"
              className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 border border-transparent px-0 text-white hover:bg-white/10"
              aria-label="Subscribe"
            >
              <Icon src="./assets/icons/send.svg" alt="" className="h-5 w-5 invert" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold">Support</div>
          <div className="space-y-2 text-xs text-white/70">
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
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
            <img
              src="./assets/images/figma/I128-1478;127-1475.png"
              alt="QR code"
              className="h-20 w-20 rounded-sm border border-white bg-black object-cover"
              loading="lazy"
              draggable={false}
            />
            <div className="space-y-2">
              <img
                src="./assets/images/figma/I125-1469;125-1461.png"
                alt="Get it on Google Play"
                className="h-10 w-[110px] rounded-sm object-cover"
                loading="lazy"
                draggable={false}
              />
              <img
                src="./assets/images/figma/I125-1467;125-1462.png"
                alt="Download on the App Store"
                className="h-10 w-[110px] rounded-sm object-cover"
                loading="lazy"
                draggable={false}
              />
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
