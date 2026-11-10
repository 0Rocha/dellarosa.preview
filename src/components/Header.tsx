import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <a href="#inicio" className="brand" aria-label={`${site.name} — início`}>
          <span className="mark" aria-hidden="true">
            R
          </span>
          <span>{site.name}</span>
        </a>
        <nav className="nav-links" aria-label="Seções">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <WhatsAppLink
          className="btn btn-primary btn-sm"
          message={site.whatsappMessages.hero}
          aria-label="Reservar pelo WhatsApp"
        >
          Reservar
        </WhatsAppLink>
      </div>
    </header>
  );
}
