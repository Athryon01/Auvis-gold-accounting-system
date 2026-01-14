import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  ShoppingCart ,
  Database,
  CirclePlus,
  LayoutList,
  Coins,
  Gem,
  IdCardLanyard 
} from "lucide-react";
import { AiFillGold } from "react-icons/ai";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

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
          items:[
            {
              title: "Golds list",
              url: "golds",
              icon:<LayoutList />
            },
            {
              title: "Add gold",
              url: "#",
             icon:<CirclePlus/>
            },
          ]
        },
        {
          title: "Coins",
          url: "#",
          isActive: false,
          icon: Coins,
          items:[
            {
              title: "Coins list",
              url: "coins",
              icon:<LayoutList />
            },
            {
              title: "Add coin",
              url: "#",
             icon:<CirclePlus/>
            },
          ]
        },
        {
          title: "Commodities",
          url: "#",
          isActive: false,
          icon: ShoppingCart,
          items:[
            {
              title: "Commodities list",
              url: "commodities",
              icon:<LayoutList />
            },
            {
              title: "Add commodity",
              url: "#",
             icon:<CirclePlus/>
            },
          ]
        },
        {
          title: "Jewelries",
          url: "#",
          isActive: false,
          icon: Gem,
          items:[
            {
              title: "Jewelries list",
              url: "jewelries",
              icon:<LayoutList />
            },
            {
              title: "Add jewelry",
              url: "#",
             icon:<CirclePlus/>
            },
          ]
        },
        {
          title: "Employees",
          url: "#",
          isActive: false,
          icon: IdCardLanyard,
          items:[
            {
              title: "Employees list",
              url: "employees",
              icon:<LayoutList />
            },
            {
              title: "Add employee",
              url: "#",
             icon:<CirclePlus/>
            },
          ]
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
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
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
