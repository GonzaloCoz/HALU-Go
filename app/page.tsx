import Link from 'next/link'
import { ArrowRight, Box, ShieldCheck, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Box className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">HALU Go</span>
            </div>
            <div>
              <Link
                href="/login"
                className="px-4 py-2 bg-brand-default text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-colors"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-8">
            Logística simplificada para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-hover">tu negocio</span>
          </h1>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto">
            Gestiona envíos, choferes y vehículos desde una única plataforma. Diseñada para PyMEs que quieren crecer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-4 bg-brand-default text-white rounded-xl text-lg font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-default/20 flex items-center justify-center gap-2"
            >
              Comenzar Ahora
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Rápido y Eficiente</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Asigna pedidos a tus repartidores en segundos y optimiza tus rutas.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Seguridad Total</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Monitoreo en tiempo real y registro detallado de cada entrega.</p>
          </div>
          <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
            <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-4">
              <Box className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Todo en Uno</h3>
            <p className="text-zinc-500 dark:text-zinc-400">Dashboard administrativo y aplicación para choferes integrados.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
