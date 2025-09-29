import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
    FiCheck
} from "react-icons/fi";
import { FaGraduationCap, FaStar, FaHeart, FaRocket } from "react-icons/fa";
// import logoImage from "../public/images/hero/ROYALS SCHOOL COMPLEX.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const quickLinks = [
    { name: "Our Story", path: "/about/story" },
    { name: "Careers", path: "/about/careers" },
    { name: "Academic Curriculum", path: "/academics/curriculum" },
    { name: "Facilities", path: "/academics/facilities" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
  ];

  const programs = [
    { name: "Pre-school", path: "/academics/curriculum#preschool" },
    { name: "Primary School", path: "/academics/curriculum#primary" },
    { name: "Junior High School", path: "/academics/curriculum#jhs" },
    // { name: 'Senior High School', path: '/academics/curriculum#shs' }
  ];

 const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call with a delay
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      
      // Auto-reset after 5 seconds (optional)
      // setTimeout(() => {
      //   setIsSubscribed(false);
      //   setEmail("");
      // }, 5000);
    }, 1500);
  };

  const handleResetSubscription = () => {
    setIsSubscribed(false);
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Decorative cloud shape at top */}
      <div
        className="absolute top-0 left-0 w-full h-20 bg-[#ffff]"
        style={{
          clipPath: "ellipse(100% 100% at 50% 0%)",
        }}
      ></div>

      {/* Newsletter Section */}
      <div className="relative pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <FaStar className="absolute top-4 right-4 text-accent-yellow text-2xl animate-pulse" />
            <FaHeart className="absolute bottom-4 left-4 text-accent-green text-xl animate-bounce" />

            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playful">
                {isSubscribed 
                  ? "You're Subscribed! 🎉" 
                  : "Subscribe Today to Receive Important School Announcements & Insights!"
                }
              </h3>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <FiCheck className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-200">
                    Thank you for subscribing to our newsletter!
                  </p>
                  <motion.button
                    onClick={handleResetSubscription}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 text-sm"
                  >
                    Change Email
                  </motion.button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-lg focus:outline-none focus:ring-4 focus:ring-accent-purple/50"
                    required
                    disabled={isLoading}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: isLoading ? 1 : 1.05 }}
                    whileTap={{ scale: isLoading ? 1 : 0.95 }}
                    disabled={isLoading}
                    className="px-8 py-3 bg-[#32CD32] hover:bg-[#2CBD2D] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[130px]"
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Subscribing
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>


      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="rounded-2xl shadow-lg">
                  <img
                    src='/images/hero/logo.png'
                    alt="EK Royals School Complex Logo"
                    className="h-12 w-auto" // Adjust height as needed
                  />
                </div>

                <FaStar className="absolute -top-1 -right-1 h-4 w-4 text-accent-yellow animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-playful">
                  E.K Royals
                </h3>
                <p className="text-sm text-gray-300">School Complex</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Knowledge, Integrity and Law Immutable - Nurturing young minds with excellence,
              integrity, and innovation in a magical learning environment where
              dreams come true! 
            </p>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-accent-purple to-accent-pink p-3 rounded-2xl hover:shadow-lg transition-all duration-200"
              >
                <FiFacebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-r from-accent-blue to-accent-purple p-3 rounded-2xl hover:shadow-lg transition-all duration-200"
              >
                <FiTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-accent-pink to-accent-orange p-3 rounded-2xl hover:shadow-lg transition-all duration-200"
              >
                <FiInstagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="bg-gradient-to-r from-accent-purple to-primary-600 p-3 rounded-2xl hover:shadow-lg transition-all duration-200"
              >
                <FiLinkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xl font-playful flex items-center">
              Get in Touch
              <FaHeart className="ml-2 text-accent-green animate-pulse" />
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <FiMapPin className="h-5 w-5 text-accent-purple flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Lawyer Y.S kese, AE-0172-3256 – Ejisu Jamasi
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FiPhone className="h-5 w-5 text-accent-pink flex-shrink-0" />
                <span className="text-gray-300">+233 53 167 9337 / +233 25 692 8572 </span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <FiMail className="h-5 w-5 text-accent-yellow flex-shrink-0" />
                <span className="text-gray-300">
                  ekroyalsschoolcomplex@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xl font-playful flex items-center">
              Useful Links
              <FaRocket className="ml-2 text-accent-orange animate-bounce" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent-purple transition-colors duration-200 text-sm hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Services */}
          <div>
            <h4 className="text-white font-bold mb-6 text-xl font-playful flex items-center">
              Our Programs
              <FaStar className="ml-2 text-accent-yellow animate-pulse" />
            </h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    to={program.path}
                    className="text-gray-300 hover:text-accent-pink transition-colors duration-200 text-sm hover:underline"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} E.K Royals School Complex. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-accent-purple text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-accent-purple text-sm transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative flower characters */}
      <div className="absolute bottom-4 right-4 opacity-20">
        <FaStar className="text-accent-yellow text-3xl animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-8 opacity-20">
        <FaHeart className="text-accent-pink text-2xl animate-bounce" />
      </div>
    </footer>
  );
};

export default Footer;
