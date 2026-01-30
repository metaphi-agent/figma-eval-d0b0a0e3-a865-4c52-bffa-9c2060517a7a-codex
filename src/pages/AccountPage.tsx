import { PageLayout } from '../components/layout/PageLayout'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'

export default function AccountPage() {
  return (
    <PageLayout activeUser>
      <main>
        <Container className="py-16">
          <div className="flex items-start justify-between">
            <div className="text-xs text-[var(--color-label)]">Home / My Account</div>
            <div className="text-xs text-[var(--color-label)]">
              Welcome! <span className="text-[var(--color-brand)]">Md Rimel</span>
            </div>
          </div>

          <div className="mt-10 grid gap-10 md:grid-cols-[240px_1fr]">
            <aside className="space-y-6 text-sm">
              <div className="space-y-2">
                <div className="font-medium">Manage My Account</div>
                <div className="space-y-2 pl-4 text-xs text-[var(--color-label)]">
                  <div className="text-[var(--color-brand)]">My Profile</div>
                  <div>Address Book</div>
                  <div>My Payment Options</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">My Orders</div>
                <div className="space-y-2 pl-4 text-xs text-[var(--color-label)]">
                  <div>My Returns</div>
                  <div>My Cancellations</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">My Wishlist</div>
              </div>
            </aside>

            <section className="rounded-sm border border-[color:var(--color-line)] p-10">
              <div className="text-sm font-semibold text-[var(--color-brand)]">Edit Your Profile</div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-xs text-[var(--color-label)]">First Name</div>
                  <Input defaultValue="Md" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--color-label)]">Last Name</div>
                  <Input defaultValue="Rimel" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--color-label)]">Email</div>
                  <Input defaultValue="rimelllll@gmail.com" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--color-label)]">Address</div>
                  <Input defaultValue="Kingston, 5236, United State" />
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="text-xs text-[var(--color-label)]">Password Changes</div>
                <Input placeholder="Current Password" type="password" />
                <Input placeholder="New Password" type="password" />
                <Input placeholder="Confirm New Password" type="password" />
              </div>

              <div className="mt-8 flex items-center justify-end gap-6">
                <button type="button" className="text-sm text-[var(--color-label)]">
                  Cancel
                </button>
                <Button className="w-44">Save Changes</Button>
              </div>
            </section>
          </div>
        </Container>
      </main>
    </PageLayout>
  )
}
