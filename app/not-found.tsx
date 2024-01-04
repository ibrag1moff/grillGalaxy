// next
import Link from "next/link";

// icons
import { IoArrowBack } from "react-icons/io5";

export default function NotFound() {
    return (
        <div className="h-screen">
            <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-center">
                <h1 className="font-extrabold text-2xl CDLX:text-4xl">
                    <span className="text-main text-5xl">404</span> <br /> page
                    not found
                </h1>
                <Link
                    className="bg-main font-bold rounded-[100px] p-3 flex items-center justify-center gap-3 mt-8 uppercase"
                    href="/"
                >
                    go back
                    <span>
                        <IoArrowBack />
                    </span>
                </Link>
            </div>
        </div>
    );
}
