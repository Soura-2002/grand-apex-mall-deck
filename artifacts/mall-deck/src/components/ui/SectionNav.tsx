import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "property", label: "Property" },
  { id: "milestones", label: "Milestones" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "entertainment", label: "Entertainment" },
  { id: "events", label: "Events" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {SECTIONS.map(({ id, label }) => {
        const isActive = activeSection === id;
        return (
          <div key={id} className="relative group flex items-center justify-end">
            <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity mr-2 px-2 py-1 bg-black/80 backdrop-blur-sm text-white/80 text-xs tracking-widest uppercase whitespace-nowrap pointer-events-none border border-white/10">
              {label}
            </div>
            <button
              onClick={() => scrollTo(id)}
              data-testid={`nav-dot-${id}`}
              className="relative flex items-center justify-center w-6 h-6 focus:outline-none"
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-primary"
                    : "w-1.5 h-1.5 bg-white/20 group-hover:bg-white/50"
                }`}
              />
              {isActive && (
                <motion.div
                  layoutId="active-dot-ring"
                  className="absolute inset-0 rounded-full border border-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
            </button>
          </div>
        );
      })}
    </div>
  );
}