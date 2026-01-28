import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import platform from "@/data/platform";
import { useNavigate } from "react-router";

export function NavPlatform() {
  const navigate = useNavigate();

  const groupedPlatform = platform.reduce((acc, item) => {
    const groupName = item.group || "General";
    if (!acc[groupName]) {
      acc[groupName] = [];
    }
    acc[groupName].push(item);
    return acc;
  }, {});

  return (
    <>
      {Object.entries(groupedPlatform).map(([groupName, items]) => (
        <SidebarGroup
          key={groupName}
          className="group-data-[collapsible=icon]:hidden"
        >
          <SidebarGroupLabel>{groupName}</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <button onClick={() => navigate(item.route)}>
                    <item.icon />
                    <span>{item.name}</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </>
  );
}
