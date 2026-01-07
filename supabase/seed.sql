-- Seed data for testing HALU Go
-- Run this in Supabase SQL Editor after creating the schema

-- First, you need to create test users in Supabase Auth manually or via the dashboard
-- Then insert their profiles here with the correct UUIDs

-- Example: Insert test profiles (replace UUIDs with real ones from auth.users)
-- INSERT INTO public.profiles (id, full_name, role) VALUES
-- ('uuid-from-auth-users-admin', 'Admin Usuario', 'admin'),
-- ('uuid-from-auth-users-driver1', 'Juan Perez', 'driver'),
-- ('uuid-from-auth-users-driver2', 'Maria Lopez', 'driver');

-- Insert test vehicles
INSERT INTO public.vehicles (type, plate, status) VALUES
('Camioneta', 'AA123BB', 'active'),
('Auto', 'AC999DD', 'active'),
('Moto', '888-ZZZ', 'maintenance'),
('Bicicleta', 'N/A', 'active');

-- Insert test shipments (you'll need to replace driver_id with actual profile IDs)
-- INSERT INTO public.shipments (destination, client_name, status, notes) VALUES
-- ('Av. Corrientes 1234, CABA', 'Tech Solutions SRL', 'delivered', 'Entregado sin problemas'),
-- ('Calle 45 N 890, La Plata', 'Muebles Modernos', 'in_transit', 'En camino'),
-- ('Mitre 200, Avellaneda', 'Gamer Store', 'pending', NULL),
-- ('Santa Fe 3000, CABA', 'Indumentaria X', 'incidence', 'Cliente no estaba en domicilio'),
-- ('Cabildo 500, CABA', 'Libreria Y', 'assigned', NULL);

-- Note: To fully test, you need to:
-- 1. Create users in Supabase Auth (Settings > Authentication > Users)
-- 2. Get their UUIDs
-- 3. Insert profiles with those UUIDs
-- 4. Assign shipments to those driver IDs
