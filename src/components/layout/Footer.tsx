"use client";

// import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/kamrulkonok",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kamrulkonok/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:mdkamrul.islam@student-cs.fr",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Md Kamrul Islam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 