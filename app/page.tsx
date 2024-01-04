// components
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import BurgerMenu from "@/components/BurgerMenu";
import Testimonials from "@/components/Testimonials";
import Feedback from "@/components/Feedback";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <BurgerMenu />
            <Testimonials />
            <Feedback />
        </div>
    );
}
