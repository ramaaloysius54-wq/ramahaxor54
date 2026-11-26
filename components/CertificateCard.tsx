"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Eye } from "lucide-react";
import { CertificateItem } from "@/data/certificates";

interface CertificateCardProps {
  certificate: CertificateItem;
  onView: (cert: CertificateItem) => void;
}

export default function CertificateCard({
  certificate,
  onView,
}: CertificateCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 hover:border-white/25 overflow-hidden flex flex-col justify-between transition-all duration-300"
    >
      <div
        onClick={() => onView(certificate)}
        className="relative h-60 sm:h-64 w-full bg-[#03050a] p-3 cursor-pointer border-b border-white/10"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-[#050811] flex items-center justify-center">
          {!imgError ? (
            <Image
              src={certificate.image}
              alt={certificate.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 select-none">
              <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-slate-300 mb-3">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-white">
                {certificate.title}
              </p>
              <p className="text-xs text-slate-400 mt-1">{certificate.issuer}</p>
              <span className="mt-3 font-mono text-[10px] text-slate-400 px-2.5 py-0.5 rounded bg-white/[0.03] border border-white/10">
                {certificate.image}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-[#03050a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white text-black font-semibold text-xs">
              <Eye className="w-3.5 h-3.5" />
              <span>Perbesar</span>
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] text-slate-400 mb-1">
            {certificate.issuer} · {certificate.year}
          </p>
          <h3 className="text-base sm:text-lg font-bold text-white">
            {certificate.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onView(certificate)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 transition-colors shrink-0"
        >
          <Eye className="w-4 h-4 text-slate-300" />
          <span>Lihat Sertifikat</span>
        </button>
      </div>
    </motion.div>
  );
}
