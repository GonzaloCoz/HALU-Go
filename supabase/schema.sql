-- Enable public access for now (RLS policies should be added later)

-- PROFILES
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  role text check (role in ('admin', 'driver')) default 'driver',
  updated_at timestamp with time zone
);

-- VEHICLES
create table public.vehicles (
  id uuid default gen_random_uuid() primary key,
  type text check (type in ('Bicicleta', 'Moto', 'Auto', 'Camioneta')) not null,
  plate text unique,
  status text check (status in ('active', 'maintenance')) default 'active'
);

-- SHIPMENTS
create table public.shipments (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  status text check (status in ('pending', 'assigned', 'in_transit', 'delivered', 'incidence')) default 'pending',
  destination text not null,
  client_name text not null,
  driver_id uuid references public.profiles(id),
  vehicle_id uuid references public.vehicles(id),
  notes text
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.vehicles enable row level security;
alter table public.shipments enable row level security;

-- Policies (Simple for now: Admin all, Driver read/update own)
-- Note: These are placeholders. You'll need to run these in Supabase SQL Editor.
