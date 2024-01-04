interface ServiceCardProps {
    id: number;
    title: string;
    text: string;
    icon: JSX.Element;
}

export default function ServiceCard({
    id,
    title,
    text,
    icon,
}: ServiceCardProps) {
    return (
        <div className="bg-main py-4 w-[250px] D:w-[300px] h-[200px] D:h-[250px] rounded-md shadow-md">
            <div className="flex flex-col gap-4 items-center justify-center h-full">
                <div className="bg-white p-4 rounded-full text-black">
                    {icon}
                </div>
                <h2 className="font-bold uppercase text-lg">{title}</h2>
                <p className="font-medium text-center px-3">{text}</p>
            </div>
        </div>
    );
}
