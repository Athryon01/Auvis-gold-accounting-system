import { ChevronRight,CirclePlus,LayoutList,Coins,ShoppingCart,Gem,IdCardLanyard} from "lucide-react";
import { AiFillGold } from "react-icons/ai";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

// کامپوننت بازگشتی برای رندر سطوح مختلف منو
function RecursiveNavItem({ item, level = 0 }) {
  const hasChildren = item.items && item.items.length > 0;
  
  // اگر سطح اول باشد (آیتم اصلی)
  if (level === 0) {
    return (
      <Collapsible
        key={item.title}
        asChild
        defaultOpen={item.isActive}
        className="group/collapsible"
      >
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton tooltip={item.title}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              {hasChildren && (
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              )}
            </SidebarMenuButton>
          </CollapsibleTrigger>
          {hasChildren && (
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items.map((subItem) => (
                  <RecursiveNavItem 
                    key={subItem.title} 
                    item={subItem} 
                    level={level + 1} 
                  />
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          )}
        </SidebarMenuItem>
      </Collapsible>
    );
  }
  
  // اگر سطح دوم یا بیشتر باشد (ساب‌آیتم)
  if (hasChildren) {
    return (
      <SidebarMenuSubItem key={item.title}>
        <Collapsible asChild defaultOpen={item.isActive} className="group/collapsible">
          <div>
            <CollapsibleTrigger asChild>
              <SidebarMenuSubButton>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuSubButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items.map((subItem) => (
                  <RecursiveNavItem 
                    key={subItem.title} 
                    item={subItem} 
                    level={level + 1} 
                  />
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </div>
        </Collapsible>
      </SidebarMenuSubItem>
    );
  }
  
  // اگر ساب‌آیتم بدون فرزند باشد
  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton asChild>
      
        <a href={item.url}>
        {item?.icon}
          <span>{item.title}</span>
        </a>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}

export function NavMain({ items }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <RecursiveNavItem key={item.title} item={item} level={0} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}