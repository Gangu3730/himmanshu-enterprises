import {
  Apple,
  Battery,
  Camera,
  Cpu,
  Gamepad2,
  HardDrive,
  Keyboard,
  Lock,
  Monitor,
  Phone,
  Server,
  Shield,
  Smartphone,
  Wifi,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Mac & PC Repair",
    desc: "Complete hardware and software repair for all Mac and PC models.",
  },
  {
    icon: Cpu,
    title: "Laptop Repair",
    desc: "Expert repairs for HP, Dell, Lenovo, Asus, Acer & more.",
  },
  {
    icon: HardDrive,
    title: "Data Recovery",
    desc: "Recover lost data from crashed HDDs, SSDs, and USB drives.",
  },
  {
    icon: Shield,
    title: "Virus Removal",
    desc: "Deep scan & remove malware, ransomware, and viruses.",
  },
  {
    icon: Wifi,
    title: "Networking Solutions",
    desc: "LAN/WAN setup, router config, and enterprise networking.",
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    desc: "IP & HD CCTV cameras with remote viewing setup.",
  },
  {
    icon: Apple,
    title: "Apple MacBook Repair",
    desc: "Authorized-quality repairs for all MacBook models.",
  },
  {
    icon: Battery,
    title: "UPS Installation",
    desc: "Professional UPS setup and maintenance for offices.",
  },
  {
    icon: Server,
    title: "Server Installation",
    desc: "Rack setup, OS installation, and server configuration.",
  },
  {
    icon: Monitor,
    title: "Windows Installation",
    desc: "Genuine Windows OS installation with driver setup.",
  },
  {
    icon: Shield,
    title: "Laptop AMC",
    desc: "Annual Maintenance Contract for laptops — cost-effective IT care.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Accessories",
    desc: "Gaming chairs, keyboards, mice & peripheral setup.",
  },
  {
    icon: Keyboard,
    title: "Keyboard Repair",
    desc: "Keyboard replacement and key-level repair services.",
  },
  {
    icon: Lock,
    title: "Password Recovery",
    desc: "BIOS, Windows login, and account password recovery.",
  },
  {
    icon: Phone,
    title: "EPBAX Installation",
    desc: "Business telephone exchange and intercom system setup.",
  },
  {
    icon: Smartphone,
    title: "iPhone/iPad Repair",
    desc: "Screen, battery, and charging port repairs for Apple devices.",
  },
  {
    icon: Monitor,
    title: "Computer AMC",
    desc: "Annual Maintenance Contract for desktops and workstations.",
  },
  {
    icon: Cpu,
    title: "Hardware Replacement",
    desc: "RAM, SSD, HDD, motherboard, and GPU upgrades.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 text-white"
            style={{ backgroundColor: "#0d2145" }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#0a1628" }}
          >
            Our IT Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From laptop repair to enterprise networking — we cover every aspect
            of your IT needs across Delhi NCR.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data-ocid="services.list"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-navy-800 hover:shadow-navy transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ borderColor: "#e5e7eb" }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: "#eef3fb" }}
                >
                  <Icon size={22} style={{ color: "#0d2145" }} />
                </div>
                <h3
                  className="font-semibold text-sm mb-2"
                  style={{ color: "#0a1628" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
