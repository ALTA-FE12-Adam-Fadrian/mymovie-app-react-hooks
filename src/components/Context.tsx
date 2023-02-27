import React,{useState, useContext, createContext,} from "react";


const CountContext = createContext(0);

export const useCountContext = () => {
    const context: any = useContext(CountContext)
}