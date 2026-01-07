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

    console.log('AdminLayout - User:', user?.id)

    if (!user) {
        console.log('AdminLayout - No user, redirecting to login')
        redirect('/login')
    }

    // Check role
    const { data: profile, error } = await supabase
        .from('profiles')
        .select('role, id')
        .eq('id', user.id)
        .single()

    console.log('AdminLayout - Profile:', profile)
    console.log('AdminLayout - Error:', error)

    if (profile?.role !== 'admin') {
        console.log('AdminLayout - Access Denied:', {
            expected: 'admin',
            actual: profile?.role,
            profileId: profile?.id, // Check if we even got an ID
            error: error
        })

        if (profile?.role === 'driver') {
            redirect('/driver/tasks')
        }
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
