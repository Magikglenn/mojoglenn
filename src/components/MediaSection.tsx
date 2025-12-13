import { ExternalLink } from "lucide-react";

const mediaPosts = [
  {
    title: "Grand Forum de la communication - Iscom 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7401666531157291008/",
    placeholder: "ISCOM 2025",
  },
  {
    title: "Invité du podcast de François Galiana",
    link: "https://podcasts.apple.com/sv/podcast/le-pouvoir-des-d%C3%A9cisions-une-conversation-avec-glenn/id1668675486?i=1000649748526",
    placeholder: "Podcast",
  },
  {
    title: "Invité du podcast sur la prise de parole",
    link: "https://youtu.be/L345PkP2kf4?si=zhWW4-FwRew__mMK&t=1014",
    placeholder: "YouTube",
  },
];

export const MediaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            Plus sur <span className="text-rose-light">moi</span>
          </h2>
          <p className="text-background/70">
            Interventions, podcasts et conférences
          </p>
        </div>

        {/* Scrolling cards */}
        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {mediaPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-80 snap-center"
            >
              <div className="relative rounded-2xl overflow-hidden bg-background/10 backdrop-blur-sm border border-background/20 transition-all duration-300 group-hover:border-rose-light/50 group-hover:shadow-glow-rose">
                {/* Placeholder image area */}
                <div className="aspect-video bg-gradient-to-br from-rose-light/20 to-kaki-light/20 flex items-center justify-center">
                  <span className="text-background/50 text-sm font-medium">
                    {post.placeholder}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-background group-hover:text-rose-light transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-background/60 text-sm group-hover:text-rose-light transition-colors">
                    <span>Voir</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
