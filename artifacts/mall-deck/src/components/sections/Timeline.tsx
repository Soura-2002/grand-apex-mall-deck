import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const MILESTONES = [
  { year: "2015", title: "Groundbreaking", desc: "A $12B investment — the largest private development in the region's history." },
  { year: "2018", title: "Grand Opening", desc: "180,000 visitors on day one. International headlines across 40 countries." },
  { year: "2019", title: "Luxury Wing Opens", desc: `"Diamond Avenue" — 80 flagship luxury boutiques open to unprecedented demand.` },
  { year: "2020", title: "Digital Transformation", desc: "Pioneered AI-powered personalization, becoming the world's first smart mall." },
  { year: "2022", title: "Entertainment Expansion", desc: "Indoor ski slope and aquarium open, adding 2M annual visitors." },
  { year: "2024", title: "Global Recognition", desc: "Named #1 shopping destination worldwide by Condé Nast Traveller for the second consecutive year." },
  { year: "2026", title: "Phase III Launch", desc: "500,000 sq ft expansion underway — new hotel tower, wellness district, and arts pavilion." },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="milestones" className="bg-[#0c0c0c] py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader title="A Legacy of Firsts" subtitle="Milestones" />

        <div className="relative mt-24 max-w-5xl mx-auto">
          {/* Mobile Center Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/30 -translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="space-y-12 md:space-y-0">
            {MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex md:justify-between items-center md:items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 md:translate-y-6 shadow-[0_0_10px_rgba(201,169,110,0.5)] z-10" />

                  {/* Desktop Stem */}
                  <div className="hidden md:block w-1/2" />

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? "md:pr-16 text-left md:text-right" : "md:pl-16 text-left"}`}>
                    <div className="p-6 bg-black/50 border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-colors duration-500">
                      <h3 className="text-4xl md:text-5xl font-serif text-primary mb-4">{item.year}</h3>
                      <h4 className="text-xl md:text-2xl font-serif text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}