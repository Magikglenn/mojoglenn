import { ExternalLink } from "lucide-react";
import forumIscom from "@/assets/forum-iscom.jpg";
import podcastGaliana from "@/assets/podcast-galiana.png";
import podcastYoutube from "@/assets/podcast-youtube.jpg";
import instaImage from "@/assets/insta.png";
import glennBureau from "@/assets/glenn-bureau.jpg";

const mediaPosts = [
  {
    title: "Suivez-moi sur Instagram",
    link: "https://www.instagram.com/glennlebourhis/",
    image: instaImage,
  },
  {
    title: "Interview par Marion Bonglet",
    link: "https://www.mbonglet-communication.com/post/glenn-le-bourhis-comment-parler-au-cerveau-des-clients",
    image: glennBureau,
  },
  {
    title: "Grand Forum de la communication - Iscom 2025",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7401666531157291008/",
    image: forumIscom,
  },
  {
    title: "Invité du podcast de François Galiana",
    link: "https://podcasts.apple.com/sv/podcast/le-pouvoir-des-d%C3%A9cisions-une-conversation-avec-glenn/id1668675486?i=1000649748526",
    image: podcastGaliana,
  },
  {
    title: "Invité du podcast sur la prise de parole",
    link: "https://youtu.be/L345PkP2kf4?si=zhWW4-FwRew__mMK&t=1014",
    image: podcastYoutube,
  },
];

export const MediaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Plus sur <span className="text-accent">moi</span>
          </h2>
          <p className="text-muted-foreground">
            Interventions, podcasts et conférences
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-6 px-6">
          {mediaPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 w-80 snap-center"
            >
              <div className="relative rounded-2xl overflow-hidden bg-muted/30 backdrop-blur-sm border border-border/50 transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-glow-rose">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm group-hover:text-accent transition-colors">
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