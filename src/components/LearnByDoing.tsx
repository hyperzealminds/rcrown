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
    <section className="bg-brand-charcoal border-y border-brand-gold/15 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Training Image */}
        <div className="relative aspect-[4/3] border border-brand-gold/15 overflow-hidden shadow-2xl bg-brand-black rounded-sm group">
          <img
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800"
            alt="Academy student practicing makeup application"
            className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-brand-black/25 flex items-end p-4">
            <span className="text-[10px] text-white/50 italic">*Demonstration placeholder photo</span>
          </div>
        </div>

        {/* Right Side: Narrative */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
              Practice Over Theory
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase leading-tight">
              LEARN BY DOING
            </h2>
            <div className="w-12 h-[1.5px] bg-brand-gold" />
          </div>
          
          <p className="text-xs sm:text-sm text-brand-ivory/80 leading-relaxed font-light font-sans">
            Build practical beauty and makeup skills in a professional learning environment. We prioritize real salon scenarios and direct trainer mentorship over static classroom lectures.
          </p>

          <div className="pt-4 border-t border-brand-gold/10 space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-brand-ivory">
                <div className="p-1 bg-brand-black border border-brand-gold/10 text-brand-gold rounded-full">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest">
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
