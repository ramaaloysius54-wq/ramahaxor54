"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { profileData } from "@/data/profile";

export default function WhatsAppButton() {
  return (
    <a
      href={profileData.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white hover:bg-slate-200 text-black font-semibold text-xs shadow-lg transition-transform duration-200 hover:scale-105"
    >
      <MessageCircle className="w-4 h-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
