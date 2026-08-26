import { Link } from "react-router-dom";

export default function PassionProfession() {
  return (
    <section className="bg-brand-black text-white border-y border-brand-gold/15 py-20 text-center relative overflow-hidden">
      {/* Background Graphic overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-charcoal via-brand-black to-brand-black z-0 opacity-80" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-wide uppercase max-w-2xl mx-auto leading-tight">
          YOUR PASSION CAN BECOME <br />
          <span className="text-gold-gradient">YOUR PROFESSION</span>
        </h2>
        
        <p className="text-sm sm:text-base text-brand-champagne/80 max-w-2xl mx-auto leading-relaxed font-sans">
          Whether you are beginning your beauty journey or looking to develop your skills, R Crown provides a professional environment to learn makeup, beauty, hair and nail skills.
        </p>

        <div className="pt-4">
          <Link
            to="/advanced-makeup-course"
            className="inline-block px-8 py-4 bg-brand-gold hover:bg-brand-goldDark text-white font-semibold text-xs tracking-widest uppercase transition duration-300 shadow-md"
          >
            EXPLORE THE COURSE
          </Link>
        </div>
      </div>
    </section>
  );
}
