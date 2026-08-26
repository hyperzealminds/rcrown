export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date?: string;
}

// We do not fabricate reviews or student testimonials.
// Once genuine reviews are verified, they can be added to this array.
// The UI will dynamically show/hide the testimonial section depending on array length.
export const TESTIMONIALS: Testimonial[] = [];
