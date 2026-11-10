import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <Reveal as="section" className="section" id="localizacao">
      <div className="wrap location-grid">
        <div>
          <p className="eyebrow">Localização</p>
          <h2 className="section-title">Alto Areal, Itapema - SC</h2>
          <p className="section-sub">
            {site.address.full}. {site.address.note}
          </p>
          <a
            className="btn btn-ghost"
            href={site.maps.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
        <div className="map">
          <iframe
            title="Mapa do Refúgio Dellarosa"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={site.maps.embed}
          />
        </div>
      </div>
    </Reveal>
  );
}
