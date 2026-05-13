import { Clock, MessageCircle, Phone, Wrench } from "lucide-react";

const stats = [
  { value: "19+", label: "Years Experience" },
  { value: "50K+", label: "Devices Repaired" },
  { value: "5000+", label: "Happy Clients" },
  { value: "24/7", label: "Support Available" },
];

export default function Hero() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=919811145363&text=Hi&type=phone_number&app_absent=0";

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #0d2145 50%, #1a3a6e 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow Accent */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #2453a0, transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fadeInLeft">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-shadow">
              Professional Laptop, Computer &{" "}
              <span style={{ color: "#7eb3ff" }}>Networking</span> Repair
              Services
            </h1>

            <p className="text-lg text-white/75 leading-relaxed max-w-xl">
              Delhi NCR's most trusted IT repair experts. Onsite support,
              certified technicians, and a{" "}
              <strong className="text-white">Pay After Fix</strong> guarantee —
              serving homes and corporates since 2007.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              {[
                "✓ Certified Technicians",
                "✓ Same Day Repair",
                "✓ Free Diagnosis",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 pt-2"
              data-ocid="hero.cta.section"
            >
              <a
                href="tel:+919811145363"
                className="flex items-center gap-2 bg-white text-navy-900 hover:bg-navy-50 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:shadow-navy hover:-translate-y-0.5"
                data-ocid="hero.call_now.button"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg hover:-translate-y-0.5 text-white"
                style={{ backgroundColor: "#25D366" }}
                data-ocid="hero.whatsapp.button"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                className="flex items-center gap-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                data-ocid="hero.book_repair.button"
              >
                <Wrench size={16} />
                Book Repair
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-navy">
              <img
                src="/assets/generated/hero-it-engineer.dim_1200x700.jpg"
                alt="Professional IT engineer performing laptop repair"
                className="w-full h-80 lg:h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)",
                }}
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Available Now</p>
                    <p className="text-white/70 text-xs">
                      Mon–Sat: 9 AM – 7 PM
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center bg-white/8 border border-white/15 rounded-xl py-4 px-3 backdrop-blur-sm"
              style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
