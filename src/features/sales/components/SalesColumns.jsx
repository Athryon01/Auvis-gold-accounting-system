import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

export const SalesColumns = [
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
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ row }) => (
      <span className="font-mono text-xs">{row.getValue("orderId")}</span>
    ),
  },
  {
    accessorKey: "customer",
    header: "Customer",
    cell: ({ row }) => (
      <div className="text-sm">{row.getValue("customer")}</div>
    ),
  },
  {
    accessorKey: "item",
    header: "Item Purchased",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <span className="text-muted-foreground">{row.getValue("date")}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Payment",
    cell: ({ row }) => {
      const status = row.getValue("status");

      // Using semantic theme colors instead of hardcoded 'emerald' or 'amber'
      const variants = {
        // Uses your primary theme color (oklch 0.586 0.253 17.585)
        Paid: "bg-primary/10 text-primary border-primary/20 border-l-primary",
        "In Stock":
          "bg-primary/10 text-primary border-primary/20 border-l-primary",

        // Uses muted/secondary for pending/workshop
        Pending:
          "bg-secondary text-secondary-foreground border-border border-l-ring",
        Workshop:
          "bg-secondary text-secondary-foreground border-border border-l-ring",

        // Uses muted/destructive for sold/refunded
        Sold: "bg-muted text-muted-foreground border-border border-l-muted-foreground/50",
        Refunded:
          "bg-destructive/10 text-destructive border-destructive/20 border-l-destructive",
      };

      return (
        <Badge
          variant="outline"
          className={`
      ${variants[status] || "bg-muted text-muted-foreground"}
      rounded-sm border-l-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider
    `}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "amount", // This MUST match the key in your salesData object
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return <div className="text-right font-mono">${amount.toFixed(2)}</div>;
    },
  },
];
