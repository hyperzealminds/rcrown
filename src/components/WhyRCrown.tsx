import { GraduationCap, BookOpen, Brush, Gift, MapPin, Sparkles } from "lucide-react";

export default function WhyRCrown() {
  const cards = [
    {
      icon: <GraduationCap className="h-5 w-5 text-brand-gold" />,
      title: "Practical Learning",
      description: "Focus on extensive hands-on beauty and makeup learning under expert guidance.",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-brand-gold" />,
      title: "Multiple Skills",
      description: "Explore comprehensive makeup, beauty treatments, hair styling, and nail art training.",
    },
    {
      icon: <Brush className="h-5 w-5 text-brand-gold" />,
      title: "Salon + Academy",
      description: "Learn in a professional beauty-focused studio environment working on real clients.",
    },
    {
      icon: <Gift className="h-5 w-5 text-brand-gold" />,
      title: "Professional Hair Kit",
      description: "Get a high-quality professional hair styling kit worth ₹25,000 included in the offer for free.",
    },
    {
      icon: <MapPin className="h-5 w-5 text-brand-gold" />,
      title: "Rajajinagar Location",
      description: "Conveniently located in Rajajinagar, Bengaluru, with easy metro and road access.",
    },
    {
      icon: <Sparkles className="h-5 w-5 text-brand-gold" />,
      title: "Beauty-Focused Training",
      description: "Tailor-made modules designed for aspiring beauty professionals and enthusiasts.",
    },
  ];

  return (
    <section className="bg-brand-black border-y border-brand-gold/15 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase">
            WHY R CROWN?
          </h2>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-[#A0A0A0] max-w-lg mx-auto font-light leading-relaxed">
            We offer industry-oriented training programs designed to launch you directly into a beauty career.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-brand-gold/15 bg-brand-charcoal hover:border-brand-gold/45 hover:shadow-2xl transition-all duration-300 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start rounded-sm"
            >
              <div className="p-3 bg-brand-black border border-brand-gold/10 rounded-sm shrink-0 text-brand-gold">
                {card.icon}
              </div>
              <h3 className="text-lg font-serif text-brand-gold uppercase font-semibold tracking-wider">
                {card.title}
              </h3>
              <p className="text-xs text-[#A0A0A0] leading-relaxed font-light font-sans">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
