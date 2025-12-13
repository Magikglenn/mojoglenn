// Placeholder for client logos - will be replaced with actual logos
const clientLogos = [
  { name: "Orange", placeholder: true },
  { name: "Total Energies", placeholder: true },
  { name: "Le Village", placeholder: true },
  { name: "Global Services", placeholder: true },
  { name: "Klaxon", placeholder: true },
];

export const TrustSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground mb-10 text-sm font-medium uppercase tracking-wider">
          Ils m'ont fait confiance
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder for logo - replace with actual image */}
              <div className="w-24 h-12 md:w-32 md:h-16 bg-muted rounded flex items-center justify-center">
                <span className="text-xs text-muted-foreground font-medium">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
