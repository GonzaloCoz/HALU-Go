# 🚀 Deploy de HALU Go - Pasos Específicos

## ✅ Paso 1: Verificar GitHub (COMPLETADO)
Tu repositorio está en: https://github.com/GonzaloCoz/HALU-Go.git

## 📦 Paso 2: Deploy en Vercel

### 2.1 Acceder a Vercel
1. Ve a **https://vercel.com**
2. Haz clic en **"Sign Up"** o **"Login"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

### 2.2 Importar el Proyecto
1. Una vez dentro, haz clic en **"Add New..."** → **"Project"**
2. Busca el repositorio **"HALU-Go"** en la lista
3. Haz clic en **"Import"**

### 2.3 Configurar el Proyecto
Vercel detectará automáticamente que es Next.js. Verás:
- **Framework Preset**: Next.js ✅ (automático)
- **Root Directory**: ./ ✅ (dejar por defecto)
- **Build Command**: `npm run build` ✅ (automático)

### 2.4 Agregar Variables de Entorno (IMPORTANTE)
Antes de hacer deploy, haz clic en **"Environment Variables"** y agrega:

**Variable 1:**
```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://tfsnnsjokvxnzlcmuhkm.supabase.co
```

**Variable 2:**
```
Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmc25uc2pva3Z4bnpsY211aGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc3NDE0MTQsImV4cCI6MjA4MzMxNzQxNH0.sTI4cslQ6nbcc8p6uwM3eR_dDsEv-8vl7_Hjc7sZxGE
```

### 2.5 Deploy
1. Haz clic en **"Deploy"**
2. Espera 1-2 minutos mientras Vercel construye tu app
3. ¡Listo! Verás un mensaje de éxito con confeti 🎉

Tu app estará disponible en algo como: `https://halu-go-xxxxx.vercel.app`

---

## 🌐 Paso 3: Configurar Dominio Personalizado (go.halu.com.ar)

### 3.1 En Vercel
1. En tu proyecto deployado, ve a **"Settings"** (arriba)
2. Haz clic en **"Domains"** (menú lateral)
3. En el campo "Add Domain", escribe: `go.halu.com.ar`
4. Haz clic en **"Add"**

Vercel te mostrará un mensaje diciendo que necesitas configurar DNS.

### 3.2 Configurar DNS en tu Proveedor

**¿Dónde compraste halu.com.ar?** (NIC Argentina, Donweb, etc.)

Ve al panel de administración de tu dominio y agrega:

```
Tipo: CNAME
Nombre/Host: go
Valor/Apunta a: cname.vercel-dns.com
TTL: 3600 (o automático)
```

**Ejemplo visual:**
```
go.halu.com.ar → CNAME → cname.vercel-dns.com
```

### 3.3 Esperar Propagación
- Mínimo: 5-10 minutos
- Máximo: 48 horas
- Promedio: 1-2 horas

### 3.4 Verificar
1. Espera unos minutos
2. Visita: **https://go.halu.com.ar**
3. Deberías ver tu landing page de HALU Go

Vercel configurará automáticamente HTTPS (certificado SSL).

---

## 🔐 Paso 4: Crear Usuario de Prueba

### En Supabase
1. Ve a https://supabase.com/dashboard
2. Selecciona tu proyecto
3. Ve a **"Authentication"** → **"Users"**
4. Haz clic en **"Add user"** → **"Create new user"**
5. Completa:
   - Email: `admin@halu.go`
   - Password: `Admin123!`
   - ✅ Marca **"Auto Confirm User"**
6. Haz clic en **"Create user"**

### Crear Perfil
1. Copia el **UUID** del usuario que acabas de crear
2. Ve a **"SQL Editor"**
3. Ejecuta este SQL (reemplaza `UUID-AQUI`):

```sql
INSERT INTO public.profiles (id, full_name, role) 
VALUES ('UUID-AQUI', 'Admin Usuario', 'admin');
```

---

## ✅ Paso 5: Probar la App

1. Ve a **https://go.halu.com.ar** (o tu URL de Vercel temporal)
2. Haz clic en **"Ingresar"**
3. Usa las credenciales:
   - Email: `admin@halu.go`
   - Password: `Admin123!`
4. ¡Deberías ver el Dashboard! 🎉

---

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel automáticamente:
1. Detectará el push
2. Hará un nuevo build
3. Deployará la nueva versión
4. Actualizará go.halu.com.ar

---

## 📞 ¿Necesitas Ayuda?

- **Vercel no encuentra el repo**: Verifica permisos de GitHub
- **Error en build**: Revisa que las variables de entorno estén bien
- **Dominio no funciona**: Espera más tiempo o verifica el DNS
- **No puedes hacer login**: Verifica que creaste el usuario en Supabase

---

## 🎯 URLs Finales

- **Desarrollo**: http://localhost:3000
- **Producción**: https://go.halu.com.ar
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Supabase Dashboard**: https://supabase.com/dashboard
