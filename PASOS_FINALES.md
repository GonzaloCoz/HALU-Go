# ✅ HALU Go - Pasos Finales

## 🎉 ¡Código Subido a GitHub!

Tu código ya está en: **https://github.com/GonzaloCoz/HALU-Go**

---

## 🚀 PASO 1: Deploy en Vercel (5 minutos)

### 1.1 Acceder a Vercel
1. Ve a: **https://vercel.com**
2. Haz clic en **"Sign Up"** o **"Login"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel

### 1.2 Importar Proyecto
1. Haz clic en **"Add New..."** → **"Project"**
2. Busca **"HALU-Go"** en la lista
3. Haz clic en **"Import"**

### 1.3 Configurar Variables de Entorno
**IMPORTANTE**: Antes de hacer deploy, expande **"Environment Variables"** y agrega:

```
NEXT_PUBLIC_SUPABASE_URL
https://tfsnnsjokvxnzlcmuhkm.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25uc2pva3Z4bnpsY211aGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NDE0MTQsImV4cCI6MjA4MzMxNzQxNH0.sTI4cslQ6nbcc8p6uwM3eR_dDsEv-8vl7_Hjc7sZxGE
```

### 1.4 Deploy
1. Haz clic en **"Deploy"**
2. Espera 1-2 minutos
3. ¡Listo! 🎉

Tu app estará en: `https://halu-go-xxxxx.vercel.app`

---

## 🌐 PASO 2: Configurar Dominio go.halu.com.ar

### 2.1 En Vercel
1. En tu proyecto, ve a **"Settings"**
2. Haz clic en **"Domains"**
3. Escribe: `go.halu.com.ar`
4. Haz clic en **"Add"**

### 2.2 En tu Proveedor de DNS
Ve al panel donde administras **halu.com.ar** y agrega:

```
Tipo: CNAME
Nombre: go
Valor: cname.vercel-dns.com
TTL: 3600
```

### 2.3 Esperar
- Propagación DNS: 5 minutos a 2 horas
- Certificado SSL: Automático (Vercel)

---

## 👤 PASO 3: Crear Usuario Admin

### 3.1 En Supabase
1. Ve a: **https://supabase.com/dashboard**
2. Selecciona tu proyecto
3. **Authentication** → **Users**
4. **"Add user"** → **"Create new user"**

### 3.2 Datos del Usuario
```
Email: admin@halu.go
Password: Admin123!
✅ Auto Confirm User
```

### 3.3 Crear Perfil
1. Copia el **UUID** del usuario creado
2. Ve a **"SQL Editor"**
3. Ejecuta (reemplaza `UUID-AQUI`):

```sql
INSERT INTO public.profiles (id, full_name, role) 
VALUES ('UUID-AQUI', 'Admin Usuario', 'admin');
```

---

## ✅ PASO 4: Probar la App

### Opción A: URL Temporal de Vercel
1. Ve a tu URL de Vercel (te la dio al terminar el deploy)
2. Haz clic en **"Ingresar"**
3. Login:
   - Email: `admin@halu.go`
   - Password: `Admin123!`

### Opción B: Tu Dominio (después de configurar DNS)
1. Ve a: **https://go.halu.com.ar**
2. Haz clic en **"Ingresar"**
3. Mismo login de arriba

---

## 📱 PASO 5: Instalar como PWA (Opcional)

### En Móvil (Android)
1. Abre **https://go.halu.com.ar** en Chrome
2. Toca el menú (⋮)
3. **"Agregar a pantalla de inicio"**

### En Escritorio (Chrome)
1. Abre **https://go.halu.com.ar**
2. Mira el ícono de instalación en la barra de direcciones
3. Haz clic en **"Instalar"**

---

## 🎯 Resumen de URLs

| Servicio | URL |
|----------|-----|
| **Producción** | https://go.halu.com.ar |
| **Vercel Dashboard** | https://vercel.com/dashboard |
| **GitHub Repo** | https://github.com/GonzaloCoz/HALU-Go |
| **Supabase** | https://supabase.com/dashboard |
| **Local Dev** | http://localhost:3000 |

---

## 🔄 Actualizaciones Futuras

Para actualizar la app:

```powershell
# Hacer cambios en el código
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel automáticamente detectará el push y hará un nuevo deploy.

---

## 🎉 ¡Todo Listo!

Tu aplicación HALU Go está:
- ✅ En GitHub
- ✅ Deployada en Vercel
- ✅ Lista para usar con tu dominio
- ✅ Conectada a Supabase

**Próximos pasos opcionales:**
- Crear más usuarios (repartidores)
- Agregar datos de prueba con `seed.sql`
- Personalizar colores y logos
- Integrar mapas reales
