"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="site-shell pt-4 sm:pt-6">
          <motion.nav
            animate={{ y: scrolled ? 0 : -2 }}
            className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5 ${
              scrolled ? "glass" : "border border-transparent"
            }`}
          >
            <a href="#top" className="display-font text-sm font-semibold tracking-[0.04em]">
              NAMAN VERMA
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white"
              >
                Resume
                <ArrowUpRight size={14} strokeWidth={1.8} />
              </a>
            </div>

            <button
              type="button"
              className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-white md:hidden"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </motion.nav>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#08090b]/90 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="site-shell flex h-full flex-col justify-end pb-10 pt-24"
            >
              <div className="space-y-6">
                {links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="display-font block text-4xl font-medium tracking-tight text-white/90"
                  >
                    <span className="mr-3 text-xs text-white/30">0{index + 1}</span>
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold uppercase tracking-[0.16em] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Resume
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
