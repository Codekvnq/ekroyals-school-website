import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiUsers, FiBookOpen, FiHeart, FiStar, FiCheckCircle, FiClock } from 'react-icons/fi';
import { FaGraduationCap, FaHeart, FaRocket, FaBaby, FaChild, FaUserGraduate } from 'react-icons/fa';

const Admissions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const entryLevels = [
     {
    icon: FaBaby,
    title: 'Montessori / Creche',
    ageRange: '1 year 6 months – 2 years',
    description: 'Early childhood program focusing on sensory development, motor skills, and a safe, nurturing environment for our youngest learners.',
    features: [
      'Sensory play activities',
      'Motor skills development',
      'Early social interaction',
      'Introduction to language and music'
    ],
    color: 'from-teal-400 to-teal-300',
    bgColor: 'bg-gradient-to-br from-teal-100 to-teal-200',
    image: '/images/hero/ss55.jpg'
  },
    {
      icon: FiHeart,
      title: 'Kindergarten',
      ageRange: 'Ages 3-5 years',
      description: 'Early childhood development with play-based learning in a nurturing environment.',
      features: ['Play-based learning', 'Social skills development', 'Basic literacy', 'Creative activities'],
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      image: '/images/hero/stud9.JPG'
    },
    {
      icon: FaChild,
      title: 'Primary',
      ageRange: 'Ages 6-11 years',
      description: 'Strong foundation in core subjects with interactive and engaging teaching methods.',
      features: ['Core subjects mastery', 'Interactive learning', 'Character building', 'Skill development'],
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
    image: '/images/hero/ss14.JPG'
    },
    {
      icon: FaUserGraduate,
      title: 'Junior High',
      ageRange: 'Ages 12-14+ years',
      description: 'Comprehensive secondary education preparing students for senior high school.',
      features: ['Advanced curriculum', 'Leadership training', 'Career guidance', 'Exam preparation'],
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-100 to-blue-200',
      image: '/images/hero/ss1.JPG'
    }
  ];

  const admissionSteps = [
    {
      step: 1,
      title: 'Initial Inquiry',
      description: 'Contact us to learn more about our programs and schedule a school tour.'
    },
    {
      step: 2,
      title: 'Application Form',
      description: 'Complete and submit the admission application form with required documents.'
    },
    {
      step: 3,
      title: 'Assessment',
      description: 'Student assessment to determine readiness and appropriate placement level.'
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Meet with our admissions team and academic staff for a friendly interview.'
    },
    {
      step: 5,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment information within one week.'
    },
    {
      step: 6,
      title: 'Enrollment',
      description: 'Complete enrollment process and prepare for the exciting journey ahead!'
    }
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#ffff]">
      {/* Hero Section */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <FaGraduationCap className="text-school-blue-90 text-4xl animate-pulse" />
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
                Join Our School Community
                <FaHeart className="inline-block ml-3 text-grey-500 animate-pulse" />
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We welcome students at multiple entry levels who are ready to learn, grow and excel. 
                  At E.K Royals School Complex, we work tirelessly to create a vibrant, nurturing, and 
                  inspiring environment where every learner can thrive.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our goal is to help each pupil reach their full potential—academically, socially, 
                  and personally—while encouraging them to actively contribute to the life of the school.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our admissions process is designed to assess not only a child's current and potential 
                  academic ability but also their readiness to flourish within our caring and supportive 
                  school community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src='/images/hero/stud10.JPG'
                alt="Join Our School Community"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Entry Levels */}
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
              Entry Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              E.K Royals School Complex offers entry at various levels to meet the needs of learners 
              at every stage of their educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {entryLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${level.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white relative overflow-hidden`}
              >
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                
              <div className="mb-6 flex flex-col items-center">
  {/* Image comes first */}
  <img
    src={level.image}
    alt={level.title}
    className="w-full h-40 object-cover rounded-2xl shadow-lg"
  />

  {/* Then the Icon below the image */}
  <div className={`mt-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center shadow-lg`}>
    <level.icon className="h-8 w-8 text-white" />
  </div>
</div>



                
                <h3 className="text-2xl font-bold text-school-blue-600 mb-2 font-playful">
                  {level.title}
                </h3>
                <p className="text-sm font-semibold text-school-blue-90 mb-4">
                  {level.ageRange}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {level.description}
                </p>
                
                <div className="space-y-2">
                  {level.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 text-sm">
                      <FiCheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Apply */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 font-playful">
                When To Apply
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <FiCalendar className="h-8 w-8 text-school-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-school-blue-600">Application Period</h3>
                    <p className="text-gray-600">Open throughout the year</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Admissions are open from January to December each year and Monday to Saturday of every week.
                </p>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-school-blue-600 mb-3">Office Hours:</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <FiClock className="h-4 w-4 mr-2 text-school-blue-90" />
                      <span>Monday - Friday: 7:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="h-4 w-4 mr-2 text-school-blue-90" />
                      <span>Saturday: 9:00 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/hero/ss15.JPG"
                alt="When to Apply"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our simple and transparent admission process ensures a smooth journey for you and your child.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl relative border-4 border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-accent-blueblack to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-school-blue-600 mb-4 mt-2 font-playful">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
<section className="py-20 bg-gradient-to-r from-school-blue-600 to-school-blue-90">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-white relative"
    >
      <FiStar className="absolute top-0 right-0 text-yellow-300 text-3xl animate-pulse" />
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playful">
        Ready to Begin Your Journey?
      </h2>
      <p className="text-xl mb-8 leading-relaxed">
        Join the E.K Royals family today and give your child the best foundation for a bright future!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-school-blue-600 font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScD8EOl9EeJwms_rmHqDBOSH8zJrpJToDg4KDOHdYHyDhG5tA/viewform?usp=preview", "_blank")}
        >
          Start Application 
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-white hover:text-school-blue-600 transition-all duration-300"
          onClick={() => {
            const whatsappNumber = "233531679337"; // Without the + sign
            const whatsappMessage = "Hello, I would like to make an enquiry about E.K Royals School Complex admissions";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, "_blank");
          }}
        >
          Make enquiries 
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default Admissions;