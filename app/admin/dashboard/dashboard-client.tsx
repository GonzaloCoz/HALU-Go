'use client'

import { motion } from 'framer-motion'
import { Truck, Package, Clock, AlertTriangle, TrendingUp, Users, MapPin } from 'lucide-react'
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

const statusLabelMap: Record<string, string> = {
    pending: 'Pendiente',
    assigned: 'Asignado',
    in_transit: 'En Viaje',
    delivered: 'Entregado',
    incidence: 'Incidencia',
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

    // Calculate delivery rate
    const deliveryRate = stats.total > 0
        ? Math.round(((stats.total - stats.incidence) / stats.total) * 100)
        : 100

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Dashboard</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Resumen de operaciones del día</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <div>
                        <p className="text-xs text-green-600 dark:text-green-400">Tasa de Entrega</p>
                        <p className="text-lg font-bold text-green-700 dark:text-green-300">{deliveryRate}%</p>
                    </div>
                </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsArray.map((stat, index) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-shadow"
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

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link href="/admin/shipments">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white hover:shadow-lg transition-all cursor-pointer"
                    >
                        <Package className="h-8 w-8 mb-3 opacity-90" />
                        <h3 className="font-bold text-lg mb-1">Nuevo Envío</h3>
                        <p className="text-sm opacity-90">Crear un nuevo pedido</p>
                    </motion.div>
                </Link>

                <Link href="/admin/drivers">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="bg-gradient-to-br from-brand-accent to-brand-accent-hover p-6 rounded-xl text-white hover:shadow-lg transition-all cursor-pointer"
                    >
                        <Users className="h-8 w-8 mb-3 opacity-90" />
                        <h3 className="font-bold text-lg mb-1">Repartidores</h3>
                        <p className="text-sm opacity-90">Gestionar equipo</p>
                    </motion.div>
                </Link>

                <Link href="/admin/fleet">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white hover:shadow-lg transition-all cursor-pointer"
                    >
                        <Truck className="h-8 w-8 mb-3 opacity-90" />
                        <h3 className="font-bold text-lg mb-1">Flota</h3>
                        <p className="text-sm opacity-90">Ver vehículos</p>
                    </motion.div>
                </Link>
            </div>

            {/* Recent Shipments */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Envíos Recientes</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Últimas actualizaciones</p>
                    </div>
                    <Link href="/admin/shipments" className="text-sm text-brand-accent hover:text-brand-accent-hover font-medium flex items-center gap-1">
                        Ver todos
                        <MapPin className="h-4 w-4" />
                    </Link>
                </div>
                {recentShipments.length > 0 ? (
                    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {recentShipments.map((shipment, index) => (
                            <motion.div
                                key={shipment.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 + (index * 0.05) }}
                                className="p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <p className="font-medium text-zinc-900 dark:text-white">{shipment.client_name}</p>
                                            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${shipment.status === 'delivered' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                    shipment.status === 'in_transit' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                        shipment.status === 'assigned' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                                                            shipment.status === 'pending' ? 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400' :
                                                                'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                {statusLabelMap[shipment.status] || shipment.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate max-w-md flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            {shipment.destination}
                                        </p>
                                        {shipment.notes && (
                                            <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1 italic">{shipment.notes}</p>
                                        )}
                                    </div>
                                    <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center">
                        <Package className="h-12 w-12 text-zinc-300 dark:text-zinc-700 mx-auto mb-3" />
                        <p className="text-zinc-500 dark:text-zinc-400 mb-2">No hay envíos registrados aún</p>
                        <Link href="/admin/shipments" className="text-brand-accent hover:underline text-sm font-medium">
                            Crear el primer envío →
                        </Link>
                    </div>
                )}
            </motion.div>
        </div>
    )
}
