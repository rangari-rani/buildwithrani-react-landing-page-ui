export interface Category {
  name: string;
  description: string;
  bgColor: string;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Self-Care",
    description: "Explore skincare, haircare, and wellness essentials for daily self-care rituals.",
    bgColor: "bg-pink-100",
    image: "/landing-page/selfcare.png",
  },
  {
    name: "Nutrition",
    description: "Discover health-boosting foods, supplements, and energizing products.",
    bgColor: "bg-teal-100",
    image: "/landing-page/nutrition.png",
  },
  {
    name: "Fitness",
    description: "Gear up with gym equipment, accessories, and recovery essentials.",
    bgColor: "bg-blue-100",
    image: "/landing-page/fitness.png",
  },
  {
    name: "Home Essentials",
    description: "Make your home cozy and functional with trending home products.",
    bgColor: "bg-yellow-50",
    image: "/landing-page/homeessentials.png",
  },
];
