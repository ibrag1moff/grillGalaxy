"use client";
// react
import { ReactNode, useContext, createContext, useState } from "react";

// data
import { data } from "@/data/data";

interface BurgerProviderProps {
    children: ReactNode;
}

interface BurgerContext {
    burgers: Burger[];
}

export interface Burger {
    id: number;
    name: string;
    image: string;
    desc: string;
    price: number;
}

const BurgerContext = createContext({} as BurgerContext);

export const useBurger = () => {
    return useContext(BurgerContext);
};

export default function BurgerProvider({ children }: BurgerProviderProps) {
    const [burgers, setBurgers] = useState<Burger[]>(data);

    return (
        <BurgerContext.Provider value={{ burgers }}>
            {children}
        </BurgerContext.Provider>
    );
}
