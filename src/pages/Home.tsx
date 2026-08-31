import { Award, Scissors, Sparkles, Phone, MessageSquare, MapPin, Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/business";
import { getCourseEnquiryUrl } from "../utils/whatsapp";

// Components
import SEO from "../components/SEO";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import FounderSection from "../components/FounderSection";
import CourseOffer from "../components/CourseOffer";
import LearnByDoing from "../components/LearnByDoing";
import WhyRCrown from "../components/WhyRCrown";
import BeforeAfter from "../components/BeforeAfter";
import Gallery from "../components/Gallery";
import ServicesSection from "../components/ServicesSection";
import InstagramSection from "../components/InstagramSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import EnquiryForm from "../components/EnquiryForm";

export default function Home() {
  return (
    <div className="space-y-0 bg-brand-black text-brand-ivory">
      <SEO
        title="R Crown Salon | Makeup Academy & Beautician Courses in Rajajinagar"
        description="R Crown Salon & Makeup Studio in Rajajinagar, Bangalore offers professional makeup services and makeup & beautician training. Explore the Advanced Makeup Course and current ₹50,000 offer."
        canonicalUrl="https://rcrown.in"
      />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. Founder Section */}
      <FounderSection />




      {/* 6. South Indian Bridal Artistry Section */}
      <section className="bg-brand-black py-20 sm:py-28 border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Bridal Specialist
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase">
              South Indian Bridal Artistry
            </h2>
            <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto font-light leading-relaxed">
              Traditional elegance meets modern professional makeup artistry. Specialized in HD bridal glow, Kanjeevaram draping styles, temple jewellery settings, and fresh jasmine floral arrangements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
            <div className="aspect-[4/3] bg-brand-charcoal border border-brand-gold/15 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1616166330003-8e550d40c06a?auto=format&fit=crop&q=80&w=800"
                alt="South Indian bridal styling makeover"
                className="w-full h-full object-cover brightness-95"
              />
            </div>
            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-serif text-brand-gold uppercase tracking-wider">Bridal Styling Philosophy</h3>
              <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
                Every South Indian bride represents a canvas of rich heritage. Our makeup artistry focuses on enhancing your natural features with high-definition, long-stay cosmetic products that stand up beautifully under temple lighting and heavy wedding day photography.
              </p>
              <ul className="space-y-3.5 pt-2 text-xs">
                <li className="flex items-center space-x-3 text-brand-ivory/90">
                  <span className="w-1.5 h-1.5 bg-brand-maroon rounded-full shrink-0" />
                  <span>Custom Saree Pleating &amp; Traditional Draping</span>
                </li>
                <li className="flex items-center space-x-3 text-brand-ivory/90">
                  <span className="w-1.5 h-1.5 bg-brand-maroon rounded-full shrink-0" />
                  <span>Intricate Hair Braiding &amp; Jasmine Florals alignment</span>
                </li>
                <li className="flex items-center space-x-3 text-brand-ivory/90">
                  <span className="w-1.5 h-1.5 bg-brand-maroon rounded-full shrink-0" />
                  <span>Premium HD &amp; Airbrush options for zero flashbacks</span>
                </li>
              </ul>
              <div className="pt-4">
                <a
                  href={getCourseEnquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 bg-brand-maroon hover:bg-brand-maroonDark text-brand-ivory font-bold text-xs tracking-widest uppercase transition rounded-sm shadow-md"
                >
                  Book Bridal Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Nail Artistry Section */}
      <section className="bg-brand-charcoal py-20 sm:py-28 border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Creative Nail Studio
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase">
              Nail Artistry &amp; Extensions
            </h2>
            <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
            <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-xl mx-auto font-light leading-relaxed">
              Elevate your bridal aesthetics with professional acrylic extensions, cat-eye designs, and custom gold-foil nail accents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {/* Nail card 1 */}
            <div className="bg-brand-black border border-brand-gold/15 p-3 rounded-sm group">
              <div className="aspect-square overflow-hidden bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600"
                  alt="Bridal Nail Extensions"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-serif text-brand-gold text-base uppercase tracking-wider mt-4 text-left">Acrylic Extensions</h4>
              <p className="text-[10px] text-[#A0A0A0] mt-1 text-left">Durable overlay styling for wedding functions</p>
            </div>
            
            {/* Nail card 2 */}
            <div className="bg-brand-black border border-brand-gold/15 p-3 rounded-sm group">
              <div className="aspect-square overflow-hidden bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600"
                  alt="Chrome Art Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-serif text-brand-gold text-base uppercase tracking-wider mt-4 text-left">Chrome &amp; Glitters</h4>
              <p className="text-[10px] text-[#A0A0A0] mt-1 text-left">Sleek metallic finishes and elegant sparkles</p>
            </div>

            {/* Nail card 3 */}
            <div className="bg-brand-black border border-brand-gold/15 p-3 rounded-sm group sm:col-span-2 lg:col-span-1">
              <div className="aspect-square overflow-hidden bg-brand-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&q=80&w=600"
                  alt="Custom Nail Paint Art"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h4 className="font-serif text-brand-gold text-base uppercase tracking-wider mt-4 text-left">Custom Nail Art</h4>
              <p className="text-[10px] text-[#A0A0A0] mt-1 text-left">Delicate floral and temple pattern detailing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Hair and Beauty Training Section */}
      <section className="bg-brand-black py-20 sm:py-28 border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Left */}
            <div className="space-y-6 text-left">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
                Hair &amp; Beautician Courses
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase leading-tight">
                Professional Hair &amp; <br />
                Beauty Academy Training
              </h2>
              <div className="w-12 h-[1.5px] bg-brand-gold" />
              <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light">
                Gain the core confidence to perform high-value hair smoothening, advanced chemical treatments, global colors, and skin therapies. We prioritize live model training batches in Rajajinagar so students leave with industry-ready portfolios.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="flex items-center space-x-2 text-brand-ivory/95">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span>Classic &amp; Advanced Haircuts</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-ivory/95">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span>Keratin &amp; Chemical Smoothening</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-ivory/95">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span>Hydrating Facials &amp; Skin Prep</span>
                </div>
                <div className="flex items-center space-x-2 text-brand-ivory/95">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  <span>Global Hair Coloring &amp; Balayage</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  to="/beautician-course"
                  className="inline-block px-8 py-3.5 bg-transparent border border-brand-gold/30 hover:border-brand-gold text-brand-gold font-bold text-xs tracking-widest uppercase transition rounded-sm shadow-md"
                >
                  Explore Hair &amp; Beauty Course
                </Link>
              </div>
            </div>

            {/* Photo composition Right */}
            <div className="aspect-[4/3] bg-brand-charcoal border border-brand-gold/15 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
                alt="Hair and beautician styling salon practicals"
                className="w-full h-full object-cover brightness-95"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 9. Main Course Offer */}
      <CourseOffer />

      {/* 10. One Course. Multiple Skills (Curriculum Cards) */}
      <section className="bg-brand-charcoal py-20 sm:py-28 border-y border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Curriculum Core
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase">
              ONE COURSE. MULTIPLE BEAUTY SKILLS.
            </h2>
            <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
            <p className="text-xs text-[#A0A0A0] max-w-lg mx-auto font-light leading-relaxed">
              Our comprehensive syllabus covers the following key categories through intensive training modules.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {/* Card 1: Makeup */}
            <div className="p-8 bg-brand-black border border-brand-gold/15 hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 text-left space-y-4 rounded-sm">
              <div className="p-3 bg-brand-charcoal border border-brand-gold/10 rounded-sm w-fit text-brand-gold">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-brand-ivory font-bold uppercase tracking-wider">Advanced Makeup</h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                Develop professional makeup skills through practical learning, focusing on skin prep, color theory, contouring, and bridal draping.
              </p>
            </div>

            {/* Card 2: Beautician */}
            <div className="p-8 bg-brand-black border border-brand-gold/15 hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 text-left space-y-4 rounded-sm">
              <div className="p-3 bg-brand-charcoal border border-brand-gold/10 rounded-sm w-fit text-brand-gold">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-brand-ivory font-bold uppercase tracking-wider">Beautician Training</h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                Build professional beauty and salon-related skills, including advanced skin treatments, hygiene rules, and consulting.
              </p>
            </div>

            {/* Card 3: Hair */}
            <div className="p-8 bg-brand-black border border-brand-gold/15 hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 text-left space-y-4 rounded-sm">
              <div className="p-3 bg-brand-charcoal border border-brand-gold/10 rounded-sm w-fit text-brand-gold">
                <Scissors className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-brand-ivory font-bold uppercase tracking-wider">Hair Training</h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                Hair styling, cuts, global coloring, spa treatments, and chemical smoothing are included as part of the current promotional offer.
              </p>
            </div>

            {/* Card 4: Nails */}
            <div className="p-8 bg-brand-black border border-brand-gold/15 hover:border-brand-gold/45 hover:shadow-2xl transition duration-300 text-left space-y-4 rounded-sm">
              <div className="p-3 bg-brand-charcoal border border-brand-gold/10 rounded-sm w-fit text-brand-gold">
                <Sparkle className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg text-brand-ivory font-bold uppercase tracking-wider">Nail Training</h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light">
                Nail extensions, acrylic overlays, nail anatomy, chrome designs, and UV lamp usage are included as part of the current promotional offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Learn By Doing */}
      <LearnByDoing />

      {/* 12. Why R Crown */}
      <WhyRCrown />

      {/* 13. Before / After Transformation */}
      <section className="bg-brand-black py-20 sm:py-28 border-y border-brand-gold/15 px-4">
        <BeforeAfter
          beforeImage="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800"
          afterImage="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800"
          beforeAlt="Client look prior to styling makeover"
          afterAlt="Glamorous bridal look with gold jewelry and HD makeup styling"
        />
      </section>

      {/* 14. Academy Gallery */}
      <section className="bg-brand-charcoal py-20 sm:py-28 border-y border-brand-gold/15">
        <Gallery />
      </section>

      {/* 15 & 16. Makeup & Salon Services */}
      <ServicesSection />

      {/* 17. Instagram Section */}
      <InstagramSection />

      {/* 18. Testimonials */}
      <Testimonials />

      {/* 19. FAQ Accordions */}
      <FAQ />

      {/* 20. Final Course CTA */}
      <section className="bg-brand-black text-brand-ivory py-20 text-center border-y border-brand-gold/15 relative">
        <div className="absolute inset-0 z-0 bg-brand-maroon/5 blur-[80px] pointer-events-none rounded-full" />
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Join the Next Batch
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif uppercase tracking-wide">
            ONE COURSE. LIMITLESS OPPORTUNITIES.
          </h2>
          <div className="w-12 h-[1.5px] bg-brand-gold mx-auto" />
          <p className="text-xs sm:text-sm text-brand-ivory/80 max-w-xl mx-auto font-light leading-relaxed">
            Enroll today to get our ₹50,000 promotional price, free professional hair kit worth ₹25,000, and free hair &amp; nail certification bundles.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/advanced-makeup-course"
              className="px-8 py-3.5 bg-brand-gold hover:bg-brand-goldDark text-brand-black font-bold text-xs tracking-widest uppercase transition rounded-sm shadow-md"
            >
              Get Course Syllabus
            </Link>
            <a
              href={getCourseEnquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-brand-gold/30 hover:border-brand-gold bg-brand-charcoal/40 hover:bg-brand-charcoal text-brand-gold font-bold text-xs tracking-widest uppercase transition rounded-sm"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 21. Contact Section (Form + Address details) */}
      <section id="contact-section" className="bg-brand-charcoal py-20 sm:py-28 border-t border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column Address Info */}
          <div className="space-y-6 text-left">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Enroll Today
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory uppercase tracking-wide">
              VISIT R CROWN ACADEMY
            </h2>
            <div className="w-12 h-[1.5px] bg-brand-gold" />
            <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light font-sans">
              Have a question about class sizes, certification processes, or course syllabus modules? Drop us a message, call, or visit our studio in Rajajinagar.
            </p>

            <div className="space-y-6 pt-6 border-t border-brand-gold/10 text-xs">
              <div className="flex items-start space-x-3 text-brand-ivory">
                <div className="p-2 bg-brand-black border border-brand-gold/10 rounded-sm text-brand-gold shrink-0">
                  <MapPin className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-brand-gold">Our Address</p>
                  <p className="text-[#A0A0A0] mt-1 font-light leading-relaxed">{BUSINESS.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-brand-ivory">
                <div className="p-2 bg-brand-black border border-brand-gold/10 rounded-sm text-brand-gold shrink-0">
                  <Phone className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-brand-gold">Call directly</p>
                  <a href={`tel:${BUSINESS.phone}`} className="text-brand-gold hover:text-brand-goldDark font-bold block mt-1">
                    {BUSINESS.displayPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-brand-ivory">
                <div className="p-2 bg-brand-black border border-brand-gold/10 rounded-sm text-brand-gold shrink-0">
                  <MessageSquare className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <p className="font-bold uppercase tracking-wider text-brand-gold">WhatsApp us</p>
                  <a href={getCourseEnquiryUrl()} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-brand-goldDark font-bold block mt-1">
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
