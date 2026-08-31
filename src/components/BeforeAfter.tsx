import { useState, useRef, useEffect } from "react";
import type { MouseEvent, TouchEvent } from "react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfter({
  beforeImage,
  afterImage,
  beforeAlt = "Before Look",
  afterAlt = "After Look",
  labelBefore = "Before",
  labelAfter = "After",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleTouchStart = () => setIsDragging(true);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="space-y-6 text-center text-brand-ivory bg-brand-black">
      <div className="space-y-2">
        <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-gold uppercase block">
          Makeover Outcomes
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-brand-ivory tracking-wide uppercase">
          SEE THE TRANSFORMATION
        </h2>
        <div className="w-16 h-[1.5px] bg-brand-gold mx-auto mt-4" />
      </div>
      <p className="text-xs text-[#A0A0A0] max-w-xl mx-auto font-light leading-relaxed">
        Drag the slider to view the makeover transformations achieved during our training and studio sessions in Rajajinagar.
      </p>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        aria-label="Before and after transformation slider. Use left and right arrow keys to adjust."
        className="relative w-full max-w-3xl aspect-[4/3] mx-auto overflow-hidden select-none border border-brand-gold/25 shadow-2xl group focus:outline-none focus:ring-2 focus:ring-brand-gold rounded-sm"
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={afterAlt}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="absolute top-4 right-4 bg-brand-black/85 backdrop-blur-md text-brand-ivory text-[10px] font-semibold px-4 py-2 uppercase tracking-widest border border-brand-gold/25 pointer-events-none rounded-sm">
          {labelAfter}
        </div>

        {/* Before Image (Overlay Clip) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-black/85 backdrop-blur-md text-brand-ivory text-[10px] font-semibold px-4 py-2 uppercase tracking-widest border border-brand-gold/25 rounded-sm">
            {labelBefore}
          </div>
        </div>

        {/* Slider Handle Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-brand-gold cursor-ew-resize select-none"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Draggable Circle Centerpiece */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-charcoal border-2 border-brand-gold rounded-full flex items-center justify-between px-2.5 shadow-2xl">
            <span className="text-[10px] text-brand-gold font-bold">◀</span>
            <span className="text-[10px] text-brand-gold font-bold">▶</span>
          </div>
        </div>

        {/* Tiny caption clarifying stock placeholder status */}
        <div className="absolute bottom-2 left-0 right-0 text-[10px] text-white/50 bg-black/35 py-1 text-center pointer-events-none">
          *Demonstration placeholder images. Replace with actual studio outcomes.
        </div>
      </div>
    </div>
  );
}
