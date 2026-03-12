import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`relative flex items-center justify-between transition-all duration-500 p-2 rounded-[2rem] ${
          scrolled ? "glass border border-white/10 shadow-2xl px-8 bg-background/80" : "bg-transparent"
        }`}>
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <Sparkles className="text-primary-foreground w-6 h-6" />
            </div>
            <span className="text-xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors">
              NIDHI MODI
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-2xl shadow-inner mx-4">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`relative px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl overflow-hidden group whitespace-nowrap ${
                  location.pathname === l.href
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {location.pathname === l.href && (
                  <motion.div 
                    layoutId="nav-bg"
                    className="absolute inset-0 bg-primary rounded-xl z-0"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 shrink-0">
             {/* Mobile toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-2xl w-10 h-10 glass border border-white/5 shadow-xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-x-6 top-24 z-40"
          >
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 shadow-2xl space-y-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className={`block px-6 py-5 text-sm font-black uppercase tracking-widest transition-all rounded-[1.5rem] ${
                      location.pathname === l.href
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "text-muted-foreground hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
