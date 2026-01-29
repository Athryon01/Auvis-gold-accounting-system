import { Button } from "@/components/ui/button";
import { DataTable } from "@/features/shared/pages/DataTable";
import { Download, Plus } from "lucide-react";
import { columns } from "../components/InventoryColumns";

// Mock data representing the professional jewelry inventory
const inventory = [
  {
    id: "1",
    sku: "AU-R-22K-001",
    name: "Classic 22k Gold Band",
    weight: "12.50",
    status: "In Stock",
    price: 1450.0,
  },
  {
    id: "2",
    sku: "PT-D-950-042",
    name: "Platinum Solitaire 1ct",
    weight: "4.80",
    status: "Workshop",
    price: 3200.0,
  },
  {
    id: "3",
    sku: "AG-N-925-115",
    name: "Sterling Silver Rope Chain",
    weight: "28.30",
    status: "Sold",
    price: 185.5,
  },
  {
    id: "4",
    sku: "AU-E-18K-902",
    name: "Rose Gold Studs",
    weight: "3.20",
    status: "In Stock",
    price: 640.0,
  },
];

export default function InventoryPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      {/* Streamlined Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">Inventory</h1>
          <p className="text-sm text-muted-foreground">
            Manage your physical jewelry assets and stock levels.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Download className="h-3.5 w-3.5" />
            Export
          </Button>
          <Button size="sm" className="h-8 text-xs">
            <Plus className="h-3.5 w-3.5" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Table sits directly in the layout, no more "Product Catalog" card header */}
      <DataTable
        columns={columns}
        data={inventory}
        filterKey="name"
        sumKey="price"
      />
    </div>
  );
}
