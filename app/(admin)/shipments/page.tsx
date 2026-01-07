'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MoreHorizontal, Eye, Truck, CheckCircle, AlertCircle, Clock } from 'lucide-react'

// Mock Data
const initialShipments = [
    { id: 'ENV-001', client: 'Tech Solutions SRL', destination: 'Av. Libertador 1000, CABA', status: 'delivered', driver: 'Juan Perez', vehicle: 'Kangoo AA123BB' },
    { id: 'ENV-002', client: 'Muebles Modernos', destination: 'Calle 45 N 890, La Plata', status: 'in_transit', driver: 'Maria Lopez', vehicle: 'Fiorino AC999DD' },
    { id: 'ENV-003', client: 'Gamer Store', destination: 'Mitre 200, Avellaneda', status: 'pending', driver: '-', vehicle: '-' },
    { id: 'ENV-004', client: 'Indumentaria X', destination: 'Santa Fe 3000, CABA', status: 'incidence', driver: 'Carlos Ruiz', vehicle: 'Partner AF555EE' },
    { id: 'ENV-005', client: 'Libreria Y', destination: 'Cabildo 500, CABA', status: 'assigned', driver: 'Pedro Sanchez', vehicle: 'Moto Honda' },
]

const statusConfig: Record<string, { label: string; color: string; icon: any }> = {
    pending: { label: 'Pendiente', color: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400', icon: Clock },
    assigned: { label: 'Asignado', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: CheckCircle },
    in_transit: { label: 'En Viaje', color: 'bg-brand-accent/20 text-brand-accent-hover', icon: Truck },
    delivered: { label: 'Entregado', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', icon: CheckCircle },
    incidence: { label: 'Incidencia', color: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', icon: AlertCircle },
}

export default function ShipmentsPage() {
    const [filter, setFilter] = useState('all')
    const [search, setSearch] = useState('')

    const filteredShipments = initialShipments.filter(shipment => {
        const matchesFilter = filter === 'all' || shipment.status === filter
        const matchesSearch = shipment.client.toLowerCase().includes(search.toLowerCase()) ||
            shipment.id.toLowerCase().includes(search.toLowerCase())
        return matchesFilter && matchesSearch
    })

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Gestión de Envíos</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Administra y asigna los pedidos de tus clientes.</p>
                </div>
                <button className="bg-brand-default hover:bg-brand-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm">
                    + Nuevo Envío
                </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                        <input
                            type="text"
                            placeholder="Buscar por cliente o ID..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 bg-zinc-50 dark:bg-zinc-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-brand-accent text-zinc-900 dark:text-white"
                        />
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                        {['all', 'pending', 'in_transit', 'delivered', 'incidence'].map((status) => (
                            <button
                                key={status}
                                onClick={() => setFilter(status)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${filter === status
                                        ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
                                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                {status === 'all' ? 'Todos' : statusConfig[status]?.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-zinc-500 uppercase bg-zinc-50 dark:bg-zinc-800/50">
                            <tr>
                                <th className="px-6 py-3 font-medium">ID Envío</th>
                                <th className="px-6 py-3 font-medium">Cliente</th>
                                <th className="px-6 py-3 font-medium">Estado</th>
                                <th className="px-6 py-3 font-medium">Destino</th>
                                <th className="px-6 py-3 font-medium">Repartidor / Vehículo</th>
                                <th className="px-6 py-3 font-medium text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {filteredShipments.map((shipment) => {
                                const StatusIcon = statusConfig[shipment.status].icon
                                return (
                                    <motion.tr
                                        key={shipment.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-zinc-900 dark:text-white">
                                            {shipment.id}
                                        </td>
                                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-300">
                                            {shipment.client}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[shipment.status].color}`}>
                                                <StatusIcon className="h-3 w-3" />
                                                {statusConfig[shipment.status].label}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
                                            {shipment.destination}
                                        </td>
                                        <td className="px-6 py-4 text-zinc-500 dark:text-zinc-400">
                                            <div className="flex flex-col">
                                                <span className="text-zinc-900 dark:text-white font-medium">{shipment.driver}</span>
                                                <span className="text-xs">{shipment.vehicle}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                                                <MoreHorizontal className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                {filteredShipments.length === 0 && (
                    <div className="p-12 text-center text-zinc-500 dark:text-zinc-400">
                        No se encontraron envíos con los filtros actuales.
                    </div>
                )}
            </div>
        </div>
    )
}
