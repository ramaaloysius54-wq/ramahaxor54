import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portofoliorama.my.id"),
  title: "Syafiq Ramadani — DevOps & Web Engineer",
  description:
    "Portofolio Muhammad Syafiq Ramadani — DevOps & Web Engineer. Fokus pada Linux VPS, Docker, Kubernetes, CI/CD Pipelines, Prometheus, Grafana, dan Web Development.",
  keywords: [
    "DevOps Engineer Indonesia",
    "Web Developer Indonesia",
    "Docker Kubernetes",
    "CI/CD Pipeline",
    "Muhammad Syafiq Ramadani",
    "portofoliorama.my.id",
  ],
  authors: [{ name: "Muhammad Syafiq Ramadani" }],
  openGraph: {
    title: "Syafiq Ramadani — DevOps & Web Engineer",
    description:
      "Linux VPS, Docker & Kubernetes, CI/CD Automation, dan pengembangan aplikasi web modern.",
    url: "https://portofoliorama.my.id",
    siteName: "syafiq.ramadani",
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${jakarta.variable} font-sans bg-[#03050a] text-slate-100 antialiased selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
