// react
import { useState } from "react";

// context
import { useBurger } from "@/context/BurgerContext";
import { useCart } from "@/context/CartContext";

// icons
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";

// ui component
import Button from "@/ui/Button";

interface CartCardProps {
    id: number;
    quantity: number;
}

export default function CartCard({ id, quantity }: CartCardProps) {
    const { burgers } = useBurger();
    const item = burgers.find((x) => x.id === id);
    if (item == null) return null;

    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
        useCart();

    const [loadMore, setLoadMore] = useState<boolean>(false);

    return (
        <div className="flex flex-col items-center justify-center bg-white/30 w-[250px] min-h-[400px] p-4 rounded-xl">
            <img
                className="rounded-[200px] w-[110px] h-[100px] object-cover  CCCL:w-[120px]"
                src={item.image}
                alt="Img"
            />
            <div className="flex flex-col items-center justify-center text-center gap-1">
                <h1 className="font-bold text-xl">{item.name}</h1>
                <p className="font-medium">
                    {loadMore ? item.desc : item.desc.substring(0, 40)}
                    <br />
                    <span
                        onClick={() => setLoadMore(!loadMore)}
                        className="text-main font-medium"
                    >
                        {loadMore ? "Show less" : "Read more"}
                    </span>
                </p>
                <span className="font-bold text-xl mb-2">
                    ${item.price * quantity}
                </span>
                <div className="flex items-center gap-4 py-2">
                    <button
                        onClick={() => decreaseCartQuantity(item.id)}
                        className="bg-main p-3 rounded-full"
                    >
                        <FaMinus size={20} />
                    </button>
                    <span className="font-bold">{quantity}</span>
                    <button
                        onClick={() => increaseCartQuantity(id)}
                        className="bg-main p-3 rounded-full"
                    >
                        <FaPlus size={20} />
                    </button>
                </div>
                <Button
                    onClick={() => removeFromCart(id)}
                    href="#!"
                    padding="10px 15px"
                >
                    REMOVE FROM CART
                </Button>
            </div>
        </div>
    );
}
