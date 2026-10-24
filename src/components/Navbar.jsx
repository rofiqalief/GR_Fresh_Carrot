"use client";

import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import db from "@/data/database.json";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const { company } = db;

  const menuItems = [
    { name: "Beranda", href: "#beranda", id: "beranda" },
    { name: "Tentang Kami", href: "#tentang-kami", id: "tentang-kami" },
    { name: "Produk", href: "#produk", id: "produk" },
    { name: "Manfaat", href: "#manfaat", id: "manfaat" },
    { name: "Proses Kami", href: "#proses", id: "proses" },
  ];

  // Deteksi scroll untuk mengubah background dan warna teks header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deteksi section yang sedang aktif di layar (Scrollspy) dengan threshold presisi
  useEffect(() => {
    const observers = [];
    menuItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          },
          {
            rootMargin: "-20% 0px -50% 0px",
            threshold: 0.1,
          }
        );
        observer.observe(el);
        observers.push({ observer, el });
      }
    });

    return () => {
      observers.forEach(({ observer, el }) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-16 md:h-20 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-md py-0"
          : "bg-transparent border-b border-white/20 py-2"
      }`}
    >
      <div className="w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* 1. LOGO DI KIRI */}
        <a
          href="#beranda"
          onClick={() => {
            setActiveSection("beranda");
            setMenuOpen(false);
          }}
          className="flex items-center gap-3 group py-1.5"
        >
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0 border border-emerald-600/35 shadow-sm bg-emerald-50 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/LogoGRFreshCarrot.png"
              alt="Logo GR Fresh Carrot"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <span
              className={`font-extrabold text-sm md:text-base tracking-tight leading-tight transition-colors duration-500 ease-in-out ${
                scrolled
                  ? "text-emerald-900"
                  : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
              }`}
            >
              Golden Roots
            </span>
            <span
              className={`text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors duration-500 ease-in-out ${
                scrolled
                  ? "text-orange-600"
                  : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
              }`}
            >
              Fresh Carrot
            </span>
          </div>
        </a>

        {/* 2. MENU DI TENGAH */}
        <nav
          className={`hidden md:flex items-center h-10 gap-1 px-3 transition-all duration-500 ease-in-out ${
            !scrolled
              ? "bg-white/85 backdrop-blur-md rounded-2xl shadow-xl border border-white/30"
              : "bg-transparent"
          }`}
        >
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-emerald-700 bg-emerald-50 font-bold shadow-sm"
                    : "text-gray-700 hover:text-emerald-700 hover:bg-gray-100/60"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* 3. TOMBOL CTA DI KANAN */}
        <div className="hidden md:flex items-center">
          <a
            href={`https://wa.me/${company.phone}?text=Halo%20Golden%20Roots,%20saya%20tertarik%20dengan%20pasokan%20wortel%20segar.`}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" />
            Pesan Sekarang
          </a>
        </div>

        {/* HAMBURGER HP */}
        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className={`w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-300 md:hidden ${
            scrolled
              ? "text-gray-800 bg-gray-100 hover:bg-gray-200"
              : "text-white bg-black/40 backdrop-blur-md"
          }`}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* SIDE MENU HP */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 z-50 flex justify-end md:hidden">
            <button
              type="button"
              aria-label="Tutup menu"
              onClick={() => setMenuOpen(false)}
              className="flex-1 min-h-[300px] bg-black/30 backdrop-blur-xs"
            />
            <div className="w-[80%] bg-white shadow-2xl border-l border-gray-100 p-4 space-y-3">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMenuOpen(false);
                      }}
                      className={`block px-3.5 py-2.5 rounded-xl font-semibold text-xs transition-colors uppercase tracking-wider ${
                        isActive
                          ? "text-emerald-700 bg-emerald-50 font-bold"
                          : "text-gray-800 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>
              <div className="pt-2 border-t border-gray-100">
                <a
                  href={`https://wa.me/${company.phone}?text=Halo%20Golden%20Roots,%20saya%20tertarik%20dengan%20pasokan%20wortel%20segar.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}