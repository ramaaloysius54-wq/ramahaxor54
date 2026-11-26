import { CodeSnippet, GalleryImage } from "@/components/ImageModal";

export interface ProjectItem {
  id: string;
  number: string;
  codeName: string;
  title: string;
  category: "Web Development" | "DevOps & Infrastructure";
  description: string;
  image: string;
  architectureImage?: string;
  gallery?: GalleryImage[];
  codeSnippets?: CodeSnippet[];
  liveUrl?: string;
  technologies: string[];
  screenshotsIncluded: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-01",
    number: "01",
    codeName: "SMK BINA KARYA TASIKMALAYA",
    title: "School Website Development",
    category: "Web Development",
    description:
      "Pengembangan website sekolah untuk menyediakan informasi akademik dan konten digital yang mudah diakses pengunjung.",
    image: "/images/projects/smkbk.jpg",
    liveUrl: "https://smkbktasik.sch.id",
    technologies: ["Web Development", "HTML5", "CSS3", "JavaScript", "Responsive UI"],
    screenshotsIncluded: [
      "Halaman Utama Website Sekolah",
      "Navigasi & Struktur Informasi Akademik",
      "Desain Responsif Desktop & Mobile",
    ],
  },
  {
    id: "proj-02",
    number: "02",
    codeName: "TABUNGAN RAMA",
    title: "Tabungan Rama – Web Application",
    category: "Web Development",
    description:
      "Aplikasi berbasis web dengan antarmuka manajemen data responsif yang dideploy melalui alur containerisasi dan reverse proxy.",
    image: "/images/projects/tabunganrama.jpg",
    liveUrl: "https://tabunganrama.my.id",
    technologies: ["Web Application", "Frontend UI", "Web Deployment"],
    screenshotsIncluded: [
      "Dashboard Aplikasi Tabungan Rama",
      "Antarmuka Manajemen Data",
      "Tampilan Responsif Web App",
    ],
  },
  {
    id: "proj-03",
    number: "03",
    codeName: "RAMA HAXOR",
    title: "Rama Haxor – Web Development Project",
    category: "Web Development",
    description:
      "Proyek website yang menampilkan eksplorasi pengembangan antarmuka web modern dan manajemen infrastruktur hosting mandiri.",
    image: "/images/projects/ramahaxor.jpg",
    liveUrl: "https://ramahaxor.my.id",
    technologies: ["Web Development", "Modern UI", "Custom Hosting & DNS"],
    screenshotsIncluded: [
      "Landing Page Rama Haxor",
      "Eksplorasi Antarmuka Web Modern",
      "Implementasi Struktur Halaman",
    ],
  },
  {
    id: "proj-04",
    number: "04",
    codeName: "END-TO-END GITOPS & CI/CD PIPELINE",
    title: "GitHub Actions, Docker Hub & Argo CD Pipeline",
    category: "DevOps & Infrastructure",
    description:
      "Membangun pipeline CI/CD berbasis GitOps untuk aplikasi produksi (Next.js & Socket.IO). Setiap push ke branch main memicu Docker Buildx multi-stage (~66.9 MB), push image bertag commit SHA ke Docker Hub, serta sinkronisasi manifest deklaratif oleh Argo CD ke klaster K3s dengan zero-downtime rollout.",
    image: "/images/projects/cicd-pipeline.jpg",
    architectureImage: "/images/projects/architecture-gitops.png",
    liveUrl: "https://meet.portofoliorama.my.id",
    technologies: [
      "GitHub Actions",
      "Docker Buildx",
      "Docker Hub",
      "Argo CD",
      "GitOps",
      "K3s",
    ],
    screenshotsIncluded: [
      "GitHub Actions Rollout & Sync Log",
      "Docker Hub Multi-Stage Image Tags",
      "Argo CD Healthy & Synced Dashboard",
      "End-to-End GitOps Architecture Flow",
    ],
    gallery: [
      { label: "GitHub Actions Log", src: "/images/projects/cicd-pipeline.jpg" },
      { label: "Docker Hub Tags", src: "/images/projects/docker-hub.jpg" },
      { label: "Argo CD Dashboard", src: "/images/projects/argocd-dashboard.jpg" },
    ],
    codeSnippets: [
      {
        filename: "Dockerfile",
        language: "dockerfile",
        code: `# Multi-stage build untuk ukuran image minimal (~66.9 MB)
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]`,
      },
      {
        filename: "deploy.yml",
        language: "yaml",
        code: `name: Build Docker Hub & Sync ArgoCD (K3s)

on:
  push:
    branches: [main]

jobs:
  build-and-sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: docker/setup-buildx-action@v3

      - uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKERHUB_USERNAME }}
          password: \${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build & Push Image (latest + Commit SHA)
        uses: docker/build-push-action@v6
        with:
          context: .
          push: true
          tags: |
            ramaaloysius54/ramameet:latest
            ramaaloysius54/ramameet:\${{ github.sha }}
          cache-from: type=gha
          cache-to: type=gha,mode=max`,
      },
      {
        filename: "argocd-app.yaml",
        language: "yaml",
        code: `apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ramameet-prod
  namespace: argocd
spec:
  project: ramameet
  source:
    repoURL: https://github.com/ramaaloysius54-wq/meet.git
    targetRevision: main
    path: k8s
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated:
      prune: true
      selfHeal: true`,
      },
    ],
  },
  {
    id: "proj-05",
    number: "05",
    codeName: "KUBERNETES MULTI-SERVICE ORCHESTRATION",
    title: "K3s Multi-Service Cluster & Traefik Ingress",
    category: "DevOps & Infrastructure",
    description:
      "Mengelola klaster Kubernetes (K3s) pada Linux VPS Ubuntu yang menjalankan 12+ pod produksi secara simultan (Web, Signaling WebSocket, Redis, HRIS, dan Bot Dashboard) dengan replika multi-pod, Readiness/Liveness probe, serta routing TLS otomatis melalui Traefik Ingress dan cert-manager.",
    image: "/images/projects/kubernetes.jpg",
    technologies: [
      "Kubernetes (K3s)",
      "Argo CD",
      "Traefik Ingress",
      "cert-manager",
      "Linux VPS",
    ],
    screenshotsIncluded: [
      "12+ Production Pods Running (kubectl get pods)",
      "Argo CD In-Cluster Multi-App Sync",
      "Multi-Replica Deployment & Health Probes",
      "Traefik Ingress HTTPS & WebSocket Routing",
    ],
    gallery: [
      { label: "K3s Running Pods", src: "/images/projects/kubernetes.jpg" },
      { label: "Argo CD Apps", src: "/images/projects/argocd-dashboard.jpg" },
    ],
    codeSnippets: [
      {
        filename: "deployment.yaml",
        language: "yaml",
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: ramameet-web
spec:
  replicas: 2
  selector:
    matchLabels:
      app: ramameet-web
  template:
    metadata:
      labels:
        app: ramameet-web
    spec:
      containers:
        - name: web
          image: ramaaloysius54/ramameet:latest
          imagePullPolicy: Always
          ports:
            - containerPort: 3000
          readinessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 10
            periodSeconds: 10
          livenessProbe:
            httpGet:
              path: /api/health
              port: 3000
            initialDelaySeconds: 20
            periodSeconds: 15`,
      },
      {
        filename: "ingress.yaml",
        language: "yaml",
        code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ramameet-ingress
  annotations:
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  ingressClassName: traefik
  tls:
    - hosts:
        - meet.portofoliorama.my.id
      secretName: ramameet-tls
  rules:
    - host: meet.portofoliorama.my.id
      http:
        paths:
          - path: /socket.io
            pathType: Prefix
            backend:
              service:
                name: ramameet-signaling
                port:
                  number: 4000
          - path: /
            pathType: Prefix
            backend:
              service:
                name: ramameet-web
                port:
                  number: 3000`,
      },
    ],
  },
  {
    id: "proj-06",
    number: "06",
    codeName: "REAL-TIME SERVER & CONTAINER MONITORING",
    title: "Prometheus & Grafana Infrastructure Observability",
    category: "DevOps & Infrastructure",
    description:
      "Merancang sistem pemantauan infrastruktur real-time menggunakan Prometheus, Node Exporter, dan Grafana untuk mengumpulkan serta memvisualisasikan metrik CPU, system load, memori, ruang disk, dan trafik jaringan node VPS guna mendeteksi bottleneck secara cepat.",
    image: "/images/projects/monitoring.jpg",
    technologies: [
      "Prometheus",
      "Grafana",
      "Node Exporter",
      "Docker",
      "Linux VPS",
    ],
    screenshotsIncluded: [
      "Grafana Node Exporter Dashboard (CPU, RAM, Disk, Net)",
      "Prometheus Scrape Targets Status (UP)",
      "Real-Time Host & Container Telemetry",
    ],
    gallery: [
      { label: "Grafana Dashboard", src: "/images/projects/monitoring.jpg" },
      { label: "Prometheus Targets", src: "/images/projects/prometheus-targets.jpg" },
    ],
    codeSnippets: [
      {
        filename: "prometheus.yml",
        language: "yaml",
        code: `global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

  - job_name: "vps-node-exporter"
    static_configs:
      - targets: ["node-exporter:9100"]`,
      },
      {
        filename: "docker-compose.yml",
        language: "yaml",
        code: `services:
  prometheus:
    image: prom/prometheus:latest
    restart: unless-stopped
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml:ro
    ports:
      - "127.0.0.1:9090:9090"

  node-exporter:
    image: prom/node-exporter:latest
    restart: unless-stopped
    pid: host
    volumes:
      - /:/host:ro,rslave
    command:
      - "--path.rootfs=/host"

  grafana:
    image: grafana/grafana:latest
    restart: unless-stopped
    ports:
      - "127.0.0.1:3030:3000"`,
      },
    ],
  },
];
