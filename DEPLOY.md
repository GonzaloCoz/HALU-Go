# Guía de Deploy - HALU Go en Vercel

## 📦 Paso 1: Preparar el Proyecto

### Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Crea un nuevo repositorio (puede ser privado)
3. En tu terminal, ejecuta:

```bash
git init
git add .
git commit -m "Initial commit - HALU Go"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/halu-go.git
git push -u origin main
```

## 🚀 Paso 2: Deploy en Vercel

### Conectar con Vercel
1. Ve a https://vercel.com
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente que es Next.js

### Configurar Variables de Entorno
Antes de hacer deploy, agrega estas variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://tfsnnsjokvxnzlcmuhkm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25uc2pva3Z4bnpsY211aGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NDE0MTQsImV4cCI6MjA4MzMxNzQxNH0.sTI4cslQ6nbcc8p6uwM3eR_dDsEv-8vl7_Hjc7sZxGE
```

5. Haz clic en "Deploy"

## 🌐 Paso 3: Configurar Dominio Personalizado

### En Vercel Dashboard
1. Una vez deployado, ve a tu proyecto
2. Haz clic en "Settings" → "Domains"
3. Agrega el dominio: `go.halu.com.ar`
4. Vercel te dará un registro DNS para configurar

### En tu Proveedor de DNS (donde compraste halu.com.ar)

Debes agregar un registro **CNAME**:

```
Tipo: CNAME
Nombre: go
Valor: cname.vercel-dns.com
TTL: 3600 (o automático)
```

**Ejemplo visual:**
```
go.halu.com.ar → CNAME → cname.vercel-dns.com
```

### Proveedores Comunes en Argentina

#### Si usas NIC Argentina
1. Ingresa a https://nic.ar
2. Ve a "Mis Dominios" → halu.com.ar
3. Administrar DNS
4. Agregar registro CNAME

#### Si usas Donweb
1. Panel de control → Dominios
2. Administrar DNS
3. Agregar registro CNAME

#### Si usas otro proveedor
El proceso es similar, busca la sección de "DNS Management" o "Administrar DNS"

## ⏱️ Tiempo de Propagación

- **Mínimo**: 5-10 minutos
- **Máximo**: 48 horas (raro)
- **Promedio**: 1-2 horas

## ✅ Verificar que Funciona

1. Espera unos minutos
2. Visita https://go.halu.com.ar
3. Deberías ver tu landing page de HALU Go

## 🔒 HTTPS Automático

Vercel configurará automáticamente el certificado SSL (HTTPS) para tu dominio. No necesitas hacer nada adicional.

## 📝 Resumen de URLs

- **Desarrollo local**: http://localhost:3000
- **Vercel (temporal)**: https://halu-go.vercel.app (o similar)
- **Dominio personalizado**: https://go.halu.com.ar

## 🐛 Troubleshooting

### "Domain not found"
- Verifica que el registro CNAME esté correcto
- Espera más tiempo (propagación DNS)

### "Certificate error"
- Espera unos minutos, Vercel está generando el SSL
- Puede tardar hasta 24 horas en casos raros

### "Page not loading"
- Verifica que las variables de entorno estén configuradas en Vercel
- Revisa los logs en Vercel Dashboard

## 🔄 Actualizaciones Futuras

Cada vez que hagas `git push` a tu repositorio, Vercel automáticamente:
1. Detectará el cambio
2. Hará un nuevo build
3. Deployará la nueva versión
4. Actualizará go.halu.com.ar

---

## 📞 Soporte

Si tienes problemas con:
- **Vercel**: https://vercel.com/support
- **DNS**: Contacta a tu proveedor de dominio
- **Supabase**: https://supabase.com/support
