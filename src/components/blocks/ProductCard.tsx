import { Button } from '../ui/Button'
import { cn } from '../ui/cn'
import { Icon } from '../ui/Icon'

export type ProductCardProps = {
  imageSrc: string
  imageAlt: string
  title: string
  price: string
  originalPrice?: string
  ratingText?: string
  badgeText?: string
  showQuickActions?: boolean
  showHoverAddToCart?: boolean
  className?: string
}

export function ProductCard({
  imageSrc,
  imageAlt,
  title,
  price,
  originalPrice,
  ratingText,
  badgeText,
  showQuickActions = true,
  showHoverAddToCart = true,
  className
}: ProductCardProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <div className="group relative overflow-hidden rounded-sm bg-[var(--color-input-bg)]">
        {badgeText ? (
          <span className="absolute left-3 top-3 z-10 rounded-sm bg-[var(--color-brand)] px-2 py-1 text-xs font-semibold text-white">
            {badgeText}
          </span>
        ) : null}

        {showQuickActions ? (
          <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
            <button
              type="button"
              className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
              aria-label="Add to wishlist"
            >
              <Icon src="./assets/icons/heart.svg" alt="" className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"
              aria-label="Quick view"
            >
              <span className="text-sm leading-none">👁</span>
            </button>
          </div>
        ) : null}

        <div className="grid aspect-[1/1] place-items-center p-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
            draggable={false}
          />
        </div>

        {showHoverAddToCart ? (
          <div className="absolute inset-x-0 bottom-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100">
            <Button className="w-full rounded-none">Add To Cart</Button>
          </div>
        ) : null}
      </div>

      <div className="space-y-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-sm">
          <span className="font-semibold text-[var(--color-brand)]">{price}</span>{' '}
          {originalPrice ? (
            <span className="text-[var(--color-placeholder)] line-through">{originalPrice}</span>
          ) : null}
        </div>
        {ratingText ? <div className="text-xs text-[var(--color-label)]">{ratingText}</div> : null}
      </div>
    </div>
  )
}

