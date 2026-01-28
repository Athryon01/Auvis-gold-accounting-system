import { DataTable } from "@/features/shared/pages/DataTable";
import { columns } from "../components/Columns";

const data = [
  {
    sku: "JR-001",
    name: "Gold Bridal Band",
    metal: "18k Yellow Gold",
    weight: 8.5,
    status: "In Stock",
    price: 1250,
  },
  {
    sku: "DR-442",
    name: "Solitaire Diamond Ring",
    metal: "Platinum",
    weight: 4.2,
    status: "In Stock",
    price: 4500,
  },
  {
    sku: "BN-099",
    name: "Tennis Bracelet",
    metal: "14k White Gold",
    weight: 12.0,
    status: "Workshop",
    price: 2100,
  },
];

export default function InventoryPage() {
  return (
    <div className="p-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
