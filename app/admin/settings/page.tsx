'use client'

import { motion } from 'framer-motion'
import { Bell, Shield, Palette, Database, Save } from 'lucide-react'

export default function SettingsPage() {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Configuración</h1>
                <p className="text-zinc-500 dark:text-zinc-400">Personaliza tu experiencia en HALU Go.</p>
            </div>

            <div className="space-y-4">
                {/* General Settings */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                            <Bell className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white">Notificaciones</h3>
                            <p className="text-sm text-zinc-500">Configura cómo quieres recibir alertas</p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">Nuevos pedidos</span>
                            <input type="checkbox" defaultChecked className="rounded" />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">Incidencias</span>
                            <input type="checkbox" defaultChecked className="rounded" />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-zinc-700 dark:text-zinc-300">Entregas completadas</span>
                            <input type="checkbox" className="rounded" />
                        </label>
                    </div>
                </motion.div>

                {/* Security */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                            <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white">Seguridad</h3>
                            <p className="text-sm text-zinc-500">Protege tu cuenta</p>
                        </div>
                    </div>
                    <button className="text-sm text-brand-accent hover:text-brand-accent-hover font-medium">
                        Cambiar contraseña →
                    </button>
                </motion.div>

                {/* Appearance */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                            <Palette className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white">Apariencia</h3>
                            <p className="text-sm text-zinc-500">Personaliza el tema</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700">
                            Claro
                        </button>
                        <button className="px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium">
                            Oscuro
                        </button>
                        <button className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-sm font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700">
                            Auto
                        </button>
                    </div>
                </motion.div>

                {/* Database Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                            <Database className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-zinc-900 dark:text-white">Base de Datos</h3>
                            <p className="text-sm text-zinc-500">Información del sistema</p>
                        </div>
                    </div>
                    <div className="text-sm space-y-1 text-zinc-600 dark:text-zinc-400">
                        <p>Conectado a: <span className="font-mono text-xs">Supabase</span></p>
                        <p>Estado: <span className="text-green-600 dark:text-green-400 font-medium">Activo</span></p>
                    </div>
                </motion.div>
            </div>

            <div className="flex justify-end">
                <button className="bg-brand-default hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Guardar Cambios
                </button>
            </div>
        </div>
    )
}
