'use client'

import { motion } from 'framer-motion'
import { Truck, Package, Clock, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<string, any> = {
    total: Package,
    in_transit: Truck,
    pending: Clock,
    incidence: AlertTriangle,
}

const colorMap: Record<string, { text: string; bg: string }> = {
    total: { text: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20' },
    in_transit: { text: 'text-brand-accent', bg: 'bg-brand-accent/10' },
    pending: { text: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/20' },
    incidence: { text: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/20' },
}

const labelMap: Record<string, string> = {
    total: 'Total Envíos',
    in_transit: 'En Viaje',
    pending: 'Pendientes',
    incidence: 'Incidencias',
}

interface DashboardClientProps {
    stats: {
        total: number
        in_transit: number
        pending: number
        incidence: number
    }
    recentShipments: any[]
}

export default function DashboardClient({ stats, recentShipments }: DashboardClientProps) {
    const statsArray = Object.entries(stats).map(([key, value]) => ({
        name: labelMap[key],
        value: value.toString(),
        icon: iconMap[key],
        color: colorMap[key].text,
        bg: colorMap[key].bg,
    }))

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Resumen de operaciones del día</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsArray.map((stat, index) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{stat.name}</p>
                                <p className="text-3xl font-bold text-zinc-900 dark:text-white mt-1">{stat.value}</p>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Shipments */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Envíos Recientes</h3>
                    <Link href="/admin/shipments" className="text-sm text-brand-accent hover:text-brand-accent-hover font-medium">
                        Ver todos →
                    </Link>
                </div>
                {recentShipments.length > 0 ? (
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {recentShipments.map((shipment) => (
                            <div key={shipment.id} className="p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="font-medium text-zinc-900 dark:text-white">{shipment.client_name}</p>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate max-w-md">{shipment.destination}</p>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${shipment.status === 'delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                            shipment.status === 'in_transit' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                shipment.status === 'pending' ? 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400' :
                                                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                        }`}>
                                        {shipment.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center text-zinc-500 dark:text-zinc-400">
                        No hay envíos registrados aún. <Link href="/admin/shipments" className="text-brand-accent hover:underline">Crear el primero</Link>
                    </div>
                )}
            </motion.div>
        </div>
    )
}
