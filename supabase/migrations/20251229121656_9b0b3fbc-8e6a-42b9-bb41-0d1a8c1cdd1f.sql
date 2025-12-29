-- Create storage bucket for project files
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'project-files',
  'project-files',
  false,
  52428800, -- 50MB limit
  ARRAY['application/pdf', 'image/png', 'image/jpeg', 'image/gif', 'image/webp', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/plain', 'application/zip']
);

-- Storage policies for project files
-- Users can view files from their own projects
CREATE POLICY "Users can view their project files"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'project-files' AND
  EXISTS (
    SELECT 1 FROM public.project_files pf
    JOIN public.projects p ON pf.project_id = p.id
    JOIN public.client_profiles cp ON p.client_id = cp.id
    WHERE pf.file_url LIKE '%' || storage.objects.name || '%'
    AND cp.user_id = auth.uid()
  )
);

-- Users can upload files to their own projects
CREATE POLICY "Users can upload to their projects"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'project-files' AND
  auth.uid() IS NOT NULL
);

-- Users can delete their own uploaded files
CREATE POLICY "Users can delete their uploaded files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'project-files' AND
  EXISTS (
    SELECT 1 FROM public.project_files pf
    WHERE pf.file_url LIKE '%' || storage.objects.name || '%'
    AND pf.uploaded_by = auth.uid()
  )
);

-- Admins/moderators can view all files
CREATE POLICY "Admins can view all project files"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'project-files' AND
  public.is_admin_or_moderator(auth.uid())
);

-- Admins/moderators can upload files
CREATE POLICY "Admins can upload project files"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'project-files' AND
  public.is_admin_or_moderator(auth.uid())
);

-- Admins/moderators can delete any files
CREATE POLICY "Admins can delete project files"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'project-files' AND
  public.is_admin_or_moderator(auth.uid())
);