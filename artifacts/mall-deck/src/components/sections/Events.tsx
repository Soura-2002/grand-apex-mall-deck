import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Megaphone, Calendar } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactModal from "@/components/ui/ContactModal";

const CTA_PATHS = [
  {
    icon: Building2,
    title: "Leasing Inquiries",
    description:
      "Secure a flagship address in one of the world's most visited retail destinations. Spaces from 500 to 50,000 sq ft available across all zones.",
    cta: "Enquire About Leasing",
    accentClass: "from-primary/20 to-primary/5",
    borderClass: "border-primary/20 hover:border-primary/60",
    inquiryType: "leasing",
  },
  {
    icon: Megaphone,
    title: "Sponsorship & Brand Activations",
    description:
      "Reach 500,000 daily visitors. From digital out-of-home to experiential pop-ups, we create campaigns that move products and minds.",
    cta: "Explore Sponsorship",
    accentClass: "from-white/10 to-white/5",
    borderClass: "border-white/10 hover:border-white/30",
    inquiryType: "sponsorship",
  },
  {
    icon: Calendar,
    title: "Event Bookings",
    description:
      "Host global product launches, fashion shows, concerts, and brand activations across our dedicated event spaces and 5,000-seat arena.",
    cta: "Book an Event",
    accentClass: "from-white/10 to-white/5",
    borderClass: "border-white/10 hover:border-white/30",
    inquiryType: "event",
  },
];

export default function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultInquiry, setDefaultInquiry] = useState("leasing");

  const openModal = (inquiryType: string) => {
    setDefaultInquiry(inquiryType);
    setModalOpen(true);
  };


  return (
    <section
      id="events"
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #080604 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(201,169,110,0.06),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader
          title="Partner With Us"
          subtitle="Events & Booking"
          align="center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-lg text-white/50 font-light max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          The Grand Apex isn't just a destination — it's a global platform. 180 million annual visitors, unrivalled footfall, and infrastructure built for the world's most ambitious brands.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {CTA_PATHS.map((path, index) => {
            const Icon = path.icon;
            return (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`group relative border ${path.borderClass} bg-gradient-to-b ${path.accentClass} p-8 md:p-10 cursor-pointer transition-all duration-500 flex flex-col`}
                onClick={() => openModal(path.inquiryType)}
                data-testid={`card-cta-${path.inquiryType}`}
              >
                <Icon size={28} className="text-primary mb-6" />
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{path.title}</h3>
                <p className="text-white/50 font-light leading-relaxed text-sm flex-1 mb-8">{path.description}</p>
                <div className="flex items-center gap-3 text-primary text-sm uppercase tracking-widest font-semibold group-hover:gap-5 transition-all duration-300">
                  {path.cta}
                  <ArrowRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="border-t border-white/5 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "180M", label: "Annual Visitors" },
            { value: "500K", label: "Daily Footfall" },
            { value: "340+", label: "Annual Events" },
            { value: "98.7%", label: "Occupancy Rate" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-serif text-primary mb-2">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ContactModal open={modalOpen} onOpenChange={setModalOpen} defaultInquiryType={defaultInquiry} />
    </section>
  );
}
