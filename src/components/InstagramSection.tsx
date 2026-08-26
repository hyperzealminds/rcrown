import { BUSINESS } from "../data/business";

function InstagramIcon({ className = "h-5 w-5 text-white" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

export default function InstagramSection() {
  const feedItems = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400",
      altText: "Instagram bridal look"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1522337060-70f95af73aee?auto=format&fit=crop&q=80&w=400",
      altText: "Instagram student session"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1620331789557-b1b1178225a6?auto=format&fit=crop&q=80&w=400",
      altText: "Instagram hair highlights"
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400",
      altText: "Instagram nail extension styling"
    }
  ];

  return (
    <section className="bg-brand-ivory/30 border-y border-brand-gold/10 py-16 sm:py-24 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest text-brand-gold uppercase block">
          Social Portfolios
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
          FOLLOW R CROWN
        </h2>
        <p className="text-sm text-brand-charcoal/70 max-w-lg mx-auto">
          See daily updates from our students, bridal sessions, and studio makeovers on our feeds.
        </p>

        {/* Profile Channels */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
          {/* Channel 1 */}
          <a
            href={BUSINESS.instagramPrimary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 border border-brand-gold/20 bg-white hover:border-brand-gold transition shadow-sm group"
          >
            <InstagramIcon className="h-5 w-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
            <div className="text-left text-xs">
              <p className="font-semibold text-brand-charcoal">Academy Feed</p>
              <p className="text-brand-gold font-bold">{BUSINESS.instagramPrimary.handle}</p>
            </div>
          </a>

          {/* Channel 2 */}
          <a
            href={BUSINESS.instagramSecondary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 px-6 py-3 border border-brand-gold/20 bg-white hover:border-brand-gold transition shadow-sm group"
          >
            <InstagramIcon className="h-5 w-5 text-[#E1306C] group-hover:scale-110 transition-transform" />
            <div className="text-left text-xs">
              <p className="font-semibold text-brand-charcoal">Artistry Feed</p>
              <p className="text-brand-gold font-bold">{BUSINESS.instagramSecondary.handle}</p>
            </div>
          </a>
        </div>
      </div>

      {/* Grid of Feed items */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {feedItems.map((item) => (
          <div key={item.id} className="relative aspect-square overflow-hidden border border-brand-gold/10 bg-brand-cream group">
            <img
              src={item.imageUrl}
              alt={item.altText}
              loading="lazy"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
            {/* Instagram camera icon hover display */}
            <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <InstagramIcon className="h-8 w-8 text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
