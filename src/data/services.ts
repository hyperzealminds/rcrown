export interface ServiceItem {
  id: string;
  name: string;
  category: "makeup" | "hair" | "beauty" | "nails" | "styling";
  description: string;
  features?: string[];
  imageUrl: string;
}

export const MAKEUP_SERVICES: ServiceItem[] = [
  {
    id: "bridal-makeup",
    name: "Bridal Makeup",
    category: "makeup",
    description: "Premium, long-lasting wedding makeup customized to highlight your natural features on your special day.",
    features: ["Skin prepping & hydration", "Lash extensions", "Hair styling & saree draping included"],
    imageUrl: "https://images.unsplash.com/photo-1616166330003-8e550d40c06a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hd-makeup",
    name: "HD Makeup",
    category: "makeup",
    description: "High-definition camera-ready makeup that looks flawless in high-resolution photography and video.",
    features: ["Flawless base blending", "Matte or dewy finish", "Lightweight long-wear products"],
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "party-makeup",
    name: "Party Makeup",
    category: "makeup",
    description: "Glamorous makeup styles for festive occasions, social events, and evening receptions.",
    features: ["Custom eye shadow look", "Highlighting & contouring", "Long-stay lip color"],
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "light-makeup",
    name: "Light / Day Makeup",
    category: "makeup",
    description: "Subtle, minimalist glam for daytime meetings, pre-wedding events, and formal gatherings.",
    features: ["Soft glow base", "Natural brow & lip defining", "Light lash grooming"],
    imageUrl: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "basic-makeup",
    name: "Basic Makeup",
    category: "makeup",
    description: "Quick, professional makeup finish for casual outings, corporate events, and everyday styling.",
    features: ["Evening skin tone balancing", "Basic eye defining", "Fresh lip finish"],
    imageUrl: "https://images.unsplash.com/photo-1522337060-70f95af73aee?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hair-styling",
    name: "Event Hair Styling",
    category: "styling",
    description: "Creative styling from curls and buns to elaborate braids and traditional bridal hairdos.",
    features: ["Heat protection therapy", "Extension pinning & styling", "Long-lasting lock spray"],
    imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=600"
  }
];

export const SALON_SERVICES: ServiceItem[] = [
  {
    id: "hair-cut",
    name: "Classic & Advanced Haircuts",
    category: "hair",
    description: "Professional cuts tailored to your face shape, including layers, steps, bobs, and feather cuts.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hair-color",
    name: "Global Hair Coloring & Highlights",
    category: "hair",
    description: "Vibrant global shades, balayage, and trendy streaks using damage-free styling products.",
    imageUrl: "https://images.unsplash.com/photo-1620331789557-b1b1178225a6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "hair-smooth",
    name: "Smoothening & Keratin Therapies",
    category: "hair",
    description: "Deep chemical smoothing and protein Keratin treatments to make dry hair sleek and frizz-free.",
    imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "skin-facial",
    name: "Premium Skin Care & Facials",
    category: "beauty",
    description: "Hydrating, glow-enhancing facial procedures targeting tan, acne, and aging.",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pedi-mani",
    name: "Spa Pedicures & Manicures",
    category: "beauty",
    description: "Relaxing deep scrubs, cuticle cleaning, and hydrating massages for hands and feet.",
    imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nail-extensions",
    name: "Gel & Acrylic Nail Extensions",
    category: "nails",
    description: "Stunning nail enhancement overlays featuring modern chrome, glitter, and cat-eye art.",
    imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600"
  }
];
