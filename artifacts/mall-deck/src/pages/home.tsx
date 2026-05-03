import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Property from "@/components/sections/Property";
import Timeline from "@/components/sections/Timeline";
import Retail from "@/components/sections/Retail";
import Luxury from "@/components/sections/Luxury";
import Dining from "@/components/sections/Dining";
import Entertainment from "@/components/sections/Entertainment";
import Events from "@/components/sections/Events";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Property />
        <Timeline />
        <Retail />
        <Luxury />
        <Dining />
        <Entertainment />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
