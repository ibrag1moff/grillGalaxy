// next
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// providers
import Providers from "@/providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "GrillGalaxy",
    description: "Created by ibrag1moff",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} bg-Main h-screen bg-center bg-cover text-white`}
            >
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
