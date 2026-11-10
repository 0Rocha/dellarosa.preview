import { site } from "@/content/site";

export function whatsappUrl(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.phone.e164}?text=${text}`;
}
