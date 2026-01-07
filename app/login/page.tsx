'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Truck, Lock, Mail, Loader2 } from 'lucide-react'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
            setLoading(false)
        } else {
            // Check user role to redirect appropriately
            const { data: { user } } = await supabase.auth.getUser()
            if (user) {
                // Fetch profile to check role
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('role')
                    .eq('id', user.id)
                    .single()

                if (profile?.role === 'driver') {
                    router.push('/driver/tasks')
                } else {
                    router.push('/admin/dashboard')
                }
            }
            // Note: In a real app, middleware handles redirection better
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800"
            >
                <div className="p-8">
                    <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 bg-brand-accent/20 rounded-full flex items-center justify-center">
                            <Truck className="h-8 w-8 text-brand-accent-hover" />
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-center text-zinc-900 dark:text-white mb-2">
                        HALU Go
                    </h2>
                    <p className="text-center text-zinc-500 dark:text-zinc-400 mb-8">
                        Gestión Logística Inteligente
                    </p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                                    placeholder="admin@halu.go"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                Contraseña
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 px-4 bg-brand-default hover:bg-brand-dark text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-dark focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {loading ? (
                                <Loader2 className="h-5 w-5 animate-spin" />
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </form>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900/50 p-4 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
                    © 2026 HALU Go Logistics
                </div>
            </motion.div>
        </div>
    )
}
