import Link from 'next/link'
import { ArrowRight, Box, ShieldCheck, Zap, Truck, BarChart3, Clock, CheckCircle2 } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
      {/* Navbar */}
      <nav className="border-b border-zinc-100 dark:border-zinc-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Box className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">HALU Go</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-6 py-2 bg-brand-default text-white rounded-lg text-sm font-medium hover:bg-brand-dark transition-all shadow-sm hover:shadow-md"
              >
                Ingresar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 lg:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent/10 border border-brand-accent/20 rounded-full mb-8">
            <Truck className="h-4 w-4 text-brand-accent-hover" />
            <span className="text-sm font-medium text-brand-accent-hover">Gestión Logística Inteligente</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-8">
            Logística simplificada <br />
            para <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-accent-hover">tu negocio</span>
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Gestiona envíos, choferes y vehículos desde una única plataforma.
            Diseñada para PyMEs que quieren crecer sin complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/login"
              className="group px-8 py-4 bg-brand-default text-white rounded-xl text-lg font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-default/20 hover:shadow-xl hover:shadow-brand-default/30 flex items-center justify-center gap-2"
            >
              Comenzar Ahora
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#features"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white border-2 border-zinc-200 dark:border-zinc-800 rounded-xl text-lg font-bold hover:border-brand-accent transition-all flex items-center justify-center gap-2"
            >
              Ver Características
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Envíos Diarios' },
              { value: '99%', label: 'Entregas Exitosas' },
              { value: '24/7', label: 'Soporte' },
              { value: '50+', label: 'Empresas Confían' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-brand-accent mb-1">{stat.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div id="features" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Herramientas profesionales para gestionar tu logística de forma eficiente
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Rápido y Eficiente',
                description: 'Asigna pedidos a tus repartidores en segundos. Optimiza rutas automáticamente.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: ShieldCheck,
                title: 'Seguridad Total',
                description: 'Monitoreo en tiempo real y registro detallado de cada entrega con pruebas fotográficas.',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: BarChart3,
                title: 'Analytics Avanzados',
                description: 'Dashboards con KPIs en tiempo real. Toma decisiones basadas en datos.',
                color: 'from-purple-500 to-purple-600',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-brand-accent dark:hover:border-brand-accent transition-all hover:shadow-xl"
              >
                <div className={`h-14 w-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Cómo funciona
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Proceso simple y efectivo en 4 pasos
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Box, title: 'Carga el Pedido', description: 'Ingresa los datos del envío y cliente' },
              { icon: Truck, title: 'Asigna Vehículo', description: 'Selecciona el repartidor y vehículo' },
              { icon: Clock, title: 'Seguimiento', description: 'Monitorea el estado en tiempo real' },
              { icon: CheckCircle2, title: 'Entrega', description: 'Confirma con prueba fotográfica' },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="h-16 w-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-brand-accent/20">
                  <step.icon className="h-8 w-8 text-brand-accent-hover" />
                </div>
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-brand-accent/50 to-transparent hidden md:block" style={{ display: i === 3 ? 'none' : 'block' }} />
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="bg-gradient-to-br from-brand-default to-brand-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ¿Listo para optimizar tu logística?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya confían en HALU Go para gestionar sus entregas
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-dark rounded-xl text-lg font-bold hover:bg-zinc-100 transition-all shadow-xl"
            >
              Comenzar Gratis
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Box className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-zinc-900 dark:text-white">HALU Go</span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              © 2026 HALU Go Logistics. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="#" className="hover:text-brand-accent transition-colors">Términos</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Privacidad</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
