import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data/gallery";
import type { GalleryItem } from "../data/gallery";

const CATEGORIES = [
  { id: "all", label: "All Works" },
  { id: "students", label: "Students" },
  { id: "makeup", label: "Makeup" },
  { id: "hair", label: "Hair Styling" },
  { id: "nails", label: "Nails" },
  { id: "bridal", label: "Bridal" },
  { id: "salon", label: "Salon & Skin" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filteredItems]);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(f => f.id === item.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-black tracking-wide uppercase">
          R CROWN ACADEMY &amp; MAKEUP GALLERY
        </h2>
        <p className="text-sm text-brand-charcoal/70 max-w-xl mx-auto">
          Explore the professional makeovers, student training sessions, and creative nail/hair arts crafted at our Bengaluru studio.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto px-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveFilter(cat.id);
              setLightboxIndex(null); // Reset lightbox indexing just in case
            }}
            className={`px-4 py-2 text-xs tracking-wider uppercase border transition-all duration-200 ${
              activeFilter === cat.id
                ? "bg-brand-gold text-white border-brand-gold font-semibold shadow-sm"
                : "border-brand-gold/15 text-brand-charcoal hover:border-brand-gold/45 bg-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openLightbox(item)}
            className="group relative aspect-[4/3] overflow-hidden border border-brand-gold/10 bg-brand-cream cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.altText}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
              <span className="text-[10px] text-brand-gold font-semibold uppercase tracking-widest mb-1">
                {item.category}
              </span>
              <h4 className="text-white text-base font-serif tracking-wide">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-brand-black/95 flex items-center justify-center p-4 backdrop-blur-md"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-white hover:text-brand-gold transition-colors focus:outline-none"
            aria-label="Close gallery lightbox"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={showPrev}
            className="absolute left-4 p-3 bg-brand-charcoal/40 hover:bg-brand-gold/80 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image Containment */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl max-h-[80vh] flex flex-col items-center"
          >
            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].altText}
              className="max-w-full max-h-[70vh] object-contain border border-brand-gold/25"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-xs text-brand-gold font-semibold uppercase tracking-widest">
                {filteredItems[lightboxIndex].category}
              </span>
              <h3 className="text-lg font-serif tracking-wide mt-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#999] mt-1 italic">
                {filteredItems[lightboxIndex].altText}
              </p>
            </div>
          </div>

          {/* Right Navigation */}
          <button
            onClick={showNext}
            className="absolute right-4 p-3 bg-brand-charcoal/40 hover:bg-brand-gold/80 text-white rounded-full transition-colors focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}
