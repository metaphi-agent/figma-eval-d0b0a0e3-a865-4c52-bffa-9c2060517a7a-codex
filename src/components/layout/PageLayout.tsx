import { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import { TopPromoBar } from './TopPromoBar'

type PageLayoutProps = {
  children: ReactNode
  showCategoryDropdown?: boolean
  showAccountDropdown?: boolean
  activeUser?: boolean
}

export function PageLayout({
  children,
  showCategoryDropdown,
  showAccountDropdown,
  activeUser
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
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

