// react
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
    children: ReactNode;
    href: string;
    padding: string;
    borderRadius?: string;
    bg?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    href,
    padding,
    borderRadius,
    bg,
    onClick,
}: ButtonProps) {
    return (
        <a
            className="font-bold"
            style={{
                padding: padding,
                borderRadius: borderRadius || "10px",
                background: bg || "#fa8128",
            }}
            href={href}
            onClick={onClick}
        >
            {children}
        </a>
    );
}
