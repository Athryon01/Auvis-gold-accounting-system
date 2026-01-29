import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
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
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => (
      <span className="font-mono text-[11px] uppercase tracking-wider">
        {row.getValue("sku")}
      </span>
    ),
  },
  {
    accessorKey: "name",
    header: "Item Name",
    cell: ({ row }) => (
      <span className="font-medium text-sm">{row.getValue("name")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const variants = {
        "In Stock":
          "bg-primary/10 text-primary border-primary/20 border-l-primary",
        Workshop: "bg-amber-500/10 text-amber-600 border-l-amber-500",
        Sold: "bg-muted text-muted-foreground border-border border-l-muted-foreground/50",
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
    accessorKey: "weight",
    header: () => <div className="text-right">Weight (g)</div>,
    cell: ({ row }) => (
      <div className="text-right font-mono">{row.getValue("weight")}g</div>
    ),
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Valuation</div>,
    cell: ({ row }) => (
      <div className="text-right font-mono font-semibold">
        ${parseFloat(row.getValue("price")).toLocaleString()}
      </div>
    ),
  },
];
