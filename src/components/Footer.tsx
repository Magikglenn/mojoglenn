import { Linkedin, Instagram, Phone, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/glennlebourhis/",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/glennlebourhis/",
  },
];

export const Footer = () => {
  return (
    <footer className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-start mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#"
              className="text-4xl font-display font-bold text-foreground hover:text-accent transition-colors tracking-tight inline-block mb-6"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Glenn<span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Communication stratégique, branding et storytelling pour transformer votre image de marque.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:0681499840"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span>06 81 49 98 40</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:connexion@glenn.bzh"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>connexion@glenn.bzh</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] mb-6">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Glenn Le Bourhis. Tous droits réservés.</p>
          <p>Bretagne, France</p>
        </div>
      </div>
    </footer>
  );
};