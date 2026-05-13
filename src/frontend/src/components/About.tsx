import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Serving Delhi NCR since 2007 — 17+ years of trusted service",
  "Certified technicians for Apple, HP, Dell, Lenovo, Asus, Acer, Toshiba, Compaq, HCL",
  "Onsite repair at your home or office — no need to travel",
  "Pay After Fix policy — you pay only when you're satisfied",
  "Annual Maintenance Contracts (AMC) for homes and businesses",
  "Transparent pricing with no hidden charges",
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image Side */}
          <div className="relative animate-fadeInLeft">
            <div className="relative rounded-2xl overflow-hidden shadow-navy">
              <img
                src="/assets/generated/hero-it-engineer.dim_1200x700.jpg"
                alt="Himmanshu Enterprises technician at work"
                className="w-full h-72 lg:h-96 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(10,22,40,0.3), transparent)",
                }}
              />
            </div>

            {/* Years Badge */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white"
              style={{
                background: "linear-gradient(135deg, #0d2145, #1a3a6e)",
              }}
            >
              <span className="text-3xl font-bold">17+</span>
              <span className="text-xs text-white/80 text-center leading-tight">
                Years of Experience
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-fadeInRight">
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-5 text-white"
              style={{ backgroundColor: "#0d2145" }}
            >
              About Us
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-5"
              style={{ color: "#0a1628" }}
            >
              Delhi NCR's Premier IT Repair Experts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Himmanshu Enterprises has been the go-to IT repair and services
              company in Delhi NCR since 2007. Located at Nehru Place — Asia's
              largest IT market — we bring together certified expertise, genuine
              parts, and a relentless focus on customer satisfaction.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              Whether you need a quick virus removal, a complex motherboard
              repair, or a full office networking setup, our team delivers fast,
              reliable, and transparent service. We service all major brands and
              offer both walk-in and onsite repair options.
            </p>

            <ul className="space-y-3 mb-8" data-ocid="about.highlights.list">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-3"
                  data-ocid={`about.highlight.${i + 1}`}
                >
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#0d2145" }}
                  />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+919811145363"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 shadow-navy"
              style={{
                background: "linear-gradient(135deg, #0d2145, #1a3a6e)",
              }}
              data-ocid="about.call_button"
            >
              Call +91-9811145363
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
