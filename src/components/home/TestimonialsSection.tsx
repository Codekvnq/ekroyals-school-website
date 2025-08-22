import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiUser } from 'react-icons/fi';
import { FaHeart, FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Mensah',
      role: 'Parent of Primary 5 Student',
      rating: 5,
      text: 'EK Royals has transformed my daughter\'s learning experience! The teachers are so caring and dedicated, and the colorful facilities make learning so much fun. My child looks forward to school every single day! 🌟'
    },
    {
      name: 'Michael Asante',
      role: 'Parent of JHS 2 Student',
      rating: 5,
      text: 'The holistic approach to education at EK Royals is absolutely remarkable! Not only has my son excelled academically, but he\'s also developed amazing leadership skills through their fun co-curricular programs. 🚀'
    },
    {
      name: 'Grace Osei',
      role: 'Former Student, Now at University',
      rating: 5,
      text: 'EK Royals prepared me wonderfully for university life! The foundation I received here, especially in critical thinking and problem-solving, has been absolutely invaluable in my higher education journey. Thank you! 💖'
    },
    {
      name: 'Emmanuel Boateng',
      role: 'Parent of Pre-school Student',
      rating: 5,
      text: 'The nurturing environment at EK Royals is absolutely perfect for young children! My son has grown tremendously in confidence and social skills since joining the magical pre-school program. Amazing! ✨'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-white via-pastel-pink/30 to-pastel-purple/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <FaHeart className="text-accent-pink text-5xl animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-16 h-16 border-4 border-accent-purple rounded-full border-dashed animate-spin" style={{ animationDuration: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent-purple mb-4 font-playful">
            What Our Amazing Community Says
            <FaHeart className="inline-block ml-3 text-accent-pink animate-pulse" />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our wonderful parents, students, and alumni about their magical experiences at EK Royals! ✨
          </p>
        </motion.div>

        <div className="relative">
          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-accent-purple/20 relative overflow-hidden">
                  {/* Decorative quote icon */}
                  <FaQuoteLeft className="absolute top-6 left-6 text-accent-purple/20 text-4xl" />
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pastel-pink rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-pastel-blue rounded-full"></div>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <FiStar
                          className="h-6 w-6 text-accent-yellow fill-current mx-1"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 flex items-center justify-center ring-4 ring-accent-purple/30 shadow-lg">
                        <FiUser className="h-10 w-10 text-accent-purple" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full flex items-center justify-center">
                        <FaHeart className="text-white text-sm" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-accent-purple font-playful">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-6">
              <button
                onClick={prevTestimonial}
                className="p-4 bg-white hover:bg-pastel-purple rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 border-2 border-accent-purple/20"
              >
                <FiChevronLeft className="h-6 w-6 text-accent-purple" />
              </button>

              {/* Indicators */}
              <div className="flex space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-200 ${
                      index === currentTestimonial
                        ? 'bg-accent-purple scale-125 shadow-lg'
                        : 'bg-accent-purple/30 hover:bg-accent-purple/60'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-4 bg-white hover:bg-pastel-purple rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 border-2 border-accent-purple/20"
              >
                <FiChevronRight className="h-6 w-6 text-accent-purple" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;