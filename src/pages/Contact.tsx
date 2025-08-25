import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiStar } from 'react-icons/fi';
import { FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const quickLinks = [
    { name: 'Upcoming Events', path: '#' },
    { name: 'Careers at EK Royals', path: '/about/careers' },
    { name: 'Co-Curricular Programmes', path: '/academics/co-curriculum' },
    { name: 'Our Learning Facilities', path: '/academics/facilities' },
    { name: 'Academic Curriculum', path: '/academics/curriculum' }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <FaGraduationCap className="text-purple-400 text-4xl animate-pulse" />
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
              <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 font-playful">
                Connect With Us
                <FaHeart className="inline-block ml-3 text-pink-500 animate-pulse" />
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We'd love to hear from you! Whether you have questions about our programs, 
                  want to schedule a visit, or need more information about admissions, 
                  we're here to help.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Get in touch with us today and discover how EK Royals School Complex 
                  can provide the perfect educational foundation for your child's bright future.
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6!2d-1.6!3d6.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDInMDAuMCJOIDHCsDM2JzAwLjAiVw!5e0!3m2!1sen!2sgh!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EK Royals School Complex Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-white via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 font-playful">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're here to answer your questions and help you learn more about our school community.
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
                <FiMapPin className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-600 mb-4 font-playful">Address</h3>
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
              <h3 className="text-xl font-bold text-pink-600 mb-4 font-playful">Call Us</h3>
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
                <FiMail className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-4 font-playful">Email</h3>
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
              <h3 className="text-xl font-bold text-green-600 mb-4 font-playful">School Hours</h3>
              <div className="text-gray-700 leading-relaxed space-y-1">
                <p>Mon - Fri: 7:00 AM - 3:00 PM</p>
                <p>Saturday: 9:00 AM - 12:00 PM</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Links */}
      <section className="py-20 bg-gradient-to-l from-blue-100 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 font-playful">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-purple-200 relative overflow-hidden">
                <FiStar className="absolute top-4 right-4 text-yellow-400 text-xl animate-pulse" />
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-purple-600 mb-2">
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
                    <label className="block text-sm font-bold text-purple-600 mb-2">
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
                    <label className="block text-sm font-bold text-purple-600 mb-2">
                      Subject 
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="What your inquiry is about"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-purple-600 mb-2">
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl text-lg"
                  >
                    <FiSend className="mr-2 h-5 w-5" />
                    Send Message ✨
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
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 font-playful">
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
                      <span className="text-purple-600 font-semibold group-hover:text-pink-600 transition-colors">
                        {link.name}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-purple-600 text-sm">→</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden">
                <FiStar className="absolute top-4 right-4 text-yellow-300 text-2xl animate-pulse" />
                <h3 className="text-2xl font-bold mb-4 font-playful">Visit Our Campus</h3>
                <p className="leading-relaxed mb-6">
                  Schedule a tour of our beautiful campus and see firsthand why EK Royals 
                  is the perfect place for your child's educational journey.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Schedule Tour 🏫
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