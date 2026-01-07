-- HALU Go - Script de Datos de Prueba
-- Ejecuta esto en Supabase SQL Editor después de crear usuarios en Auth

-- PASO 1: Primero crea estos usuarios en Authentication > Users:
-- 1. Email: admin@halu.go, Password: Admin123!, Role: admin
-- 2. Email: juan@halu.go, Password: Driver123!, Role: driver
-- 3. Email: maria@halu.go, Password: Driver123!, Role: driver

-- PASO 2: Copia los UUIDs de los usuarios y reemplázalos abajo

-- Insertar perfiles (REEMPLAZA los UUIDs con los reales)
-- INSERT INTO public.profiles (id, full_name, role) VALUES
-- ('UUID-DEL-ADMIN', 'Admin Usuario', 'admin'),
-- ('UUID-DE-JUAN', 'Juan Perez', 'driver'),
-- ('UUID-DE-MARIA', 'Maria Lopez', 'driver');

-- PASO 3: Insertar vehículos
INSERT INTO public.vehicles (type, plate, status) VALUES
('Camioneta', 'AA123BB', 'active'),
('Auto', 'AC999DD', 'active'),
('Moto', '888-ZZZ', 'active'),
('Bicicleta', 'N/A', 'active'),
('Camioneta', 'AF555EE', 'maintenance');

-- PASO 4: Insertar envíos de prueba
-- Nota: Necesitas reemplazar driver_id y vehicle_id con IDs reales después de crear los perfiles y vehículos

-- Para obtener los IDs de vehículos, ejecuta:
-- SELECT id, type, plate FROM public.vehicles;

-- Ejemplo de inserción de envíos (ajusta los UUIDs):
INSERT INTO public.shipments (destination, client_name, status, notes) VALUES
('Av. Corrientes 1234, CABA', 'Tech Solutions SRL', 'delivered', 'Entregado sin problemas'),
('Calle 45 N° 890, La Plata', 'Muebles Modernos', 'in_transit', 'En camino'),
('Mitre 200, Avellaneda', 'Gamer Store', 'pending', NULL),
('Santa Fe 3000, CABA', 'Indumentaria X', 'incidence', 'Cliente no estaba en domicilio'),
('Cabildo 500, CABA', 'Libreria Y', 'assigned', NULL),
('Av. Rivadavia 8000, CABA', 'Farmacia Central', 'pending', NULL),
('San Martin 456, San Isidro', 'Panadería Don José', 'delivered', 'Entregado en tiempo'),
('Belgrano 789, Vicente López', 'Ferretería El Tornillo', 'in_transit', NULL),
('9 de Julio 321, CABA', 'Restaurante La Esquina', 'pending', NULL),
('Libertador 2000, CABA', 'Oficina Contable', 'assigned', NULL);

-- PASO 5: Actualizar envíos con driver_id y vehicle_id
-- Primero obtén los IDs:
-- SELECT id FROM public.profiles WHERE role = 'driver';
-- SELECT id FROM public.vehicles WHERE status = 'active';

-- Luego actualiza (ejemplo):
-- UPDATE public.shipments 
-- SET driver_id = 'UUID-DE-JUAN', vehicle_id = 'UUID-DEL-VEHICULO-1'
-- WHERE status IN ('in_transit', 'assigned');

-- Verificar los datos
SELECT 'Perfiles' as tabla, COUNT(*) as total FROM public.profiles
UNION ALL
SELECT 'Vehículos', COUNT(*) FROM public.vehicles
UNION ALL
SELECT 'Envíos', COUNT(*) FROM public.shipments;
