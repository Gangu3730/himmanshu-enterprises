import { AlertTriangle, MessageCircle, Phone } from "lucide-react";

export default function EmergencyCTA() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919811145363&text=Hi+I+need+urgent+repair+support&type=phone_number&app_absent=0";

  return (
    <section
      id="emergency"
      className="py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #060f1e 0%, #0a1628 50%, #0d2145 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-400/30 text-red-400 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
          <AlertTriangle size={14} />
          Emergency Support Available
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
          Need Urgent Computer or Laptop Repair?
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-xl mx-auto">
          Don't let downtime hurt your work. Our experts are ready to help you
          right now — call us or drop a WhatsApp message for instant assistance.
        </p>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-ocid="emergency.cta.section"
        >
          <a
            href="tel:+919811145363"
            className="flex items-center gap-3 bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            data-ocid="emergency.call_now.button"
          >
            <Phone size={18} />
            Call Now: +91-9811145363
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
            style={{ backgroundColor: "#25D366" }}
            data-ocid="emergency.whatsapp.button"
          >
            <MessageCircle size={18} />
            WhatsApp Support
          </a>
        </div>

        <p className="mt-8 text-white/40 text-xs">
          Mon–Sat: 9:00 AM – 7:00 PM &nbsp;|&nbsp; Support: 9:00 AM – 5:00 PM
        </p>
      </div>
    </section>
  );
}
