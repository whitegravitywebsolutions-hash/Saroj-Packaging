/**
 * SAROJ PACKAGING - Structured Content Data
 * Greater Noida, Uttar Pradesh
 */

export const COMPANY_INFO = {
  name: "Saroj Packaging",
  tagline: "Packaging Solutions You Can Rely On",
  founder: "Mr. Sanjeev Kumar Jain",
  experienceYears: 25,
  location: "Greater Noida, Uttar Pradesh, India",
  phone: "+91 97111 30881",
  phoneRaw: "9711130881",
  phoneSecondary: "+91 98715 62390",
  phoneSecondaryRaw: "9871562390",
  email: "packagingsaroj@gmail.com",
  whatsapp: "+91 97111 30881",
  whatsappRaw: "919711130881",
  aboutShort: "Saroj Packaging, based in Greater Noida, is a trusted name in the packaging material industry, founded by Mr. Sanjeev Kumar Jain. With 25 years of experience in the field, we have built our business around quality products, dependable service, and a clear understanding of our customers' packaging requirements.",
  aboutLong: "We deal primarily in a wide range of corrugated rolls, paper, duplex paper, corrugated boxes, and other packaging materials. Our focus is to provide practical and reliable packaging solutions suitable for different business and industrial requirements. Over the years, Saroj Packaging has developed strong knowledge of packaging materials and their applications. We work closely with our customers to understand their requirements and provide the right material with a focus on quality, consistency, and timely service.",
  commitment: "At Saroj Packaging, we believe that good packaging starts with the right material. Our aim is to maintain consistent quality and provide dependable packaging products that support our customers' day-to-day business needs. From packaging material to practical packaging solutions, Saroj Packaging is committed to delivering quality you can depend on.",
  founderThoughts: "“Good packaging begins with good material, but a successful business is built on trust, consistency, and commitment.”",
  founderStory: "Mr. Sanjeev Kumar Jain, the founder of Saroj Packaging, has built the business with a strong focus on quality, reliability, and long-term customer relationships. Based in Greater Noida, his journey in the packaging industry reflects a deep understanding of packaging materials and the evolving needs of businesses. With 25 years of experience in the packaging industry, Mr. Jain has focused on creating a business that customers can depend on for consistent-quality packaging materials and timely service. Mr. Sanjeev Kumar Jain believes that understanding the customer's requirement is just as important as providing quality products. His approach is centered on maintaining strong relationships, delivering dependable solutions, and continuously improving with changing industry requirements.",
  vision: "To become a trusted and recognized name in the packaging industry, known for quality materials, dependable service, and long-term customer relationships. We aim to continuously grow and adapt to the changing needs of businesses while maintaining the values of trust, quality, and commitment that define Saroj Packaging.",
  mission: "Our mission is to provide reliable and quality packaging materials that meet the diverse requirements of our customers.",
  missionPoints: [
    "Maintaining consistent product quality.",
    "Understanding and fulfilling customer requirements.",
    "Providing dependable and timely service.",
    "Building long-term relationships with customers.",
    "Continuously improving our products and services.",
    "Growing responsibly while maintaining trust and integrity."
  ],
  philosophy: [
    {
      pillar: "Quality",
      tagline: "Quality in every material.",
      description: "Strict quality control ensuring exact GSM, high bursting factor, and dependable protective performance across all supplies."
    },
    {
      pillar: "Commitment",
      tagline: "Commitment in every delivery.",
      description: "Punctual dispatches, reliable supply chain management, and dedicated inventory to safeguard our clients' continuous production."
    },
    {
      pillar: "Trust",
      tagline: "Trust in every relationship.",
      description: "Ethical trade, transparent pricing, and deep technical understanding that foster durable multi-decade partnerships."
    }
  ]
};

