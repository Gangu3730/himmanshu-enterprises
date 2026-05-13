import { Clock, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Laptop Repair",
  "Desktop Repair",
  "Data Recovery",
  "CCTV Installation",
  "Networking Solutions",
  "Apple MacBook Repair",
  "Server Installation",
  "AMC Services",
];

const handleNavClick = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #060f1e 0%, #0a1628 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="https://himmanshuenterprises.com/wp-content/uploads/2025/06/HE-WEB-LOGO-1-1.png"
              alt="Himmanshu Enterprises"
              className="h-10 w-auto object-contain mb-4"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Delhi NCR's trusted IT repair and networking experts since 2007.
              Serving homes and businesses across Nehru Place and all of Delhi
              NCR.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://api.whatsapp.com/send/?phone=919811145363&text=Hi&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-colors"
                style={{ backgroundColor: "#25D366" }}
                aria-label="WhatsApp"
                data-ocid="footer.whatsapp.link"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4"
                  aria-hidden="false"
                  role="img"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.852L.057 23.885l6.197-1.495A11.938 11.938 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.376l-.36-.213-3.676.886.929-3.583-.235-.369A9.784 9.784 0 012.182 12C2.182 6.579 6.579 2.182 12 2.182S21.818 6.579 21.818 12 17.421 21.818 12 21.818z" />
                </svg>
              </a>
              <a
                href="tel:+919811145363"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Call Us"
                data-ocid="footer.phone.link"
              >
                <Phone size={15} className="text-white" />
              </a>
              <a
                href="mailto:himmanshuenterprises@gmail.com"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Email Us"
                data-ocid="footer.email.link"
              >
                <Mail size={15} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                    data-ocid={`footer.quicklink.${link.label.toLowerCase().replace(" ", "_")}.link`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    type="button"
                    onClick={() => handleNavClick("#services")}
                    className="text-white/60 hover:text-white text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-white/50 flex-shrink-0 mt-0.5"
                />
                <p className="text-white/60 text-sm leading-relaxed">
                  710, 7th Floor, Eros Apartment, 56 Nehru Place, New Delhi –
                  110019
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="text-white/50 flex-shrink-0 mt-0.5"
                />
                <div>
                  <a
                    href="tel:+919811145363"
                    className="text-white/60 hover:text-white text-sm block transition-colors"
                  >
                    +91-9811145363
                  </a>
                  <a
                    href="tel:01145045363"
                    className="text-white/60 hover:text-white text-sm block transition-colors"
                  >
                    011-45045363
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="text-white/50 flex-shrink-0 mt-0.5"
                />
                <div>
                  <a
                    href="mailto:himmanshuenterprises@gmail.com"
                    className="text-white/60 hover:text-white text-xs block transition-colors break-all"
                  >
                    himmanshuenterprises@gmail.com
                  </a>
                  <a
                    href="mailto:sales@himmanshuenterprises.com"
                    className="text-white/60 hover:text-white text-xs block transition-colors break-all"
                  >
                    sales@himmanshuenterprises.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  size={15}
                  className="text-white/50 flex-shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white/60 text-sm">Mon–Sat: 9 AM – 7 PM</p>
                  <p className="text-white/60 text-sm">Support: 9 AM – 5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} Himmanshu Enterprises. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
