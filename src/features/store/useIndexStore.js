import { create } from "zustand";
import { authSlice } from "./slice/authSlice";

export const useIndexStore = create((...a) => ({
  ...authSlice(...a),
}));