export const PRODUCTS_DATA = [
  {
    id: "rolls",
    category: "rolls",
    name: "Corrugated Rolls",
    tagline: "High-Flexibility Fluted Cushioning & Wrapping",
    image: "/images/corrugated_rolls.jpg",
    badge: "Top Offering",
    description: "Flexible, shock-absorbent single-face and multi-flute corrugated rolls ideal for furniture wrapping, ceramic protection, metal parts, and industrial bundling.",
    specs: [
      { label: "Structure", value: "Single Face 2-Ply / Fluted Roll" },
      { label: "GSM Range", value: "80 GSM to 250 GSM" },
      { label: "Flute Types", value: "B-Flute, C-Flute, E-Flute" },
      { label: "Roll Widths", value: '24", 36", 48", 60", 72" & Custom slit sizes' },
      { label: "Key Benefit", value: "Superior impact damping & scratch resistance" }
    ],
    features: [
      "High shock-absorption fluting for fragile products",
      "Flexible bending around irregular product geometries",
      "Available in Virgin Kraft & Agro-based paper grades",
      "Custom roll length and diameter manufactured to order"
    ]
  },
  {
    id: "boxes",
    category: "boxes",
    name: "Corrugated Boxes",
    tagline: "Heavy-Duty 3-Ply, 5-Ply & 7-Ply Cartons",
    image: "/images/corrugated_boxes.jpg",
    badge: "Custom Engineering",
    description: "Precision-cut master cartons and die-cut boxes engineered to withstand high stacking loads, moisture variations, and demanding long-distance transit.",
    specs: [
      { label: "Ply Type", value: "3-Ply (Light/Medium), 5-Ply (Heavy), 7-Ply (Export)" },
      { label: "Styles", value: "RSC (Regular Slotted), Die-Cut, Telescopic, Tray" },
      { label: "Strength", value: "High Bursting Factor (BF) & Edge Crush Test (ECT)" },
      { label: "Print Options", value: "Custom Flexographic single / multi-color printing" },
      { label: "Applications", value: "FMCG, Industrial Parts, Pharma, eCommerce" }
    ],
    features: [
      "High vertical compression resistance prevents box collapsing",
      "Moisture-resistant adhesive bonding for humid weather",
      "Accurate slotting and creasing for smooth automated packing",
      "Custom internal dividers and partitions available"
    ]
  },
  {
    id: "duplex",
    category: "duplex",
    name: "Duplex Paper & Board",
    tagline: "Premium Coated White & Grey Back Boards",
    image: "/images/duplex_paper.jpg",
    badge: "Coated Finish",
    description: "High-smoothness LWC/HWC coated duplex boards providing superior printability, crisp crease definition, and rigid structural durability for retail mono-cartons.",
    specs: [
      { label: "Backing", value: "Grey Back (Eco/Industrial) & White Back (Premium)" },
      { label: "Caliper Range", value: "200 GSM to 450 GSM" },
      { label: "Coating", value: "Light Weight (LWC) / Heavy Weight (HWC)" },
      { label: "Format", value: "Reels & Custom Cut Flat Sheets" },
      { label: "Applications", value: "Pharma cartons, apparel boxes, FMCG packaging" }
    ],
    features: [
      "Ultra-smooth top coating for high-resolution offset printing",
      "Excellent crease recovery and die-cutting sharpness",
      "Superior ink holdout and high gloss retention",
      "Strict caliper uniformity across entire batch"
    ]
  },
  {
    id: "paper",
    category: "paper",
    name: "Industrial Paper & Kraft Reels",
    tagline: "High Burst Factor (BF) Kraft & Fluting Medium",
    image: "/images/kraft_paper_rolls.jpg",
    badge: "High BF Paper",
    description: "Premium virgin and semi-kraft paper reels engineered with high tensile strength for automated corrugation plants, paper bag converters, and industrial tube winders.",
    specs: [
      { label: "Paper Grades", value: "Virgin Kraft Liner, Test Liner, Fluting Medium" },
      { label: "Burst Factor (BF)", value: "16 BF, 18 BF, 22 BF, 28 BF, 32 BF" },
      { label: "GSM Range", value: "90 GSM to 350 GSM" },
      { label: "Reel Widths", value: "80 cm up to 250 cm diameter" },
      { label: "Shades", value: "Natural Kraft Brown, Agro Shade, Golden Kraft" }
    ],
    features: [
      "High ring crush test (RCT) and tensile breaking length",
      "Optimized moisture balance for ripple-free corrugation",
      "Controlled Cobb sizing for moisture barrier properties",
      "Consistent caliper and smooth reel winding tension"
    ]
  },
  {
    id: "other",
    category: "other",
    name: "Other Packaging Materials",
    tagline: "Protective Allied Consumables & Accessories",
    image: "/images/other_packaging.jpg",
    badge: "Allied Supplies",
    description: "Complete spectrum of allied industrial packaging materials to safeguard pallets, edge corners, and parcels across complex logistic supply chains.",
    specs: [
      { label: "Edge Boards", value: "V-notch & L-shape corner edge protectors" },
      { label: "Honeycomb", value: "Lightweight, ultra-rigid paper honeycomb sheets" },
      { label: "Stretch Film", value: "High-stretch manual & machine grade cling wrap" },
      { label: "Tapes", value: "BOPP packaging tapes & PP Strapping rolls" },
      { label: "Custom Items", value: "Bubble rolls, foam sheets & corrugated pads" }
    ],
    features: [
      "Complete one-stop procurement for all packaging floor consumables",
      "Heavy-duty corner reinforcement prevents strap damage to goods",
      "Puncture-resistant stretch wrap with high elongation retention",
      "Standard and customized dimensional specs available"
    ]
  }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    title: "Reliable Quality and Service",
    author: "Rajesh Sharma",
    company: "Industrial Manufacturing Client",
    review: "Saroj Packaging has been a reliable source for our packaging material requirements. The quality is consistent and the team understands our requirements well.",
    rating: 5,
    city: "Greater Noida"
  },
  {
    id: 2,
    title: "Good Packaging Material Supplier",
    author: "Amit Gupta",
    company: "Procurement & Logistics Manager",
    review: "We have had a good experience with Saroj Packaging. Their range of corrugated products and packaging materials makes it convenient for us to manage our regular requirements.",
    rating: 5,
    city: "Noida / Delhi NCR"
  },
  {
    id: 3,
    title: "Professional & Dependable",
    author: "Vikas Agarwal",
    company: "Supply Chain Operations",
    review: "What we appreciate most is their commitment to quality and timely service. They are easy to communicate with and understand the requirements of their customers.",
    rating: 5,
    city: "Greater Noida"
  },
  {
    id: 4,
    title: "Quality Products at Competitive Rates",
    author: "Manish Jain",
    company: "Enterprise Packaging Head",
    review: "We have been satisfied with the quality of packaging materials supplied by Saroj Packaging. Their team is professional, responsive, and easy to work with.",
    rating: 5,
    city: "Ghaziabad"
  },
  {
    id: 5,
    title: "Trusted Packaging Partner",
    author: "Deepak Verma",
    company: "Operations Director",
    review: "Saroj Packaging understands the importance of reliable packaging materials for business. Their service and product quality have made them a dependable partner for our requirements.",
    rating: 5,
    city: "Greater Noida"
  }
];

