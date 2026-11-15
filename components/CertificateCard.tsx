"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Eye, ShieldCheck } from "lucide-react";
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
      className="group rounded-2xl bg-navy-800/60 border border-slate-800/90 hover:border-sky-500/40 overflow-hidden shadow-soft flex flex-col justify-between transition-all duration-300"
    >
      {/* Framed Certificate Preview */}
      <div
        onClick={() => onView(certificate)}
        className="relative h-60 sm:h-64 w-full bg-navy-900 p-3 cursor-pointer border-b border-slate-800"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-slate-700/80 bg-navy-950 flex items-center justify-center">
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
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-white">
                {certificate.title}
              </p>
              <p className="text-xs text-sky-400 mt-1">{certificate.issuer}</p>
              <span className="mt-3 text-[11px] text-slate-400 px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800">
                {certificate.image}
              </span>
            </div>
          )}

          {/* Hover Lightbox Indicator */}
          <div className="absolute inset-0 bg-navy-950/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 text-navy-950 font-semibold text-xs shadow-glow">
              <Eye className="w-4 h-4" />
              <span>Click to Enlarge</span>
            </span>
          </div>
        </div>
      </div>

      {/* Certificate Info & Button */}
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>
              {certificate.issuer} • {certificate.year}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white">
            {certificate.title}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => onView(certificate)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-500/15 hover:bg-sky-500 text-sky-400 hover:text-navy-950 border border-sky-500/30 transition-all shrink-0"
        >
          <Eye className="w-4 h-4" />
          <span>View Certificate</span>
        </button>
      </div>
    </motion.div>
  );
}
