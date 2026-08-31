import { GraduationCap, Scissors, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="space-y-16 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-brand-ivory bg-brand-black">
      <SEO
        title="About R Crown Salon & Makeup Academy | Rajajinagar"
        description="Learn about R Crown Salon & Makeup Studio, the premier professional makeup and beautician academy in Rajajinagar, Bengaluru. Build real beauty career skills."
        canonicalUrl="https://rcrown.in/about"
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
          Academy &amp; Makeup Studio
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory tracking-wide uppercase">
          About R Crown
        </h1>
        <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
          Located in Rajajinagar, Bengaluru, R Crown is a professional training center and salon studio designed to nurture the next generation of beauty and makeup professionals.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4">
        {/* Left Image Placeholder */}
        <div className="relative aspect-[4/3] border border-brand-gold/25 shadow-2xl overflow-hidden bg-brand-black rounded-sm group">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
            alt="Makeup training session at R Crown Academy"
            className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-brand-black/25 flex items-end p-4">
            <span className="text-[10px] text-white/50 italic">*Demonstration placeholder photo</span>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-gold uppercase tracking-wider">
            Our Training Philosophy
          </h2>
          <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
            At R Crown, we believe that the beauty industry cannot be learned solely from textbooks. Our curriculum focuses heavily on <strong className="text-brand-gold font-semibold">100% hands-on practice</strong> and practical applications in a real salon environment under direct mentorship.
          </p>
          <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
            Whether you are starting from scratch or aiming to refine your makeup artistry, our courses are structured to provide comprehensive skills in makeup, skin treatments, hair styling, and nail extensions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center space-x-3 text-brand-ivory">
              <Check className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ivory/95">Flexible Batches</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-ivory">
              <Check className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ivory/95">Salon Internships</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-ivory">
              <Check className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ivory/95">₹25k Hair Kit Free</span>
            </div>
            <div className="flex items-center space-x-3 text-brand-ivory">
              <Check className="h-4 w-4 text-brand-gold shrink-0" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-ivory/95">Bridal Mastery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academy vs Studio Priority Display */}
      <div className="bg-[#111111] border border-brand-gold/15 p-8 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left rounded-sm">
        <div className="space-y-4">
          <div className="inline-flex p-3 bg-brand-black border border-brand-gold/10 text-brand-gold rounded-sm">
            <GraduationCap className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-serif text-brand-gold uppercase tracking-wider">Professional Academy</h3>
          <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">
            Generating expert beauticians and independent salon owners. Our comprehensive Advanced Makeup &amp; Beautician course bundles hair and nail training to maximize your career prospects in the beauty landscape.
          </p>
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase transition border-b border-brand-gold/25 pb-0.5"
          >
            Enquire About Admissions &rarr;
          </a>
        </div>

        <div className="space-y-4">
          <div className="inline-flex p-3 bg-brand-black border border-brand-gold/10 text-brand-gold rounded-sm">
            <Scissors className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-serif text-brand-gold uppercase tracking-wider">Makeup &amp; Salon Studio</h3>
          <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">
            Delivering flawless bridal, HD makeovers, and custom salon cuts/styling for our local Rajajinagar clients using premium brand products and customized detailing.
          </p>
          <Link
            to="/makeup-services"
            className="inline-block text-xs font-bold tracking-widest text-brand-gold hover:text-brand-goldDark uppercase transition border-b border-brand-gold/25 pb-0.5"
          >
            Explore Services &rarr;
          </Link>
        </div>
      </div>

      {/* Core Call to Action */}
      <div className="bg-brand-charcoal border border-brand-gold/20 p-8 md:p-12 text-center space-y-6 rounded-sm relative">
        <div className="absolute inset-0 z-0 bg-brand-maroon/5 blur-[40px] pointer-events-none rounded-full" />
        <h3 className="text-2xl font-serif text-brand-ivory uppercase tracking-wider relative z-10">
          Ready to Start Your Career Journey?
        </h3>
        <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto font-light leading-relaxed relative z-10">
          Enroll in our Advanced Makeup &amp; Beautician Course to get the ₹25,000 hair kit for free, along with complimentary hair and nail training.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-xs tracking-widest uppercase transition rounded-sm shadow-md"
          >
            Get Course Details
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-[#F5F0E6]/20 hover:bg-[#F5F0E6]/5 text-brand-ivory font-bold text-xs tracking-widest uppercase transition rounded-sm"
          >
            Contact Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
