import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ACADEMY_FAQS } from "../data/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white border-y border-brand-gold/10 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-brand-charcoal/70 max-w-lg mx-auto">
            Find answers to common questions about our course fees, bundle structures, location details, and admissions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {ACADEMY_FAQS.map((item, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div 
                key={idx} 
                className="border border-brand-gold/15 bg-brand-ivory/30 hover:bg-brand-ivory/50 transition-colors"
              >
                {/* Header/Question Trigger */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-1 focus:ring-brand-gold focus:ring-inset"
                >
                  <span className="font-serif text-sm sm:text-base font-semibold text-brand-black pr-4">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-brand-gold p-1 bg-white border border-brand-gold/10 rounded-full">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                {/* Body/Answer Panel */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="p-5 pt-0 text-xs sm:text-sm text-brand-charcoal/85 leading-relaxed border-t border-brand-gold/5 bg-white">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
