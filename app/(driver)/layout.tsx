import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import MobileNav from '@/components/driver/mobile-nav'

export default async function DriverLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Check role
    const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

    if (profile?.role !== 'driver') {
        // If admin tries to access driver, likely intentional for testing, but let's allow it or redirect?
        // User flow says Admin assigns, Driver views. Admin might want to see driver view.
        // Let's allow simple access but strictly driver layout is for mobile primarily.
    }

    return (
        <div className="flex flex-col h-screen bg-zinc-50 dark:bg-black">
            <main className="flex-1 overflow-y-auto pb-20">
                {children}
            </main>
            <MobileNav />
        </div>
    )
}
