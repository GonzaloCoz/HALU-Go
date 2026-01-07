import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardClient from './dashboard-client'

export default async function DashboardPage() {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    // Fetch shipments data
    const { data: shipments } = await supabase
        .from('shipments')
        .select('*')

    // Calculate stats from real data
    const stats = {
        total: shipments?.length || 0,
        in_transit: shipments?.filter(s => s.status === 'in_transit').length || 0,
        pending: shipments?.filter(s => s.status === 'pending').length || 0,
        incidence: shipments?.filter(s => s.status === 'incidence').length || 0,
    }

    const recentShipments = shipments?.slice(0, 5) || []

    return <DashboardClient stats={stats} recentShipments={recentShipments} />
}
