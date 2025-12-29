import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FileText,
  Download,
  Eye,
  Upload,
  File,
  FileImage,
  FileSpreadsheet,
  Folder,
} from "lucide-react";

interface ProjectFile {
  id: string;
  file_name: string;
  file_url: string;
  file_type: string | null;
  created_at: string;
  project: {
    name: string;
  } | null;
}

const PortalDocumentsPage = () => {
  const { user } = useAuth();
  const [files, setFiles] = useState<ProjectFile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      if (!user) return;

      try {
        // Get client profile first
        const { data: profileData } = await supabase
          .from("client_profiles")
          .select("id")
          .eq("user_id", user.id)
          .maybeSingle();

        if (profileData) {
          // Get projects for this client
          const { data: projectsData } = await supabase
            .from("projects")
            .select("id, name")
            .eq("client_id", profileData.id);

          if (projectsData && projectsData.length > 0) {
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
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFiles();
  }, [user]);

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
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Upload File
          </Button>
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
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
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
                <Button>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Your First Document
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  );
};

export default PortalDocumentsPage;
