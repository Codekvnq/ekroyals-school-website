import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiUsers, FiAward, FiHeart, FiStar, FiTarget, FiCheckCircle } from 'react-icons/fi';
import { FaGraduationCap, FaRocket, FaPalette, FaGamepad } from 'react-icons/fa';

const Curriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const programs = [
    {
      icon: FiHeart,
      title: 'Pre-school (Ages 3-5)',
      description: 'Nurturing young minds with play-based learning and early childhood development in a colorful, safe environment.',
      features: ['Play-based learning', 'Social skills development', 'Basic literacy and numeracy', 'Creative arts and crafts'],
      color: 'from-pink-400 to-pink-300',
      bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
      image: '/images/hero/stud9.JPG'
    },
    {
      icon: FiBook,
      title: 'Primary (Ages 6-11)',
      description: 'Building strong foundations in literacy, numeracy, and critical thinking skills through interactive learning.',
      features: ['Core subjects mastery', 'Interactive learning', 'Critical thinking development', 'Character building'],
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      image: '/images/hero/stud5.JPG'
    },
    {
      icon: FiUsers,
      title: 'Junior High School (Ages 12-14)',
      description: 'Preparing students for senior secondary education with comprehensive academic programs and character development.',
      features: ['Advanced curriculum', 'Leadership training', 'Career guidance', 'Extracurricular activities'],
      color: 'from-purple-400 to-purple-300',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      image: '/images/hero/ss1.JPG'
    }
  ];

  const subjects = [
    { name: 'Mathematics', icon: FiTarget, color: 'text-blue-600' },
    { name: 'English Language', icon: FiBook, color: 'text-green-600' },
    { name: 'Science', icon: FaRocket, color: 'text-purple-600' },
    { name: 'Social Studies', icon: FiUsers, color: 'text-orange-600' },
    { name: 'Creative Arts', icon: FaPalette, color: 'text-pink-600' },
    { name: 'Physical Education', icon: FaGamepad, color: 'text-red-600' },
    { name: 'ICT', icon: FiStar, color: 'text-indigo-600' },
    { name: 'Religious & Moral Education', icon: FiHeart, color: 'text-teal-600' }
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 font-playful">
                Academic Curriculum
                <FaRocket className="inline-block ml-3 text-orange-500 animate-bounce" />
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                Our comprehensive curriculum is designed to nurture young minds through engaging, 
                interactive learning experiences that prepare students for success in the 21st century.
                 We cultivate not just academic excellence but also creativity, 
  leadership skills, and digital literacy to equip students for future challenges. Our innovative 
  approach integrates technology with traditional values, ensuring each child develops strong 
  character alongside intellectual capabilities in a nurturing, inclusive environment that 
  celebrates individual strengths and learning styles.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src='/images/hero/ss11.JPG'
                  alt="Academic Curriculum"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
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
              Our Academic Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture growth at every stage of learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${program.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white relative overflow-hidden h-full`}
              >
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                
                {/* Program Image - Fixed sizing */}
                <div className="mb-6">
                  <div className="aspect-w-16 aspect-h-9 rounded-2xl shadow-lg overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${program.color} flex items-center justify-center shadow-lg mb-4 mx-auto`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-purple-600 mb-4 font-playful text-center">
                  {program.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {program.description}
                </p>
                
                <div className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <FiCheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gradient-to-l from-blue-100 via-white to-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4 font-playful">
              Core Subjects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A well-rounded curriculum covering all essential subjects for comprehensive education.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <subject.icon className={`h-8 w-8 ${subject.color}`} />
                </div>
                <h3 className="font-bold text-purple-600 text-sm">
                  {subject.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-white to-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-16 aspect-h-9 rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src='/images/hero/ss10.JPG'
                  alt="Teaching Approach"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 font-playful">
                Our Teaching Approach
              </h2>
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">Interactive Learning</h3>
                  <p className="text-gray-700">
                    We use hands-on activities, group discussions, and multimedia resources to make learning engaging and memorable.
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">Personalized Education</h3>
                  <p className="text-gray-700">
                    Our teachers adapt their methods to meet each student's unique learning style and pace.
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">Character Development</h3>
                  <p className="text-gray-700">
                    We integrate values education throughout our curriculum to build strong moral foundations.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Curriculum;