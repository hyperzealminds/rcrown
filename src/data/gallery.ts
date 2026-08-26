export interface GalleryItem {
  id: string;
  title: string;
  category: "students" | "makeup" | "hair" | "nails" | "bridal" | "salon";
  imageUrl: string;
  altText: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    title: "Indian Bridal Makeup Makeover",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800",
    altText: "Traditional Indian bride with beautiful gold ornaments and HD bridal makeup"
  },
  {
    id: "g2",
    title: "Academy Student Practical Session",
    category: "students",
    imageUrl: "https://images.unsplash.com/photo-1522337060-70f95af73aee?auto=format&fit=crop&q=80&w=800",
    altText: "Students practicing makeup brush strokes in a training academy"
  },
  {
    id: "g3",
    title: "Vibrant Hair Color & Balayage",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1620331789557-b1b1178225a6?auto=format&fit=crop&q=80&w=800",
    altText: "Client with warm brown and blonde balayage highlight styling"
  },
  {
    id: "g4",
    title: "Modern Gel Nail Extensions",
    category: "nails",
    imageUrl: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=800",
    altText: "Professional nail extensions with subtle chrome glitter and gemstone accents"
  },
  {
    id: "g5",
    title: "Traditional Bridal Saree Styling",
    category: "bridal",
    imageUrl: "https://images.unsplash.com/photo-1616166330003-8e550d40c06a?auto=format&fit=crop&q=80&w=800",
    altText: "Bridal model with jasmine flowers and heavy traditional gold jewelry"
  },
  {
    id: "g6",
    title: "Creative Eye Makeup Practical",
    category: "students",
    imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    altText: "Academy student styling a cut-crease eye shadow design on a practice model"
  },
  {
    id: "g7",
    title: "Premium Hydrating Skin Care Facial",
    category: "salon",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
    altText: "Salon client receiving a deep hydrating skin treatment facial"
  },
  {
    id: "g8",
    title: "Glamorous Evening Party Makeup",
    category: "makeup",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    altText: "Model posing with dark smokey eye shadow and champagne lips"
  },
  {
    id: "g9",
    title: "Precision Hair Straightening Treatment",
    category: "hair",
    imageUrl: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800",
    altText: "Stylist straightening sleek long hair during a keratin smoothening procedure"
  }
];
