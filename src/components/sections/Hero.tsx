import Image from "next/image";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="hero-media">
        <Image
          src={site.heroImage.src}
          alt={site.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="hero-img"
        />
        <div className="hero-scrim" aria-hidden="true" />
      </div>
      <div className="wrap hero-copy">
        <p className="eyebrow">Hospedagem · Itapema - SC</p>
        <h1>{site.name}</h1>
        <p className="lead">{site.shortLead}</p>
        <div className="actions">
          <WhatsAppLink
            className="btn btn-primary"
            message={site.whatsappMessages.hero}
          >
            Reservar no WhatsApp
          </WhatsAppLink>
          <a
            className="btn btn-ghost"
            href={site.maps.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
