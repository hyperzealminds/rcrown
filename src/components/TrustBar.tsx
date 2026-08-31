import { GraduationCap, Award, MapPin, Sparkles, Trophy } from "lucide-react";

export default function TrustBar() {
  const indicators = [
    {
      icon: <Award className="h-4 w-4 text-brand-gold" />,
      text: "Premium Training",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-brand-gold" />,
      text: "Expert Mentorship",
    },
    {
      icon: <GraduationCap className="h-4 w-4 text-brand-gold" />,
      text: "Practical Learning",
    },
    {
      icon: <Trophy className="h-4 w-4 text-brand-gold" />,
      text: "Dubai Certified Trainer",
    },
    {
      icon: <MapPin className="h-4 w-4 text-brand-gold" />,
      text: "Rajajinagar, Bengaluru",
    },
  ];

  return (
    <section className="bg-brand-charcoal border-y border-brand-gold/15 py-6 shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          {indicators.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center space-x-3 w-full lg:w-auto justify-center py-2 lg:py-0 ${
                idx !== indicators.length - 1 ? "lg:border-r lg:border-brand-gold/25 lg:pr-10" : ""
              }`}
            >
              <div className="p-2 bg-brand-black/80 border border-brand-gold/10 rounded-sm shrink-0">
                {item.icon}
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-widest text-brand-ivory/90 uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
