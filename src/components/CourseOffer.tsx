import { Check, MessageSquare, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { MAIN_COURSE } from "../data/courses";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

export default function CourseOffer() {
  const course = MAIN_COURSE;

  return (
    <section className="bg-brand-black text-white py-16 sm:py-24 border-y border-brand-gold/10 relative overflow-hidden">
      {/* Decorative Gold Glow Splotches */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Title Block */}
        <div className="space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
            Special Academy Promotion
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide uppercase max-w-2xl mx-auto">
            ONE COURSE. MULTIPLE BEAUTY SKILLS.
          </h2>
          <div className="w-20 h-0.5 bg-brand-gold mx-auto mt-4" />
        </div>

        {/* Highlight Offer details container */}
        <div className="bg-brand-charcoal/80 border border-brand-gold/20 p-8 sm:p-12 space-y-8 max-w-3xl mx-auto shadow-2xl relative">
          {/* Tag */}
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 shadow-md">
            LIMITED TIME OFFER — 50% OFF
          </span>

          <div className="space-y-2">
            <h3 className="text-2xl font-serif uppercase tracking-wider text-white">
              {course.name}
            </h3>
            <p className="text-xs text-brand-champagne/80">
              Get comprehensive beautician certifications and starting tools bundled in one investment.
            </p>
          </div>

          {/* Pricing tier */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <div className="text-center">
              <span className="text-xs text-[#8E8E8E] uppercase tracking-wider block">Regular Price</span>
              <span className="text-xl text-[#8E8E8E] line-through font-serif">₹{course.regularPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="hidden sm:block text-2xl text-brand-gold font-serif">&rarr;</div>
            <div className="text-center">
              <span className="text-xs text-brand-gold uppercase tracking-wider block font-semibold">Current Offer</span>
              <span className="text-4xl text-brand-gold font-serif font-bold">₹{course.offerPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>

          {/* Complimentary Banners */}
          <div className="bg-brand-black/50 border border-brand-gold/10 p-6 space-y-4">
            <h4 className="text-xs font-bold text-brand-gold tracking-widest uppercase">
              Free Promotional Add-Ons:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-start space-x-2 text-xs text-[#EAEAEA]">
                <Check className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>₹25,000 Worth Professional Hair Kit <strong>FREE</strong></span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#EAEAEA]">
                <Check className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>Professional Hair Course <strong>FREE</strong></span>
              </div>
              <div className="flex items-start space-x-2 text-xs text-[#EAEAEA]">
                <Check className="h-4 w-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>Professional Nail Art Course <strong>FREE</strong></span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/advanced-makeup-course"
              className="flex-1 flex items-center justify-center space-x-2 py-4 bg-brand-gold hover:bg-brand-goldDark text-white font-semibold text-xs tracking-widest uppercase transition duration-300 shadow-md"
            >
              <GraduationCap className="h-4 w-4" />
              <span>Get Course Details</span>
            </Link>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase transition duration-300"
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
