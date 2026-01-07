'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ListTodo, MapPin, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigation = [
    { name: 'Tareas', href: '/driver/tasks', icon: ListTodo },
    { name: 'Mapa', href: '/driver/map', icon: MapPin },
    { name: 'Perfil', href: '/driver/profile', icon: User },
]

export default function MobileNav() {
    const pathname = usePathname()

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 pb-safe">
            <div className="flex justify-around items-center h-16">
                {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1",
                                isActive
                                    ? "text-brand-accent"
                                    : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                            )}
                        >
                            <item.icon className={cn("h-6 w-6", isActive && "fill-current")} />
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
