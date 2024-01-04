"use client";
// swiper
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// swiper css
import "swiper/css";
import "swiper/css/bundle";
import SwipperButtons from "@/ui/SwipperButtons";

SwiperCore.use([Autoplay]);

export default function Testimonials() {
    return (
        <div className="py-20">
            <h1 className="text-center font-bold text-2xl CCCL:text-3xl DCCLX:text-4xl uppercase mb-16">
                Testi<span className="text-main">monials</span>
            </h1>

            <div className="flex items-center justify-center text-center">
                <Swiper
                    className="z-10"
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial1.jpg"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Amelia Turner | California
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial2.webp"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Marcus Johnson | New York
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial3.jpg"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Nathanial Lewis | California
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial4.jpg"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Vanessa Parker | Nevada
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial5.jpg"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Xavier Taylor | California
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial6.webp"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Maya Roberts | New york
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center justify-center text-center">
                            <div className="flex flex-col D:flex-row D:gap-4 items-center gap-3 mb-4">
                                <img
                                    className="w-[150px] h-[150px] object-cover rounded-full"
                                    src="/testimonial7.jpg"
                                    alt="User Photo"
                                />
                                <h1 className="font-bold text-xl">
                                    Sophia Miller | Texas
                                </h1>
                            </div>
                            <p className="px-4 font-medium CM:max-w-[900px] mb-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Suscipit nobis dolorum
                                consectetur dolore rerum pariatur expedita
                                dignissimos enim molestiae, vero laborum, fugit
                                nostrum numquam excepturi itaque sunt accusamus
                                aliquid praesentium!
                            </p>
                            <SwipperButtons />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
