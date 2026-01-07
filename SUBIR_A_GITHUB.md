# Cómo Subir HALU Go a GitHub

## 🔧 Opción 1: Instalar Git (Recomendado)

### Paso 1: Descargar Git
1. Ve a: https://git-scm.com/download/win
2. Descarga el instalador (64-bit)
3. Ejecuta el instalador
4. Haz clic en "Next" en todas las opciones (configuración por defecto está bien)
5. Espera a que termine la instalación

### Paso 2: Configurar Git
Abre una nueva terminal de PowerShell y ejecuta:

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 3: Subir el Código
En la carpeta del proyecto, ejecuta:

```powershell
git init
git add .
git commit -m "Initial commit - HALU Go PWA"
git branch -M main
git remote add origin https://github.com/GonzaloCoz/HALU-Go.git
git push -u origin main
```

Te pedirá autenticación de GitHub. Usa tu usuario y contraseña (o token personal).

---

## 📦 Opción 2: Subir Manualmente (Más Rápido)

### Paso 1: Crear un ZIP
1. Ve a la carpeta: `C:\Users\Gonza\OneDrive\Escritorio\halu go`
2. **IMPORTANTE**: Elimina estas carpetas antes de comprimir:
   - `node_modules` (muy pesada)
   - `.next`
3. Selecciona todos los archivos restantes
4. Click derecho → "Comprimir en archivo ZIP"
5. Nómbralo `halu-go.zip`

### Paso 2: Subir a GitHub
1. Ve a: https://github.com/GonzaloCoz/HALU-Go
2. Haz clic en "Add file" → "Upload files"
3. Arrastra el contenido del ZIP (NO el ZIP, sino los archivos dentro)
4. Escribe un mensaje: "Initial commit - HALU Go"
5. Haz clic en "Commit changes"

---

## 🚀 Opción 3: GitHub Desktop (Más Fácil)

### Paso 1: Descargar GitHub Desktop
1. Ve a: https://desktop.github.com/
2. Descarga e instala
3. Inicia sesión con tu cuenta de GitHub

### Paso 2: Agregar el Repositorio
1. File → Add Local Repository
2. Selecciona la carpeta: `C:\Users\Gonza\OneDrive\Escritorio\halu go`
3. Si dice que no es un repositorio, haz clic en "Create a repository"

### Paso 3: Publicar
1. Verás todos los archivos en la lista
2. Escribe un mensaje: "Initial commit - HALU Go"
3. Haz clic en "Commit to main"
4. Haz clic en "Publish repository"
5. Selecciona tu cuenta y el nombre "HALU-Go"
6. Haz clic en "Publish"

---

## ✅ Verificar que Funcionó

Ve a: https://github.com/GonzaloCoz/HALU-Go

Deberías ver todos tus archivos ahí.

---

## 🎯 Siguiente Paso: Deploy en Vercel

Una vez que el código esté en GitHub:

1. Ve a https://vercel.com
2. "Add New Project"
3. Importa "HALU-Go"
4. Agrega las variables de entorno
5. Deploy

¡Y listo! Tu app estará en línea.
