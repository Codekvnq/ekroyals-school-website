import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMusic, FiUsers, FiTrendingUp, FiAward, FiStar, FiTarget } from 'react-icons/fi';
import { FaTheaterMasks, FaFootballBall, FaChess, FaGavel, FaCalculator, FaTrophy } from 'react-icons/fa';

const CoCurriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activities = [
    {
      icon: FaTheaterMasks,
      title: 'Cultural Dance and Drama Club',
      description: 'Express creativity through traditional and modern dance, drama performances, and cultural celebrations.',
      benefits: ['Creative expression', 'Cultural awareness', 'Confidence building', 'Performance skills'],
      color: 'from-pink-400 to-pink-300',
      bgColor: 'bg-gradient-to-br from-pink-100 to-pink-200',
      image: 'https://images.pexels.com/photos/8471929/pexels-photo-8471929.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FaCalculator,
      title: 'Abacus Club',
      description: 'Develop mental math skills and enhance cognitive abilities through traditional abacus techniques.',
      benefits: ['Mental calculation', 'Concentration', 'Memory enhancement', 'Problem-solving'],
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FaFootballBall,
      title: 'Sports Activities',
      description: 'Football, Basketball, Athletics, and Long Tennis for physical fitness and team building.',
      benefits: ['Physical fitness', 'Teamwork', 'Discipline', 'Leadership skills'],
      color: 'from-green-400 to-green-300',
      bgColor: 'bg-gradient-to-br from-green-100 to-green-200',
      image: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FiUsers,
      title: 'Debators Club',
      description: 'Develop public speaking, critical thinking, and argumentation skills through structured debates.',
      benefits: ['Public speaking', 'Critical thinking', 'Research skills', 'Confidence'],
      color: 'from-purple-400 to-purple-300',
      bgColor: 'bg-gradient-to-br from-purple-100 to-purple-200',
      image: 'https://images.pexels.com/photos/8471998/pexels-photo-8471998.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FaGavel,
      title: 'Constitutional Club',
      description: 'Learn about governance, law, and civic responsibilities through interactive sessions and mock trials.',
      benefits: ['Civic awareness', 'Leadership', 'Legal knowledge', 'Social responsibility'],
      color: 'from-orange-400 to-orange-300',
      bgColor: 'bg-gradient-to-br from-orange-100 to-orange-200',
      image: 'https://images.pexels.com/photos/8500456/pexels-photo-8500456.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: FaChess,
      title: 'Chess Club',
      description: 'Strategic thinking and problem-solving through the ancient game of chess.',
      benefits: ['Strategic thinking', 'Patience', 'Planning skills', 'Concentration'],
      color: 'from-indigo-400 to-indigo-300',
      bgColor: 'bg-gradient-to-br from-indigo-100 to-indigo-200',
      image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const benefits = [
    {
      icon: FiTarget,
      title: 'Skill Development',
      description: 'Build essential life skills beyond academics'
    },
    {
      icon: FiUsers,
      title: 'Social Interaction',
      description: 'Form lasting friendships and learn teamwork'
    },
    {
      icon: FiTrendingUp,
      title: 'Personal Growth',
      description: 'Discover talents and build confidence'
    },
    {
      icon: FiAward,
      title: 'Achievement',
      description: 'Compete and excel in various competitions'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <FaTrophy className="text-yellow-400 text-4xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <FaTheaterMasks className="text-pink-400 text-5xl animate-bounce" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-purple-600 mb-8 font-playful">
                Co-Curriculum Activities
                <FaTrophy className="inline-block ml-3 text-yellow-500 animate-bounce" />
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                At EK Royals, we believe education goes beyond the classroom. Our extracurricular activities 
                help students discover their passions, develop leadership skills, and build lifelong friendships.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/8471875/pexels-photo-8471875.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Co-Curriculum Activities"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
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
              Our Exciting Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover your passion and develop new skills through our diverse range of co-curricular activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${activity.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white relative overflow-hidden`}
              >
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                
                <div className="flex items-start space-x-6 mb-6">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                  />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activity.color} flex items-center justify-center shadow-lg`}>
                    <activity.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-purple-600 mb-4 font-playful">
                  {activity.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {activity.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-600 mb-2">Benefits:</h4>
                  {activity.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Co-Curriculum Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our co-curricular activities provide essential benefits that complement academic learning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-4 font-playful">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-100 via-white to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <FiStar className="absolute top-4 right-4 text-yellow-300 text-2xl animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playful">
              Join Our Activities Today!
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Discover your talents, make new friends, and develop skills that will last a lifetime. 
              Our co-curricular activities are waiting for you!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Admissions ✨
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CoCurriculum;