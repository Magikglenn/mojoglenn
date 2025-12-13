interface QuoteSectionProps {
  quote: string;
  showImage?: boolean;
  variant?: "simple" | "extended";
  extendedText?: string;
}

export const QuoteSection = ({
  quote,
  showImage = true,
  variant = "simple",
  extendedText,
}: QuoteSectionProps) => {
  return (
    <section className="py-20 lg:py-28 section-quote">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${showImage ? "lg:flex-row" : ""} items-center gap-12`}>
          {/* Image placeholder */}
          {showImage && (
            <div className="w-full lg:w-1/3 flex-shrink-0">
              <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-muted overflow-hidden shadow-elevated">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Photo à venir
                </div>
              </div>
            </div>
          )}

          {/* Quote */}
          <div className={`flex-1 ${!showImage ? "max-w-3xl mx-auto text-center" : ""}`}>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
              <span className="text-primary">"</span>
              {quote}
              <span className="text-primary">"</span>
            </blockquote>

            {variant === "extended" && extendedText && (
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                {extendedText}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
