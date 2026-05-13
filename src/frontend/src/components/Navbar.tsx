import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900 shadow-navy" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex-shrink-0"
            aria-label="Himmanshu Enterprises Home"
          >
            <img
              src="https://himmanshuenterprises.com/wp-content/uploads/2025/06/HE-WEB-LOGO-1-1.png"
              alt="Himmanshu Enterprises"
              className="h-10 lg:h-12 w-auto object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const span = document.createElement("span");
                span.className = "text-white font-bold text-lg tracking-wide";
                span.textContent = "HE";
                target.parentElement?.appendChild(span);
              }}
            />
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919811145363"
              className="flex items-center gap-2 bg-white text-navy-900 hover:bg-navy-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shadow-card"
              data-ocid="nav.call_now.button"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.mobile_menu.toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-navy-900 border-t border-white/10 animate-slideIn">
            <div className="px-2 pt-3 pb-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-colors"
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919811145363"
                className="flex items-center gap-2 mx-4 mt-3 bg-white text-navy-900 px-4 py-3 rounded-lg text-sm font-semibold justify-center"
                data-ocid="nav.mobile.call_now.button"
              >
                <Phone size={15} />
                Call Now: +91-9811145363
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
