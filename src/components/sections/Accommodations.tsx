import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Accommodations() {
  return (
    <Reveal as="section" className="section" id="acomodacoes">
      <div className="wrap">
        <p className="eyebrow">Acomodações</p>
        <h2 className="section-title">Dois chalés privativos</h2>
        <p className="section-sub">
          Arquitetura rústica inspirada no conceito de casa na árvore, pensada
          para casais e pequenos grupos.
        </p>

        <div className="chalet-list">
          {site.chalets.map((chalet, index) => (
            <article
              key={chalet.id}
              className={`chalet-block ${index % 2 === 1 ? "is-reversed" : ""}`}
            >
              <div className="chalet-media">
                <Image
                  src={chalet.image.src}
                  alt={chalet.image.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  className="cover-img"
                />
              </div>
              <div className="chalet-copy">
                <h3>{chalet.name}</h3>
                <p>{chalet.summary}</p>
                <ul>
                  {chalet.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="chalet-secondary">
                  <Image
                    src={chalet.secondaryImage.src}
                    alt={chalet.secondaryImage.alt}
                    width={420}
                    height={280}
                    className="chalet-thumb"
                  />
                </div>
                <WhatsAppLink
                  className="btn btn-primary"
                  message={site.whatsappMessages.chalet(chalet.name)}
                >
                  Consultar {chalet.name}
                </WhatsAppLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
