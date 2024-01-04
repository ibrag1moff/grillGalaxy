// ui component
import Button from "@/ui/Button";

export default function Hero() {
    return (
        <div className="flex flex-col items-center gap-8 pt-24 DCCLX:flex-row-reverse DCCLX:pt-32 pb-8 DCCLX:justify-evenly">
            <div>
                <img src="/hero.png" alt="HeroImg" />
            </div>
            <div className="flex flex-col gap-3 items-center text-center DCCLX:items-start DCCLX:text-left DCCLX:ml-6 ML:ml-16 MCC:ml-32 CM:ml-9">
                <h1 className="font-bold text-3xl DCCLX:text-4xl CM:text-5xl">
                    Grill <span className="text-main">Galaxy</span>
                </h1>
                <p className="max-w-[320px] DCCLX:max-w-[350px] ML:max-w-[500px]">
                    Welcome to Grill Galaxy, where culinary exploration meets
                    cosmic flavors! Step into a world where sizzling grills and
                    mouthwatering aromas take you on a journey through the
                    universe of taste.
                </p>
                <Button padding="12px 25px" href="#feedback">
                    order now
                </Button>
            </div>
        </div>
    );
}
