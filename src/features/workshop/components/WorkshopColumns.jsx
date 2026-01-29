import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Clock } from "lucide-react";

export const WorkshopColumns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  {
    accessorKey: "jobId",
    header: "Job ID",
    cell: ({ row }) => (
      <span className="font-mono text-[11px] text-muted-foreground uppercase">
        {row.getValue("jobId")}
      </span>
    ),
  },
  {
    accessorKey: "item",
    header: "Item Description",
    cell: ({ row }) => (
      <span className="font-medium">{row.getValue("item")}</span>
    ),
  },
  {
    accessorKey: "technician",
    header: "Assigned To",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
          {row.getValue("technician").charAt(0)}
        </div>
        <span className="text-sm">{row.getValue("technician")}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Progress",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const variants = {
        "In Queue":
          "bg-secondary text-secondary-foreground border-l-muted-foreground/50",
        "On Bench": "bg-primary/10 text-primary border-l-primary",
        "QC Check": "bg-amber-500/10 text-amber-600 border-l-amber-500",
        Ready: "bg-emerald-500/10 text-emerald-600 border-l-emerald-500",
      };
      return (
        <Badge
          variant="outline"
          className={`${variants[status]} border-l-2 rounded-sm px-2 py-0.5 text-[10px] uppercase font-bold`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => (
      <div className="flex items-center gap-2 text-xs font-mono">
        <Clock className="h-3 w-3 text-muted-foreground" />
        {row.getValue("deadline")}
      </div>
    ),
  },
  {
    accessorKey: "estimatedCost",
    header: () => <div className="text-right">Est. Cost</div>,
    cell: ({ row }) => (
      <div className="text-right font-mono font-semibold">
        ${parseFloat(row.getValue("estimatedCost")).toLocaleString()}
      </div>
    ),
  },
];
