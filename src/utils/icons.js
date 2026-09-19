import { createElement } from "react";
import {
  Sparkles,
  Code2,
  LayoutTemplate,
  TrendingUp,
  PenTool,
  Server,
  Film,
  Share2,
  Briefcase,
  Users,
  Award,
  CreditCard,
  BarChart3,
} from "lucide-react";

const iconMap = {
  Sparkles,
  Code2,
  LayoutTemplate,
  TrendingUp,
  PenTool,
  Server,
  Film,
  Share2,
  Briefcase,
  Users,
  Award,
  CreditCard,
  BarChart3,
};

export function getIcon(name, props = {}) {
  const Icon = iconMap[name] || Sparkles;
  return createElement(Icon, props);
}
