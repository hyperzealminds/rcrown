import { Check, Calendar, Tag, ShieldAlert } from "lucide-react";
import { MAIN_COURSE, COURSE_DISCLAIMER } from "../data/courses";
import EnquiryForm from "../components/EnquiryForm";
import SEO from "../components/SEO";

export default function AdvancedMakeupCourse() {
  const course = MAIN_COURSE;

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-brand-ivory bg-brand-black">
      <SEO
        title="Advanced Makeup Course in Rajajinagar, Bangalore | R Crown"
        description="Enroll in the Advanced Makeup & Beautician Course at R Crown. Includes 50% discount (now ₹50,000), free hair and nail courses, and free ₹25,000 hair kit."
        canonicalUrl="https://rcrown.in/advanced-makeup-course"
      />

      {/* Title block */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
          Flagship Professional Training
        </span>
        <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory tracking-wide uppercase">
          {course.name}
        </h1>
        <div className="w-12 h-[1.5px] bg-brand-gold mx-auto mt-4" />
        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-light">
          The ultimate 3-month certification program bundling makeup, beauty styling, and professional hair &amp; nail modules. Built for aspiring beauty entrepreneurs in Bengaluru.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
        {/* Left Column: Syllabus and Details */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Main Highlights Card */}
          <div className="p-8 bg-brand-charcoal border border-brand-gold/15 shadow-2xl rounded-sm space-y-6 text-left">
            <h3 className="text-2xl font-serif text-brand-gold uppercase tracking-wider">What You Will Learn</h3>
            <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
              This course covers four intensive modules, preparing you for immediate studio employment or launching your independent bridal makeup service.
            </p>
            <div className="space-y-6">
              {course.modules.map((mod, idx) => (
                <div key={idx} className="space-y-3 border-t border-brand-gold/15 pt-6 first:border-none first:pt-0">
                  <h4 className="font-serif text-base text-brand-ivory font-bold uppercase tracking-wider">{mod.title}</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mod.topics.map((topic, i) => (
                      <li key={i} className="flex items-center space-x-2 text-xs text-[#A0A0A0] font-light">
                        <span className="text-brand-gold font-bold">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Free Bundle Details */}
          <div className="p-8 bg-[#151515] border border-brand-gold/15 space-y-6 rounded-sm text-left">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-serif text-brand-gold uppercase tracking-wider">Course Investment</h3>
              <span className="px-4 py-1.5 bg-brand-maroon text-brand-ivory text-[10px] font-bold tracking-widest uppercase border border-brand-gold/15 rounded-sm">
                50% OFF
              </span>
            </div>
            <div className="flex items-baseline space-x-4 border-b border-brand-gold/10 pb-4">
              <span className="text-3xl font-serif font-bold text-brand-gold">
                ₹{course.offerPrice.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-[#808080] line-through font-light">
                Regular Value: ₹{course.regularPrice.toLocaleString("en-IN")}
              </span>
            </div>

            {/* Special Bundles list */}
            <div className="bg-brand-black border border-brand-gold/15 p-6 space-y-4 rounded-sm">
              <h4 className="text-[10px] font-bold text-brand-gold tracking-widest uppercase">
                Complimentary Kit &amp; Certifications Included:
              </h4>
              <ul className="space-y-3">
                {course.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs text-brand-ivory/95 font-light">
                    <Check className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Right Column: Registration Form */}
        <div className="space-y-8">
          {/* Quick Stats */}
          <div className="p-6 border border-brand-gold/15 bg-brand-charcoal space-y-4 shadow-2xl rounded-sm text-left">
            <div className="flex items-center space-x-3 text-xs text-brand-ivory">
              <div className="p-2 bg-brand-black border border-brand-gold/10 rounded-sm text-brand-gold">
                <Calendar className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-brand-gold">Duration</p>
                <p className="text-[#A0A0A0] mt-0.5 font-light">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-xs text-brand-ivory pt-2 border-t border-white/5">
              <div className="p-2 bg-brand-black border border-brand-gold/10 rounded-sm text-brand-gold">
                <Tag className="h-4 w-4" />
              </div>
              <div>
                <p className="font-bold uppercase tracking-wider text-brand-gold">Included Free</p>
                <p className="text-[#A0A0A0] mt-0.5 font-light">₹25k Hair Kit, Hair &amp; Nail Courses</p>
              </div>
            </div>
          </div>

          <EnquiryForm />

          {/* Small Disclaimer */}
          <div className="flex items-start space-x-2.5 p-4 bg-brand-black border border-brand-gold/15 text-[10px] text-[#A0A0A0] leading-relaxed rounded-sm text-left">
            <ShieldAlert className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
            <span>{COURSE_DISCLAIMER}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
