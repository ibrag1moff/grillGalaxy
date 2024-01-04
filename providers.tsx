"use client";
// react
import { ReactNode } from "react";

// context
import CartContextProvider from "./context/CartContext";
import BurgerProvider from "./context/BurgerContext";
import SideBarProvider from "./context/SideBarContext";

// components
import SideBar from "./components/SideBar";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <CartContextProvider>
            <BurgerProvider>
                <SideBarProvider>
                    <SideBar />
                    {children}
                </SideBarProvider>
            </BurgerProvider>
        </CartContextProvider>
    );
}
