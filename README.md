# HALU Go - Logistics Management Platform

Una aplicación web profesional (PWA) diseñada para la gestión logística de pequeñas empresas y e-commerce.

## 🚀 Características

- **Dashboard Administrativo**: KPIs en tiempo real, gestión de envíos, flota y repartidores
- **App para Repartidores**: Vista móvil optimizada con lista de tareas y navegación
- **PWA**: Instalable en dispositivos móviles y escritorio
- **Autenticación**: Sistema seguro con Supabase Auth
- **Diseño Moderno**: Interfaz limpia con animaciones fluidas (Framer Motion)

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React

## 📦 Instalación

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   - Crea un archivo `.env.local` en la raíz
   - Agrega tus credenciales de Supabase:
     ```
     NEXT_PUBLIC_SUPABASE_URL=tu-url-de-proyecto
     NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
     ```

4. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000)

## 🗄️ Configuración de Base de Datos

1. Crea un proyecto en [Supabase](https://supabase.com)
2. Ejecuta el script SQL en `supabase/schema.sql` en el SQL Editor
3. (Opcional) Ejecuta `supabase/seed.sql` para datos de prueba

## 👥 Roles de Usuario

- **Admin**: Acceso completo al dashboard, gestión de envíos, flota y repartidores
- **Driver**: Vista móvil con lista de tareas y actualización de estados

## 📱 Rutas Principales

### Admin
- `/admin/dashboard` - Panel principal con KPIs
- `/admin/shipments` - Gestión de envíos
- `/admin/fleet` - Gestión de vehículos
- `/admin/drivers` - Gestión de repartidores
- `/admin/settings` - Configuración

### Driver
- `/driver/tasks` - Lista de tareas asignadas
- `/driver/map` - Vista de mapa (en desarrollo)
- `/driver/profile` - Perfil del repartidor

## 🚢 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Agrega las variables de entorno en Vercel Dashboard
3. Deploy automático en cada push

## 📄 Licencia

Proyecto desarrollado para HALU Go © 2026
