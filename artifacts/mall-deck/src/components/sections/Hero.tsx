import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ContactModal from "@/components/ui/ContactModal";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToProperty = () => {
    const el = document.getElementById("property");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Video Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/video/3571264/download/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-10 opacity-50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary uppercase tracking-[0.5em] text-sm md:text-base font-semibold mb-6"
        >
          Where the World Shops
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-12 tracking-wider"
        >
          THE GRAND<br />APEX
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 border-y border-white/10 py-8 w-full max-w-4xl mx-auto backdrop-blur-sm bg-black/20"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
              <AnimatedCounter value={5.2} decimals={1} suffix="M" duration={2.5} />
            </div>
            <div className="text-xs uppercase tracking-widest text-white/50">Square Feet</div>
          </div>
          <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0">
            <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
              <AnimatedCounter value={1200} suffix="+" duration={2.5} />
            </div>
            <div className="text-xs uppercase tracking-widest text-white/50">Luxury Stores</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-4xl font-serif text-primary mb-2">
              <AnimatedCounter value={180} suffix="M" duration={2.5} />
            </div>
            <div className="text-xs uppercase tracking-widest text-white/50">Annual Visitors</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto"
        >
          <Button
            onClick={scrollToProperty}
            className="flex-1 h-14 bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-sm font-semibold transition-all"
          >
            Explore Property
          </Button>
          <Button
            onClick={() => setModalOpen(true)}
            variant="outline"
            className="flex-1 h-14 border-white/30 text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-sm font-semibold transition-all bg-black/20 backdrop-blur-md"
          >
            Leasing Info
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToProperty}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/70" size={24} />
        </motion.div>
      </motion.div>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} />
    </section>
  );
}
