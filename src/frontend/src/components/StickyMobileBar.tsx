import { MessageCircle, Phone } from "lucide-react";

export default function StickyMobileBar() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919811145363&text=Hi&type=phone_number&app_absent=0";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="grid grid-cols-2">
        <a
          href="tel:+919811145363"
          className="flex items-center justify-center gap-2 bg-navy-900 text-white py-4 text-sm font-semibold hover:bg-navy-800 transition-colors border-r border-white/20"
          data-ocid="mobile_bar.call_now.button"
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: "#25D366" }}
          data-ocid="mobile_bar.whatsapp.button"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
