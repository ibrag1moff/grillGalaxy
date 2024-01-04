import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                Main: "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url('/bg.jpg')",
            },
            colors: {
                main: "#fa8128",
            },
            screens: {
                CCCL: "350px",
                CDLX: "460px",
                D: "500px",
                DC: "600px",
                DCCLX: "760px",
                DCCCXX: "820px",
                CM: "900px",
                ML: "1050px",
                MCC: "1200px",
                MCCCXL: "1340px",
            },
        },
    },
    plugins: [],
};
export default config;
