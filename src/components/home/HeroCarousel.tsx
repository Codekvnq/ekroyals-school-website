import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiMessageCircle, FiFileText } from 'react-icons/fi';
import { FaStar, FaHeart, FaRocket, FaGraduationCap } from 'react-icons/fa';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Google Form URL for admissions (replace with your actual form URL)
  const applyFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScD8EOl9EeJwms_rmHqDBOSH8zJrpJToDg4KDOHdYHyDhG5tA/viewform?usp=preview";
  
  // WhatsApp number for enquiries
  const whatsappNumber = "233531679337"; // Without the + sign
  const whatsappMessage = "Hello, I would like to make an enquiry about E.K Royals School Complex";

  const slides = [
    {
      image: '/images/hero/stud2.JPG',
      title: 'Welcome to E.K Royals',
      subtitle: 'Creating a Caring & Exciting School Environment',
      description: 'Where every child discovers their potential through joyful learning, creative exploration, and endless possibilities in our magical world of education!',
      bgGradient: 'from-[#B6BBC4] via-[#31304D] to-[#161A30]'
    },
    {
      image: '/images/hero/ss43.JPG',
      title: 'Academic Excellence',
      subtitle: 'Preparing Young Minds for Tomorrow',
      description: 'Our innovative curriculum combines fun learning with academic rigor to ensure every child thrives, grows, and reaches for the stars!',
      bgGradient: 'from-[#B6BBC4] via-[#31304D] to-[#161A30]'
    },
    {
      image: '/images/hero/stud10.JPG',
      title: 'Modern Facilities',
      subtitle: 'State-of-the-Art Learning Spaces',
      description: 'Colorful classrooms, interactive labs, and safe play areas designed to inspire creativity, wonder, and lifelong learning adventures!',
      bgGradient:'from-[#B6BBC4] via-[#31304D] to-[#161A30]'
    },
    {
      image:'/images/hero/stud4.JPG',
      title: 'Happy Community',
      subtitle: 'Every Child Matters Here',
      description: 'Join our vibrant school family where friendships bloom, dreams take flight, and every child feels valued, loved, and celebrated!',
      bgGradient: 'from-[#B6BBC4] via-[#31304D] to-[#161A30]'
    },
    {
      image: '/images/hero/stud5.JPG',
      title: 'Join Our Family',
      subtitle: 'Start Your Amazing Journey Today',
      description: 'Become part of our magical learning community where dreams come true, futures are bright, and every day is an adventure!',
      bgGradient: 'from-[#B6BBC4] via-[#31304D] to-[#161A30]'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Function to handle Apply Now button click
  const handleApplyNow = () => {
    window.open(applyFormUrl, '_blank');
  };

  // Function to handle Make Enquiries button click
  const handleMakeEnquiries = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images - Layered for smooth transitions */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.1
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut"
            }}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgGradient} opacity-80`} />
          </motion.div>
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10"
        >
          <FaStar className="text-orange-300 text-4xl drop-shadow-lg" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-32 right-20"
        >
          {/* <FaHeart className="text-pink-300 text-3xl drop-shadow-lg" /> */}
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-16"
        >
          <FaRocket className="text-green-300 text-4xl drop-shadow-lg" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10"
        >
          {/* <FaGraduationCap className="text-blue-300 text-3xl drop-shadow-lg" /> */}
        </motion.div>
      </div>

      {/* Main Content - Adjusted for better mobile positioning */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-[-40px] md:mt-0">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-4 md:space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="space-y-4 md:space-y-6"
                >
                  <motion.h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playful leading-tight drop-shadow-2xl"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    {slides[currentSlide].title}
                  </motion.h1>
                  
                  <motion.h2 
                    className="text-xl md:text-2xl lg:text-3xl text-white/90 font-clean font-bold drop-shadow-lg"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {slides[currentSlide].subtitle}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-md"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Featured Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={`hero-image-${currentSlide}`}
                      src={slides[currentSlide].image}
                      alt="Happy children learning"
                      className="w-full h-96 object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
                
                {/* Decorative elements around image */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-6 -left-6"
                >
                  <FaStar className="text-yellow-400 text-4xl drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-4 -right-8"
                >
                  <FaHeart className="text-green-400 text-3xl drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-6 -left-8"
                >
                  <FaRocket className="text-orange-400 text-3xl drop-shadow-lg" />
                </motion.div>
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-4 -right-6"
                >
                  <FaGraduationCap className="text-orange-400 text-4xl drop-shadow-lg" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTAs - Adjusted positioning for mobile */}
     <div className="absolute bottom-20 sm:bottom-8 left-4 sm:left-8 lg:left-16 flex flex-col sm:flex-row font-poppins gap-3 z-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={handleApplyNow}
            className="group inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-[#1b263b] hover:bg-[#0d1b2a] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-lg text-sm sm:text-base"
          >
            <FiFileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform" />
            Apply Now
          </button>
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <button
            onClick={handleMakeEnquiries}
            className="group inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white/90 hover:bg-white text-[#172f49] font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl backdrop-blur-sm border-2 border-white/50 text-sm sm:text-base"
          >
            <FiMessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
            Make Enquiries
          </button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
     <button
  onClick={prevSlide}
  className="absolute left-2 sm:left-4 top-[30%] transform -translate-y-1/2
             transition-all duration-200 z-20"
>
  <FiChevronLeft className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg hover:scale-110 transition-transform" />
</button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-[30%] transform -translate-y-1/2  
             transition-all duration-200 z-20"
      >
        <FiChevronRight className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg hover:scale-110 transition-transform" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;