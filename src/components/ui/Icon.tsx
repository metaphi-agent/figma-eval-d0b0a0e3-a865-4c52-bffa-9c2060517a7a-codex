type IconProps = {
  src: string
  alt: string
  className?: string
}

export function Icon({ src, alt, className }: IconProps) {
  return <img src={src} alt={alt} className={className} draggable={false} />
}

