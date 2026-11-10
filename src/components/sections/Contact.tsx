import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Contact() {
  return (
    <Reveal as="section" className="section" id="reserva">
      <div className="wrap">
        <div className="cta-box">
          <p className="eyebrow">Reservas e contato</p>
          <h2>Pronto para conhecer o Refúgio?</h2>
          <p>
            Fale conosco pelo WhatsApp para consultar disponibilidade e tirar
            dúvidas sobre as acomodações.
          </p>
          <div className="actions">
            <WhatsAppLink
              className="btn btn-primary"
              message={site.whatsappMessages.contact}
            >
              Reservar no WhatsApp
            </WhatsAppLink>
            <a className="btn btn-ghost" href={`tel:${site.phone.tel}`}>
              {site.phone.display}
            </a>
          </div>
          <p className="cta-profiles">
            Também no Instagram e Airbnb como{" "}
            <a
              href={site.profiles.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.profiles.instagram.label}
            </a>
            .
          </p>
        </div>
      </div>
    </Reveal>
  );
}
