"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, ImageIcon } from "lucide-react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  badges?: string[];
  highlights?: string[];
  liveUrl?: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  imageSrc,
  badges,
  highlights,
  liveUrl,
}: ImageModalProps) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [imageSrc]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/85 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-4xl rounded-2xl bg-navy-900 border border-slate-800 shadow-2xl overflow-hidden z-10 my-8"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-navy-950/60">
              <div>
                {subtitle && (
                  <p className="text-xs font-bold uppercase tracking-wider text-sky-400">
                    {subtitle}
                  </p>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative w-full h-72 sm:h-[420px] bg-navy-950 border-b border-slate-800 flex items-center justify-center">
              {!imgError && imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-contain p-2 sm:p-4"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-8 select-none">
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-3">
                    <ImageIcon className="w-7 h-7" />
                  </div>
                  <p className="text-base font-bold text-white">{title}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    Tempatkan file gambar asli pada path berikut:
                  </p>
                  <code className="mt-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-sky-400">
                    /public{imageSrc}
                  </code>
                </div>
              )}
            </div>

            {/* Details Body */}
            <div className="p-6 space-y-5 max-h-[45vh] overflow-y-auto">
              {description && (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              )}

              {highlights && highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                    Dokumentasi & Komponen Sistem:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-800/70 border border-slate-800 text-xs sm:text-sm text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-800/80">
                {badges && badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-sky-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-3 self-end sm:self-center">
                  {liveUrl && (
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-navy-950 transition-all shadow-glow"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
