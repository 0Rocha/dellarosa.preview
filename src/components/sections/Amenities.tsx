import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";

export function Amenities() {
  return (
    <Reveal as="section" className="section section-amenities" id="comodidades">
      <div className="wrap">
        <p className="eyebrow">Comodidades</p>
        <h2 className="section-title">O essencial para uma estadia tranquila</h2>
        <p className="section-sub">
          Recursos disponíveis no Refúgio para conforto e autonomia durante a
          hospedagem.
        </p>
        <ul className="amenity-list">
          {site.amenities.map((item) => (
            <li key={item.id}>
              <span className="amenity-mark" aria-hidden="true" />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