export const FAQS_DATA = [
  {
    id: 1,
    question: "What products does Saroj Packaging offer?",
    answer: "Saroj Packaging deals in a wide range of packaging materials, including corrugated rolls, paper, duplex paper, corrugated boxes, and other packaging materials tailored for industrial and commercial operations."
  },
  {
    id: 2,
    question: "Do you provide corrugated boxes?",
    answer: "Yes. We deal in corrugated boxes for various business and packaging requirements. Product specifications (including 3-ply, 5-ply, 7-ply, dimensions, and custom printing) can be discussed and customized according to the customer's exact requirements."
  },
  {
    id: 3,
    question: "Do you provide corrugated rolls?",
    answer: "Yes, corrugated rolls are one of our primary product offerings. We manufacture single-face and multi-ply fluted rolls in various widths (24” to 72”+) and GSMs for wrapping, cushioning, and protective packaging."
  },
  {
    id: 4,
    question: "Can I enquire about a specific packaging material?",
    answer: "Yes. You can contact our team with your required product, quantity, size, GSM, or custom specifications, and our technical team in Greater Noida will assist you promptly with technical recommendations and competitive quotation."
  },
  {
    id: 5,
    question: "Do you supply paper and duplex paper?",
    answer: "Yes. Saroj Packaging deals in paper (Kraft reels, test liner, fluting medium) and duplex paper (coated grey back and white back boards) along with other industrial packaging materials."
  },
  {
    id: 6,
    question: "Where is Saroj Packaging located and what areas do you serve?",
    answer: "We are headquartered in Greater Noida, Uttar Pradesh. We actively serve businesses across Greater Noida, Noida, Delhi NCR, and neighboring industrial hubs with prompt and reliable logistics."
  }
];
