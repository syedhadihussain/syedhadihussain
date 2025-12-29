-- Drop existing enum and recreate with moderator role
DROP FUNCTION IF EXISTS public.has_role CASCADE;
DROP TABLE IF EXISTS public.user_roles CASCADE;
DROP TYPE IF EXISTS public.app_role CASCADE;

-- Create app_role enum with admin, moderator, client roles
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'client');

-- Recreate user_roles table
CREATE TABLE public.user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  role app_role NOT NULL DEFAULT 'client',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create has_role function
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create is_admin_or_moderator function
CREATE OR REPLACE FUNCTION public.is_admin_or_moderator(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'moderator')
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Admins can view all roles" 
ON public.user_roles 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles" 
ON public.user_roles 
FOR ALL 
USING (has_role(auth.uid(), 'admin'));

-- Create client_profiles table
CREATE TABLE public.client_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  client_id TEXT NOT NULL UNIQUE,
  company_name TEXT,
  country TEXT,
  phone TEXT,
  subscription_plan TEXT DEFAULT 'free',
  billing_status TEXT DEFAULT 'pending',
  account_status TEXT DEFAULT 'active' CHECK (account_status IN ('active', 'paused', 'suspended')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on client_profiles
ALTER TABLE public.client_profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies for client_profiles
CREATE POLICY "Clients can view their own profile" 
ON public.client_profiles 
FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Clients can update their own profile" 
ON public.client_profiles 
FOR UPDATE 
USING (user_id = auth.uid());

CREATE POLICY "Admins and moderators can view all profiles" 
ON public.client_profiles 
FOR SELECT 
USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can manage all profiles" 
ON public.client_profiles 
FOR ALL 
USING (has_role(auth.uid(), 'admin'));

-- Create projects table
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID NOT NULL REFERENCES public.client_profiles(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'in_progress', 'on_hold', 'completed')),
  services TEXT[],
  timeline_start DATE,
  timeline_end DATE,
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on projects
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- RLS policies for projects
CREATE POLICY "Clients can view their own projects" 
ON public.projects 
FOR SELECT 
USING (
  client_id IN (
    SELECT id FROM public.client_profiles WHERE user_id = auth.uid()
  )
);

CREATE POLICY "Admins and moderators can view all projects" 
ON public.projects 
FOR SELECT 
USING (is_admin_or_moderator(auth.uid()));

CREATE POLICY "Admins can manage all projects" 
ON public.projects 
FOR ALL 
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Moderators can update projects" 
ON public.projects 
FOR UPDATE 
USING (has_role(auth.uid(), 'moderator'));

-- Create project_files table
CREATE TABLE public.project_files (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT,
  uploaded_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on project_files
ALTER TABLE public.project_files ENABLE ROW LEVEL SECURITY;

-- RLS policies for project_files
CREATE POLICY "Users can view files for their projects" 
ON public.project_files 
FOR SELECT 
USING (
  project_id IN (
    SELECT p.id FROM public.projects p
    JOIN public.client_profiles cp ON p.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  )
  OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can manage all files" 
ON public.project_files 
FOR ALL 
USING (has_role(auth.uid(), 'admin'));

-- Create project_notes table
CREATE TABLE public.project_notes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_internal BOOLEAN DEFAULT false,
  created_by UUID NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on project_notes
ALTER TABLE public.project_notes ENABLE ROW LEVEL SECURITY;

-- RLS policies for project_notes
CREATE POLICY "Clients can view non-internal notes" 
ON public.project_notes 
FOR SELECT 
USING (
  (NOT is_internal AND project_id IN (
    SELECT p.id FROM public.projects p
    JOIN public.client_profiles cp ON p.client_id = cp.id
    WHERE cp.user_id = auth.uid()
  ))
  OR is_admin_or_moderator(auth.uid())
);

CREATE POLICY "Admins can manage all notes" 
ON public.project_notes 
FOR ALL 
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Moderators can create notes" 
ON public.project_notes 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'moderator'));

-- Function to generate client ID
CREATE OR REPLACE FUNCTION public.generate_client_id()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  new_id TEXT;
  id_exists BOOLEAN;
BEGIN
  LOOP
    new_id := 'CLT-' || LPAD(FLOOR(RANDOM() * 1000000)::TEXT, 6, '0');
    SELECT EXISTS(SELECT 1 FROM public.client_profiles WHERE client_id = new_id) INTO id_exists;
    EXIT WHEN NOT id_exists;
  END LOOP;
  RETURN new_id;
END;
$$;

-- Update handle_new_user function to create client profile
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create profile
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', NEW.email)
  );
  
  -- Assign default 'client' role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'client');
  
  -- Create client profile with auto-generated client ID
  INSERT INTO public.client_profiles (user_id, client_id)
  VALUES (NEW.id, generate_client_id());
  
  -- Create default project workspace
  INSERT INTO public.projects (client_id, name, description)
  SELECT cp.id, 'Default Workspace', 'Your default project workspace'
  FROM public.client_profiles cp
  WHERE cp.user_id = NEW.id;
  
  RETURN NEW;
END;
$$;

-- Drop and recreate trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_client_profiles_updated_at
  BEFORE UPDATE ON public.client_profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();