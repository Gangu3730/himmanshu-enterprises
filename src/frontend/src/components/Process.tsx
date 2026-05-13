import { PackageCheck, Phone, Search, Wrench } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Call Us",
    desc: "Reach us by phone or WhatsApp. Describe your issue and we'll schedule a pickup or onsite visit at your convenience.",
  },
  {
    step: "02",
    icon: Search,
    title: "Diagnosis",
    desc: "Our certified technicians thoroughly diagnose the hardware and software issues. Free diagnosis on most services.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Repair",
    desc: "We repair your device using genuine parts. You receive a transparent quote before we begin any work.",
  },
  {
    step: "04",
    icon: PackageCheck,
    title: "Delivery & Support",
    desc: "Your device is returned fully repaired and tested. We follow up to ensure everything works perfectly.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 text-white"
            style={{ backgroundColor: "#0d2145" }}
          >
            How It Works
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#0a1628" }}
          >
            Simple 4-Step Repair Process
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Getting your device repaired is easy. We handle everything so you
            can focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          data-ocid="process.steps.list"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative"
                data-ocid={`process.step.${i + 1}`}
              >
                {/* Connector Line */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-0 h-0.5"
                    style={{
                      background: "linear-gradient(to right, #0d2145, #e5e7eb)",
                    }}
                  />
                )}

                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="relative inline-flex">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 mx-auto shadow-navy"
                      style={{
                        background: "linear-gradient(135deg, #0a1628, #1a3a6e)",
                      }}
                    >
                      <Icon size={30} className="text-white" />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "#2453a0" }}
                    >
                      {step.step}
                    </span>
                  </div>

                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#0a1628" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
