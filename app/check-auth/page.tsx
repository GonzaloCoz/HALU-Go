'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function CheckAuth() {
    const [status, setStatus] = useState<any>({ loading: true })
    const supabase = createClient()

    useEffect(() => {
        async function check() {
            try {
                const { data: { user }, error: authError } = await supabase.auth.getUser()

                if (!user) {
                    setStatus({ loading: false, user: null, message: 'No estás logueado' })
                    return
                }

                const { data: profile, error: profileError } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', user.id)
                    .single()

                setStatus({
                    loading: false,
                    user: { email: user.email, id: user.id },
                    authError,
                    profile,
                    profileError,
                    message: profile ? 'Perfil encontrado' : '¡Falta el perfil en la tabla profiles!'
                })
            } catch (e: any) {
                setStatus({ loading: false, error: e.message })
            }
        }
        check()
    }, [])

    return (
        <div className="p-8 max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Diagnóstico de Autenticación</h1>

            {status.loading ? (
                <p>Cargando datos...</p>
            ) : (
                <pre className="bg-zinc-100 p-4 rounded overflow-auto">
                    {JSON.stringify(status, null, 2)}
                </pre>
            )}

            {!status.loading && !status.profile && status.user && (
                <div className="bg-yellow-50 p-4 rounded border border-yellow-200 text-yellow-800">
                    <h3 className="font-bold">⚠️ Falta crear el perfil</h3>
                    <p className="mb-2">Tu usuario existe en Auth pero no en la tabla de perfiles.</p>
                    <p className="mb-2">Ejecuta esto en Supabase SQL Editor:</p>
                    <code className="block bg-black text-white p-2 rounded text-sm">
                        INSERT INTO public.profiles (id, full_name, role) <br />
                        VALUES ('{status.user.id}', 'Admin', 'admin');
                    </code>
                </div>
            )}
        </div>
    )
}
