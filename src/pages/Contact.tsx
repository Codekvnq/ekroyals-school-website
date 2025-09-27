import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiSend,
  FiStar,
} from "react-icons/fi";
import { FaGraduationCap, FaHeart, FaRocket } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Initialize EmailJS
    emailjs.init("yx0k9fr2X0b2gy9_y");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  const [showMessageModal, setShowMessageModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      const now = new Date();
      const formData = new FormData(formRef.current!);
      const formParams = {
        first_name: formData.get("name")?.toString().split(" ")[0] || "",
        last_name:
          formData.get("name")?.toString().split(" ").slice(1).join(" ") || "",
        email: formData.get("email"),
        message: formData.get("message"),
        subject: formData.get("subject") || "Contact Form Inquiry",
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
      };

      const result = await emailjs.send(
        "service_tim4u16",
        "template_uizx9x2",
        formParams,
        "yx0k9fr2X0b2gy9_y"
      );

      if (result.text === "OK") {
        console.log("Email sent successfully:", result.text);
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: "Message sent successfully! We will get back to you soon.",
        });

        // Show success modal
        setShowMessageModal(true);
        setModalMessage(
          "Message sent successfully! We will get back to you soon."
        );
        setModalType("success");

        // Reset the form
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message:
          "Sorry, there was an error sending your message. Please try again later.",
      });

      // Show error modal
      setShowMessageModal(true);
      setModalMessage(
        "Sorry, there was an error sending your message. Please try again later."
      );
      setModalType("error");
    }
  };

  const handleScheduleTour = () => {
    const whatsappNumber = "233531679337";
    const whatsappMessage =
      "Hello, I would like to schedule a tour of E.K Royals School Complex.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const quickLinks = [
    { name: "Upcoming Events", path: "#" },
    { name: "Careers at E.K Royals", path: "/about/careers" },
    { name: "Co-Curricular Programmes", path: "/academics/co-curriculum" },
    { name: "Our Learning Facilities", path: "/academics/facilities" },
    { name: "Academic Curriculum", path: "/academics/curriculum" },
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#ffff]">
      {/* Message Status Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div
              className={`p-6 text-center ${
                modalType === "success" ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <div
                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                  modalType === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {modalType === "success" ? (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                )}
              </div>

              <h3 className="mt-4 text-xl font-bold text-gray-900">
                {modalType === "success" ? "Success!" : "Error"}
              </h3>

              <p className="mt-2 text-gray-700">{modalMessage}</p>
            </div>

            <div className="p-4 bg-gray-50 flex justify-center">
              <button
                onClick={() => setShowMessageModal(false)}
                className={`px-6 py-2 rounded-full font-medium ${
                  modalType === "success"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-red-500 hover:bg-red-600 text-white"
                } transition-colors duration-200`}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <FaGraduationCap className="text-accent-grey text-4xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <FaRocket className="text-orange-400 text-5xl animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-school-blue-600 mb-8 font-playful">
                Connect With Us
                <FaHeart className="inline-block ml-3 text-school-blue-90 animate-pulse" />
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We'd love to hear from you! Whether you have questions about
                  our programs, want to schedule a visit, or need more
                  information about admissions, we're here to help.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Get in touch with us today and discover how E.K Royals School
                  Complex can provide the perfect educational foundation for
                  your child's bright future.
                </p>
              </div>
            </motion.div>

           <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="relative"
>
  {/* Google Maps Embed */}
  <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.252752607075!2d-1.4549756297663545!3d6.738991405745491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbeb570293ced3%3A0x5901a0a04e5deb17!2sEjisu%20Jamasi!5e0!3m2!1sen!2sgh!4v1756658065216!5m2!1sen!2sgh"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="E.K Royals School Complex Location"
    ></iframe>
  </div>
</motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
     <section className="py-20 bg-[#ffff]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-4 font-playful">
        Get In Touch
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We're here to answer your questions and help you learn more about
        our school community.
      </p>
    </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-purple-100 relative overflow-hidden"
            >
              <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center">
                <FiMapPin className="h-10 w-10 text-school-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-school-blue-600 mb-4 font-playful">
                Address
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lawyer Y.S kese, AE-0172-3256 – Ejisu Jamasi
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-pink-100 relative overflow-hidden"
            >
              <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                <FiPhone className="h-10 w-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-pink-600 mb-4 font-playful">
                Call Us
              </h3>
              <p className="text-gray-700 leading-relaxed">
                +233 53 167 9337 / +233 25 692 8572
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-blue-100 relative overflow-hidden"
            >
              <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center">
                <FiMail className="h-10 w-10 text-accent-grey" />
              </div>
              <h3 className="text-xl font-bold text-accent-grey mb-4 font-playful">
                Email
              </h3>
              <p className="text-gray-700 leading-relaxed">
                ekroyalsschoolcomplex@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-green-100 relative overflow-hidden"
            >
              <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
              <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
                <FiClock className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-4 font-playful">
                School Hours
              </h3>
              <div className="text-gray-700 leading-relaxed space-y-1">
                <p>Mon - Fri: 7:00 AM - 3:00 PM</p>
                <p>Saturday: 9:00 AM - 12:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Links */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 font-playful">
                Send Us a Message
              </h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-200 relative overflow-hidden"
              >
                <FiStar className="absolute top-4 right-4 text-yellow-400 text-xl animate-pulse" />

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="Your contact email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="Subject of your message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 resize-none shadow-lg"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-[#1a293f] hover:bg-[#111c35] disabled:bg-gray-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl text-lg"
                  >
                    {formStatus.isSubmitting ? (
                      <div className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <FiSend className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 font-playful">
                Quick Links
              </h2>
              <div className="space-y-4">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="block bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-purple-100 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-school-blue-600 font-semibold group-hover:text-pink-600 transition-colors">
                        {link.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-school-blue-600 text-sm">→</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-[#1a293f] hover:bg-[#111c35] rounded-3xl p-8 text-white relative overflow-hidden">
                <FiStar className="absolute top-4 right-4 text-yellow-300 text-2xl animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 font-playful">
                  Visit Our Campus
                </h3>
                <p className="leading-relaxed mb-6">
                  Schedule a tour of our beautiful campus and see firsthand why
                  E.K Royals is the perfect place for your child's educational
                  journey.
                </p>
                <motion.button
                  onClick={handleScheduleTour}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-school-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Tour
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
