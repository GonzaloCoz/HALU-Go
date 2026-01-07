'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'

export default function DriverMapPage() {
    return (
        <div className="h-full flex flex-col">
            {/* Map Placeholder */}
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="h-20 w-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto">
                            <MapPin className="h-10 w-10 text-brand-accent" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Mapa en Desarrollo</h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto">
                                Aquí se mostrará el mapa con tus rutas y destinos
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mock location markers */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-20 left-10 h-8 w-8 bg-red-500 rounded-full border-4 border-white shadow-lg"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-40 right-20 h-8 w-8 bg-blue-500 rounded-full border-4 border-white shadow-lg"
                />
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-32 left-1/3 h-8 w-8 bg-green-500 rounded-full border-4 border-white shadow-lg"
                />
            </div>

            {/* Bottom Action */}
            <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
                <button className="w-full bg-brand-default text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-brand-default/20">
                    <Navigation className="h-5 w-5" />
                    Iniciar Navegación
                </button>
            </div>
        </div>
    )
}
