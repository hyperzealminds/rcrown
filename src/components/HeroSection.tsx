import { MessageSquare, ArrowRight, MapPin, Sparkles, Scissors, Gift, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { MAIN_COURSE } from "../data/courses";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function HeroSection() {
  const course = MAIN_COURSE;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-brand-black text-brand-ivory">
      {/* Background Image - clearly visible, darkened only on left for text */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1600"
          alt="Indian bridal makeup art by R Crown Academy"
          className="w-full h-full object-cover object-center brightness-[0.6]"
        />
        {/* Left-heavy dark gradient so text is readable but right image is visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/70 to-brand-black/20" />
        {/* Bottom fade for cinematic depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        
        {/* Left Side: Brand Narrative */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left text-brand-ivory animate-fade-up">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Professional Makeup &amp; Beautician Training Academy
            </span>
            <div className="w-24 h-[1px] bg-brand-gold mx-auto lg:mx-0 opacity-65" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-serif text-brand-ivory tracking-wide leading-[1.1] uppercase">
            R CROWN <br />
            <span className="text-gold-gradient font-semibold">SALON &amp; MAKEUP STUDIO</span>
          </h1>
          
          <p className="text-lg sm:text-xl font-serif text-brand-gold/90 font-light italic">
            Turn Your Passion for <span className="text-brand-ivory underline decoration-brand-gold decoration-1 underline-offset-4">Beauty</span> Into a Profession
          </p>
          
          <p className="text-xs sm:text-sm text-brand-ivory/70 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
            Professional Makeup &amp; Beautician Training Academy in Rajajinagar, Bengaluru. Build practical beauty, hair, and nail skills under expert mentorship in a live salon environment.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-[11px] font-semibold tracking-wider text-brand-gold/90">
            <div className="flex items-center space-x-1.5 bg-brand-charcoal/80 border border-brand-gold/10 px-3 py-1.5 rounded-sm">
              <MapPin className="h-3.5 w-3.5" />
              <span>Rajajinagar, Bengaluru</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-brand-charcoal/80 border border-brand-gold/10 px-3 py-1.5 rounded-sm">
              <Award className="h-3.5 w-3.5" />
              <span>Hands-on Training</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-brand-charcoal/80 border border-brand-gold/10 px-3 py-1.5 rounded-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Career Focused</span>
            </div>
          </div>

          {/* Left Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <Link
              to="/advanced-makeup-course"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-xs tracking-widest uppercase transition duration-300 shadow-lg rounded-sm"
            >
              <span>Get Course Details</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-3.5 border border-brand-gold/30 hover:border-brand-gold bg-brand-charcoal/40 hover:bg-brand-charcoal text-brand-gold font-bold text-xs tracking-widest uppercase transition duration-300 rounded-sm"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

        {/* Right Side: Floating Course Offer Card */}
        <div className="lg:col-span-5 animate-fade-in w-full max-w-md mx-auto">
          <div className="bg-brand-charcoal/95 border border-brand-gold/25 text-brand-ivory p-6 sm:p-8 shadow-2xl relative rounded-sm">
            {/* 50% OFF Badge */}
            <span className="absolute -top-3.5 right-6 bg-brand-maroon text-brand-ivory text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 shadow-md border border-brand-gold/20">
              50% OFF
            </span>

            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-[9px] text-brand-gold font-bold tracking-[0.25em] uppercase block">
                  Limited Time Academy Offer
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-brand-ivory uppercase tracking-wide leading-tight">
                  {course.name}
                </h3>
              </div>
              
              {/* Pricing section */}
              <div className="flex items-center space-x-4 pt-1 border-t border-brand-gold/10">
                <div>
                  <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block">Regular Price</span>
                  <span className="text-base text-[#808080] line-through font-serif">
                    ₹{course.regularPrice.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="text-brand-gold font-serif text-lg font-light">&rarr;</div>
                <div>
                  <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-semibold">Offer Price</span>
                  <span className="text-3xl font-serif font-bold text-brand-gold">
                    ₹{course.offerPrice.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Promo Benefits */}
              <div className="border-y border-brand-gold/10 py-4 my-2 space-y-3">
                <div className="flex items-center space-x-3 text-xs">
                  <div className="p-1.5 bg-brand-black/60 border border-brand-gold/10 text-brand-gold">
                    <Gift className="h-3.5 w-3.5" />
                  </div>
                  <span>₹25,000 Worth Professional Hair Kit <strong className="text-brand-gold">FREE</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <div className="p-1.5 bg-brand-black/60 border border-brand-gold/10 text-brand-gold">
                    <Scissors className="h-3.5 w-3.5" />
                  </div>
                  <span>Professional Hair Course <strong className="text-brand-gold">FREE</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-xs">
                  <div className="p-1.5 bg-brand-black/60 border border-brand-gold/10 text-brand-gold">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <span>Professional Nail Course <strong className="text-brand-gold">FREE</strong></span>
                </div>
              </div>

              {/* CTAs inside Card */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  to="/advanced-makeup-course"
                  className="flex-1 flex items-center justify-center space-x-2 px-5 py-3.5 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-[10px] tracking-widest uppercase transition duration-300 shadow-md rounded-sm"
                >
                  <span>Get Details</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <a
                  href={getCourseEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-5 py-3.5 border border-[#F5F0E6]/20 hover:bg-[#F5F0E6]/5 text-brand-ivory font-bold text-[10px] tracking-widest uppercase transition duration-300 rounded-sm"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="text-center pt-1 border-t border-white/5">
                <span className="text-[9px] text-[#808080] uppercase tracking-wider block">
                  *Offer valid for a limited time only.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
