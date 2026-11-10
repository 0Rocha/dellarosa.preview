import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Reveal as="section" className="section" id="sobre">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">Sobre o refúgio</p>
          <h2 className="section-title">Natureza, conforto e exclusividade</h2>
          <p className="section-sub">{site.about}</p>
          <p className="section-sub">{site.description}</p>
        </div>
        <div className="info-stack" aria-label="Informações práticas">
          <div className="info-row">
            <span className="k">Endereço</span>
            <p>{site.address.full}</p>
          </div>
          <div className="info-row">
            <span className="k">Referência</span>
            <p>{site.address.note}</p>
          </div>
          <div className="info-row">
            <span className="k">Contato</span>
            <p>
              <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
