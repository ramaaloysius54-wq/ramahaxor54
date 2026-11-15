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

];
