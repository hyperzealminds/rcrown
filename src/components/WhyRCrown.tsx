import { GraduationCap, BookOpen, Brush, Gift, MapPin, Sparkles } from "lucide-react";

export default function WhyRCrown() {
  const cards = [
    {
      icon: <GraduationCap className="h-6 w-6 text-brand-gold" />,
      title: "Practical Learning",
      description: "Focus on extensive hands-on beauty and makeup learning under expert guidance.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-brand-gold" />,
      title: "Multiple Skills",
      description: "Explore comprehensive makeup, beauty treatments, hair styling, and nail art training.",
    },
    {
      icon: <Brush className="h-6 w-6 text-brand-gold" />,
      title: "Salon + Academy",
      description: "Learn in a professional beauty-focused studio environment working on real clients.",
    },
    {
      icon: <Gift className="h-6 w-6 text-brand-gold" />,
      title: "Professional Hair Kit",
      description: "Get a high-quality professional hair styling kit worth ₹25,000 included in the offer for free.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-brand-gold" />,
      title: "Rajajinagar Location",
      description: "Conveniently located in Rajajinagar, Bengaluru, with easy metro and road access.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-brand-gold" />,
      title: "Beauty-Focused Training",
      description: "Tailor-made modules designed for aspiring beauty professionals and enthusiasts.",
    },
  ];

  return (
    <section className="bg-white border-y border-brand-gold/10 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
            WHY R CROWN?
          </h2>
          <p className="text-sm text-brand-charcoal/70 max-w-lg mx-auto">
            We offer industry-oriented training programs designed to launch you directly into a beauty career.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="p-8 border border-brand-gold/15 bg-brand-ivory/20 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start"
            >
              <div className="p-3 bg-brand-cream border border-brand-gold/10 rounded-full shrink-0">
                {card.icon}
              </div>
              <h3 className="text-xl font-serif text-brand-black uppercase font-semibold">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
