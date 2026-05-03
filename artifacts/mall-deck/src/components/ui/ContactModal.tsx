import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultInquiryType?: string;
}

export default function ContactModal({ open, onOpenChange, defaultInquiryType = "leasing" }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => {
        onOpenChange(false);
        setTimeout(() => setSubmitted(false), 500);
      }, 2000);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background border-white/10 text-white rounded-none p-8">
        <DialogHeader className="mb-6">
          <DialogTitle className="font-serif text-3xl font-light">Partner With Us</DialogTitle>
          <DialogDescription className="text-white/50 font-light">
            Fill out the form below and our executive team will contact you shortly.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full border border-primary text-primary flex items-center justify-center mx-auto mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h3 className="text-xl font-serif text-white mb-2">Inquiry Received</h3>
            <p className="text-white/50 font-light">We will be in touch within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs tracking-widest uppercase text-white/50">Name</Label>
                <Input id="name" required className="bg-white/5 border-white/10 text-white rounded-none focus-visible:ring-primary h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs tracking-widest uppercase text-white/50">Company</Label>
                <Input id="company" required className="bg-white/5 border-white/10 text-white rounded-none focus-visible:ring-primary h-12" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs tracking-widest uppercase text-white/50">Email</Label>
              <Input id="email" type="email" required className="bg-white/5 border-white/10 text-white rounded-none focus-visible:ring-primary h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-xs tracking-widest uppercase text-white/50">Inquiry Type</Label>
              <Select defaultValue={defaultInquiryType}>
                <SelectTrigger className="bg-white/5 border-white/10 text-white rounded-none h-12 focus:ring-primary">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-white/10 text-white rounded-none">
                  <SelectItem value="leasing">Leasing</SelectItem>
                  <SelectItem value="sponsorship">Sponsorship & Brand Activations</SelectItem>
                  <SelectItem value="events">Event Bookings</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs tracking-widest uppercase text-white/50">Message</Label>
              <Textarea id="message" rows={4} className="bg-white/5 border-white/10 text-white rounded-none focus-visible:ring-primary resize-none" />
            </div>

            <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-sm font-semibold transition-all">
              Submit Inquiry
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
