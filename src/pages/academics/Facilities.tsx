import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiMonitor,
  FiShield,
  FiBook,
  FiActivity,
  FiEye,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaGraduationCap,
  FaRocket,
  FaFlask,
  FaDesktop,
  FaFootballBall,
  FaLeaf,
} from "react-icons/fa";

const Facilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      icon: FaGraduationCap,
      title: "Modern Classrooms",
      description:
        "Bright, spacious, and well-ventilated classrooms equipped with modern furniture and interactive learning tools.",
      features: [
        "Interactive whiteboards",
        "Comfortable seating",
        "Natural lighting",
        "Air conditioning",
      ],
      color: "from-blue-400 to-blue-300",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      // image: '/images/hero/ss7.JPG'
    },
    {
      icon: FaDesktop,
      title: "ICT Labs",
      description:
        "State-of-the-art computer laboratories with high-speed internet and modern software for digital literacy.",
      features: [
        "Latest computers",
        "High-speed internet",
        "Educational software",
        "Digital projectors",
      ],
      color: "from-purple-400 to-purple-300",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-200",
      // image: '/images/hero/ss11.JPG'
    },
    {
      icon: FaFlask,
      title: "Science Laboratory",
      description:
        "Fully equipped science lab with modern equipment for hands-on experiments and scientific discovery.",
      features: [
        "Modern equipment",
        "Safety protocols",
        "Experiment materials",
        "Microscopes & tools",
      ],
      color: "from-green-400 to-green-300",
      bgColor: "bg-gradient-to-br from-green-100 to-green-200",
      // image: '/images/hero/ss14.JPG'
    },
    {
      icon: FiShield,
      title: "24/7 CCTV Supervision",
      description:
        "Comprehensive security system with round-the-clock monitoring to ensure student safety and peace of mind.",
      features: [
        "24/7 monitoring",
        "Strategic placement",
        "Professional security",
        "Emergency response",
      ],
      color: "from-red-400 to-red-300",
      bgColor: "bg-gradient-to-br from-red-100 to-red-200",
      // image: '/images/hero/ss13.JPG'
    },
    {
      icon: FaFootballBall,
      title: "Sports Field",
      description:
        "Spacious outdoor sports facilities for football, athletics, and various physical education activities.",
      features: [
        "Football field",
        "Athletics track",
        "Basketball court",
        "Sports equipment",
      ],
      color: "from-orange-400 to-orange-300",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      // image: '/images/hero/ss12.JPG'
    },
    {
      icon: FaLeaf,
      title: "Serene Environment",
      description:
        "Beautiful, green campus with landscaped gardens providing a peaceful atmosphere for learning.",
      features: [
        "Landscaped gardens",
        "Quiet study areas",
        "Fresh air",
        "Natural beauty",
      ],
      color: "from-teal-400 to-teal-300",
      bgColor: "bg-gradient-to-br from-teal-100 to-teal-200",
      // image: '/images/hero/ss11.JPG'
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-[#ffff]">
      {/* Hero Section */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-30">
          <FaRocket className="text-orange-400 text-4xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <FaGraduationCap className="text-school-blue-90 text-5xl animate-bounce" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-school-blue-600 mb-8 font-playful">
                Academic Facilities
                <FaRocket className="inline-block ml-3 text-orange-500 animate-bounce" />
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                Our state-of-the-art facilities provide the perfect environment
                for 21st-century learning, growth, and discovery. From modern
                science laboratories equipped with the latest technology to
                spacious digital classrooms with interactive smart boards, every
                space is intentionally designed with our students' success in
                mind. We offer secure playgrounds, a well-stocked library,
                dedicated art studios, and sports facilities that encourage
                physical development and teamwork—all maintained to the highest
                standards of safety and cleanliness to ensure an optimal
                learning experience for every child.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/hero/stud7.JPG"
                alt="Academic Facilities"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
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
              Our Amazing Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, safe, and inspiring spaces designed to enhance every
              aspect of your child's educational journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${facility.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-4 border-white relative overflow-hidden`}
              >
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />

                <div className="flex justify-center mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${facility.color} flex items-center justify-center shadow-lg mx-auto`}
                  >
                    <facility.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-school-blue-90 mb-4 font-playful text-center">
                  {facility.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {facility.description}
                </p>

                <div className="space-y-2">
                  {facility.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
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

      {/* Additional Info Section */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/hero/stud11.JPG"
                alt="Students in modern classroom"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 font-playful">
                Why Our Facilities Matter
              </h2>
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-school-blue-600 mb-3">
                    Safe Learning Environment
                  </h3>
                  <p className="text-gray-700">
                    Our 24/7 CCTV supervision and secure campus ensure that
                    every child learns in a safe, protected environment.
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-school-blue-600 mb-3">
                    Modern Technology
                  </h3>
                  <p className="text-gray-700">
                    State-of-the-art ICT labs and interactive classrooms prepare
                    students for the digital future.
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-school-blue-600 mb-3">
                    Holistic Development
                  </h3>
                  <p className="text-gray-700">
                    Our sports facilities and serene environment support both
                    physical and mental well-being.
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

export default Facilities;
