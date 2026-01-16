import {create} from "zustand"
import commoditiesList from "../utils/commoditiesList"
let useCommodities = create((set)=>({
    commodities: commoditiesList,
    addCommodity: (currentValue) => set((state)=>({commodities:[...state.commodities,currentValue]}))
}))
export default useCommodities