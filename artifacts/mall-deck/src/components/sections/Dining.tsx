import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const DINING_CONCEPTS = [
  {
    name: "Nobu",
    cuisine: "Japanese Fusion",
    tag: "Celebrity Chef",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
  },
  {
    name: "La Maison",
    cuisine: "French Fine Dining",
    tag: "Michelin Star",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    name: "Sakura Sky",
    cuisine: "Rooftop Omakase",
    tag: "Rooftop",
    img: "https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=800&q=80",
  },
  {
    name: "Ember & Oak",
    cuisine: "Contemporary Steakhouse",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
  },
  {
    name: "The Grand Terrace",
    cuisine: "Mediterranean Brunch",
    tag: "Outdoor",
    img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&q=80",
  },
  {
    name: "Saffron",
    cuisine: "Modern Indian",
    tag: "Award-Winning",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  },
];

const DINING_STATS = [
  { value: "120+", label: "Restaurants & Cafés" },
  { value: "22", label: "Celebrity Chef Restaurants" },
  { value: "3", label: "Rooftop Dining Venues" },
  { value: "180K", label: "Sq Ft Dining Floor Space" },
];

export default function Dining() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section
      id="dining"
      ref={containerRef}
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0f0c08 50%, #0a0a0a 100%)" }}
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] -top-[5%] opacity-10 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&q=80"
          alt="Dining background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="Culinary Destinations"
          subtitle="Dining & Lifestyle"
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {DINING_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="text-center p-6 border border-white/5 bg-white/[0.02]"
            >
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DINING_CONCEPTS.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group relative overflow-hidden cursor-pointer"
              data-testid={`card-dining-${index}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={restaurant.img}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-3 py-1 bg-black/60 backdrop-blur-sm">
                  {restaurant.tag}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-xl font-serif text-white mb-1">{restaurant.name}</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">{restaurant.cuisine}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <p className="text-white/50 text-lg font-light leading-relaxed">
            From Michelin-starred fine dining to artisan coffee roasters and global street food markets — every palate finds its expression at The Grand Apex.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
