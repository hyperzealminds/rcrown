import { Check } from "lucide-react";

export default function LearnByDoing() {
  const features = [
    "Practical Makeup Training",
    "Professional Beauty Skills",
    "Hair Styling & Grooming Training",
    "Nail Extensions & Artistry",
    "Personalized Guided Practice",
  ];

  return (
    <section className="bg-brand-ivory/50 border-y border-brand-gold/10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Training Image */}
        <div className="relative aspect-[4/3] border border-brand-gold/15 overflow-hidden shadow-md bg-brand-cream">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
            alt="Academy student practicing makeup application"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/25 flex items-end p-4">
            <span className="text-[10px] text-white/70 italic">*Demonstration placeholder photo</span>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="space-y-6">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
            Practice Over Theory
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
            LEARN BY DOING
          </h2>
          <p className="text-sm sm:text-base text-brand-charcoal/80 leading-relaxed font-sans">
            Build practical beauty and makeup skills in a professional learning environment. We prioritize real salon scenarios and student mentorship over static classroom lectures.
          </p>

          <div className="pt-4 border-t border-brand-gold/10 space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-brand-charcoal">
                <Check className="h-5 w-5 text-brand-gold shrink-0" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
