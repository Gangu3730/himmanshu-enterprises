import {
  Award,
  Building2,
  HeadphonesIcon,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Guarantee",
    desc: "Every repair is backed by our quality assurance. We use genuine parts and provide a repair warranty on all services.",
    highlight: "Pay After Fix Policy",
  },
  {
    icon: Building2,
    title: "Corporate Services",
    desc: "Tailored IT support for offices and enterprises. Annual Maintenance Contracts, bulk device management, and priority onsite visits.",
    highlight: "AMC Available",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    desc: "Reach our certified technicians by phone or WhatsApp. Fast response, friendly service, and transparent pricing.",
    highlight: "Same-Day Response",
  },
  {
    icon: ShieldCheck,
    title: "Certified Technicians",
    desc: "Our engineers are trained and certified. Expertise across Apple, HP, Dell, Lenovo, Toshiba, Acer, Asus, and more.",
    highlight: "A+ Certified",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "We value your time. Most repairs are completed within 24–48 hours. Express service available on request.",
    highlight: "24–48 Hour Repair",
  },
  {
    icon: Users,
    title: "Trusted by 5000+ Clients",
    desc: "From home users to Fortune 500 companies — our reputation is built on trust, transparency, and results since 2007.",
    highlight: "Since 2007",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d2145 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 text-navy-900 font-poppins"
            style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
          >
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Delhi's Most Trusted IT Repair Partner
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            We don't just fix devices — we build long-term relationships through
            reliability, expertise, and genuine care.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="why_us.features.list"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-white/25 transition-all duration-300"
                data-ocid={`why_us.feature.${i + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(36,83,160,0.4)" }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-3">
                      {feature.desc}
                    </p>
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.1)",
                        color: "#7eb3ff",
                      }}
                    >
                      {feature.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
