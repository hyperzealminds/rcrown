import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <SEO
        title="Page Not Found | R Crown Salon"
        description="The page you are looking for does not exist. Navigate back to R Crown Salon & Makeup Studio home."
        canonicalUrl="https://rcrown.in/404"
      />
      <div className="space-y-6 max-w-md">
        <AlertCircle className="h-16 w-16 text-brand-gold mx-auto" />
        <h1 className="text-4xl font-serif text-brand-black">Page Not Found</h1>
        <p className="text-sm text-brand-charcoal/80">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-brand-charcoal text-white hover:bg-brand-black font-semibold text-xs tracking-widest uppercase transition duration-200 shadow-md"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
