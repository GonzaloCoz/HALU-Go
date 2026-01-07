'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, PackageCheck } from 'lucide-react'

// Mock Data
const tasks = [
    { id: 1, address: 'Av. Corrientes 1234', client: 'Empresa A', status: 'En Viaje', time: '10:30 AM' },
    { id: 2, address: 'Calle Falsa 123', client: 'Juan Perez', status: 'Pendiente', time: '11:45 AM' },
]

export default function DriverTasksPage() {
    return (
        <div className="p-4 space-y-4">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-xl font-bold text-zinc-900 dark:text-white">Mis Envíos</h1>
                <div className="px-3 py-1 bg-brand-accent/20 text-brand-accent-hover text-sm font-bold rounded-full">
                    2 Activos
                </div>
            </div>

            {tasks.map((task) => (
                <motion.div
                    key={task.id}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-sm border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex justify-between items-start mb-3">
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white">{task.client}</h3>
                            <div className="flex items-center text-zinc-500 text-sm mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                {task.address}
                            </div>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-bold ${task.status === 'En Viaje'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                            }`}>
                            {task.status}
                        </span>
                    </div>

                    <div className="flex gap-2 mt-4">
                        <button className="flex-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
                            <Navigation className="h-4 w-4" />
                            Navegar
                        </button>
                        <button className="flex-1 bg-brand-default text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-default/20">
                            <PackageCheck className="h-4 w-4" />
                            Entregar
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
