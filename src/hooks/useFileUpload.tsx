import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "./useAuth";

interface UploadedFile {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string | null;
  createdAt: string;
}

interface UseFileUploadReturn {
  isUploading: boolean;
  uploadProgress: number;
  uploadFile: (file: File, projectId: string) => Promise<UploadedFile | null>;
  deleteFile: (fileId: string, filePath: string) => Promise<boolean>;
}

export const useFileUpload = (): UseFileUploadReturn => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { user } = useAuth();

  const uploadFile = async (file: File, projectId: string): Promise<UploadedFile | null> => {
    if (!user) {
      toast.error("You must be logged in to upload files");
      return null;
    }

    // Validate file size (50MB max)
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("File size must be less than 50MB");
      return null;
    }

    // Validate file type
    const allowedTypes = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/webp",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "text/plain",
      "application/zip",
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error("File type not allowed. Supported: PDF, Images, Word, Excel, Text, ZIP");
      return null;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Create unique file path
      const timestamp = Date.now();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filePath = `${projectId}/${timestamp}_${sanitizedFileName}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("project-files")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (uploadError) {
        console.error("Upload error:", uploadError);
        toast.error("Failed to upload file");
        return null;
      }

      setUploadProgress(70);

      // Get the public URL
      const { data: urlData } = supabase.storage
        .from("project-files")
        .getPublicUrl(filePath);

      // Create record in project_files table
      const { data: fileRecord, error: dbError } = await supabase
        .from("project_files")
        .insert({
          project_id: projectId,
          file_name: file.name,
          file_url: urlData.publicUrl,
          file_type: file.type,
          uploaded_by: user.id,
        })
        .select()
        .single();

      if (dbError) {
        console.error("Database error:", dbError);
        // Try to delete the uploaded file if DB insert fails
        await supabase.storage.from("project-files").remove([filePath]);
        toast.error("Failed to save file record");
        return null;
      }

      setUploadProgress(100);
      toast.success("File uploaded successfully!");

      return {
        id: fileRecord.id,
        fileName: fileRecord.file_name,
        fileUrl: fileRecord.file_url,
        fileType: fileRecord.file_type,
        createdAt: fileRecord.created_at,
      };
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("An unexpected error occurred");
      return null;
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const deleteFile = async (fileId: string, filePath: string): Promise<boolean> => {
    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from("project-files")
        .remove([filePath]);

      if (storageError) {
        console.error("Storage delete error:", storageError);
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from("project_files")
        .delete()
        .eq("id", fileId);

      if (dbError) {
        console.error("Database delete error:", dbError);
        toast.error("Failed to delete file record");
        return false;
      }

      toast.success("File deleted successfully");
      return true;
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("An unexpected error occurred");
      return false;
    }
  };

  return {
    isUploading,
    uploadProgress,
    uploadFile,
    deleteFile,
  };
};
