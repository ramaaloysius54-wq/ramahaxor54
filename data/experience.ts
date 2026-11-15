export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  responsibilities: string[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    company: "CV Megah Glory",
    period: "November 2024 – Februari 2025",
    type: "Internship",
    responsibilities: [
      "Build and maintain the company profile website.",
      "Collaborate within a team to design the user interface (UI).",
      "Manage content and plan periodic updates.",
      "Use plugins to customize the website according to requirements.",
    ],
  },
  {
    id: "exp-2",
    role: "Operator Host Live",
    company: "CV Kunikita",
    period: "Desember 2025 – Februari 2026",
    type: "Full-time / Operations",
    responsibilities: [
      "Prepare OBS and streaming tools for the host team.",
      "Calculate incoming GMV and send the results to the marketing team.",
      "Check internet connection, camera, and microphone before livestream sessions.",
      "Operate product showcases based on customer requirements.",
      "Prepare product displays before livestream sessions.",
      "Operate OBS software for TikTok and Shopee livestreaming.",
    ],
  },
];
