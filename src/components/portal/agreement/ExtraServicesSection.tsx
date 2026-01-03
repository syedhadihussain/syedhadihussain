import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Sparkles } from "lucide-react";

interface ExtraService {
  name: string;
  price: number;
  billingType: "one-time" | "recurring";
  approved: boolean;
}

interface ExtraServicesSectionProps {
  extraServices: ExtraService[];
  onExtraServicesChange?: (services: ExtraService[]) => void;
  isEditable: boolean;
  isLocked: boolean;
  isClient: boolean;
}

export const ExtraServicesSection = ({
  extraServices,
  onExtraServicesChange,
  isEditable,
  isLocked,
  isClient
}: ExtraServicesSectionProps) => {
  const [newExtra, setNewExtra] = useState<ExtraService>({
    name: "",
    price: 0,
    billingType: "one-time",
    approved: false
  });

  const handleAddExtra = () => {
    if (!newExtra.name.trim() || !onExtraServicesChange) return;
    onExtraServicesChange([...extraServices, newExtra]);
    setNewExtra({ name: "", price: 0, billingType: "one-time", approved: false });
  };

  const handleRemoveExtra = (index: number) => {
    if (!onExtraServicesChange) return;
    onExtraServicesChange(extraServices.filter((_, i) => i !== index));
  };

  const handleToggleApproval = (index: number) => {
    if (!onExtraServicesChange || isLocked) return;
    const updated = [...extraServices];
    updated[index].approved = !updated[index].approved;
    onExtraServicesChange(updated);
  };

  const canEdit = isEditable && !isLocked;
  const canApprove = !isLocked;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          Extra Services (Optional Add-Ons)
        </CardTitle>
        <CardDescription>
          Additional services available beyond the base agreement. Client must approve each extra before signing.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">Approve</TableHead>
              <TableHead>Service Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Billing Type</TableHead>
              {canEdit && !isClient && <TableHead className="w-12"></TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {extraServices.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  No extra services available
                </TableCell>
              </TableRow>
            ) : (
              extraServices.map((service, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      checked={service.approved}
                      onCheckedChange={() => handleToggleApproval(index)}
                      disabled={!canApprove}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>${service.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={service.billingType === "recurring" ? "default" : "secondary"}>
                      {service.billingType === "recurring" ? "Recurring" : "One-time"}
                    </Badge>
                  </TableCell>
                  {canEdit && !isClient && (
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => handleRemoveExtra(index)}
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

        {canEdit && !isClient && (
          <div className="mt-4 p-4 border rounded-lg bg-muted/50">
            <p className="text-sm font-medium mb-3">Add Extra Service</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <Input
                placeholder="Service name"
                value={newExtra.name}
                onChange={(e) => setNewExtra({ ...newExtra, name: e.target.value })}
              />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <Input
                  type="number"
                  placeholder="0.00"
                  className="pl-7"
                  value={newExtra.price || ""}
                  onChange={(e) => setNewExtra({ ...newExtra, price: parseFloat(e.target.value) || 0 })}
                />
              </div>
              <Select
                value={newExtra.billingType}
                onValueChange={(v: "one-time" | "recurring") => setNewExtra({ ...newExtra, billingType: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Billing type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="one-time">One-time</SelectItem>
                  <SelectItem value="recurring">Recurring</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleAddExtra} disabled={!newExtra.name.trim()}>
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ExtraServicesSection;
