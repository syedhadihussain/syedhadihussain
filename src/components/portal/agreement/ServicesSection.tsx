import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, ListChecks } from "lucide-react";

interface Service {
  name: string;
  description?: string;
  deliveryTimeline?: string;
  included: boolean;
}

interface ServicesSectionProps {
  services: Service[];
  onServicesChange?: (services: Service[]) => void;
  isEditable: boolean;
  isLocked: boolean;
}

export const ServicesSection = ({
  services,
  onServicesChange,
  isEditable,
  isLocked
}: ServicesSectionProps) => {
  const [newService, setNewService] = useState({ name: "", description: "", deliveryTimeline: "" });

  const handleAddService = () => {
    if (!newService.name.trim() || !onServicesChange) return;
    
    onServicesChange([
      ...services,
      { ...newService, included: true }
    ]);
    setNewService({ name: "", description: "", deliveryTimeline: "" });
  };

  const handleRemoveService = (index: number) => {
    if (!onServicesChange) return;
    onServicesChange(services.filter((_, i) => i !== index));
  };

  const handleToggleIncluded = (index: number) => {
    if (!onServicesChange) return;
    const updated = [...services];
    updated[index].included = !updated[index].included;
    onServicesChange(updated);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="h-5 w-5" />
          Services Included
        </CardTitle>
        <CardDescription>
          Services covered under this agreement
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Include</TableHead>
              <TableHead>Service Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Delivery Timeline</TableHead>
              {isEditable && !isLocked && <TableHead className="w-12"></TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  No services added yet
                </TableCell>
              </TableRow>
            ) : (
              services.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      checked={service.included}
                      onCheckedChange={() => handleToggleIncluded(index)}
                      disabled={isLocked || !isEditable}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {service.description || "—"}
                  </TableCell>
                  <TableCell>
                    {service.deliveryTimeline ? (
                      <Badge variant="outline">{service.deliveryTimeline}</Badge>
                    ) : "—"}
                  </TableCell>
                  {isEditable && !isLocked && (
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleRemoveService(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {isEditable && !isLocked && (
          <div className="mt-4 p-4 border rounded-lg bg-muted/50">
            <p className="text-sm font-medium mb-3">Add New Service</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input
                placeholder="Service name"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              />
              <Input
                placeholder="Description (optional)"
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
              />
              <div className="flex gap-2">
                <Input
                  placeholder="Timeline (optional)"
                  value={newService.deliveryTimeline}
                  onChange={(e) => setNewService({ ...newService, deliveryTimeline: e.target.value })}
                />
                <Button onClick={handleAddService} disabled={!newService.name.trim()}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
