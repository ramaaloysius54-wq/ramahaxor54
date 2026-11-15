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
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-navy-950 font-semibold text-xs shadow-glow transition-all duration-300 hover:scale-105"
    >
      <MessageCircle className="w-4 h-4 fill-navy-950" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
