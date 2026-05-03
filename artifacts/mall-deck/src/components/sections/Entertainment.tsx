import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Waves, Film, Zap, Mountain, Gamepad2, Music } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const ATTRACTIONS = [
  {
    icon: Mountain,
    title: "Indoor Ski Slope",
    description: "A 400-meter real-snow slope nestled inside the mall — the region's only indoor skiing experience.",
    stat: "400m",
    statLabel: "Slope Length",
    img: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&q=80",
  },
  {
    icon: Waves,
    title: "Deep Sea Aquarium",
    description: "3.5 million litres of ocean habitat. Sharks, manta rays, and coral reefs visible from the mall's central atrium.",
    stat: "3.5M",
    statLabel: "Litres of Ocean",
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
  },
  {
    icon: Film,
    title: "IMAX Cinema Complex",
    description: "A 24-screen cinema palace with private screening suites, Dolby Atmos, and a luxury members lounge.",
    stat: "24",
    statLabel: "Screens",
    img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    icon: Gamepad2,
    title: "Virtual Reality Zone",
    description: "30,000 sq ft of immersive VR and gaming experiences — from hyper-realistic racing to full-body haptic simulations.",
    stat: "30K",
    statLabel: "Sq Ft",
    img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Indoor Theme Park",
    description: "12 full-scale rides including two roller coasters, a drop tower, and a children's adventure zone.",
    stat: "12",
    statLabel: "Rides",
    img: "https://images.unsplash.com/photo-1567942712661-82b9b407abbf?w=800&q=80",
  },
  {
    icon: Music,
    title: "Live Events Arena",
    description: "A 5,000-capacity indoor arena hosting world-class concerts, fashion weeks, and brand launch events year-round.",
    stat: "5,000",
    statLabel: "Capacity",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
];

export default function Entertainment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      id="entertainment"
      ref={containerRef}
      className="py-24 md:py-36 bg-black relative overflow-hidden"
    >
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 opacity-15 pointer-events-none"
      >
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
          alt="Entertainment background"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="Beyond Retail"
          subtitle="Entertainment & Attractions"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {ATTRACTIONS.map((attraction, index) => {
            const Icon = attraction.icon;
            return (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative bg-black overflow-hidden cursor-default"
                data-testid={`card-entertainment-${index}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={attraction.img}
                    alt={attraction.title}
                    className="w-full h-full object-cover opacity-50 transition-all duration-700 group-hover:opacity-70 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon size={16} className="text-primary" />
                    <span className="text-[10px] uppercase tracking-widest text-primary/80">{attraction.statLabel}</span>
                    <span className="text-sm font-serif text-primary ml-auto">{attraction.stat}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-serif text-white mb-2">{attraction.title}</h3>
                  <p className="text-sm text-white/50 font-light leading-relaxed max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest">
            18M+ entertainment visitors annually · Extending average dwell time by 3.4 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
