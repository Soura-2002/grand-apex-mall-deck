import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const LUXURY_BRANDS = ["LOUIS VUITTON", "GUCCI", "HERMÈS", "CARTIER", "CHANEL", "DIOR", "PRADA", "ROLEX"];

export default function Luxury() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section id="luxury" ref={containerRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <img 
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1920&q=80" 
            alt="Luxury Retail" 
            className="w-full h-full object-cover opacity-30"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        <SectionHeader title="An Unprecedented Luxury Offering" subtitle="The Diamond Avenue" align="center" />

        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-white/70 font-light leading-relaxed"
          >
            A dedicated wing featuring soaring 12-meter ceilings, exclusive VIP drop-off zones, and bespoke marble facades. This is where the world's most prestigious maisons craft their ultimate flagship expressions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {LUXURY_BRANDS.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col items-center justify-center p-8 border border-white/5 bg-black/40 hover:bg-white/5 backdrop-blur-sm transition-all duration-500 cursor-pointer"
            >
              <div className="text-xl md:text-2xl font-serif tracking-widest text-white/50 group-hover:text-primary transition-colors duration-500">
                {brand}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
