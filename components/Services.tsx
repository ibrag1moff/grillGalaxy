// icons
import { GiHamburger } from "react-icons/gi";
import { BiSolidFoodMenu } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";

// components
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            id: 1,
            title: "Quality food",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <GiHamburger size={30} />,
        },
        {
            id: 2,
            title: "original recepes",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <BiSolidFoodMenu size={30} />,
        },
        {
            id: 3,
            title: "fast delivery",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            icon: <TbTruckDelivery size={30} />,
        },
    ];

    return (
        <div className="flex flex-col gap-8 items-center justify-center py-8 DC:flex-row DC:flex-wrap px-8">
            {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
            ))}
        </div>
    );
}
