export interface DevOpsSkill {
  name: string;
  role: string;
  description: string;
  icon: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  items: { name: string; category?: string }[];
}

export const devopsSkills: DevOpsSkill[] = [
  {
    name: "Docker",
    role: "Containerization",
    description:
      "Mengemas aplikasi beserta dependensinya ke dalam kontainer yang ringan, portabel, dan terisolasi. Menjamin konsistensi lingkungan kerja dari pengembangan lokal hingga server produksi.",
    icon: "Box",
  },
  {
    name: "Kubernetes",
    role: "Container Orchestration",
    description:
      "Mengelola dan mengorkestrasi layanan aplikasi dalam klaster terpadu. Memahami konsep Pod, Deployment, Service, Ingress Controller, Load Balancing, dan Self-Healing.",
    icon: "Network",
  },
  {
    name: "GitHub Actions",
    role: "CI/CD Automation",
    description:
      "Mengotomatisasi alur Continuous Integration dan Continuous Deployment. Mengelola workflow untuk pengujian, build, dan deployment aplikasi ke server produksi.",
    icon: "GitBranch",
  },
  {
    name: "Jenkins",
    role: "CI/CD Automation",
    description:
      "Menggunakan Jenkins untuk mengelola pipeline otomatisasi build, testing, dan deployment aplikasi.",
    icon: "Workflow",
  },
  {
    name: "Prometheus",
    role: "System Monitoring",
    description:
      "Mengumpulkan metrik performa infrastruktur secara real-time, seperti penggunaan CPU, memori, disk, dan jaringan menggunakan Node Exporter dan cAdvisor.",
    icon: "Activity",
  },
  {
    name: "Grafana",
    role: "Observability",
    description:
      "Memvisualisasikan metrik infrastruktur melalui dashboard interaktif untuk memantau kesehatan server, kontainer, dan performa aplikasi.",
    icon: "BarChart3",
  },
];

export const skillCategories: SkillGroup[] = [
  {
    id: "web-dev",
    title: "Web Development",
    subtitle: "Bahasa pemrograman, framework, dan sistem manajemen basis data",
    items: [
      { name: "HTML5", category: "Frontend" },
      { name: "CSS3", category: "Frontend" },
      { name: "JavaScript", category: "Language" },
      { name: "PHP", category: "Backend" },
      { name: "Laravel", category: "Framework" },
      { name: "WordPress", category: "CMS" },
      { name: "MySQL", category: "Database" },
      { name: "Python", category: "Language" },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & SEO",
    subtitle: "Optimasi mesin pencari, riset kata kunci, dan manajemen kampanye iklan",
    items: [
      { name: "Google Ads", category: "SEM" },
      { name: "Meta Ads", category: "Paid Social" },
      { name: "Ahrefs", category: "SEO Analysis" },
      { name: "Google Keyword Planner", category: "Keyword Research" },
      { name: "Google Search Console", category: "Webmaster Tool" },
    ],
  },
  {
    id: "dev-tools",
    title: "Development Tools",
    subtitle: "Perangkat lunak pendukung pengembangan, version control, dan sistem operasi",
    items: [
      { name: "Visual Studio Code", category: "Code Editor" },
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Repository Hosting" },
      { name: "Figma", category: "UI/UX Design" },
      { name: "Docker", category: "Containers" },
      { name: "Jenkins", category: "Automation Server" },
      { name: "Linux", category: "Operating System" },
    ],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    subtitle: "Kemampuan interpersonal dan etos kerja profesional dalam tim",
    items: [
      { name: "Communication" },
      { name: "Teamwork" },
      { name: "Time Management" },
      { name: "Problem Solving" },
      { name: "Attention to Detail" },
    ],
  },
];
