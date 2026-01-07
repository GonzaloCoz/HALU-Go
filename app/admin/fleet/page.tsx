'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Truck, Car, Bike, Plus, MoreHorizontal, Settings, CheckCircle, AlertTriangle } from 'lucide-react'

// Mock Data
const vehicles = [
    { id: 1, type: 'Camioneta', plate: 'AA123BB', model: 'Renault Kangoo', driver: 'Juan Perez', status: 'active', capacity: '600kg' },
    { id: 2, type: 'Auto', plate: 'AC999DD', model: 'Fiat Fiorino', driver: 'Maria Lopez', status: 'active', capacity: '400kg' },
    { id: 3, type: 'Moto', plate: '888-ZZZ', model: 'Honda GLH 150', driver: 'Pedro Sanchez', status: 'maintenance', capacity: 'Small' },
    { id: 4, type: 'Bicicleta', plate: '-', model: 'Mountain Bike', driver: '-', status: 'active', capacity: 'Backpack' },
]

export default function FleetPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Gestión de Flota</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Administra tus vehículos y sus conductores asignados.</p>
                </div>
                <button className="bg-brand-default hover:bg-brand-dark text-white px-4 py-2 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Nuevo Vehículo
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vehicles.map((vehicle) => {
                    const isMaintenance = vehicle.status === 'maintenance'
                    return (
                        <motion.div
                            key={vehicle.id}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 relative group"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">
                                    <MoreHorizontal className="h-5 w-5 text-zinc-400" />
                                </button>
                            </div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className={`p-3 rounded-xl ${vehicle.type === 'Moto' || vehicle.type === 'Bicicleta' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                                    }`}>
                                    {vehicle.type === 'Moto' || vehicle.type === 'Bicicleta' ? <Bike className="h-6 w-6" /> : <Truck className="h-6 w-6" />}
                                </div>
                                <div>
                                    <h3 className="font-bold text-zinc-900 dark:text-white">{vehicle.model}</h3>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">{vehicle.plate}</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm border-t border-zinc-100 dark:border-zinc-800 pt-3">
                                    <span className="text-zinc-500">Conductor</span>
                                    <span className="font-medium text-zinc-900 dark:text-white">{vehicle.driver}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-zinc-500">Capacidad</span>
                                    <span className="font-medium text-zinc-900 dark:text-white">{vehicle.capacity}</span>
                                </div>
                                <div className="flex justify-between text-sm items-center pt-2">
                                    <span className="text-zinc-500">Estado</span>
                                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${isMaintenance
                                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                        }`}>
                                        {isMaintenance ? <AlertTriangle className="h-3 w-3" /> : <CheckCircle className="h-3 w-3" />}
                                        {isMaintenance ? 'Mantenimiento' : 'Activo'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
