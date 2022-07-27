import { BsCart4 } from "react-icons/bs";
import { IoStatsChartOutline, IoStorefrontOutline } from "react-icons/io5";
const features = [
  "Unlimited projects",
  "Lifetime access",
  "Customer support",
  "Free updates",
];

export const products = [
  {
    name: "Application",
    price: "$149",
    icon: IoStatsChartOutline,
    description: "For accessible applications",
    features: ["Application components", ...features],
  },
  {
    name: "E-Commerce",
    price: "$149",
    icon: BsCart4,
    description: "For stunning online shops",
    features: ["E-Commerce components", ...features],
  },
  {
    name: "Marketing",
    price: "$149",
    icon: IoStorefrontOutline,
    description: "For impressive landing pages",
    features: ["Marketing components", ...features],
  },
];
