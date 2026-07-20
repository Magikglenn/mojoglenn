import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mojoLogo from "@/assets/mojo-logo.svg";
import mojoVoodoo from "@/assets/mojo-voodoo.svg";

type SubItem = { label: string; href?: string; children?: SubItem[] };
type NavItem =
  | { label: string; href: string; type: "anchor" | "route" }
  | { label: string; type: "dropdown"; items: SubItem[] };

const navItems: NavItem[] = [
  { label: "Services", href: "#services", type: "anchor" },
  { label: "À propos", href: "/a-propos", type: "route" },
  { label: "Témoignages", href: "#testimonials", type: "anchor" },
  {
    label: "Offres",
    type: "dropdown",
    items: [
      {
        label: "Ateliers",
        children: [
          { label: "Ateliers du Futur", href: "/ateliers-du-futur" },
          { label: "Pitch Décisif", href: "/offres/ateliers/pitch-decisif" },
        ],
      },
      { label: "Conférences", href: "/conferences" },
      { label: "Consulting", href: "/#offers" },
      { label: "Neuromarketing Rennes", href: "/neuromarketing-rennes" },
    ],
  },
  { label: "FAQ", href: "#faq", type: "anchor" },
];

function isAnchorOrRoute(item: NavItem): item is Extract<NavItem, { type: "anchor" | "route" }> {
  return item.type === "anchor" || item.type === "route";
}

function isDropdown(item: NavItem): item is Extract<NavItem, { type: "dropdown" }> {
  return item.type === "dropdown";
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [mobileOpenGroups, setMobileOpenGroups] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate("/");
  };

  const closeAll = () => {
    setOpenDropdown(null);
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
  };

  const renderDesktopSubItem = (sub: SubItem, parentKey: string) => {
    if (sub.children && sub.children.length > 0) {
      const key = `${parentKey}-${sub.label}`;
      const isOpen = openSubmenu === key;
      return (
        <div
          key={sub.label}
          className="relative"
          onMouseEnter={() => setOpenSubmenu(key)}
        >
          <button
            className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setOpenSubmenu(isOpen ? null : key)}
          >
            {sub.label}
            <ChevronRight size={14} />
          </button>
          {isOpen && (
            <div className="absolute top-0 left-full ml-1 w-56 bg-background border border-border/50 rounded-lg shadow-lg overflow-hidden z-50">
              {sub.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.href || "#"}
                  onClick={closeAll}
                  className="block px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <Link
        key={sub.label}
        to={sub.href || "#"}
        onClick={closeAll}
        className="block px-4 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
      >
        {sub.label}
      </Link>
    );
  };

  const renderNavItem = (item: NavItem) => {
    if (isAnchorOrRoute(item)) {
      if (item.type === "route") {
        return (
          <Link
            key={item.label}
            to={item.href}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            {item.label}
          </Link>
        );
      }
      return (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
        >
          {item.label}
        </button>
      );
    }
    if (isDropdown(item)) {
      const isOpen = openDropdown === item.label;
      return (
        <div key={item.label} className="relative" ref={isOpen ? dropdownRef : undefined}>
          <button
            onClick={() => {
              setOpenDropdown(isOpen ? null : item.label);
              setOpenSubmenu(null);
            }}
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold uppercase tracking-wider"
          >
            {item.label}
            <ChevronDown
              size={14}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-background border border-border/50 rounded-lg shadow-lg overflow-visible z-50">
              {item.items.map((sub) => renderDesktopSubItem(sub, item.label))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  const toggleMobileGroup = (key: string) =>
    setMobileOpenGroups((s) => ({ ...s, [key]: !s[key] }));

  const renderMobileSubItem = (sub: SubItem, parentKey: string) => {
    if (sub.children && sub.children.length > 0) {
      const key = `${parentKey}-${sub.label}`;
      const isOpen = !!mobileOpenGroups[key];
      return (
        <div key={sub.label} className="flex flex-col">
          <button
            onClick={() => toggleMobileGroup(key)}
            className="flex items-center justify-between text-muted-foreground hover:text-accent transition-colors text-left text-base font-semibold"
          >
            {sub.label}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="flex flex-col gap-3 pl-4 mt-2">
              {sub.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.href || "#"}
                  onClick={closeAll}
                  className="text-muted-foreground hover:text-accent transition-colors text-left text-sm font-semibold"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <Link
        key={sub.label}
        to={sub.href || "#"}
        onClick={closeAll}
        className="text-muted-foreground hover:text-accent transition-colors text-left text-base font-semibold"
      >
        {sub.label}
      </Link>
    );
  };

  const renderMobileNavItem = (item: NavItem) => {
    if (isAnchorOrRoute(item)) {
      if (item.type === "route") {
        return (
          <Link
            key={item.label}
            to={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-foreground hover:text-accent transition-colors text-left text-lg font-semibold"
          >
            {item.label}
          </Link>
        );
      }
      return (
        <button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="text-foreground hover:text-accent transition-colors text-left text-lg font-semibold"
        >
          {item.label}
        </button>
      );
    }
    if (isDropdown(item)) {
      const isOpen = openDropdown === item.label;
      return (
        <div key={item.label} className="flex flex-col">
          <button
            onClick={() => setOpenDropdown(isOpen ? null : item.label)}
            className="flex items-center justify-between text-foreground hover:text-accent transition-colors text-left text-lg font-semibold"
          >
            {item.label}
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
          {isOpen && (
            <div className="flex flex-col gap-3 pl-4 mt-2">
              {item.items.map((sub) => renderMobileSubItem(sub, item.label))}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-sm border-b border-border/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-6">
        <a href="#" className="hover:opacity-80 transition-opacity shrink-0" onClick={handleLogoClick}>
          <img src={mojoLogo} alt="MOJO" className="h-8 md:h-10 w-auto invert" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => renderNavItem(item))}
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="default" onClick={() => scrollToSection("#contact")} className="font-semibold">
            <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)" }} />
            Parlons de votre projet
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => renderMobileNavItem(item))}
            <Button variant="hero" size="lg" className="mt-4" onClick={() => scrollToSection("#contact")}>
              <img src={mojoVoodoo} alt="" className="w-5 h-5 opacity-70" style={{ filter: "brightness(0) saturate(100%) invert(23%) sepia(10%) saturate(746%) hue-rotate(213deg) brightness(95%) contrast(88%)" }} />
              Parlons de votre projet
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
