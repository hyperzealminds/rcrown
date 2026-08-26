import { GraduationCap, Scissors, MapPin, Award } from "lucide-react";

export default function TrustBar() {
  const indicators = [
    {
      icon: <GraduationCap className="h-5 w-5 text-brand-gold" />,
      text: "Professional Academy Training",
    },
    {
      icon: <Scissors className="h-5 w-5 text-brand-gold" />,
      text: "100% Hands-on Practice",
    },
    {
      icon: <Award className="h-5 w-5 text-brand-gold" />,
      text: "Comprehensive Makeup & Beauty Skills",
    },
    {
      icon: <MapPin className="h-5 w-5 text-brand-gold" />,
      text: "Rajajinagar, Bengaluru Center",
    },
  ];

  return (
    <section className="bg-white border-y border-brand-gold/10 py-6 sm:py-8 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
          {indicators.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start"
            >
              <div className="p-3 bg-brand-ivory rounded-full border border-brand-gold/5 shrink-0">
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-brand-charcoal uppercase">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
