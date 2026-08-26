export interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  regularPrice: number;
  offerPrice: number;
  discount: string;
  benefits: string[];
  modules: { title: string; topics: string[] }[];
}

export const MAIN_COURSE: Course = {
  id: "advanced-makeup-beautician",
  name: "Advanced Makeup & Beautician Course",
  duration: "3 Months (Flexible Batches)",
  description: "Our flagship comprehensive program designed to turn beginners into professional makeup artists and salon stylists. Learn under personal mentorship in a live salon environment.",
  regularPrice: 100000,
  offerPrice: 50000,
  discount: "50% OFF",
  benefits: [
    "₹25,000 Worth Professional Hair Kit FREE",
    "Professional Hair Course FREE",
    "Professional Nail Art Course FREE",
    "Hands-on Academy Practice with Real Clients",
    "Portfolio Photoshoot Assistance",
  ],
  modules: [
    {
      title: "Advanced Makeup Artistry",
      topics: [
        "Skin Analysis & Prep",
        "Color Theory & Color Correction",
        "Foundation Blending & Contour Techniques",
        "Bridal Makeup (Traditional, North & South Indian)",
        "HD Makeup & Airbrush Concepts",
        "Eye Makeup (Smokey, Cut Crease, Glitter)",
        "Draping Styles & Lash Application"
      ]
    },
    {
      title: "Beautician & Salon Styling",
      topics: [
        "Skin Care Treatments & Facials",
        "Waxing, Threading & Bleaching",
        "Manicure & Pedicure Procedures",
        "Salon Hygiene & Client Consulting",
        "Basic Haircuts & Styling Techniques"
      ]
    },
    {
      title: "Professional Hair Training (FREE Bundle)",
      topics: [
        "Hair Analysis & Shampooing",
        "Blow Dry & Thermal Styling",
        "Basic & Advanced Haircuts (U, Step, Layer, Bob)",
        "Hair Coloring & Highlights",
        "Hair Spa & Deep Conditioning Treatments",
        "Straightening & Smoothening Treatments"
      ]
    },
    {
      title: "Nail Artistry Training (FREE Bundle)",
      topics: [
        "Nail Anatomy & Prep",
        "Gel Extension & Acrylic Extension",
        "Nail Art Designs & Glitter Work",
        "UV Lamp Treatment & Gel Removal"
      ]
    }
  ]
};

export const COURSES: Course[] = [
  MAIN_COURSE,
  {
    id: "beautician-only",
    name: "Professional Beautician Course",
    duration: "2 Months",
    description: "Build a core foundation in salon treatments, skin care therapies, hygiene practices, and basic hair grooming.",
    regularPrice: 40000,
    offerPrice: 25000,
    discount: "37% OFF",
    benefits: [
      "Skin Care Product Guidance",
      "Live Model Hands-on Practice",
      "Academy Completion Certificate"
    ],
    modules: [
      {
        title: "Beautician Course Content",
        topics: [
          "Skin Anatomy & Analysis",
          "Advanced Threading & Waxing Types",
          "Facial Treatments (Fruit, Gold, Anti-Aging)",
          "Pedicure & Manicure Essentials",
          "Body Spa & Polishing Overview"
        ]
      }
    ]
  },
  {
    id: "hair-only",
    name: "Professional Hair Course",
    duration: "6 Weeks",
    description: "Master haircuts, coloring techniques, and structural chemical treatments in our professional studio.",
    regularPrice: 35000,
    offerPrice: 20000,
    discount: "42% OFF",
    benefits: [
      "Hair Styling Product Mastery",
      "Free Practice Tool Usage at Academy",
      "Certificate of Excellence"
    ],
    modules: [
      {
        title: "Hair Styling Syllabus",
        topics: [
          "Hair Physics & Sectioning",
          "Classic & Contemporary Haircuts",
          "Hair Color & Balayage Basics",
          "Smoothening, Keratin & Straightening"
        ]
      }
    ]
  },
  {
    id: "nail-only",
    name: "Creative Nail Art & Extension Course",
    duration: "3 Weeks",
    description: "Focus on design, extensions, chrome finishes, and modern nail technology.",
    regularPrice: 20000,
    offerPrice: 10000,
    discount: "50% OFF",
    benefits: [
      "All Nail Products Provided During Practice",
      "Portfolio creation support",
      "Nail Art Certification"
    ],
    modules: [
      {
        title: "Nail Course Syllabus",
        topics: [
          "Acrylic & Gel Extension Work",
          "Nail Form Shaping & Filing",
          "Chrome, Cat Eye & Glitter Art",
          "Maintenance & Safe Extensions Removal"
        ]
      }
    ]
  }
];

export const COURSE_DISCLAIMER = "Offer details, course schedule and admission terms are subject to confirmation by R Crown Salon.";
