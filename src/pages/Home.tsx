import { Award, Scissors, Eye, Sparkles, Phone, MessageSquare, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

// Components
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import CourseOffer from "../components/CourseOffer";
import LearnByDoing from "../components/LearnByDoing";
import WhyRCrown from "../components/WhyRCrown";
import PassionProfession from "../components/PassionProfession";
import BeforeAfter from "../components/BeforeAfter";
import Gallery from "../components/Gallery";
import ServicesSection from "../components/ServicesSection";
import InstagramSection from "../components/InstagramSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import EnquiryForm from "../components/EnquiryForm";

export default function Home() {
  return (
    <div className="space-y-0">
      <SEO
        title="R Crown Salon | Makeup Academy & Beautician Courses in Rajajinagar"
        description="R Crown Salon & Makeup Studio in Rajajinagar, Bangalore offers professional makeup services and makeup & beautician training. Explore the Advanced Makeup Course and current ₹50,000 offer."
        canonicalUrl="https://rcrown.in"
      />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. Main Course Offer */}
      <CourseOffer />

      {/* 5. What You Can Learn (Section Cards) */}
      <section className="bg-brand-ivory py-16 sm:py-24 border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
              Curriculum Core
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
              ONE COURSE. MULTIPLE BEAUTY SKILLS.
            </h2>
            <p className="text-sm text-brand-charcoal/70 max-w-lg mx-auto">
              Our comprehensive syllabus covers the following key categories through intensive training modules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Makeup */}
            <div className="p-6 bg-white border border-brand-gold/15 hover:shadow-md transition text-left space-y-3">
              <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-full w-fit">
                <Sparkles className="h-5 w-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">Advanced Makeup</h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Develop professional makeup skills through practical learning, focusing on skin prep, color theory, contouring, and bridal draping.
              </p>
            </div>

            {/* Card 2: Beautician */}
            <div className="p-6 bg-white border border-brand-gold/15 hover:shadow-md transition text-left space-y-3">
              <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-full w-fit">
                <Award className="h-5 w-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">Beautician Training</h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Build professional beauty and salon-related skills, including advanced skin treatments, hygiene rules, and consulting.
              </p>
            </div>

            {/* Card 3: Hair */}
            <div className="p-6 bg-white border border-brand-gold/15 hover:shadow-md transition text-left space-y-3">
              <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-full w-fit">
                <Scissors className="h-5 w-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">Hair Training</h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Hair styling, cuts, global coloring, spa treatments, and chemical smoothing are included as part of the current promotional offer.
              </p>
            </div>

            {/* Card 4: Nails */}
            <div className="p-6 bg-white border border-brand-gold/15 hover:shadow-md transition text-left space-y-3">
              <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-full w-fit">
                <Eye className="h-5 w-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg text-brand-black font-semibold uppercase">Nail Training</h3>
              <p className="text-xs text-brand-charcoal/80 leading-relaxed">
                Nail extensions, acrylic overlays, nail anatomy, chrome designs, and UV lamp usage are included as part of the current promotional offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Learn By Doing */}
      <LearnByDoing />

      {/* 7. Why R Crown */}
      <WhyRCrown />

      {/* 8. Passion Into Profession */}
      <PassionProfession />

      {/* 9. Before / After */}
      <section className="bg-white py-16 sm:py-24 border-y border-brand-gold/10 px-4">
        <BeforeAfter
          beforeImage="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800"
          afterImage="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800"
          beforeAlt="Client look prior to styling makeover"
          afterAlt="Glamorous bridal look with gold jewelry and HD makeup styling"
        />
      </section>

      {/* 10. Academy Gallery */}
      <section className="bg-brand-ivory/50 py-16 sm:py-24 border-y border-brand-gold/10">
        <Gallery />
      </section>

      {/* 11 & 12. Makeup & Salon Services */}
      <ServicesSection />

      {/* 13. Instagram Section */}
      <InstagramSection />

      {/* 14. Testimonials */}
      <Testimonials />

      {/* 15. FAQ Accordions */}
      <FAQ />

      {/* 16. Final Course CTA */}
      <section className="bg-brand-black text-white py-16 text-center border-y border-brand-gold/15 relative">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-wide">
            ONE COURSE. LIMITLESS OPPORTUNITIES.
          </h2>
          <p className="text-xs sm:text-sm text-brand-champagne/80 max-w-xl mx-auto">
            Enroll today to get our ₹50,000 promotional price, free professional hair kit worth ₹25,000, and free hair &amp; nail certification bundles.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/advanced-makeup-course"
              className="px-6 py-3 bg-brand-gold hover:bg-brand-goldDark text-white font-semibold text-xs tracking-widest uppercase transition"
            >
              Get Course Syllabus
            </Link>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-semibold text-xs tracking-widest uppercase transition"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 17. Contact Section (Form + Address details) */}
      <section id="contact-section" className="bg-white py-16 sm:py-24 border-t border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Address Info */}
          <div className="space-y-6 text-left">
            <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
              Enroll Today
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-black uppercase">
              VISIT R CROWN ACADEMY
            </h2>
            <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
              Have a question about class sizes, certification processes, or course syllabus modules? Drop us a message, call, or visit our studio in Rajajinagar.
            </p>

            <div className="space-y-4 pt-4 border-t border-brand-gold/10 text-xs">
              <div className="flex items-start space-x-3 text-brand-charcoal">
                <MapPin className="h-5 w-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wider">Our Address</p>
                  <p className="text-brand-charcoal/80 mt-1">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-brand-charcoal">
                <Phone className="h-5 w-5 text-brand-gold shrink-0" />
                <div>
                  <p className="font-bold uppercase tracking-wider">Call directly</p>
                  <a href={`tel:${BUSINESS.phone}`} className="text-brand-gold hover:text-brand-goldDark font-semibold block mt-1">
                    {BUSINESS.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-brand-charcoal">
                <MessageSquare className="h-5 w-5 text-brand-gold shrink-0" />
                <div>
                  <p className="font-bold uppercase tracking-wider">WhatsApp us</p>
                  <a href={getCourseEnquiryUrl()} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-goldDark font-semibold block mt-1">
                    Start Chat Window
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div>
            <EnquiryForm />
          </div>

        </div>
      </section>

    </div>
  );
}
