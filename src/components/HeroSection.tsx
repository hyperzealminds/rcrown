import { Check, MessageSquare, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MAIN_COURSE } from "../data/courses";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function HeroSection() {
  const course = MAIN_COURSE;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background Image Wrapper with Pan/Zoom animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600"
          alt="Indian bridal makeup art by R Crown Academy"
          className="w-full h-full object-cover origin-center animate-image-zoom brightness-[0.35]"
        />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Brand Narrative */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left text-white animate-fade-up">
          <span className="inline-block px-3 py-1 bg-brand-gold/25 border border-brand-gold/40 text-brand-champagne text-xs font-semibold tracking-widest uppercase rounded-sm">
            Rajajinagar • Bengaluru
          </span>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-white tracking-wide leading-tight uppercase">
            R CROWN SALON &amp; <br />
            <span className="text-gold-gradient">MAKEUP STUDIO</span>
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-brand-champagne font-light italic">
            Turn Your Passion for Beauty Into a Profession
          </p>
          <p className="text-sm sm:text-base text-[#D0D0D0] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
            Professional Makeup &amp; Beautician Training Academy in Rajajinagar. Build practical beauty skills in a professional salon environment.
          </p>
        </div>

        {/* Right Side: Floating Course Offer Card */}
        <div className="lg:col-span-5 animate-fade-in">
          <div className="glass-card bg-brand-black/85 text-white p-6 sm:p-8 shadow-2xl border border-brand-gold/20 relative">
            {/* Offer Batch Badge */}
            <span className="absolute -top-3 right-6 bg-red-600 text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 shadow-md animate-pulse">
              {course.discount}
            </span>

            <div className="space-y-4">
              <span className="text-[10px] text-brand-gold font-bold tracking-widest uppercase block">
                Academy Enrollment Open
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white uppercase tracking-wide">
                {course.name}
              </h3>
              
              {/* Pricing tier */}
              <div className="flex items-baseline space-x-3 pt-2">
                <span className="text-3xl font-serif font-semibold text-brand-gold">
                  ₹{course.offerPrice.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-[#8E8E8E] line-through">
                  ₹{course.regularPrice.toLocaleString("en-IN")}
                </span>
              </div>

              {/* Benefits Checklist */}
              <div className="border-y border-white/10 py-4 my-2">
                <ul className="space-y-2.5">
                  <li className="flex items-center space-x-2 text-xs text-[#EAEAEA]">
                    <Check className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>✓ ₹25,000 Worth Hair Kit <strong>FREE</strong></span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs text-[#EAEAEA]">
                    <Check className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>✓ Hair Course <strong>FREE</strong></span>
                  </li>
                  <li className="flex items-center space-x-2 text-xs text-[#EAEAEA]">
                    <Check className="h-4 w-4 text-brand-gold shrink-0" />
                    <span>✓ Nail Course <strong>FREE</strong></span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/advanced-makeup-course"
                  className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 bg-brand-gold hover:bg-brand-goldDark text-white font-semibold text-[11px] tracking-widest uppercase transition duration-300 shadow-sm"
                >
                  <span>Get Course Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <a
                  href={getCourseEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-5 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold text-[11px] tracking-widest uppercase transition duration-300"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="text-center pt-2">
                <span className="text-[9px] text-[#8E8E8E] uppercase tracking-wider block">
                  *Demonstration placeholder images.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
