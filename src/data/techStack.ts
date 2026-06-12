import {
  SiFlutter,
  SiDart,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiPhp,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGithubcopilot,
  SiFigma,
  SiGoogle,
} from "react-icons/si";
import { TbServer, TbSparkles } from "react-icons/tb";
import type { IconType } from "react-icons";
import type { TechCategoryKey } from "@/i18n/types";

export interface TechItem {
  name: string;
  category: TechCategoryKey;
  color: string;
  icon: IconType;
}

export const techStackItems: TechItem[] = [
  { name: "Flutter", category: "mobile", color: "#54C5F8", icon: SiFlutter },
  { name: "Dart", category: "mobile", color: "#0175C2", icon: SiDart },
  { name: "React", category: "frontend", color: "#61DAFB", icon: SiReact },
  { name: "Next.js", category: "frontend", color: "#FFFFFF", icon: SiNextdotjs },
  { name: "JavaScript", category: "frontend", color: "#F7DF1E", icon: SiJavascript },
  { name: "TypeScript", category: "frontend", color: "#3178C6", icon: SiTypescript },
  { name: "Node.js", category: "backend", color: "#339933", icon: SiNodedotjs },
  { name: "NestJS", category: "backend", color: "#E0234E", icon: SiNestjs },
  { name: "PHP", category: "backend", color: "#777BB4", icon: SiPhp },
  { name: "Docker", category: "devops", color: "#2496ED", icon: SiDocker },
  { name: "VPS", category: "devops", color: "#8B5CF6", icon: TbServer },
  { name: "MongoDB", category: "database", color: "#47A248", icon: SiMongodb },
  { name: "PostgreSQL", category: "database", color: "#4169E1", icon: SiPostgresql },
  { name: "Firebase", category: "database", color: "#FFCA28", icon: SiFirebase },
  { name: "GitHub Copilot", category: "ai", color: "#000000", icon: SiGithubcopilot },
  { name: "Cursor AI", category: "ai", color: "#7C3AED", icon: TbSparkles },
  { name: "Figma", category: "design", color: "#F24E1E", icon: SiFigma },
  { name: "Google Stitch", category: "design", color: "#4285F4", icon: SiGoogle },
];
