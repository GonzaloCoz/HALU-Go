# Crear Usuario Admin - Guía Rápida

## Paso 1: Crear Usuario en Supabase Auth

1. Ve a: https://supabase.com/dashboard
2. Selecciona tu proyecto
3. **Authentication** → **Users** (menú lateral)
4. Haz clic en **"Add user"** → **"Create new user"**
5. Completa:
   - **Email**: `admin@halu.go`
   - **Password**: `Admin123!`
   - ✅ **Auto Confirm User** (importante)
6. Haz clic en **"Create user"**

## Paso 2: Copiar UUID

1. En la lista de usuarios, verás el usuario que acabas de crear
2. Haz clic en el usuario
3. Copia el **UUID** (algo como: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

## Paso 3: Crear Perfil

1. Ve a **SQL Editor** (menú lateral)
2. Haz clic en **"New query"**
3. Pega este código (reemplaza `UUID-AQUI` con el UUID que copiaste):

```sql
INSERT INTO public.profiles (id, full_name, role) 
VALUES ('UUID-AQUI', 'Admin Usuario', 'admin');
```

4. Haz clic en **"Run"** o presiona `Ctrl + Enter`
5. Deberías ver: "Success. No rows returned"

## Paso 4: Verificar

Ejecuta esta query para verificar:

```sql
SELECT * FROM public.profiles;
```

Deberías ver tu perfil con role = 'admin'

## Paso 5: Iniciar Sesión

1. Ve a: http://localhost:3000/login
2. Ingresa:
   - Email: `admin@halu.go`
   - Password: `Admin123!`
3. Deberías ser redirigido a: http://localhost:3000/admin/dashboard

---

## ❌ Solución de Problemas

### "Invalid login credentials"
- Verifica que el email y password sean correctos
- Asegúrate de haber marcado "Auto Confirm User"

### "404 Not Found" después del login
- Verifica que creaste el perfil en la tabla `profiles`
- Ejecuta: `SELECT * FROM public.profiles WHERE id = 'TU-UUID'`

### "Error fetching user"
- Verifica que las variables de entorno estén configuradas
- Reinicia el servidor: `Ctrl + C` y luego `npm run dev`

---

## 🎯 URLs Disponibles

Después de crear el usuario, puedes acceder a:

- **Dashboard**: http://localhost:3000/admin/dashboard
- **Envíos**: http://localhost:3000/admin/shipments
- **Flota**: http://localhost:3000/admin/fleet
- **Repartidores**: http://localhost:3000/admin/drivers
- **Configuración**: http://localhost:3000/admin/settings
