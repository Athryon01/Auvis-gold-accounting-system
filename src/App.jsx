import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { BrowserRouter } from "react-router";
import Gateway from "./features/router/Gateway";
import { SiteHeader } from "./features/layout/pages/NavHeader";
import { NavSidebar } from "./features/layout/pages/NavSidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <NavSidebar />
            <SidebarInset>
              <div>
                <Gateway />
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
