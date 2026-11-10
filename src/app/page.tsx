import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatWhatsApp } from "@/components/FloatWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Accommodations } from "@/components/sections/Accommodations";
import { Amenities } from "@/components/sections/Amenities";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Amenities />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <FloatWhatsApp />
    </>
  );
}
