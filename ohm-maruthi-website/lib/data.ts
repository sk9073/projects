import {
  Shield,
  Building2,
  Briefcase,
  Users,
  UserCheck,
  Heart,
  Truck,
  Plane,
  Home,
  Laptop,
  Gavel,
  Factory
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  category: "Business" | "Industrial" | "Corporate" | "Professional" | "Personal";
  description: string;
  longDescription: string;
  icon: any;
  features: string[];
}

export const SERVICES: Service[] = [
  // Business & Industrial
  {
    title: "Trade Credit Insurance",
    slug: "trade-credit-insurance",
    category: "Business",
    description: "Protect your business against unpaid invoices and insolvency.",
    longDescription: "Trade Credit Insurance protects your business against the risk of non-payment by your customers. Whether due to insolvency or protracted default, this insurance ensures that your cash flow remains steady, allowing you to extend credit terms with confidence.",
    icon: Briefcase,
    features: [
      "Protection against non-payment",
      "Improved cash flow management",
      "Better financing terms from banks",
      "Market intelligence on buyers"
    ]
  },
  {
    title: "Cyber Insurance",
    slug: "cyber-insurance",
    category: "Business",
    description: "Coverage for data breaches, cyberattacks, and digital liability.",
    longDescription: "In the digital age, cyber threats are a major risk. Cyber Insurance covers financial losses relating to data breaches, system hacking, ransomware, and loss of sensitive information. It also covers legal costs, notification expenses, and crisis management.",
    icon: Laptop,
    features: [
      "Data breach response coverage",
      "Cyber extortion & ransomware protection",
      "Business interruption loss",
      "Legal & regulatory defense costs"
    ]
  },
  {
    title: "Marine & Transit Insurance",
    slug: "marine-transit-insurance",
    category: "Industrial",
    description: "Coverage for goods in transit via sea, air, or land.",
    longDescription: "Marine Insurance covers the loss or damage of ships, cargo, terminals, and any transport or cargo by which property is transferred, acquired, or held between the points of origin and final destination.",
    icon: Truck, // Or Ship if available, sticking to Lucide defaults
    features: [
      "All-risk coverage for cargo",
      "Import/Export protection",
      "Inland transit coverage",
      "Warehouse-to-warehouse coverage"
    ]
  },
  {
    title: "Directors & Officers Liability (D&O)",
    slug: "directors-officers-liability",
    category: "Corporate",
    description: "Protect key decision makers from personal liability.",
    longDescription: "Directors and Officers (D&O) Liability Insurance protects the personal assets of corporate directors and officers, and their spouses, in the event they are personally sued by employees, vendors, competitors, investors, customers, or other parties, for actual or alleged wrongful acts in managing a company.",
    icon: UserCheck,
    features: [
      "Personal asset protection",
      "Legal defense costs coverage",
      "Employment practices liability",
      "Regulatory investigation costs"
    ]
  },
  {
    title: "Workmen's Compensation",
    slug: "workmens-compensation",
    category: "Corporate",
    description: "Mandatory coverage for employee work-related injuries.",
    longDescription: "Workmen's Compensation Insurance provides wage replacement and medical benefits to employees injured in the course of employment in exchange for mandatory relinquishment of the employee's right to sue his or her employer for the tort of negligence.",
    icon: Users,
    features: [
      "Medical expenses coverage",
      "Lost wages compensation",
      "Disability benefits",
      "Death benefits for dependents"
    ]
  },

  // Personal & Families
  {
    title: "Health Insurance",
    slug: "health-insurance",
    category: "Personal",
    description: "Comprehensive medical coverage for you and your family.",
    longDescription: "Our Health Insurance plans offer extensive coverage for medical expenses, hospitalization, surgeries, and critical illnesses. Ensure you and your loved ones have access to the best healthcare without financial stress.",
    icon: Heart,
    features: [
      "Cashless hospitalization",
      "Pre & post-hospitalization cover",
      "Critical illness cover",
      "Annual health checkups"
    ]
  },
  {
    title: "Motor Insurance",
    slug: "motor-insurance",
    category: "Personal",
    description: "Protection for your vehicle against accidents and theft.",
    longDescription: "Motor insurance covers your vehicle against damages caused by accidents, theft, fire, and natural calamities. It also covers third-party liability, ensuring you are protected against legal claims.",
    icon: Truck,
    features: [
      "Comprehensive damage cover",
      "Third-party liability",
      "Personal accident cover",
      "Roadside assistance add-ons"
    ]
  },
  {
    title: "Travel Insurance",
    slug: "travel-insurance",
    category: "Personal",
    description: "Secure your trips with coverage for delays, medical issues, and lost luggage.",
    longDescription: "Whether traveling for business or leisure, Travel Insurance protects you against unforeseen events such as flight cancellations, lost baggage, medical emergencies abroad, and passport loss.",
    icon: Plane,
    features: [
      "Medical emergency assistance",
      "Trip cancellation & delay",
      "Lost baggage & passport cover",
      "Personal liability abroad"
    ]
  },
  {
    title: "Home Insurance",
    slug: "home-insurance",
    category: "Personal",
    description: "Protect your home and belongings from unforeseen damages.",
    longDescription: "Home Insurance protects your house and its contents against risks like fire, burglary, flood, earthquake, and other natural or man-made disasters. It ensures your most valuable asset is secure.",
    icon: Home,
    features: [
      "Structure & contents cover",
      "Burglary & theft protection",
      "Natural calamity coverage",
      "Fire & explosion protection"
    ]
  }
];
