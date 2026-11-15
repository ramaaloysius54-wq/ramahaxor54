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
  User,
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
      setFormError("Mohon lengkapi nama dan pesan Anda terlebih dahulu.");
      return;
    }
    setFormError("");
    const text = `Halo Syafiq, saya *${senderName.trim()}*.\n\n${senderMessage.trim()}`;
    const url = `https://wa.me/6288227142563?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy-900/50 relative">
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
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {profileData.contact.title}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            &ldquo;{profileData.contact.description}&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Cards & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-800/70 border border-slate-800 shadow-soft space-y-6">
              <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    Full Name
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Muhammad Syafiq Ramadani
                  </h3>
                </div>
              </div>

              {/* Contact Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-navy-900/90 border border-slate-800/90">
                  <p className="text-xs text-slate-400 mb-1">WhatsApp</p>
                  <a
                    href={profileData.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors"
                  >
                    {profileData.contact.whatsappNumber}
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/90 border border-slate-800/90">
                  <p className="text-xs text-slate-400 mb-1">Email</p>
                  <a
                    href={profileData.contact.mailtoUrl}
                    className="text-sm sm:text-base font-bold text-white hover:text-sky-400 transition-colors break-all"
                  >
                    {profileData.contact.displayEmail}
                  </a>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-navy-900/90 border border-slate-800/90 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      Official Portfolio Website
                    </p>
                    <a
                      href={profileData.contact.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-sky-400 hover:underline flex items-center gap-1.5"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{profileData.contact.portfolioUrl}</span>
                    </a>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 shrink-0" />
                </div>
              </div>

              {/* Three Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <a
                  href={profileData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-sky-500 hover:bg-sky-400 text-navy-950 transition-all shadow-glow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Me</span>
                </a>

                <a
                  href={profileData.contact.mailtoUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-sky-500/40 transition-all"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Send Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-sky-500/40 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-sky-400" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Frontend-Validated Direct Message Redirect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <form
              onSubmit={handleSendWhatsApp}
              className="p-6 sm:p-8 rounded-2xl bg-navy-800/70 border border-slate-800 shadow-soft space-y-4"
            >
              <h3 className="text-lg font-bold text-white">
                Quick Message via WhatsApp
              </h3>
              <p className="text-xs text-slate-400">
                Formulir ini menggunakan validasi frontend dan langsung
                mengarahkan pesan Anda ke WhatsApp resmi saya.
              </p>

              {formError && (
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                  {formError}
                </div>
              )}

              <div>
                <label
                  htmlFor="senderName"
                  className="block text-xs font-semibold text-slate-300 mb-1.5"
                >
                  Your Name / Company
                </label>
                <input
                  id="senderName"
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Tech Recruiter / HRD"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="senderMessage"
                  className="block text-xs font-semibold text-slate-300 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="senderMessage"
                  rows={4}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Halo Syafiq, kami tertarik untuk berdiskusi mengenai posisi Junior DevOps / Web Developer..."
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-slate-800 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-sky-500 hover:bg-sky-400 text-navy-950 transition-all shadow-glow"
              >
                <Send className="w-4 h-4" />
                <span>Send to WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
