import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import Sidebar from '@/components/admin/sidebar'

export default async function AdminLayout({
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

    if (profile?.role !== 'admin') {
        // If driver tries to access admin, redirect to driver view
        if (profile?.role === 'driver') {
            redirect('/driver/tasks')
        }
        // Otherwise... maybe login?
        redirect('/login')
    }

    return (
        <div className="flex h-screen bg-zinc-50 dark:bg-black">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
            </main>
        </div>
    )
}
