export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
  category: string;
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-revou",
    title: "Digital Marketing Certificate – RevoU (2026)",
    issuer: "RevoU",
    year: "2026",
    image: "/images/certificates/revou-certificate.jpg",
    category: "Digital Marketing",
  },
  {
    id: "cert-imde",
    title: "Digital Marketing Certificate – IMDE (Institut Media Digital Emtek)",
    issuer: "IMDE (Institut Media Digital Emtek)",
    year: "Verified Credential",
    image: "/images/certificates/imde-certificate.jpg",
    category: "Digital Marketing",
  },
];
