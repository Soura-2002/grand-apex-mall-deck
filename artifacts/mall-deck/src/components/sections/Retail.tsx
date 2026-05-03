import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Progress } from "@/components/ui/progress";

const BRANDS = [
  "ZARA", "H&M", "APPLE", "SAMSUNG", "NIKE", "ADIDAS", "UNIQLO", "SEPHORA", "M.A.C", "DYSON"
];

export default function Retail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const scrollXReverse = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <section id="retail" ref={containerRef} className="py-24 md:py-32 bg-[#0f0f0f] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 mb-16">
        <SectionHeader title="The World's Most Coveted Retail Addresses" subtitle="Premium Retail" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-black/40 border border-white/5 p-8 backdrop-blur-sm"
          >
            <h4 className="text-white/50 uppercase tracking-widest text-xs mb-4">Current Occupancy</h4>
            <div className="text-5xl font-serif text-white mb-6">
              <AnimatedCounter value={98.7} decimals={1} suffix="%" />
            </div>
            <Progress value={98.7} className="h-1 bg-white/10" indicatorClassName="bg-primary" />
            <p className="text-white/40 text-sm mt-4 font-light">Consistent 98%+ occupancy rate since opening in 2018.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/40 border border-white/5 p-8 backdrop-blur-sm"
          >
            <h4 className="text-white/50 uppercase tracking-widest text-xs mb-4">YoY Sales Growth</h4>
            <div className="text-5xl font-serif text-white mb-6">
              <AnimatedCounter value={14.2} decimals={1} suffix="%" />
            </div>
            <Progress value={65} className="h-1 bg-white/10" indicatorClassName="bg-primary" />
            <p className="text-white/40 text-sm mt-4 font-light">Outperforming regional retail benchmarks by 3x.</p>
          </motion.div>
        </div>
      </div>

      {/* Marquee Tickers */}
      <div className="space-y-8 relative z-10 w-full overflow-hidden py-10 bg-black/20 border-y border-white/5">
        <motion.div style={{ x: scrollX }} className="flex whitespace-nowrap gap-16 md:gap-32 w-max px-8">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-white/20 hover:text-white transition-colors duration-500 cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
        
        <motion.div style={{ x: scrollXReverse }} className="flex whitespace-nowrap gap-16 md:gap-32 w-max px-8">
          {[...BRANDS, ...BRANDS].reverse().map((brand, i) => (
            <div key={i} className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-white/20 hover:text-primary transition-colors duration-500 cursor-default">
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
