import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export default function Testimonials() {
  // Adhering to rule: "The section can remain hidden until genuine testimonials are added."
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section className="bg-brand-ivory/50 border-y border-brand-gold/10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
            Feedback
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
            WHAT OUR CLIENTS SAY
          </h2>
        </div>

        {/* Carousel or Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="p-6 bg-white border border-brand-gold/15 shadow-sm space-y-4 text-left">
              <div className="flex items-center space-x-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed italic">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-serif text-sm text-brand-black font-semibold uppercase">{item.name}</h4>
                <p className="text-[10px] text-brand-gold font-bold tracking-wider uppercase">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
