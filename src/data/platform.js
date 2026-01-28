import {
  Coins,
  FileBarChart,
  Gem,
  Hammer,
  LayoutDashboard,
  Receipt,
  Scale,
  Settings,
  Truck,
  Users,
} from "lucide-react";

const platform = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
    group: "Insights",
  },
  { name: "Reports", route: "/reports", icon: FileBarChart, group: "Insights" },

  { name: "Inventory", route: "/inventory", icon: Gem, group: "Management" },
  { name: "Sales", route: "/sales", icon: Receipt, group: "Management" },
  { name: "Workshop", route: "/workshop", icon: Hammer, group: "Management" },

  { name: "Metal Rates", route: "/rates", icon: Coins, group: "Operations" },
  { name: "Suppliers", route: "/suppliers", icon: Truck, group: "Operations" },
  { name: "Customers", route: "/customers", icon: Users, group: "Operations" },
  { name: "Calculations", route: "/calc", icon: Scale, group: "Operations" }, // Wastage/Weight tools
];

export default platform;
