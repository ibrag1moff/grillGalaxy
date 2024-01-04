export default function About() {
    return (
        <div id="about" className="py-32">
            <div className="flex flex-col CM:flex-row gap-8 items-center justify-center">
                <img
                    className="px-4 h-[400px] object-cover"
                    src="/about.webp"
                    alt=""
                />

                <div className="pr-4">
                    <h1 className="font-bold text-3xl text-center CM:text-right mb-9">
                        We are doing more than
                        <br /> you expect
                    </h1>
                    <p className="font-medium px-3 text-center CM:text-right DC:max-w-[590px]">
                        Welcome to Grill Galaxy, where culinary exploration
                        meets cosmic flavors! Step into a world where sizzling
                        grills and mouthwatering aromas take you on a journey
                        through the universe of taste. At Grill Galaxy, we
                        elevate the art of burger crafting to a celestial level,
                        creating an experience that's truly out of this world.
                        <br />
                        <br />
                        Our space-themed burger joint is designed to transport
                        you to a different culinary dimension. The ambiance is a
                        fusion of modern chic and cosmic wonder, with deep
                        blues, sparkling stars, and planetary motifs adorning
                        the walls. Whether you're a burger enthusiast or an
                        adventurous foodie, Grill Galaxy is the place where
                        flavor orbits excellence.
                    </p>
                </div>
            </div>
        </div>
    );
}
