"use client";
// swiper
import { useSwiper } from "swiper/react";

// icons
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

export default function SwipperButtons() {
    const swiper = useSwiper();
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={() => swiper.slidePrev()}
                className="p-4 bg-main font-bold rounded-full"
            >
                <GrPrevious size={20} />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="p-4 bg-main font-bold rounded-full"
            >
                <GrNext size={20} />
            </button>
        </div>
    );
}
