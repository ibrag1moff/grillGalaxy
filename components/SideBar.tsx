"use client";
// icons
import { AiOutlineClose } from "react-icons/ai";

// context
import { useSideBar } from "@/context/SideBarContext";
import { useCart } from "@/context/CartContext";

// components
import CartCard from "./CartCard";

// ui components
import Button from "@/ui/Button";

export default function SideBar() {
    const { sideBarActive, setSideBarActive } = useSideBar();
    const { cartItems, clearCart } = useCart();

    return (
        <div
            className={
                sideBarActive
                    ? "fixed top-0 left-0 right-0 bottom-0  bg-black/80 z-30 transition-all duration-200"
                    : "transition-all duration-200"
            }
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={
                    sideBarActive
                        ? "fixed top-0 left-0 right-0 bottom-0 transition-all  overflow-y-scroll duration-200 z-40 bg-[#191919] p-4 w-full DCCLX:w-[70%] h-full"
                        : "fixed left-[-200%] transition-all duration-200"
                }
            >
                <div className="flex items-center justify-between">
                    <a className="flex items-center gap-2" href="#">
                        <img className="w-[100px]" src="/logo.png" alt="Logo" />
                        <h1 className="font-bold text-[30px] leading-none max-w-[100px]">
                            Grill <span className="text-main">Galaxy</span>
                        </h1>
                    </a>
                    <button onClick={() => setSideBarActive(false)}>
                        <AiOutlineClose size={35} />
                    </button>
                </div>
                {cartItems.length > 0 ? (
                    <>
                        <div className="flex flex-col items-center justify-center relative gap-8 DCCLX:flex-row DCCLX:flex-wrap mt-12 px-1">
                            {cartItems.map((item) => (
                                <CartCard key={item.id} {...item} />
                            ))}
                        </div>
                    </>
                ) : (
                    <h1 className="font-bold text-3xl absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center CDLX:text-4xl">
                        No <span className="text-main">Items</span>
                    </h1>
                )}
            </div>
        </div>
    );
}
