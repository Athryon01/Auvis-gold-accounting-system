import {create} from "zustand"
import jewelriesList from "../utils/jewelriesList"
let useJewelries = create((set)=>({
    jewelries: jewelriesList,
    addJewelry: (currentValue) => set((state)=>({jewelries:[...state.jewelries,currentValue]}))
}))
export default useJewelries