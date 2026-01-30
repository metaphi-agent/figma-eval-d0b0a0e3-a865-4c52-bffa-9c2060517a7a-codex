import { PageLayout } from '../components/layout/PageLayout'
import { HomeTemplate } from './home/HomeTemplate'

export default function CategoryDropdownPage() {
  return (
    <PageLayout showCategoryDropdown>
      <HomeTemplate />
    </PageLayout>
  )
}
