interface InputProps {
    type: string;
    placeholder: string;
    required?: boolean;
}

export default function Input({ type, placeholder, required }: InputProps) {
    return (
        <input
            className="bg-white/20 rounded-lg w-[250px] CCCL:w-[300px] CDLX:w-[420px] p-4 border-none outline-none text-[#f5f5f5]  placeholder:font-medium placeholder:text-lg"
            type={type}
            required={required}
            placeholder={placeholder}
        />
    );
}
