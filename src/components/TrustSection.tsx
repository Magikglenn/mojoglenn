import ajirLogo from "@/assets/logos/ajir-bretagne.png";
import abeaLogo from "@/assets/logos/abea-bretagne.png";
import globalServicesLogo from "@/assets/logos/global-services.png";
import klaxonLogo from "@/assets/logos/klaxon.png";
import leVillageLogo from "@/assets/logos/le-village.png";
import orangeLogo from "@/assets/logos/orange.png";
import totalEnergiesLogo from "@/assets/logos/total-energies.png";
import iscomLogo from "@/assets/logos/iscom.webp";
import esirLogo from "@/assets/logos/esir.webp";
import bodemerLogo from "@/assets/logos/bodemer.jpg";
import askoriaLogo from "@/assets/logos/askoria.png";
import emmausLogo from "@/assets/logos/emmaus.png";
import saintMaloLogo from "@/assets/logos/saint-malo-agglo.png";
import blcLogo from "@/assets/logos/blc-automotive.png";
import sherpaLogo from "@/assets/logos/sherpa.svg";

const clientLogos = [
  { name: "Orange", logo: orangeLogo },
  { name: "Total Energies", logo: totalEnergiesLogo },
  { name: "Le Village", logo: leVillageLogo },
  { name: "Global Services", logo: globalServicesLogo },
  { name: "Klaxon", logo: klaxonLogo },
  { name: "AJIR Bretagne", logo: ajirLogo },
  { name: "ABEA", logo: abeaLogo },
  { name: "ISCOM", logo: iscomLogo },
  { name: "ESIR", logo: esirLogo },
  { name: "Bodemer", logo: bodemerLogo },
  { name: "Askoria", logo: askoriaLogo },
  { name: "Emmaüs", logo: emmausLogo },
  { name: "Saint-Malo Agglomération", logo: saintMaloLogo },
  { name: "BLC Automotive", logo: blcLogo },
  { name: "Sherpa", logo: sherpaLogo },
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-600 mb-12 text-sm font-semibold uppercase tracking-[0.2em]">
          Ils m'ont fait confiance
        </p>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
          {clientLogos.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={client.logo}
                alt={`Logo ${client.name}`}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};