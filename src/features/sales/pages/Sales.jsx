import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/features/shared/pages/DataTable";
import { DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import { SalesColumns } from "../components/SalesColumns";

const salesData = [
  {
    orderId: "TXN-8821",
    customer: "James Moriarty",
    item: "22k Gold Band",
    date: "2024-05-12",
    status: "Paid",
    amount: 1450.0,
  },
  {
    orderId: "TXN-8822",
    customer: "Irene Adler",
    item: "Platinum Studs",
    date: "2024-05-13",
    status: "Pending",
    amount: 890.0,
  },
  {
    orderId: "TXN-8823",
    customer: "John Watson",
    item: "Silver Watch",
    date: "2024-05-14",
    status: "Paid",
    amount: 420.0,
  },
];

export default function SalesPage() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Sales Ledger</h1>
        <p className="text-sm text-muted-foreground">
          Track revenue and customer transactions.
        </p>
      </div>

      {/* Sales Stats Bar */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">$2,760.00</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <ShoppingCart className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">+12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Avg. Order Value
            </CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-mono">$920.00</div>
          </CardContent>
        </Card>
      </div>

      {/* The Core Table */}
      <div className="rounded-md">
        <DataTable
          columns={SalesColumns}
          data={salesData}
          filterKey="customer"
          sumKey="amount"
        />
      </div>
    </div>
  );
}
