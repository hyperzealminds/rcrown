import { GraduationCap, Scissors, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { getCourseEnquiryUrl } from "../utils/whatsapp";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEO
        title="About R Crown Salon & Makeup Academy | Rajajinagar"
        description="Learn about R Crown Salon & Makeup Studio, the premier professional makeup and beautician academy in Rajajinagar, Bengaluru. Build real beauty career skills."
        canonicalUrl="https://rcrown.in/about"
      />

      {/* Hero Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-brand-black tracking-wide uppercase">
          About R Crown
        </h1>
        <p className="text-sm font-semibold tracking-widest text-brand-gold uppercase">
          Academy &amp; Makeup Studio
        </p>
        <p className="text-base text-brand-charcoal/80 leading-relaxed">
          Located in Rajajinagar, Bengaluru, R Crown is a professional training center and salon studio designed to nurture the next generation of beauty and makeup professionals.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image Placeholder */}
        <div className="relative aspect-[4/3] border border-brand-gold/15 shadow-md overflow-hidden bg-brand-cream">
          <img
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800"
            alt="Makeup training session at R Crown Academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/25 flex items-end p-4">
            <span className="text-[10px] text-white/70 italic">*Demonstration placeholder photo</span>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif text-brand-black uppercase">
            Our Training Philosophy
          </h2>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed">
            At R Crown, we believe that the beauty industry cannot be learned solely from textbooks. Our curriculum focuses heavily on **100% hands-on practice** and practical applications in a real salon environment.
          </p>
          <p className="text-sm text-brand-charcoal/80 leading-relaxed">
            Whether you are starting from scratch or aiming to refine your makeup artistry, our courses are structured to provide comprehensive skills in makeup, skin treatments, hair styling, and nail extensions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">Flexible Batches</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">Salon Internships</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">₹25k Hair Kit Free</span>
            </div>
            <div className="flex items-start space-x-3">
              <Check className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-charcoal">Bridal Mastery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Academy vs Studio Priority Display */}
      <div className="bg-white border border-brand-gold/15 p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        <div className="space-y-4">
          <div className="inline-flex p-3 bg-brand-ivory border border-brand-gold/10 rounded-full">
            <GraduationCap className="h-6 w-6 text-brand-gold" />
          </div>
          <h3 className="text-xl font-serif text-brand-black uppercase">Professional Academy</h3>
          <p className="text-xs text-brand-charcoal/80 leading-relaxed">
            Generating expert beauticians and independent salon owners. Our comprehensive Advanced Makeup &amp; Beautician course bundles hair and nail training to maximize your career prospects.
          </p>
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase hover:text-brand-goldDark transition"
          >
            Enquire About Admissions &rarr;
          </a>
        </div>

        <div className="space-y-4">
          <div className="inline-flex p-3 bg-brand-ivory border border-brand-gold/10 rounded-full">
            <Scissors className="h-6 w-6 text-brand-gold" />
          </div>
          <h3 className="text-xl font-serif text-brand-black uppercase">Makeup &amp; Salon Studio</h3>
          <p className="text-xs text-brand-charcoal/80 leading-relaxed">
            Delivering flawless bridal, HD makeovers, and custom salon cuts/styling for our local Rajajinagar clients using premium brand products.
          </p>
          <Link
            to="/makeup-services"
            className="inline-block text-xs font-bold tracking-widest text-brand-gold uppercase hover:text-brand-goldDark transition"
          >
            Explore Services &rarr;
          </Link>
        </div>
      </div>

      {/* Core Call to Action */}
      <div className="bg-brand-black border border-brand-gold/20 p-8 text-center space-y-6">
        <h3 className="text-2xl font-serif text-white uppercase tracking-wide">
          Ready to Start Your Career Journey?
        </h3>
        <p className="text-sm text-white/70 max-w-xl mx-auto">
          Enroll in our Advanced Makeup &amp; Beautician Course to get the ₹25,000 hair kit for free, along with complimentary hair and nail training.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={getCourseEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-gold text-white font-semibold text-xs tracking-widest uppercase hover:bg-brand-goldDark transition shadow-md"
          >
            Get Course Details
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 border border-white/20 text-white font-semibold text-xs tracking-widest uppercase hover:bg-white/10 transition"
          >
            Contact Academy
          </Link>
        </div>
      </div>
    </div>
  );
}
