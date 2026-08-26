import Gallery from "../components/Gallery";
import SEO from "../components/SEO";

export default function GalleryPage() {
  return (
    <div className="py-12">
      <SEO
        title="R Crown Salon Gallery | Makeup, Bridal, Hair & Beauty"
        description="View the official gallery of R Crown Salon & Makeup Studio. Browse makeup styling, bridal makeover transformations, student practice art, and beauty salon results."
        canonicalUrl="https://rcrown.in/gallery"
      />
      <div className="max-w-7xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
}
