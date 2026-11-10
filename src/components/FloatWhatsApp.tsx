import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export function FloatWhatsApp() {
  return (
    <WhatsAppLink
      className="float-wa"
      message={site.whatsappMessages.float}
      aria-label="Abrir conversa no WhatsApp"
    >
      WhatsApp
    </WhatsAppLink>
  );
}
