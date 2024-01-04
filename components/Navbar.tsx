"use client";
// next
import Link from "next/link";
import { useEffect, useState } from "react";

// ui components
import Button from "@/ui/Button";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { IoColorPalette } from "react-icons/io5";

// context
import { useSideBar } from "@/context/SideBarContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [navActive, setNavActive] = useState<boolean>(false);
    const [navScroll, setNavScroll] = useState<boolean>(false);
    const [navLinkActive, setNavLinkActive] = useState<string>("#");
    const navLinks = [
        {
            id: 1,
            title: "Home",
            href: "#",
        },
        {
            id: 2,
            title: "About",
            href: "#about",
        },
        {
            id: 3,
            title: "Burgers",
            href: "#burgers",
        },
        {
            id: 4,
            title: "Feedback",
            href: "#feedback",
        },
    ];
    const socialLinks = [
        {
            id: "1",
            href: "https://www.github.com/ibrag1moff/",
            icon: <FaFacebookF size={20} />,
        },
        {
            id: "2",
            href: "https://www.github.com/ibrag1moff/",
            icon: <FaTwitter size={20} />,
        },
        {
            id: "3",
            href: "https://www.github.com/ibrag1moff/",
            icon: <FaInstagram size={20} />,
        },
        {
            id: "4",
            href: "https://www.github.com/ibrag1moff/",
            icon: <FaThreads size={20} />,
        },
        {
            id: "5",
            href: "https://www.github.com/ibrag1moff/",
            icon: <FaPinterestP size={20} />,
        },
    ];

    const { cartQuantity } = useCart();

    const { setSideBarActive } = useSideBar();

    useEffect(() => {
        window.addEventListener("click", () => {
            setNavActive(false);
        });
        window.addEventListener("scroll", () => {
            setNavActive(false);
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 20) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        });
    });

    return (
        <nav
            className={`${
                navScroll
                    ? "bg-black border-b border-white/20"
                    : "bg-transparent"
            } fixed w-full flex items-center justify-between px-3 z-20 py-2 ML:px-16 MCC:px-32`}
        >
            <Link
                onClick={() => setNavLinkActive("#")}
                className="z-10"
                href="/"
            >
                <img className="w-[80px]" src="/logo.png" alt="Logo" />
            </Link>
            {/* nav mobile */}
            <div className="DCCCXX:hidden">
                <div onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-row-reverse items-center gap-3 ">
                        <button
                            className="relative z-10"
                            onClick={() => setNavActive(!navActive)}
                        >
                            {navActive ? (
                                <AiOutlineClose size={35} />
                            ) : (
                                <BiMenuAltRight size={35} />
                            )}
                        </button>
                        <div className="relative z-10">
                            <button
                                onClick={(e) => {
                                    setSideBarActive(true);
                                    e.stopPropagation();
                                }}
                            >
                                <IoBagOutline size={30} />
                            </button>
                            <button
                                onClick={(e) => {
                                    setSideBarActive(true);
                                    e.stopPropagation();
                                }}
                                className={
                                    navActive
                                        ? "absolute right-[-8px] top-[-6px] bg-[#191919] rounded-full w-[20px] h-[20px] flex items-center justify-center font-medium"
                                        : "absolute right-[-8px] top-[-6px] bg-main rounded-full w-[20px] h-[20px] flex items-center justify-center font-medium"
                                }
                            >
                                {cartQuantity}
                            </button>
                        </div>
                    </div>

                    <div
                        className={
                            navActive
                                ? "fixed top-0 left-0 right-0 bottom-0 bg-main transition-all duration-300"
                                : "fixed left-[-100%] transition-all duration-300"
                        }
                    >
                        <div className="flex flex-col gap-2 items-center justify-center h-screen">
                            {navLinks.map((link) => (
                                <a
                                    key={link.id}
                                    className="text-xl font-semibold"
                                    href={link.href}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                        <div className="absolute bottom-4 left-1/2 translate-x-[-50%] flex flex-col items-center gap-7">
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a href={link.href} key={link.id}>
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* nav desktop */}
            <div className="hidden DCCCXX:flex items-center gap-4 ml-4 mr-auto CM:ml-12">
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        className={`${
                            link.href == navLinkActive && "text-main"
                        } hover:text-main transition-all duration-200 font-semibold`}
                        href={link.href}
                        onClick={() => setNavLinkActive(link.href)}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
            <div className="hidden DCCCXX:flex items-center gap-8">
                <div className="flex items-center gap-3 ml-auto CM:gap-6">
                    {socialLinks.map((link) => (
                        <a
                            className="hover:text-main transition-all duration-200"
                            href={link.href}
                            key={link.id}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <Button padding="10px" borderRadius="10px" href="#feedback">
                    order now
                </Button>
                <div className="relative">
                    <button
                        onClick={(e) => {
                            setSideBarActive(true);
                            e.stopPropagation();
                        }}
                        className="hover:text-main transition-all duration-200"
                    >
                        <IoBagOutline size={30} />
                    </button>
                    <button
                        onClick={(e) => {
                            setSideBarActive(true);
                            e.stopPropagation();
                        }}
                        className="absolute right-[-8px] top-[-6px] bg-main rounded-full w-[20px] h-[20px] flex items-center justify-center font-medium"
                    >
                        {cartQuantity}
                    </button>
                </div>
            </div>
        </nav>
    );
}
