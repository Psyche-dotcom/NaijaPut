import AboutUs from "@/components/sections/AboutUs";
import Investment from "@/components/sections/Investment";
import LastHero from "@/components/sections/LastHero";
import Steps from "@/components/sections/Steps";
import Testimonial from "@/components/sections/Testimonial";
import User from "@/components/sections/User";
import Layout1 from "../components/layout/Layout1";
import Hero from "../components/sections/hero";

export default function Home() {
  return (
    <Layout1>
      <main>
        <Hero />
        <User />
        <Steps />
        <AboutUs />
        <Investment />
        <Testimonial />
        <LastHero />
      </main>
    </Layout1>
  );
}
