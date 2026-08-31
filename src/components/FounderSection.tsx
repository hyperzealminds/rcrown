import { Award, ShieldCheck } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="bg-brand-black text-brand-ivory py-16 sm:py-20 border-y border-brand-gold/15 relative overflow-hidden">
      {/* Subtle decorative lines */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-[1px] bg-gradient-to-r from-brand-gold/30 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-[1px] bg-gradient-to-l from-brand-gold/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Left text + Right 4-card visual strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: Text Block */}
          <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
                Founder &amp; Chief Trainer
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif tracking-wide leading-tight text-brand-ivory">
                <span
                  className="block italic font-light text-brand-gold/90 text-2xl sm:text-3xl"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Dubai Certified
                </span>
                <span className="text-gold-gradient font-semibold uppercase">RASHMI ACHAR</span>
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-brand-ivory/75 leading-relaxed font-light max-w-sm mx-auto lg:mx-0">
              Internationally certified makeup artist &amp; beauty expert with advanced training from Dubai. Passionate about empowering students with global techniques and industry-ready skills.
            </p>

            <div className="pt-2 space-y-3 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-start space-x-3 text-left">
                <div className="p-1.5 bg-brand-charcoal border border-brand-gold/15 text-brand-gold shrink-0 mt-0.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">Practical Skill Mastery</h4>
                  <p className="text-[10px] text-[#A0A0A0] mt-0.5 font-light leading-relaxed">
                    Hands-on syllabus designed to work with real clients in active salon settings.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-left">
                <div className="p-1.5 bg-brand-charcoal border border-brand-gold/15 text-brand-gold shrink-0 mt-0.5">
                  <Award className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">Dubai Certified Credentials</h4>
                  <p className="text-[10px] text-[#A0A0A0] mt-0.5 font-light leading-relaxed">
                    International techniques and premium beauty standards brought to Bengaluru.
                  </p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="pt-4 text-center lg:text-left">
              <div
                className="font-serif italic text-2xl text-brand-gold font-light tracking-wide inline-block border-b border-brand-gold/20 pb-1"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Rashmi Achar
              </div>
            </div>
          </div>

          {/* Right: 4-card visual strip — Portrait | Dubai Badge | Bridal | Nail */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-stretch">

            {/* 1. Portrait Card */}
            <div className="bg-brand-charcoal border border-brand-gold/20 p-1.5 shadow-2xl relative rounded-sm group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden bg-brand-black relative rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                  alt="Rashmi Achar - Founder of R Crown"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-2.5 right-2.5 text-left">
                  <span className="text-[7px] bg-brand-gold text-brand-black font-bold uppercase tracking-widest px-1.5 py-0.5">
                    Founder
                  </span>
                  <h3 className="font-serif text-brand-ivory text-xs uppercase tracking-wider mt-1">
                    Rashmi Achar
                  </h3>
                  <p className="text-[8px] text-[#A0A0A0] font-light mt-0.5">
                    Dubai Certified Trainer
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Dubai Badge Card */}
            <div className="bg-brand-charcoal border border-brand-gold/20 shadow-2xl flex flex-col justify-center rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 z-0 opacity-15">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=400"
                  alt="Dubai skyline background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 space-y-3 text-center py-6 px-3">
                <div className="w-10 h-10 border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto bg-brand-black/60">
                  <Award className="h-5 w-5 text-brand-gold" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-base font-serif font-semibold tracking-wider text-brand-gold uppercase">Dubai</h4>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-brand-ivory uppercase">Certified</p>
                </div>
                <div className="w-6 h-[1px] bg-brand-gold/40 mx-auto" />
                <p className="text-[9px] text-[#A0A0A0] leading-relaxed font-light uppercase tracking-wider">
                  Makeup Artist &amp;<br />Beauty Expert
                </p>
                <div className="border-t border-brand-gold/15 pt-2 text-center">
                  <span className="font-serif italic text-xs text-brand-gold font-bold">R Crown</span>
                </div>
              </div>
            </div>

            {/* 3. South Indian Bridal Card */}
            <div className="bg-brand-charcoal border border-brand-gold/15 rounded-sm overflow-hidden group shadow-xl hover:border-brand-gold/45 transition duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-brand-black relative">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600"
                  alt="South Indian Bridal Artistry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black to-transparent p-3 text-left">
                  <h4 className="font-serif text-brand-gold text-xs uppercase tracking-wider leading-tight">South Indian Bridal</h4>
                  <p className="text-[8px] text-[#A0A0A0] uppercase tracking-widest mt-0.5">Traditional • Elegant • Timeless</p>
                </div>
              </div>
            </div>

            {/* 4. Nail Artistry Card */}
            <div className="bg-brand-charcoal border border-brand-gold/15 rounded-sm overflow-hidden group shadow-xl hover:border-brand-gold/45 transition duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-brand-black relative">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600"
                  alt="Nail Artistry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-black to-transparent p-3 text-left">
                  <h4 className="font-serif text-brand-gold text-xs uppercase tracking-wider leading-tight">Nail Artistry</h4>
                  <p className="text-[8px] text-[#A0A0A0] uppercase tracking-widest mt-0.5">Creative • Stylish • Trendy</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
