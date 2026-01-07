'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Package, Truck, Users, Settings, LogOut, Box } from 'lucide-react'
import { cn } from '@/lib/utils'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Envíos', href: '/admin/shipments', icon: Package },
    { name: 'Flota', href: '/admin/fleet', icon: Truck },
    { name: 'Repartidores', href: '/admin/drivers', icon: Users },
    { name: 'Configuración', href: '/admin/settings', icon: Settings },
]

export default function Sidebar() {
    const pathname = usePathname()
    const router = useRouter()
    const supabase = createClient()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="hidden md:flex flex-col w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="p-6 flex items-center space-x-2">
                <div className="h-8 w-8 bg-brand-accent rounded-lg flex items-center justify-center">
                    <Box className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">HALU Go</span>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-brand-default text-white shadow-md shadow-brand-default/10"
                                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-brand-accent" : "text-zinc-500")} />
                            <span>{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-3 w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    <span>Cerrar Sesión</span>
                </button>
            </div>
        </div>
    )
}
