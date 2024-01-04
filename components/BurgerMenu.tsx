"use client";
// react
import { useState } from "react";

// context
import { useBurger } from "@/context/BurgerContext";

// components
import BurgerCard from "./BurgerCard";
import Button from "@/ui/Button";

export default function BurgerMenu() {
    const { burgers } = useBurger();

    const [loadMore, setLoadMore] = useState<number>(3);

    return (
        <div id="burgers" className="py-20">
            <h1 className="text-center font-bold text-2xl CCCL:text-3xl DCCLX:text-4xl uppercase mb-16">
                our <span className="text-main">menu</span>
            </h1>
            <div className="flex flex-col items-center justify-center gap-8 D:flex-row D:flex-wrap px-4 MCCCXL:px-12">
                {burgers.slice(0, loadMore).map((burger) => (
                    <BurgerCard key={burger.id} burger={burger} />
                ))}
            </div>
            <div className="mt-12 text-center">
                <Button
                    onClick={() => {
                        loadMore === burgers.length
                            ? setLoadMore(loadMore - 6)
                            : setLoadMore(loadMore + 3);
                    }}
                    padding="12px 45px"
                    href="#!"
                    borderRadius="100px"
                >
                    {loadMore === burgers.length ? "Show less" : "Load more"}
                </Button>
            </div>
        </div>
    );
}
