import { create } from "zustand";

const useDrawer = create((set) => ({
  isDrawerOpen: false,
  drawerOperator: null,
  drawerMode: "add",
  drawerFields: null,
  openDrawer: ({ state,operator , mode,fields }) =>
    set(() => ({
      isDrawerOpen: state? state :false,
      drawerOperator: operator? operator:null,
      drawerMode: mode ? mode : "add",
      drawerFields: fields? fields :null,
    })),
}));

export default useDrawer;
