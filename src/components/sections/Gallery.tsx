import Image from "next/image";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Gallery() {
  return (
    <Reveal as="section" className="section" id="galeria">
      <div className="wrap">
        <p className="eyebrow">Galeria</p>
        <h2 className="section-title">Ambiente, acomodações e natureza</h2>
        <p className="section-sub">
          Fotografias reais do Refúgio Dellarosa e do entorno em Itapema.
        </p>
        <div className="gallery">
          {site.gallery.map((item) => (
            <figure key={item.src} className="gallery-item">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 760px) 50vw, 33vw"
                className="cover-img"
              />
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
