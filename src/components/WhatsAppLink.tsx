import { whatsappUrl } from "@/lib/whatsapp";

type WhatsAppLinkProps = {
  message: string;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
};

export function WhatsAppLink({
  message,
  children,
  className,
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      href={whatsappUrl(message)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
