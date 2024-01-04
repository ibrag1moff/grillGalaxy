// icons
import {
    FaFacebookF,
    FaInstagram,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";

export default function Footer() {
    const footerLinks = [
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
    return (
        <>
            <footer className="mt-20 bg-black border-t border-white/30">
                <div className="flex flex-col D:flex-row D:flex-wrap D:justify-evenly items-center gap-14  justify-center py-8">
                    <a className="flex items-center gap-3" href="#">
                        <img className="w-[100px]" src="/logo.png" alt="Logo" />
                        <h1 className="font-bold text-[30px] leading-none max-w-[100px]">
                            Grill <span className="text-main">Galaxy</span>
                        </h1>
                    </a>
                    <div className="flex flex-col items-center justify-center">
                        {footerLinks.map((link) => (
                            <a
                                className="font-semibold text-lg"
                                href={link.href}
                                key={link.id}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                className="font-bold"
                                key={link.id}
                                href={link.href}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
            <div className="flex items-center justify-between bg-[#131313] py-4 text-center px-3 D:px-9">
                <h1 className="font-bold">
                    Created by <span className="text-main">ibrag1moff</span>
                </h1>
                <a className="bg-main p-3 rounded-full font-bold" href="#">
                    <FaArrowUpLong size={20} />
                </a>
            </div>
        </>
    );
}
