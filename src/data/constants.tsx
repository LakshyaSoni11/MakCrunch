// src/data/constants.tsx
import React from 'react';
import {
  Package,
  Globe,
  Award,
  Users,
  TrendingUp,
  ShieldCheck,
  Truck,
  BarChart3,
  Factory, Sparkles, FlaskConical, Heart, Bone, Wind, Shield, Activity, Droplet, Brain, Zap, 
} from 'lucide-react';
import bott_img from "../public/assets/bottom-right.png";
import center_ing from "../public/assets/center.png";
import top_img from "../public/assets/top-left.png";


export interface Grade {
  name: string;
  size: string;
  specs: string[];
  priceRange: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface AboutStat {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FloatingImage {
  src: string;
  className: string;
}

export const grades: Grade[] = [
  {
    name: 'Premium A+ Grade',
    size: '18mm - 22mm',
    specs: ['Snow White Color', 'Uniform Size', 'Less than 2% Broken', 'Moisture: 10-12%'],
    priceRange: 'Premium'
  },
  {
    name: 'A Grade',
    size: '16mm - 20mm',
    specs: ['Bright White', 'Consistent Quality', 'Less than 5% Broken', 'Moisture: 10-12%'],
    priceRange: 'Standard'
  },
  {
    name: 'B Grade',
    size: '14mm - 18mm',
    specs: ['Off-White Color', 'Good Quality', 'Less than 8% Broken', 'Moisture: 10-12%'],
    priceRange: 'Economic'
  },
  {
    name: 'C Grade (Mix)',
    size: '12mm - 16mm',
    specs: ['Mixed Sizes', 'Commercial Grade', 'Processing Ready', 'Moisture: 10-12%'],
    priceRange: 'Budget'
  }
];

export const stats: Stat[] = [
  { value: '500', label: 'Tons/Month Capacity', icon: <Package className="w-6 h-6" /> },
  { value: '25', label: 'PAN india Dilevering Cities', icon: <Globe className="w-6 h-6" /> },
  { value: '15', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
  { value: '200', label: 'Happy B2B Clients', icon: <Users className="w-6 h-6" /> }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Sourcing from Bihar',
    description: 'Direct procurement from verified farms in Mithila region, the heartland of Makhana cultivation',
    image: 'https://static.theprint.in/wp-content/uploads/2022/11/seeds-scaled.jpg'
  },
  {
    number: '02',
    title: 'Quality Inspection',
    description: 'Rigorous multi-level quality checks for size, color, moisture content, and purity',
    image: 'https://makhanawholesaler.com/wp-content/uploads/2025/07/unnamed.png'
  },
  {
    number: '03',
    title: 'Cleaning & Grading',
    description: 'Advanced sorting machines segregate by size and quality standards',
    image: 'https://lh5.googleusercontent.com/EsTb0-YUNUz_RCPggVEeIdkJSjQCxRK1ielVPtO5yMbxMUTTnUunkWUCmN3UrgLRa-f4Ifz0Hz1W5bLPIz4ZcElB3epYJIpBovfNzbOjsr3H4kvkmJUT8XrcOQFIas-J_-TZkQQ=s1600'
  },
  {
    number: '04',
    title: 'Processing & Packaging',
    description: 'Hygienic processing in ISO-certified facilities with food-grade packaging',
    image: 'https://makhanawholesaler.com/wp-content/uploads/2025/07/unnamed-3.png'
  },
  {
    number: '05',
    title: 'Global Shipping',
    description: 'Temperature-controlled logistics ensuring freshness from farm to your facility',
    image: 'https://www.jkinternational.net/wp-content/uploads/2025/08/makhana-global-export.webp'
  }
];

export const ingredients = [
  {
    icon: FlaskConical,
    name: 'Protein',
    description: 'Essential for muscle repair and growth',
    percentage: '9.7g per 100g',
    color: 'from-red-500 to-rose-500',
    bgGlow: 'bg-red-500'
  },
  {
    icon: Wind,
    name: 'Fiber',
    description: 'Aids in digestion and promotes a feeling of fullness',
    percentage: '14.5g per 100g',
    color: 'from-amber-500 to-orange-500',
    bgGlow: 'bg-amber-500'
  },
  {
    icon: Shield,
    name: 'Antioxidants',
    description: 'Helps combat oxidative stress and inflammation',
    percentage: 'High levels',
    color: 'from-emerald-500 to-teal-500',
    bgGlow: 'bg-emerald-500'
  },
  {
    icon: Zap,
    name: 'Magnesium',
    description: 'Supports muscle and nerve function, regulates blood pressure',
    percentage: '210mg per 100g',
    color: 'from-purple-500 to-violet-500',
    bgGlow: 'bg-purple-500'
  },
  {
    icon: Heart,
    name: 'Potassium',
    description: 'Assists in maintaining proper heart and kidney function',
    percentage: '1400mg per 100g',
    color: 'from-pink-500 to-rose-500',
    bgGlow: 'bg-pink-500'
  },
  {
    icon: Bone,
    name: 'Calcium',
    description: 'Vital for bone health and strength',
    percentage: '60mg per 100g',
    color: 'from-blue-500 to-cyan-500',
    bgGlow: 'bg-blue-500'
  },
  {
    icon: Droplet,
    name: 'Iron',
    description: 'Important for oxygen transport and energy production',
    percentage: '1.4mg per 100g',
    color: 'from-slate-500 to-gray-600',
    bgGlow: 'bg-slate-500'
  },
  {
    icon: Sparkles,
    name: 'Phosphorus',
    description: 'Contributes to healthy bones and teeth',
    percentage: '350mg per 100g',
    color: 'from-indigo-500 to-blue-500',
    bgGlow: 'bg-indigo-500'
  }
];

export const healthBenefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Low in sodium and high in potassium, helping maintain healthy blood pressure and cardiovascular function.',
    color: 'from-red-500 to-pink-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Shield,
    title: 'Rich in Antioxidants',
    description: 'Packed with flavonoids and antioxidants that combat oxidative stress and support cellular health.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Activity,
    title: 'Weight Management',
    description: 'Low in calories and high in fiber, making it an ideal snack for maintaining a healthy weight.',
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Droplet,
    title: 'Diabetes Friendly',
    description: 'Low glycemic index helps regulate blood sugar levels, making it suitable for diabetic diets.',
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50'
  },
  {
    icon: Brain,
    title: 'Brain Function',
    description: 'Rich in thiamine, supporting cognitive function, concentration, and memory retention.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Zap,
    title: 'Energy Boost',
    description: 'Natural source of complex carbohydrates providing sustained energy throughout the day.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50'
  }
];

