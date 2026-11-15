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
  title: "Muhammad Syafiq Ramadani | Junior DevOps Engineer & Web Developer",
  description:
    "Official Portfolio of Muhammad Syafiq Ramadani — Junior DevOps Engineer & Web Developer in Indonesia specializing in Docker, Kubernetes, CI/CD Pipelines, Prometheus, Grafana, and Modern Web Development.",
  keywords: [
    "Junior DevOps Engineer Indonesia",
    "Junior Web Developer Indonesia",
    "DevOps Portfolio",
    "Docker Kubernetes Developer",
    "CI/CD Engineer",
    "Web Developer Portfolio",
    "Muhammad Syafiq Ramadani",
  ],
  authors: [{ name: "Muhammad Syafiq Ramadani" }],
  openGraph: {
    title: "Muhammad Syafiq Ramadani | Junior DevOps Engineer & Web Developer",
    description:
      "Building Reliable Infrastructure & Modern Web Applications. Explore my Web Development and DevOps Engineering portfolio.",
    url: "https://portofoliorama.my.id",
    siteName: "SYAFIQ.DEV Portfolio",
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
        className={`${jakarta.variable} font-sans bg-navy-950 text-slate-100 antialiased selection:bg-sky-500 selection:text-navy-950`}
      >
        {children}
      </body>
    </html>
  );
}
