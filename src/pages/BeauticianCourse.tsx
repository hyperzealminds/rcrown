import { Check, Calendar, Tag, ShieldAlert } from "lucide-react";
import { COURSES, COURSE_DISCLAIMER } from "../data/courses";
import EnquiryForm from "../components/EnquiryForm";
import SEO from "../components/SEO";

export default function BeauticianCourse() {
  const course = COURSES.find(c => c.id === "beautician-only") || COURSES[1];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SEO
        title="Beautician Course in Rajajinagar, Bangalore | R Crown Salon"
        description="Enroll in the Professional Beautician Course at R Crown Salon. Get certified in skin care, facials, waxing, manicures, and pedicures in Rajajinagar."
        canonicalUrl="https://rcrown.in/beautician-course"
      />

      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase">
          Essential Salon Skillset
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-black tracking-wide uppercase">
          {course.name}
        </h1>
        <p className="text-base text-brand-charcoal/80 leading-relaxed">
          Master facial treatments, advanced threading, manicure hygiene, and client consulting in our state-of-the-art academy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Syllabus */}
          <div className="p-6 bg-white border border-brand-gold/15 shadow-sm space-y-6">
            <h3 className="text-xl font-serif text-brand-black uppercase">What You Will Learn</h3>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed">
              Designed for salon beginners to develop professional beauty therapy and customer service skills.
            </p>
            <div className="space-y-6">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="space-y-2 border-t border-brand-gold/10 pt-4 first:border-none first:pt-0">
                  <h4 className="font-serif text-base text-brand-black font-semibold uppercase">{mod.title}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {mod.topics.map((topic, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-brand-charcoal/80">
                        <span className="text-brand-gold font-bold">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="p-6 bg-brand-cream border border-brand-gold/15 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif text-brand-black uppercase">Course Investment</h3>
              <span className="px-3 py-1 bg-red-600 text-white text-[10px] font-bold tracking-wider uppercase">
                {course.discount}
              </span>
            </div>
            <div className="flex items-baseline space-x-4">
              <span className="text-3xl font-serif font-bold text-brand-gold">
                ₹{course.offerPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-lg text-brand-charcoal/50 line-through">
                Regular Value: ₹{course.regularPrice.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="bg-white border border-brand-gold/10 p-5 space-y-4">
              <h4 className="text-xs font-bold text-brand-charcoal tracking-wider uppercase">
                Included Benefits:
              </h4>
              <ul className="space-y-2">
                {course.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-brand-charcoal font-medium">
                    <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="p-5 border border-brand-gold/15 bg-white space-y-4 shadow-sm">
            <div className="flex items-center space-x-3 text-xs text-brand-charcoal">
              <Calendar className="h-5 w-5 text-brand-gold" />
              <div>
                <p className="font-semibold uppercase tracking-wider">Duration</p>
                <p className="text-[#6E6E6E]">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs text-brand-charcoal">
              <Tag className="h-5 w-5 text-brand-gold" />
              <div>
                <p className="font-semibold uppercase tracking-wider">Focus</p>
                <p className="text-[#6E6E6E]">Skin care &amp; beauty therapies</p>
              </div>
            </div>
          </div>

          <EnquiryForm />

          {/* Small Disclaimer */}
          <div className="flex items-start space-x-2 p-4 bg-brand-ivory border border-brand-gold/10 text-[10px] text-brand-charcoal/70">
            <ShieldAlert className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
            <span>{COURSE_DISCLAIMER}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
