'use client'

import { motion } from 'framer-motion'
import { User, Mail, Phone, MapPin, LogOut, Settings } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function DriverProfilePage() {
    const router = useRouter()
    const supabase = createClient()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="p-4 space-y-6">
            <div className="text-center">
                <div className="h-24 w-24 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
                    JP
                </div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Juan Perez</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Repartidor</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 space-y-4"
            >
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                    <Mail className="h-5 w-5 text-zinc-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Email</p>
                        <p className="font-medium text-zinc-900 dark:text-white">juan@halu.go</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                    <Phone className="h-5 w-5 text-zinc-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Teléfono</p>
                        <p className="font-medium text-zinc-900 dark:text-white">+54 11 1234-5678</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-zinc-400" />
                    <div>
                        <p className="text-xs text-zinc-500">Vehículo Asignado</p>
                        <p className="font-medium text-zinc-900 dark:text-white">Renault Kangoo - AA123BB</p>
                    </div>
                </div>
            </motion.div>

            <div className="space-y-2">
                <button className="w-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                    <Settings className="h-5 w-5" />
                    Configuración
                </button>
                <button
                    onClick={handleSignOut}
                    className="w-full bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors"
                >
                    <LogOut className="h-5 w-5" />
                    Cerrar Sesión
                </button>
            </div>

            <div className="text-center text-xs text-zinc-400 pt-4">
                HALU Go v1.0.0
            </div>
        </div>
    )
}
