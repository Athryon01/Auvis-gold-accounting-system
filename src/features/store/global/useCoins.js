import {create} from "zustand"
import coinsList from "../utils/coinsList"
let useCoins = create((set)=>({
    coins: coinsList,
    addCoin: (currentValue) => set((state)=>({coins:[...state.coins,currentValue]}))
}))
export default useCoins