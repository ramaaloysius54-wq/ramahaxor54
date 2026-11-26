"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  CheckCircle2,
  ImageIcon,
  Copy,
  Check,
  Code2,
  GitFork,
  LayoutGrid,
} from "lucide-react";

export interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

export interface GalleryImage {
  label: string;
  src: string;
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  architectureImage?: string;
  gallery?: GalleryImage[];
  codeSnippets?: CodeSnippet[];
  badges?: string[];
  highlights?: string[];
  liveUrl?: string;
}

type ModalTab = "overview" | "architecture" | "config";

export default function ImageModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  imageSrc,
  architectureImage,
  gallery,
  codeSnippets,
  badges,
  highlights,
  liveUrl,
}: ImageModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>("overview");
  const [activeImage, setActiveImage] = useState(imageSrc);
  const [imgError, setImgError] = useState(false);
  const [archImgError, setArchImgError] = useState(false);
  const [activeSnippetIdx, setActiveSnippetIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  const hasArchitecture = Boolean(architectureImage);
  const hasCode = Boolean(codeSnippets && codeSnippets.length > 0);
  const showTabs = hasArchitecture || hasCode;

  useEffect(() => {
    setActiveTab("overview");
    setActiveImage(imageSrc);
    setImgError(false);
    setArchImgError(false);
    setActiveSnippetIdx(0);
    setCopied(false);
  }, [imageSrc, isOpen]);

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

  const currentSnippet =
    codeSnippets && codeSnippets[activeSnippetIdx]
      ? codeSnippets[activeSnippetIdx]
      : null;

  const handleCopyCode = async () => {
    if (!currentSnippet) return;
    try {
      await navigator.clipboard.writeText(currentSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback jika clipboard diblokir browser
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#03050a]/85 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-4xl rounded-2xl bg-[#070b14] border border-white/15 shadow-2xl overflow-hidden z-10 my-6"
          >
            {/* Header Bar */}
            <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-white/10 bg-[#050811]">
              <div>
                {subtitle && (
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                    {subtitle}
                  </p>
                )}
                <h3 className="text-base sm:text-xl font-bold text-white mt-0.5">
                  {title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs (Tampil otomatis jika ada Architecture / YAML Config) */}
            {showTabs && (
              <div className="flex items-center gap-1 px-5 sm:px-6 pt-2 border-b border-white/10 bg-[#050811]/70 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === "overview"
                      ? "border-white text-white"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Overview</span>
                </button>

                {hasArchitecture && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("architecture")}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === "architecture"
                        ? "border-white text-white"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <GitFork className="w-4 h-4" />
                    <span>Architecture Flow</span>
                  </button>
                )}

                {hasCode && (
                  <button
                    type="button"
                    onClick={() => setActiveTab("config")}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === "config"
                        ? "border-white text-white"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <Code2 className="w-4 h-4" />
                    <span>Config YAML</span>
                  </button>
                )}
              </div>
            )}

            {/* TAB 1: OVERVIEW & SCREENSHOT GALLERY */}
            {activeTab === "overview" && (
              <div>
                <div className="relative w-full h-64 sm:h-[380px] bg-[#03050a] border-b border-white/10 flex items-center justify-center">
                  {!imgError && activeImage ? (
                    <Image
                      src={activeImage}
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
                      <p className="text-sm sm:text-base font-bold text-white">
                        {title}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Simpan screenshot asli pada path berikut:
                      </p>
                      <code className="mt-2 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-sky-400">
                        /public{activeImage}
                      </code>
                    </div>
                  )}
                </div>

                {/* Multi-Screenshot Switcher */}
                {gallery && gallery.length > 1 && (
                  <div className="px-5 sm:px-6 py-3 bg-[#050811] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
                    {gallery.map((item) => {
                      const isSelected = activeImage === item.src;
                      return (
                        <button
                          key={item.src}
                          type="button"
                          onClick={() => {
                            setActiveImage(item.src);
                            setImgError(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                            isSelected
                              ? "bg-white text-black border-white"
                              : "bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/25"
                          }`}
                        >
                          {item.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-5 max-h-[38vh] overflow-y-auto">
                  {description && (
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {description}
                    </p>
                  )}

                  {highlights && highlights.length > 0 && (
                    <div>
                      <h4 className="font-mono text-[11px] font-bold uppercase tracking-wider text-sky-400 mb-2.5">
                        Dokumentasi &amp; Komponen Sistem
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {highlights.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-200"
                          >
                            <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE FLOW DIAGRAM */}
            {activeTab === "architecture" && architectureImage && (
              <div className="p-5 sm:p-6 space-y-4">
                <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl bg-[#03050a] border border-white/10 overflow-hidden flex items-center justify-center">
                  {!archImgError ? (
                    <Image
                      src={architectureImage}
                      alt={`Architecture Flow - ${title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 900px"
                      className="object-contain p-3"
                      onError={() => setArchImgError(true)}
                    />
                  ) : (
                    <div className="text-center p-6">
                      <p className="text-sm font-semibold text-white">
                        Diagram Arsitektur belum ditemukan
                      </p>
                      <code className="mt-2 inline-block px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-sky-400">
                        /public{architectureImage}
                      </code>
                    </div>
                  )}
                </div>
                <p className="text-xs text-slate-400 text-center">
                  Alur otomatis dari Git Push, multi-stage Docker Buildx ke Docker Hub, sinkronisasi GitOps Argo CD, hingga Traefik Ingress di klaster K3s.
                </p>
              </div>
            )}

            {/* TAB 3: CONFIG YAML & DOCKERFILE CODE VIEWER */}
            {activeTab === "config" && currentSnippet && codeSnippets && (
              <div className="p-5 sm:p-6 space-y-4">
                <div className="rounded-xl border border-white/15 bg-[#03050a] overflow-hidden">
                  {/* Code Header: File Tabs + Copy Button */}
                  <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 bg-[#0b1120] border-b border-white/10">
                    <div className="flex items-center gap-1.5 overflow-x-auto">
                      {codeSnippets.map((snippet, idx) => (
                        <button
                          key={snippet.filename}
                          type="button"
                          onClick={() => {
                            setActiveSnippetIdx(idx);
                            setCopied(false);
                          }}
                          className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors whitespace-nowrap ${
                            idx === activeSnippetIdx
                              ? "bg-sky-500/20 text-sky-300 border border-sky-400/40"
                              : "text-slate-400 hover:text-white hover:bg-white/5 border border-transparent"
                          }`}
                        >
                          {snippet.filename}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Scrollable Monospace Code Block */}
                  <div className="max-h-[380px] overflow-auto p-4 sm:p-5">
                    <pre className="font-mono text-xs sm:text-[13px] leading-relaxed text-slate-200 whitespace-pre">
                      <code>{currentSnippet.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Footer Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 sm:px-6 py-4 border-t border-white/10 bg-[#050811]">
              {badges && badges.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-[11px] text-sky-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-white hover:bg-slate-200 text-black transition-colors"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/10 hover:bg-white/15 text-white transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
