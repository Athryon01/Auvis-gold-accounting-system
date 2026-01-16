import {create} from "zustand"
import goldsList from "../utils/goldsList"
let useGolds = create((set)=>({
    golds: goldsList,
    addGold: (currentValue) => set((state)=>({golds:[...state.golds,currentValue]}))
}))
export default useGolds