// react
import { useState } from "react";

// burger interface
import { Burger } from "@/context/BurgerContext";

// ui components
import Button from "@/ui/Button";

// icons
import { IoCart } from "react-icons/io5";

// context
import { useCart } from "@/context/CartContext";

interface BurgerCardProps {
    burger: Burger;
}

export default function BurgerCard({ burger }: BurgerCardProps) {
    const [readMore, setReadMore] = useState<boolean>(false);

    const { increaseCartQuantity } = useCart();

    return (
        <div className="flex flex-col items-center justify-center bg-white/20 rounded-2xl w-[235px] min-h-[400px] CCCL:w-[320px] p-3 gap-3">
            <img
                className="rounded-[200px] w-[110px] h-[100px] object-cover  CCCL:w-[120px]"
                src={burger.image}
                alt="Burger's img"
            />
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-bold text-xl">{burger.name}</h1>
                <p className="mb-3">
                    {readMore ? burger.desc : burger.desc.substring(0, 50)}
                    <br />
                    <button
                        className="text-main font-semibold"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? "Show less" : "Read more"}
                    </button>
                </p>
                <Button
                    onClick={() => increaseCartQuantity(burger.id)}
                    padding="10px 20px"
                    href="#!"
                >
                    <span className="flex items-center gap-3">
                        <IoCart size={25} />
                        Add To Cart
                    </span>
                </Button>
            </div>
        </div>
    );
}
