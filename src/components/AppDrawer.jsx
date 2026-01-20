import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import AddFunction from "@/features/shared/components/AddFunction"
import useDrawer from "@/features/store/global/useDrawer"

export function AppDrawer() {
  let {isDrawerOpen,openDrawer,drawerMode,drawerOperator,drawerFields} = useDrawer()
  console.log(drawerMode,drawerOperator,drawerFields);

 
  console.log(isDrawerOpen);
  
  return (
    <Sheet open={isDrawerOpen} onOpenChange={()=>{openDrawer({state:false})}} >
      {/* <SheetTrigger   asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger> */}
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{drawerMode&&drawerMode} fields</SheetTitle>
          <SheetDescription>
            Add to your lists here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
       <AddFunction/>
      </SheetContent>
    </Sheet>
  )
}
