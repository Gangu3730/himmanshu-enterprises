const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    name: "Dell",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg",
  },
  {
    name: "HP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
  },
  {
    name: "Lenovo",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg",
  },
  {
    name: "Acer",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/00/Acer_2011.svg",
  },
  {
    name: "Asus",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg",
  },
  {
    name: "Toshiba",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Toshiba_logo.svg",
  },
  {
    name: "Samsung",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Sony",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
];

export default function Brands() {
  return (
    <section
      id="brands"
      className="py-16"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-2"
            style={{ color: "#6b7280" }}
          >
            Brands We Service
          </p>
          <h2
            className="text-2xl lg:text-3xl font-bold"
            style={{ color: "#0a1628" }}
          >
            All Major Brands, One Expert Team
          </h2>
        </div>

        <div
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4 items-center"
          data-ocid="brands.list"
        >
          {brands.map((brand, i) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-card hover:border-navy-800 transition-all duration-200 group"
              style={{ borderColor: "#e5e7eb" }}
              data-ocid={`brands.item.${i + 1}`}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
