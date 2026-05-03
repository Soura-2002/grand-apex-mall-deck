import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-white mb-6">
              THE GRAND APEX
            </h2>
            <p className="text-white/50 max-w-sm font-light leading-relaxed">
              Where architecture meets commerce. The world's most definitive luxury retail and lifestyle destination.
            </p>
          </div>
          
          <div>
            <h3 className="text-primary tracking-widest uppercase text-sm mb-6">Leasing</h3>
            <ul className="space-y-4 text-white/50 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Retail Spaces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury Boutiques</a></li>
              <li><a href="#" className="hover:text-white transition-colors">F&B Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand Activations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-primary tracking-widest uppercase text-sm mb-6">Contact</h3>
            <ul className="space-y-4 text-white/50 font-light">
              <li>leasing@thegrandapex.com</li>
              <li>+1 (800) 555-APEX</li>
              <li>1 Apex Boulevard<br/>Metropolis, NY 10001</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/30 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} The Grand Apex. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
