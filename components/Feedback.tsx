"use client";
// ui components
import Input from "@/ui/Input";

// react-international-phone
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Feedback() {
    return (
        <div id="feedback" className="py-20">
            <h1 className="text-center font-bold text-2xl CCCL:text-3xl DCCLX:text-4xl uppercase mb-16">
                Feed<span className="text-main">back</span>
            </h1>

            <form className="flex flex-col items-center justify-center gap-4 px-3">
                <div className="flex flex-col CM:flex-row items-center gap-4">
                    <Input type="text" placeholder="First Name" required />
                    <Input type="text" placeholder="Last Name" required />
                </div>
                <div className="flex flex-col CM:flex-row items-center gap-4">
                    <Input type="email" placeholder="Email" required />
                    <PhoneInput
                        inputStyle={{
                            background: "rgb(255 255 255 / 0.2)",
                            height: "56px",
                            borderRadius: "8px",
                            outline: "none",
                            border: "none",
                            fontSize: "18px",
                            fontWeight: 500,
                            color: "#f5f5f5",
                        }}
                        inputClassName="phoneinput"
                        defaultCountry="az"
                    />
                </div>
                <textarea
                    className="bg-white/20 rounded-lg w-[250px] CCCL:w-[300px] CDLX:w-[420px] h-[200px] CM:w-[856px] p-4 border-none outline-none text-[#f5f5f5]  placeholder:font-medium placeholder:text-lg"
                    placeholder="Message:"
                />
                <button
                    className="bg-main rounded-[10px] border-none outline-none w-[170px] h-[50px] transition-all duration-200 font-medium text-lg"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </div>
    );
}
