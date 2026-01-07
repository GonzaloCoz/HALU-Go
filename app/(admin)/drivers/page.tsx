'use client'

import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, Plus, MoreHorizontal } from 'lucide-react'

// Mock Data - En producción esto vendría de Supabase
const drivers = [
    { id: 1, name: 'Juan Perez', email: 'juan@halu.go', phone: '+54 11 1234-5678', vehicle: 'Kangoo AA123BB', activeOrders: 3, status: 'active' },
    { id: 2, name: 'Maria Lopez', email: 'maria@halu.go', phone: '+54 11 8765-4321', vehicle: 'Fiorino AC999DD', activeOrders: 2, status: 'active' },
    { id: 3, name: 'Pedro Sanchez', email: 'pedro@halu.go', phone: '+54 11 5555-1234', vehicle: 'Moto Honda', activeOrders: 1, status: 'active' },
    { id: 4, name: 'Carlos Ruiz', email: 'carlos@halu.go', phone: '+54 11 9999-8888', vehicle: 'Partner AF555EE', activeOrders: 0, status: 'inactive' },
]

export default function DriversPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Repartidores</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Gestiona tu equipo de conductores.</p>
                </div>
                <button className="bg-brand-default hover:bg-brand-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Nuevo Repartidor
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {drivers.map((driver, index) => (
                    <motion.div
                        key={driver.id}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 relative group"
                    >
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                                <MoreHorizontal className="h-5 w-5 text-zinc-400" />
                            </button>
                        </div>

                        <div className="flex items-start gap-4 mb-4">
                            <div className="h-12 w-12 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-full flex items-center justify-center text-white font-bold text-lg">
                                {driver.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                                <h3 className="font-bold text-zinc-900 dark:text-white">{driver.name}</h3>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${driver.status === 'active'
                                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                                    }`}>
                                    {driver.status === 'active' ? 'Activo' : 'Inactivo'}
                                </span>
                            </div>
                        </div>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                <Mail className="h-4 w-4" />
                                <span className="truncate">{driver.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                <Phone className="h-4 w-4" />
                                <span>{driver.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                <MapPin className="h-4 w-4" />
                                <span>{driver.vehicle}</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                            <span className="text-sm text-zinc-500">Pedidos Activos</span>
                            <span className="text-lg font-bold text-brand-accent">{driver.activeOrders}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
