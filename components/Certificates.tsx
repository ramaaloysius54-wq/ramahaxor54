"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificatesData, CertificateItem } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import ImageModal from "./ImageModal";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(
    null
  );

  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certificates
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Sertifikasi kompetensi profesional yang telah diselesaikan. Klik
            pada sertifikat untuk memperbesar tampilan.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onView={(item) => setSelectedCert(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Certificates */}
      <ImageModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ""}
        subtitle={`Issued by ${selectedCert?.issuer} (${selectedCert?.year})`}
        imageSrc={selectedCert?.image || ""}
        badges={selectedCert ? [selectedCert.category, selectedCert.issuer] : []}
      />
    </section>
  );
}
