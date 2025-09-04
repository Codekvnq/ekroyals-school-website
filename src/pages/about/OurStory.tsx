import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiHeart, FiUsers, FiZap, FiAward, FiBookOpen } from 'react-icons/fi';
import { FaGraduationCap, FaHandsHelping, FaLightbulb, FaUsers } from 'react-icons/fa';

const OurStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: FaLightbulb,
      title: 'Excellence',
      description: 'We strive for the highest standards in education, continuously improving our methods and outcomes.',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'bg-gradient-to-br from-yellow-100 to-orange-100'
    },
    {
      icon: FaHandsHelping,
      title: 'Integrity',
      description: 'We uphold honesty, transparency, and ethical behavior in all our interactions and decisions.',
      color: 'from-green-400 to-emerald-400',
      bgColor: 'bg-gradient-to-br from-green-100 to-emerald-100'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'We foster a sense of belonging, collaboration, and mutual support among students, staff, and families.',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-100'
    },
    {
      icon: FaGraduationCap,
      title: 'Innovation',
      description: 'We embrace new ideas, technologies, and approaches to enhance the learning experience.',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-gradient-to-br from-purple-100 to-pink-100'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-30">
          <FiStar className="text-yellow-400 text-4xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <FaGraduationCap className="text-purple-400 text-5xl animate-bounce" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-school-blue-600  mb-8 font-playful">
                Our Story
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                Founded with a vision to provide quality education that nurtures both academic excellence 
                and character development, E.K Royals School Complex has been transforming lives since 2022.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/images/hero/stud50.JPG"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* School Story */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-8 text-center font-playful">
              The Beginning of Excellence
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                E.K Royals School Complex was established in January 2022 with a clear mission: to provide 
                exceptional education that prepares students for the challenges and opportunities of the 
                21st century. Our founders recognized the need for a school that would combine academic 
                rigor with character development, creating an environment where every child could thrive.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                From our humble beginnings with a small group of dedicated educators and visionary 
                leaders, we have grown into a comprehensive educational institution serving students 
                from pre-school through senior high school. Our journey has been marked by continuous 
                innovation, unwavering commitment to quality, and an ever-expanding community of 
                learners, educators, and families.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What sets E.K Royals apart is our holistic approach to education. We believe that true 
                learning extends beyond textbooks and examinations. Our curriculum integrates academic 
                subjects with co-curricular activities, character education, and life skills development. 
                We prepare our students not just to excel in their studies, but to become responsible 
                citizens, critical thinkers, and compassionate leaders.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, E.K Royals School Complex stands as a testament to the power of vision, dedication, 
                and community support. We continue to evolve and adapt, always keeping our students' 
                best interests at heart while maintaining the values and principles that have guided us 
                from the very beginning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-xl border-4 border-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <FiBookOpen className="text-purple-400 text-2xl animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/50 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-school-blue-600 mb-6 font-playful">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education that nurtures intellectual growth, character development, 
                and social responsibility. We are committed to creating a supportive learning environment 
                where every student can achieve their full potential and become confident, capable, 
                and caring individuals ready to contribute positively to their communities and the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 shadow-xl border-4 border-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <FiAward className="text-blue-400 text-2xl animate-bounce" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/50 rounded-full"></div>
              
              <h3 className="text-2xl font-bold text-school-blue-600 mb-6 font-playful">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading educational institution recognized for excellence in teaching, learning, 
                and character development. We envision a school community where innovation thrives, 
                diversity is celebrated, and every member is empowered to make a meaningful difference 
                in the world through knowledge, skills, and values acquired during their time with us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-[#ffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="text-center">
                <img
                  src="/images/hero/stud70.JPG"
                  alt="Principal"
                  className="w-48 h-48 mx-auto rounded-full object-cover mb-6 ring-4 ring-purple-300 shadow-2xl"
                />
                <h3 className="text-xl font-semibold text-school-blue-600 font-playful">
                  Mrs. Elizabeth Kesewaah
                </h3>
                <p className="text-gray-600">Principal</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h3 className="text-3xl font-bold text-school-blue-600 mb-8 font-playful">
                Message from the Principal
              </h3>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Welcome to E.K Royals School Complex, where every day brings new opportunities for 
                  learning, growth, and discovery. As the Principal, I am honored to lead this 
                  remarkable institution and work alongside our dedicated faculty, staff, students, 
                  and families.
                </p>
                <p>
                  At E.K Royals, we believe that education is a partnership between school and home. 
                  We are committed to providing not just academic excellence, but also nurturing 
                  the social, emotional, and moral development of our students. Our goal is to 
                  prepare young minds to become lifelong learners, critical thinkers, and responsible 
                  global citizens.
                </p>
                <p>
                  We celebrate the uniqueness of every child and provide multiple pathways for 
                  success. Through our comprehensive programs, modern facilities, and caring 
                  community, we ensure that each student has the support they need to thrive.
                </p>
                <p>
                  I invite you to join our school family and experience the E.K Royals difference. 
                  Together, we will help your child reach for the stars and achieve their dreams.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#e6eafa] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-school-blue-600 mb-4 font-playful">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the character of our school community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${value.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-3 border-4 border-white relative overflow-hidden`}
              >
                {/* Decorative corner star */}
                <FiStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/50 rounded-full"></div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-school-blue-90  mb-4 font-playful">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;