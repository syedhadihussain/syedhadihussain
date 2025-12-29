import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useFileUpload } from "@/hooks/useFileUpload";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  FileText,
  Download,
  Eye,
  Upload,
  File,
  FileImage,
  FileSpreadsheet,
  Folder,
  Trash2,
  X,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

interface ProjectFile {
  id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  created_at: string;
  project_id: string;
  project: {
    name: string;
  } | null;
}

interface Project {
  id: string;
  name: string;
}

const PortalDocumentsPage = () => {
  const { user, isAdmin, isModerator } = useAuth();
  const { isUploading, uploadProgress, uploadFile, deleteFile } = useFileUpload();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [fileToDelete, setFileToDelete] = useState<ProjectFile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!user) return;

      try {
        let projectsData: Project[] = [];
        
        if (isAdmin || isModerator) {
          // Admins/moderators can see all projects
          const { data } = await supabase
            .from("projects")
            .select("id, name")
            .order("name");
          projectsData = data || [];
        } else {
          // Clients see their own projects
          const { data: profileData } = await supabase
            .from("client_profiles")
            .select("id")
            .eq("user_id", user.id)
            .maybeSingle();

          if (profileData) {
            const { data } = await supabase
              .from("projects")
              .select("id, name")
              .eq("client_id", profileData.id)
              .order("name");
            projectsData = data || [];
          }
        }

        setProjects(projectsData);

        if (projectsData.length > 0) {
          const projectIds = projectsData.map((p) => p.id);

          // Get files for these projects
          const { data: filesData } = await supabase
            .from("project_files")
            .select("*")
            .in("project_id", projectIds)
            .order("created_at", { ascending: false });

          // Map project names to files
          const filesWithProjects = (filesData || []).map((file) => {
            const project = projectsData.find((p) => p.id === file.project_id);
            return {
              ...file,
              project: project ? { name: project.name } : null,
            };
          });

          setFiles(filesWithProjects);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, isAdmin, isModerator]);

  const getFileIcon = (fileType: string | null) => {
    if (!fileType) return <File className="h-8 w-8 text-muted-foreground" />;
    if (fileType.includes("image"))
      return <FileImage className="h-8 w-8 text-blue-500" />;
    if (fileType.includes("spreadsheet") || fileType.includes("excel"))
      return <FileSpreadsheet className="h-8 w-8 text-green-500" />;
    if (fileType.includes("pdf"))
      return <FileText className="h-8 w-8 text-red-500" />;
    return <File className="h-8 w-8 text-muted-foreground" />;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  const handleUpload = async () => {
    if (!selectedProject) {
      toast.error("Please select a project");
      return;
    }

    if (selectedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    for (const file of selectedFiles) {
      const result = await uploadFile(file, selectedProject);
      if (result) {
        const project = projects.find((p) => p.id === selectedProject);
        setFiles((prev) => [
          {
            id: result.id,
            file_name: result.fileName,
            file_url: result.fileUrl,
            file_type: result.fileType,
            created_at: result.createdAt,
            project_id: selectedProject,
            project: project ? { name: project.name } : null,
          },
          ...prev,
        ]);
      }
    }

    // Reset form
    setSelectedFiles([]);
    setSelectedProject("");
    setIsUploadDialogOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDeleteConfirm = async () => {
    if (!fileToDelete) return;

    // Extract file path from URL
    const urlParts = fileToDelete.file_url.split("/project-files/");
    const filePath = urlParts[1] || "";

    const success = await deleteFile(fileToDelete.id, filePath);
    if (success) {
      setFiles((prev) => prev.filter((f) => f.id !== fileToDelete.id));
    }

    setFileToDelete(null);
    setDeleteConfirmId(null);
  };

  const handleView = (file: ProjectFile) => {
    window.open(file.file_url, "_blank");
  };

  const handleDownload = (file: ProjectFile) => {
    const link = document.createElement("a");
    link.href = file.file_url;
    link.download = file.file_name;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const removeSelectedFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Helmet>
        <title>Documents | Client Portal</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Documents</h1>
            <p className="text-muted-foreground mt-1">
              Access and manage all your project files and documents.
            </p>
          </div>
          <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
                <DialogDescription>
                  Select a project and upload files. Supported formats: PDF, Images, Word, Excel, Text, ZIP.
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project</label>
                  <Select value={selectedProject} onValueChange={setSelectedProject}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a project" />
                    </SelectTrigger>
                    <SelectContent>
                      {projects.map((project) => (
                        <SelectItem key={project.id} value={project.id}>
                          {project.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Files</label>
                  <div
                    className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:border-primary transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to select files or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Max 50MB per file
                    </p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileSelect}
                      accept=".pdf,.png,.jpg,.jpeg,.gif,.webp,.doc,.docx,.xls,.xlsx,.txt,.zip"
                    />
                  </div>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Selected Files</label>
                    <div className="space-y-2 max-h-32 overflow-y-auto">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-muted rounded-md px-3 py-2"
                        >
                          <span className="text-sm truncate flex-1">{file.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => removeSelectedFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isUploading && (
                  <div className="space-y-2">
                    <Progress value={uploadProgress} />
                    <p className="text-sm text-center text-muted-foreground">
                      Uploading... {uploadProgress}%
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsUploadDialogOpen(false);
                    setSelectedFiles([]);
                    setSelectedProject("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleUpload}
                  disabled={isUploading || selectedFiles.length === 0 || !selectedProject}
                >
                  {isUploading ? "Uploading..." : "Upload"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-32" />
            ))}
          </div>
        ) : files.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <Card key={file.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {getFileIcon(file.file_type)}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{file.file_name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.project?.name || "Unknown Project"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDate(file.created_at)}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleView(file)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => handleDownload(file)}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    {(isAdmin || isModerator) && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setFileToDelete(file);
                          setDeleteConfirmId(file.id);
                        }}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12">
              <div className="text-center">
                <Folder className="h-16 w-16 mx-auto text-muted-foreground/50 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Documents Yet</h3>
                <p className="text-muted-foreground mb-4">
                  Your project documents will appear here once they are uploaded.
                </p>
                <Button onClick={() => setIsUploadDialogOpen(true)}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First Document
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <AlertDialog open={deleteConfirmId !== null} onOpenChange={(open) => !open && setDeleteConfirmId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete File</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{fileToDelete?.file_name}"? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default PortalDocumentsPage;
