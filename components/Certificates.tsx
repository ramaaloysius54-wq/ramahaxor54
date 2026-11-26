"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-slate-400 mb-3">
            <span className="h-[1px] w-7 bg-slate-500" />
            <span>06 / Certificates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certificates
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Klik pada sertifikat untuk melihat ukuran penuh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {certificatesData.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              onView={(item) => setSelectedCert(item)}
            />
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || ""}
        subtitle={`${selectedCert?.issuer} (${selectedCert?.year})`}
        imageSrc={selectedCert?.image || ""}
        badges={selectedCert ? [selectedCert.category, selectedCert.issuer] : []}
      />
    </section>
  );
}
