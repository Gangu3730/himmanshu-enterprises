import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Laptop Repair",
  "Desktop/PC Repair",
  "Data Recovery",
  "CCTV Installation",
  "Networking Solutions",
  "Server Installation",
  "Apple MacBook Repair",
  "AMC Services",
  "UPS Installation",
  "Virus Removal",
  "iPhone/iPad Repair",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappText = encodeURIComponent(
      `Hi! I'd like to enquire about ${form.service || "IT services"}.\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`,
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=919811145363&text=${whatsappText}&type=phone_number&app_absent=0`,
      "_blank",
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
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
            Get In Touch
          </span>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#0a1628" }}
          >
            Contact Us
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Reach out via form, phone, or WhatsApp. We'll get back to you
            promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div
              className="rounded-2xl p-7 text-white"
              style={{
                background: "linear-gradient(135deg, #0a1628, #1a3a6e)",
              }}
            >
              <h3 className="text-lg font-bold mb-5">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <MapPin size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Address</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      710, 7th Floor, Eros Apartment,
                      <br />
                      56 Nehru Place, New Delhi – 110019
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Phone size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Phone</p>
                    <a
                      href="tel:+919811145363"
                      className="text-white/70 text-sm hover:text-white block transition-colors"
                    >
                      +91-9811145363
                    </a>
                    <a
                      href="tel:01145045363"
                      className="text-white/70 text-sm hover:text-white block transition-colors"
                    >
                      011-45045363
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Mail size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Email</p>
                    <a
                      href="mailto:himmanshuenterprises@gmail.com"
                      className="text-white/70 text-sm hover:text-white block transition-colors break-all"
                    >
                      himmanshuenterprises@gmail.com
                    </a>
                    <a
                      href="mailto:sales@himmanshuenterprises.com"
                      className="text-white/70 text-sm hover:text-white block transition-colors break-all"
                    >
                      sales@himmanshuenterprises.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  >
                    <Clock size={17} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Working Hours</p>
                    <p className="text-white/70 text-sm">
                      Mon–Sat: 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-white/70 text-sm">
                      Support: 9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl overflow-hidden border"
              style={{ borderColor: "#e5e7eb", height: "200px" }}
            >
              <iframe
                title="Himmanshu Enterprises Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5208737793856!2d77.24862927529777!3d28.54944947573844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f0b6e85987%3A0x9b4e7c2e26e09c5a!2sNehru+Place%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-card border"
            style={{ borderColor: "#e5e7eb" }}
          >
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full py-12 text-center"
                data-ocid="contact.success_state"
              >
                <MessageCircle
                  size={48}
                  style={{ color: "#25D366" }}
                  className="mb-4"
                />
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "#0a1628" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm">
                  We've opened WhatsApp with your enquiry. We'll respond
                  shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#0a1628" }}
                >
                  Send an Enquiry
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  Fill the form — it opens WhatsApp with your details
                  pre-filled.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                      style={{ borderColor: "#d1d5db", color: "#111827" }}
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-semibold mb-1.5"
                      style={{ color: "#374151" }}
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91-XXXXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                      style={{ borderColor: "#d1d5db", color: "#111827" }}
                      data-ocid="contact.phone.input"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "#374151" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2"
                    style={{ borderColor: "#d1d5db", color: "#111827" }}
                    data-ocid="contact.email.input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "#374151" }}
                  >
                    Service Required
                  </label>
                  <select
                    id="serviceRequired"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 bg-white"
                    style={{
                      borderColor: "#d1d5db",
                      color: form.service ? "#111827" : "#9ca3af",
                    }}
                    data-ocid="contact.service.select"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "#374151" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe your issue or query..."
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 resize-none"
                    style={{ borderColor: "#d1d5db", color: "#111827" }}
                    data-ocid="contact.message.textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 shadow-navy"
                  style={{
                    background: "linear-gradient(135deg, #0d2145, #1a3a6e)",
                  }}
                  data-ocid="contact.submit_button"
                >
                  <MessageCircle size={17} />
                  Send via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
