import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiUsers, FiCheckCircle, FiPhone, FiMail, FiStar, FiAward } from 'react-icons/fi';
import { FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    {
      step: 1,
      title: 'Application Submission',
      description: 'Submit your complete application with all required documents including CV, cover letter, and certificates.'
    },
    {
      step: 2,
      title: 'Initial Review',
      description: 'Our HR team conducts an initial review of applications to ensure all requirements are met.'
    },
    {
      step: 3,
      title: 'Written Assessment',
      description: 'Qualified candidates may be required to complete a written assessment relevant to the position.'
    },
    {
      step: 4,
      title: 'Interview Process',
      description: 'Selected candidates will be invited for a comprehensive interview with our academic leadership team.'
    },
    {
      step: 5,
      title: 'Reference Check',
      description: 'We conduct thorough reference checks with previous employers and professional contacts.'
    },
    {
      step: 6,
      title: 'Final Decision',
      description: 'Successful candidates will receive an offer letter with terms and conditions of employment.'
    }
  ];

  const benefits = [
    'Competitive salary and benefits package',
    'Professional development opportunities',
    'Supportive work environment',
    'Modern teaching facilities',
    'Career advancement opportunities',
    'Work-life balance',
    'Medical insurance coverage',
    'Annual leave and sick leave benefits'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        {/* Decorative Elements */}
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
              <h1 className="text-4xl md:text-5xl font-bold text-school-blue-600 mb-8 font-playful">
                Careers at EK Royals
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                Join our dedicated team of educators and make a lasting impact on the lives of young 
                learners. We're always looking for passionate professionals who share our commitment 
                to educational excellence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/hero/ss23.JPG"
                alt="Careers at EK Royals"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EK Royals School Complex offers a rewarding career environment where educators can 
              grow professionally while making a meaningful difference in students' lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl border-4 border-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <FiStar className="text-yellow-400 text-2xl animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/50 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold text-school-blue-600 mb-6 font-playful">
                What We Offer
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FiCheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=" bg-[#1a293f] hover:bg-[#111c35] rounded-3xl p-8 text-white shadow-xl border-4 border-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <FaHeart className="text-accent-green text-2xl animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/20 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold mb-6">What We Look For</h3>
              <div className="space-y-4">
                <p className="leading-relaxed">
                  We seek passionate educators who are committed to student success and share our 
                  values of excellence, integrity, community, and innovation.
                </p>
                <ul className="space-y-2">
                  <li>• Relevant educational qualifications</li>
                  <li>• Teaching experience preferred</li>
                  <li>• Strong communication skills</li>
                  <li>• Commitment to professional growth</li>
                  <li>• Collaborative mindset</li>
                  <li>• Student-centered approach</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
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
              Our Recruitment Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a comprehensive recruitment process to ensure we select the best candidates 
              who align with our educational philosophy and values.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl relative border-4 border-purple-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative corner star */}
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-100 rounded-full"></div>
                
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

      {/* Application Guide */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 font-playful">
                How to Apply
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-school-blue-600 mb-3 font-playful">
                    Required Documents
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Updated CV/Resume
                    </li>
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Cover Letter
                    </li>
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Educational Certificates
                    </li>
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Teaching License (if applicable)
                    </li>
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Reference Letters (2-3)
                    </li>
                    <li className="flex items-center">
                      <FiFileText className="h-4 w-4 mr-2 text-accent-grey" />
                      Portfolio (for relevant positions)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-school-blue-600 mb-3 font-playful">
                    Application Tips
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Tailor your application to the specific position</li>
                    <li>• Highlight your teaching philosophy and approach</li>
                    <li>• Include specific examples of student impact</li>
                    <li>• Demonstrate knowledge of our school values</li>
                    <li>• Ensure all documents are properly formatted</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl border-4 border-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <FaHeart className="text-accent-grey text-2xl animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/50 rounded-full"></div>
              
              <h3 className="text-2xl font-semibold text-school-blue-600 mb-6 font-playful">
                Contact HR Department
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-200 p-3 rounded-xl">
                    <FiMail className="h-6 w-6 text-school-blue-90" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-blue-90 mb-1">Email</h4>
                    <p className="text-gray-700">ekroyalsschoolcomplex@gmail.com</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Send your application with subject: "Application for [Position Title]"
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-200 p-3 rounded-xl">
                    <FiPhone className="h-6 w-6 text-school-blue-90" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-blue-90 mb-1">Phone</h4>
                    <p className="text-gray-700"> +233 53 167 9337 / +233 25 692 8572</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Call for inquiries about current openings
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-200 p-3 rounded-xl">
                    <FiUsers className="h-6 w-6 text-school-blue-90" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-school-blue-90 mb-1">Office Hours</h4>
                    <p className="text-gray-700">Monday - Friday</p>
                    <p className="text-gray-700">8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h4 className="font-semibold text-school-blue-90 mb-3">Quick Note</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  We review applications on a rolling basis. While we acknowledge all applications, 
                  only shortlisted candidates will be contacted for the next stage of the process. 
                  Thank you for your interest in joining our team!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;