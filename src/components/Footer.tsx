import { Linkedin, Instagram, Phone, Mail } from "lucide-react";

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
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-serif text-3xl font-semibold text-background hover:text-rose-light transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Glenn<span className="text-rose-light">.</span>
            </a>
            <p className="mt-4 text-background/60 leading-relaxed">
              Communication stratégique, branding et storytelling pour transformer votre image de marque.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:0681499840"
                className="flex items-center gap-3 text-background/70 hover:text-rose-light transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>06 81 49 98 40</span>
              </a>
              <a
                href="mailto:connexion@glenn.bzh"
                className="flex items-center gap-3 text-background/70 hover:text-rose-light transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>connexion@glenn.bzh</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-rose-light hover:text-foreground transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Glenn Le Bourhis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
