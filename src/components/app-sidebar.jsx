import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import useCoins from "@/features/store/global/useCoins";
import useCommodities from "@/features/store/global/useCommodities";
import useGolds from "@/features/store/global/useGolds";
import useJewelries from "@/features/store/global/useJewelries";
import {
  coinsFields,
  commoditiesFields,
  goldsFields,
  jewelriesFields,
} from "@/features/store/utils/Feilds";
import {
  AudioWaveform,
  BarChart2,
  BookOpen,
  Bot,
  CirclePlus,
  Coins,
  Command,
  Database,
  FileChartColumn,
  GalleryVerticalEnd,
  Gem,
  IdCardLanyard,
  LayoutList,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import { AiFillGold } from "react-icons/ai";
("use client");

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  const { golds, addGold } = useGolds();
  let { addCoin } = useCoins();
  let { addJewelry } = useJewelries();
  let { addCommodity } = useCommodities();
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Base Setups",
        url: "#",
        icon: Database,
        isActive: false,
        items: [
          {
            title: "Golds",
            url: "#",
            isActive: false,
            icon: AiFillGold,
            items: [
              {
                title: "Golds list",
                url: "golds",
                icon: <LayoutList />,
              },
              {
                title: "Add gold",
                url: "#",
                function: {
                  state: true,
                  operator: useGolds().addGold,
                  fields: goldsFields,
                },
                icon: <CirclePlus />,
              },
            ],
          },
          {
            title: "Coins",
            url: "#",
            isActive: false,
            icon: Coins,
            items: [
              {
                title: "Coins list",
                url: "coins",
                icon: <LayoutList />,
              },
              {
                title: "Add coin",
                url: "#",
                function: {
                  state: true,
                  operator: useCoins().addCoin,
                  fields: coinsFields,
                },
                icon: <CirclePlus />,
              },
            ],
          },
          {
            title: "Commodities",
            url: "#",
            isActive: false,
            icon: ShoppingCart,
            items: [
              {
                title: "Commodities list",
                url: "commodities",

                icon: <LayoutList />,
              },
              {
                title: "Add commodity",
                url: "#",
                function: {
                  state: true,
                  operator: useCommodities().addCommodity,
                  fields: commoditiesFields,
                },
                icon: <CirclePlus />,
              },
            ],
          },
          {
            title: "Jewelries",
            url: "#",
            isActive: false,
            icon: Gem,
            items: [
              {
                title: "Jewelries list",
                url: "jewelries",
                icon: <LayoutList />,
              },
              {
                title: "Add jewelry",
                url: "#",
                function: {
                  state: true,
                  operator: useJewelries().addJewelry,
                  fields: jewelriesFields,
                },
                icon: <CirclePlus />,
              },
            ],
          },
          {
            title: "Employees",
            url: "#",
            isActive: false,
            icon: IdCardLanyard,
            items: [
              {
                title: "Employees list",
                url: "employees",
                icon: <LayoutList />,
              },
              {
                title: "Add employee",
                url: "#",
                function: { state: true },
                icon: <CirclePlus />,
              },
            ],
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: BarChart2,
      },
      {
        name: "Reporting",
        url: "/report",
        icon: FileChartColumn,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Athryon Dev.</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
