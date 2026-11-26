"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Globe,
  Copy,
  Check,
  Send,
  ExternalLink,
} from "lucide-react";
import { profileData } from "@/data/profile";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [formError, setFormError] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.contact.displayEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !senderMessage.trim()) {
      setFormError("Nama dan pesan harus diisi.");
      return;
    }
    setFormError("");
    const text = `Halo Syafiq, saya *${senderName.trim()}*.\n\n${senderMessage.trim()}`;
    const url = `https://wa.me/6288227142563?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
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
            <span>07 / Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {profileData.contact.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            {profileData.contact.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 space-y-6">
              <div className="pb-5 border-b border-white/10">
                <p className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
                  Nama Lengkap
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  Muhammad Syafiq Ramadani
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#03050a]/80 border border-white/10">
                  <p className="font-mono text-[11px] text-slate-400 mb-1">
                    WhatsApp
                  </p>
                  <a
                    href={profileData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-white hover:text-slate-300 transition-colors"
                  >
                    {profileData.contact.whatsappNumber}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-[#03050a]/80 border border-white/10">
                  <p className="font-mono text-[11px] text-slate-400 mb-1">
                    Email
                  </p>
                  <a
                    href={profileData.contact.mailtoUrl}
                    className="text-sm sm:text-base font-semibold text-white hover:text-slate-300 transition-colors break-all"
                  >
                    {profileData.contact.displayEmail}
                  </a>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-[#03050a]/80 border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-mono text-[11px] text-slate-400 mb-1">
                      Portfolio
                    </p>
                    <a
                      href={profileData.contact.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-slate-200 hover:text-white flex items-center gap-1.5"
                    >
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span>{profileData.contact.portfolioUrl}</span>
                    </a>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={profileData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-xs sm:text-sm bg-white hover:bg-slate-200 text-black transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Me</span>
                </a>

                <a
                  href={profileData.contact.mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-xs sm:text-sm bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-300" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium text-xs sm:text-sm bg-white/[0.04] hover:bg-white/[0.09] text-white border border-white/15 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <form
              onSubmit={handleSendWhatsApp}
              className="p-6 sm:p-8 rounded-2xl bg-[#070b14]/75 backdrop-blur-md border border-white/10 space-y-4"
            >
              <h3 className="text-lg font-bold text-white">
                Kirim Pesan via WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Isi form di bawah lalu lanjutkan langsung ke WhatsApp.
              </p>

              {formError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div>
                <label
                  htmlFor="senderName"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Nama / Perusahaan
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Nama atau perusahaan Anda"
                  className="w-full px-4 py-3 rounded-lg bg-[#03050a] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block font-mono text-xs text-slate-300 mb-1.5"
                >
                  Pesan
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Tuliskan pesan singkat Anda..."
                  className="w-full px-4 py-3 rounded-lg bg-[#03050a] border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm bg-white hover:bg-slate-200 text-black transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Lanjut ke WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
