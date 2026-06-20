import { create } from "zustand";


export const useCounterStore = create((set)=>({
    //state
    counter:3,
    //action
    increase:(n)=>set((state)=>({
        counter:state.counter+n
    })),
    decrease:()=>set((state)=>({
        counter:state.counter-1
    }))
}));