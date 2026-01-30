import { PageLayout } from '../components/layout/PageLayout'
import { HomeTemplate } from './home/HomeTemplate'

export default function AccountDropdownPage() {
  return (
    <PageLayout showAccountDropdown activeUser>
      <HomeTemplate />
    </PageLayout>
  )
}
