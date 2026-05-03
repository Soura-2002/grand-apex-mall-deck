import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Property() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="property" ref={containerRef} className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader title="A Location Without Equal" subtitle="The Epicenter of Commerce" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <h3 className="text-2xl font-serif text-white mb-3 flex items-end gap-4">
                Prime Location
                <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors mb-2" />
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                Situated in the heart of the metropolitan district, accessible by 4 major transit hubs with a dedicated high-speed rail link directly into the main concourse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="group"
            >
              <h3 className="text-2xl font-serif text-white mb-3 flex items-end gap-4">
                Catchment Area
                <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors mb-2" />
              </h3>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                An unprecedented reach capturing the region's most affluent demographics.
              </p>
              <div className="text-4xl font-serif text-primary">
                <AnimatedCounter value={50} suffix="M+" /> <span className="text-lg text-white/40 uppercase tracking-widest font-sans">People within 100km</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <h3 className="text-2xl font-serif text-white mb-3 flex items-end gap-4">
                Average Dwell Time
                <div className="flex-1 h-[1px] bg-white/10 group-hover:bg-primary/50 transition-colors mb-2" />
              </h3>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                The immersive environment encourages extended visits, significantly boosting retail conversion.
              </p>
              <div className="text-4xl font-serif text-primary">
                <AnimatedCounter value={4.5} decimals={1} suffix=" Hours" />
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative h-[600px] w-full group overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700 z-10 mix-blend-overlay" />
            <motion.div style={{ y: imgY }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <img 
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1920&q=80" 
                alt="City Skyline" 
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-xl border border-white/10 p-8 z-20"
            >
              <div className="text-sm text-primary tracking-widest uppercase mb-2">Annual Retail Sales</div>
              <div className="text-3xl font-serif text-white">
                $<AnimatedCounter value={8.4} decimals={1} suffix=" Billion" duration={2} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