export const whyUsFeatures: Feature[] = [
  {
    icon: <TrendingUp className="w-12 h-12" />,
    title: 'Competitive Pricing',
    description: 'Direct farm sourcing eliminates middlemen, passing savings to you'
  },
  {
    icon: <ShieldCheck className="w-12 h-12" />,
    title: 'Quality Assurance',
    description: 'Lab tested for purity, moisture content, and contaminants'
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: 'Custom Packaging',
    description: 'Bulk bags, vacuum packs, or your branded packaging requirements'
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: 'Export Documentation',
    description: 'Complete paperwork: COO, phytosanitary, fumigation certificates'
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: 'Reliable Logistics',
    description: 'FOB, CIF, or door delivery. Container and LCL both available'
  },
  {
    icon: <BarChart3 className="w-12 h-12" />,
    title: 'Year-Round Supply',
    description: 'Large inventory ensures consistent availability throughout the year'
  }
];

export const aboutStats = [
  {
    icon: 'Factory',
    title: 'ISO-Certified Processing Unit',
    description:
      'State-of-the-art facility ensuring international quality standards in cleaning, grading, and packaging of raw Makhana.',
  },
  {
    icon: 'ShieldCheck',
    title: 'FSSAI Licensed & Govt. Lab Tested',
    description:
      'Fully compliant with Food Safety and Standards Authority of India (FSSAI) regulations, with every batch tested in NABL-accredited government labs.',
  },
  {
    icon: 'Award',
    title: 'APEDA Registration (RCMC)',
    description:
      'Registered with the Agricultural and Processed Food Products Export Development Authority (APEDA) under the Ministry of Commerce, Government of India.',
  },
  {
    icon: 'FileCheck',
    title: 'Importer–Exporter Code (IEC)',
    description:
      'Authorized by the Directorate General of Foreign Trade (DGFT) for international trade of agricultural commodities.',
  },
  {
    icon: 'Briefcase',
    title: 'GST & Company Registration',
    description:
      'Registered private limited entity under the Ministry of Corporate Affairs with valid GST and PAN credentials for transparent business operations.',
  },
  {
    icon: 'Globe',
    title: 'Global Logistics & Export Expertise',
    description:
      'Seamless containerized shipping (FCL & LCL) through major Indian ports, ensuring timely and reliable global delivery.',
  },
];

export const floatingImages: FloatingImage[] = [
  {
    src: top_img,
    className:
      'floating-image-1 absolute top-32 right-20 w-32 h-32 rounded-2xl object-cover opacity-30 hidden lg:block'
  },
  {
    src: top_img,
    className:
      'floating-image-2 absolute top-32 left-20 w-32 h-32 rounded-2xl object-cover opacity-30 hidden lg:block'
  },
  {
    src: center_ing,
    className:
      'floating-image-3 absolute bottom-10 right-16 w-40 h-40 rounded-2xl object-cover opacity-30 hidden lg:block'
  },
  {
    src: center_ing,
    className:
      'floating-image-4 absolute bottom-10 left-16 w-40 h-40 rounded-2xl object-cover opacity-30 hidden lg:block'
  },
  {
    src: bott_img,
    className:
      'floating-image-5 absolute top-1/2 right-1/4 w-28 h-28 rounded-2xl object-cover opacity-30 hidden lg:block'
  },
  {
    src: bott_img,
    className:
      'floating-image-6 absolute top-60 left-1/4 w-28 h-28 rounded-2xl object-cover opacity-30 hidden lg:block'
  }
];
