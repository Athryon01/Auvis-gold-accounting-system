import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/features/shared/pages/DataTable";
import { AlertCircle, CheckCircle2, Hammer } from "lucide-react";
import { WorkshopColumns } from "../components/WorkshopColumns";

const workshopData = [
  {
    jobId: "W-201",
    item: "Engagement Ring Resizing",
    technician: "Alex Chen",
    status: "On Bench",
    deadline: "2024-06-15",
    estimatedCost: 150.0,
  },
  {
    jobId: "W-202",
    item: "Vintage Brooch Repair",
    technician: "Sarah Miller",
    status: "In Queue",
    deadline: "2024-06-18",
    estimatedCost: 450.0,
  },
  {
    jobId: "W-203",
    item: "Custom Diamond Pendant",
    technician: "Alex Chen",
    status: "QC Check",
    deadline: "2024-06-12",
    estimatedCost: 2800.0,
  },
];

export default function WorkshopPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Workshop Bench
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage active repairs and custom jewelry production.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 text-primary">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Hammer className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">08</div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 text-amber-500">
            <CardTitle className="text-sm font-medium">Near Deadline</CardTitle>
            <AlertCircle className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">02</div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-emerald-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 text-emerald-500">
            <CardTitle className="text-sm font-medium">
              Ready for Pickup
            </CardTitle>
            <CheckCircle2 className="h-4 w-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">05</div>
          </CardContent>
        </Card>
      </div>

      <DataTable
        columns={WorkshopColumns}
        data={workshopData}
        filterKey="item"
        sumKey="estimatedCost"
      />
    </div>
  );
}
