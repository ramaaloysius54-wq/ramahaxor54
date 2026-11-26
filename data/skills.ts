export interface DevOpsSkill {
  name: string;
  role: string;
  description: string;
  icon: string;
  image: string;
  highlights: string[];
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
    image: "/images/skills/docker.jpg",
    highlights: [
      "Multi-stage Dockerfile Optimization",
      "Docker Compose & Container Networking",
      "Image Registry & Production Containerization",
    ],
  },
  {
    name: "Kubernetes",
    role: "Container Orchestration",
    description:
      "Mengelola dan mengorkestrasi layanan aplikasi dalam klaster terpadu. Memahami konsep Pod, Deployment, Service, Ingress Controller, Load Balancing, dan Self-Healing.",
    icon: "Network",
    image: "/images/skills/kubernetes.jpg",
    highlights: [
      "K3s Cluster Management on Linux VPS",
      "Deployment, Service & Traefik Ingress Routing",
      "Self-Healing & Zero-Downtime Rollout",
    ],
  },
  {
    name: "Argo CD",
    role: "Kubernetes GitOps Controller",
    description:
      "Mengoperasikan Argo CD secara in-cluster untuk mengotomatisasi continuous delivery multi-aplikasi pada klaster Kubernetes. Mengelola sinkronisasi manifest (k8s/) langsung dari GitHub, memantau status Healthy & Synced secara real-time, serta mengatur isolasi Project dan Namespace.",
    icon: "Workflow",
    image: "/images/skills/argocd.jpg",
    highlights: [
      "In-Cluster Multi-Application Sync",
      "Project & Namespace Isolation",
      "Real-Time Health & Sync Monitoring",
    ],
  },
  {
    name: "GitOps",
    role: "Declarative Continuous Delivery",
    description:
      "Menerapkan alur kerja GitOps dengan menjadikan repositori Git (branch main) sebagai single source of truth untuk seluruh konfigurasi infrastruktur. Menjamin konsistensi klaster produksi melalui otomatisasi rilis, deteksi configuration drift, dan version-controlled deployment.",
    icon: "GitBranch",
    image: "/images/skills/gitops.jpg",
    highlights: [
      "Git Repository as Single Source of Truth",
      "Declarative Kubernetes Manifests (k8s/)",
      "Drift Detection & Version-Controlled Rollback",
    ],
  },
  {
    name: "GitHub Actions",
    role: "CI/CD Automation",
    description:
      "Mengotomatisasi alur Continuous Integration dan Continuous Deployment. Mengelola workflow untuk pengujian, build, dan deployment aplikasi ke server produksi.",
    icon: "GitBranch",
    image: "/images/skills/cici.jpg",
    highlights: [
      "Automated Build & Test Workflows",
      "Docker Image Build & Registry Push",
      "Automated Deployment to Linux VPS & K3s",
    ],
  },
  {
    name: "Prometheus",
    role: "System Monitoring",
    description:
      "Mengumpulkan metrik performa infrastruktur secara real-time, seperti penggunaan CPU, memori, disk, dan jaringan menggunakan Node Exporter dan cAdvisor.",
    icon: "Activity",
    image: "/images/skills/prometheus.jpg",
    highlights: [
      "Real-Time Metrics Scraping & Targets",
      "Node Exporter Host Telemetry",
      "cAdvisor Container Resource Metrics",
    ],
  },
  {
    name: "Grafana",
    role: "Observability",
    description:
      "Memvisualisasikan metrik infrastruktur melalui dashboard interaktif untuk memantau kesehatan server, kontainer, dan performa aplikasi.",
    icon: "BarChart3",
    image: "/images/skills/grafana.jpg",
    highlights: [
      "Interactive Server & Container Dashboards",
      "CPU, RAM, Disk & Network Visualization",
      "System Health & Anomaly Analysis",
    ],
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
      { name: "Kubernetes", category: "Pods & Containers" },
      { name: "Argo CD", category: "GitOps CD" },
      { name: "GitOps", category: "Declarative CD" },
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
