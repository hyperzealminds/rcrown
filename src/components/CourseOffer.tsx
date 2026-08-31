import { Gift, Scissors, Sparkles, MessageSquare, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { MAIN_COURSE } from "../data/courses";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function CourseOffer() {
  const course = MAIN_COURSE;

  return (
    <section className="bg-brand-black text-brand-ivory py-20 sm:py-28 border-y border-brand-gold/15 relative overflow-hidden">
      {/* Decorative Gold Glow Splotches */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Title Block */}
        <div className="space-y-4">
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block">
            Special Academy Promotion
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide uppercase max-w-2xl mx-auto leading-tight">
            ONE COURSE. MULTIPLE BEAUTY SKILLS.
          </h2>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Highlight Offer details container */}
        <div className="bg-brand-charcoal border border-brand-gold/25 p-8 sm:p-12 space-y-8 max-w-3xl mx-auto shadow-2xl relative rounded-sm">
          {/* Tag */}
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-maroon text-brand-ivory text-[10px] font-bold tracking-[0.2em] uppercase px-5 py-2 border border-brand-gold/20 shadow-lg">
            LIMITED TIME OFFER — 50% OFF
          </span>

          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-serif uppercase tracking-wider text-brand-ivory">
              {course.name}
            </h3>
            <p className="text-xs text-brand-gold/80 max-w-lg mx-auto leading-relaxed font-light">
              Gain comprehensive professional beautician certifications and starting tools bundled in one premium enrollment.
            </p>
          </div>

          {/* Pricing tier */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-2 border-y border-brand-gold/10">
            <div className="text-center">
              <span className="text-[10px] text-[#A0A0A0] uppercase tracking-wider block">Regular Price</span>
              <span className="text-lg text-[#808080] line-through font-serif">₹{course.regularPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="hidden sm:block text-2xl text-brand-gold font-serif font-light">&rarr;</div>
            <div className="text-center">
              <span className="text-[10px] text-brand-gold uppercase tracking-wider block font-semibold">Current Offer</span>
              <span className="text-4xl text-brand-gold font-serif font-bold">₹{course.offerPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Complimentary Banners */}
          <div className="bg-brand-black/40 border border-brand-gold/15 p-6 space-y-4 rounded-sm">
            <h4 className="text-[10px] font-bold text-brand-gold tracking-[0.2em] uppercase">
              Free Promotional Add-Ons Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3 text-xs text-[#EAEAEA]">
                <div className="p-1.5 bg-brand-charcoal border border-brand-gold/10 text-brand-gold mt-0.5">
                  <Gift className="h-4 w-4 shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-brand-ivory">Professional Hair Kit</p>
                  <p className="text-[10px] text-[#A0A0A0] mt-0.5">Worth ₹25,000 <span className="text-brand-gold">FREE</span></p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#EAEAEA]">
                <div className="p-1.5 bg-brand-charcoal border border-brand-gold/10 text-brand-gold mt-0.5">
                  <Scissors className="h-4 w-4 shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-brand-ivory">Hair styling Course</p>
                  <p className="text-[10px] text-[#A0A0A0] mt-0.5">Full certification <span className="text-brand-gold">FREE</span></p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-xs text-[#EAEAEA]">
                <div className="p-1.5 bg-brand-charcoal border border-brand-gold/10 text-brand-gold mt-0.5">
                  <Sparkles className="h-4 w-4 shrink-0" />
                </div>
                <div>
                  <p className="font-semibold text-brand-ivory">Nail Artistry Course</p>
                  <p className="text-[10px] text-[#A0A0A0] mt-0.5">Full extensions training <span className="text-brand-gold">FREE</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/advanced-makeup-course"
              className="flex-1 flex items-center justify-center space-x-2 py-4 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-xs tracking-widest uppercase transition duration-300 shadow-md rounded-sm"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Get Course Details</span>
            </Link>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 py-4 border border-brand-gold/25 hover:border-brand-gold bg-transparent hover:bg-white/5 text-brand-gold font-bold text-xs tracking-widest uppercase transition duration-300 rounded-sm"
            >
              <MessageSquare className="h-4 w-4 text-[#25D366]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
