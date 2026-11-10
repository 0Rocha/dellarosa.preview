import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div>
          <p className="footer-brand">{site.name}</p>
          <p>{site.address.full}</p>
          <p>© 2026 {site.name}. Todos os direitos reservados.</p>
        </div>
        <div className="footer-links">
          <a
            href={site.profiles.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram · {site.profiles.instagram.label}
          </a>
          <a
            href={site.profiles.airbnb.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb · {site.profiles.airbnb.label}
          </a>
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
        </div>
      </div>
    </footer>
  );
}
