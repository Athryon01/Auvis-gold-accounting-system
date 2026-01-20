import React, { useId } from "react";
import FieldGenerator from "./FieldGenerator";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import useDrawer from "@/features/store/global/useDrawer";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import randomID from "../functions/randomID";
function AddFunction() {
  let { drawerOperator, drawerFields,openDrawer } = useDrawer();
  let { register, handleSubmit } = useForm();
  function submit(data) {
    drawerOperator && drawerOperator({ ...data, id: randomID() });
    console.log(data);
    openDrawer({state:false})
  }

  return (
    <>
      <div className="grid flex-1 auto-rows-min gap-6 px-4">
        <FieldGenerator register={register} fields={drawerFields} />
      </div>
      <SheetFooter>
        <Button type="submit" onClick={handleSubmit(submit)}>
          submit
        </Button>
        <SheetClose asChild>
          <Button variant="outline">Close</Button>
        </SheetClose>
      </SheetFooter>
    </>
  );
}

export default AddFunction;
