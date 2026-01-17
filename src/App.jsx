import { BrowserRouter } from "react-router";
import Gateway from "./features/router/Gateway";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppDrawer } from "./components/AppDrawer";

function App() {
  return (
    <BrowserRouter>
     <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
         
            <SidebarTrigger className="-ml-1" />
           
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
       
          <div className="bg-muted/0 min-h-[100vh] flex-1 rounded-xl md:min-h-min" > <Gateway />
          
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
     
    </BrowserRouter>
  );
}

export default App;
