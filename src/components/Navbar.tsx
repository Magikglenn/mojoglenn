import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mojoLogo from "@/assets/mojo-logo.svg";
import mojoVoodoo from "@/assets/mojo-voodoo.svg";

type NavItem = { label: string; href: string; type: "anchor" | "route" };

const navItems: NavItem[] = [
  { label: "Services", href: "#services", type: "anchor" },
  { label: "À propos", href: "/a-propos", type: "route" },
  { label: "Témoignages", href: "#testimonials", type: "anchor" },
  { label: "Offres", href: "#offers", type: "anchor" },
  { label: "FAQ", href: "#faq", type: "anchor" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img 
            src={mojoLogo} 
            alt="MOJO" 
            className="h-8 md:h-10 w-auto invert"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.type === "route" ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            variant="hero"
            size="default"
            onClick={() => scrollToSection("#contact")}
            className="font-semibold"
          >
            <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)' }} />
            Parlons de votre projet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) =>
              item.type === "route" ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-accent transition-colors text-left text-lg font-semibold"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-accent transition-colors text-left text-lg font-semibold"
                >
                  {item.label}
                </button>
              )
            )}
            <Button
              variant="hero"
              size="lg"
              className="mt-4"
              onClick={() => scrollToSection("#contact")}
            >
              <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: 'brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)' }} />
              Parlons de votre projet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};