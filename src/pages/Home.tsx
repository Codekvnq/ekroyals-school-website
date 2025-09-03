import React, { useEffect, useState, useRef   } from "react";
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiBook,
  FiUsers,
  FiAward,
  FiHeart,
  FiShield,
  FiTarget,
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";
import {
  FaStar,
  FaRocket,
  FaPalette,
  FaGamepad,
  FaHeart,
  FaGraduationCap,
  FaApple,
  FaLeaf,
} from "react-icons/fa";
import HeroCarousel from "../components/home/HeroCarousel";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

// import preschoolImg from '/public/images/hero/stud9.jpg';
// import primaryImg from '../public/images/hero/stud1.jpg';
// import jhsImg from '../public/images/hero/stud5.jpg';

// import feature1Img from '../public/images/hero/ss11.jpg';
// import feature2Img from '../public/images/hero/ss1.jpg';
// import feature3Img from '../public/images/hero/ss13.jpg';

// import schoolCommunityImg from '../public/images/hero/stud10.jpg';
// import happyChildrenImg from '../public/images/hero/stud7.jpg';

// import gallery1 from './images/hero/stud12.jpg';
// import gallery2 from '../public/images/hero/stud3.jpg';
// import gallery3 from '../public/images/hero/stud8.jpg';
// import gallery4 from '../public/images/hero/stud13.jpg';
// import gallery5 from '../public/images/hero/stud9.jpg';
// import gallery6 from '../public/images/hero/stud11.jpg';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showMessageModal, setShowMessageModal] = useState(false);
const [modalMessage, setModalMessage] = useState('');
const [modalType, setModalType] = useState<'success' | 'error'>('success');
  const [formStatus, setFormStatus] = useState({ 
    isSubmitting: false, 
    isSuccess: false, 
    isError: false,
    message: '' 
  });
  const formRef = useRef<HTMLFormElement>(null);

   // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("yx0k9fr2X0b2gy9_y"); // Replace with your EmailJS public key
  }, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setFormStatus({ isSubmitting: true, isSuccess: false, isError: false, message: '' });

  try {
    const now = new Date();
    const formData = new FormData(formRef.current!);
    const formParams = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      message: formData.get('message'),
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };

    const result = await emailjs.send(
      'service_tim4u16',
      'template_uizx9x2', 
      formParams,
      'yx0k9fr2X0b2gy9_y'
    );
    
    if (result.text === 'OK') {
      console.log('Email sent successfully:', result.text);
      setFormStatus({ 
        isSubmitting: false, 
        isSuccess: true, 
        isError: false, 
        message: 'Message sent successfully! We will get back to you soon.' 
      });
      
      // Show success modal
      setShowMessageModal(true);
      setModalMessage('Message sent successfully! We will get back to you soon.');
      setModalType('success');
      
      // Reset the form
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  } catch (error) {
    console.error('Error sending email:', error);
    setFormStatus({ 
      isSubmitting: false, 
      isSuccess: false, 
      isError: true, 
      message: 'Sorry, there was an error sending your message. Please try again later.' 
    });
    
    // Show error modal
    setShowMessageModal(true);
    setModalMessage('Sorry, there was an error sending your message. Please try again later.');
    setModalType('error');
  }
};

  const programs = [
    {
      icon: FiHeart,
      title: "Pre-school",
      description:
        "Nurturing young minds aged 3-5 with play-based learning and early childhood development in a colorful, safe environment.",
      color: "from-pink-400 to-pink-300",
      hoverColor: "hover:from-pink-500 hover:to-pink-400",
      bgColor: "bg-gradient-to-br from-pink-100 to-pink-200",
      image: "/images/hero/stud9.JPG",
    },
    {
      icon: FiBook,
      title: "Primary",
      description:
        "Building strong foundations in literacy, numeracy, and critical thinking skills for ages 6-11 through interactive learning.",
      color: "from-blue-400 to-blue-300",
      hoverColor: "hover:from-blue-500 hover:to-blue-400",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-200",
      image: "/images/hero/ss1.JPG",
    },
    {
      icon: FiAward,
      title: "Junior High School",
      description:
        "Preparing students for senior secondary education with comprehensive academic programs and character development.",
      color: "from-orange-400 to-orange-300",
      hoverColor: "hover:from-orange-500 hover:to-orange-400",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-200",
      image: "/images/hero/stud5.JPG",
    },
  ];

  const galleryImages = [
    "/images/hero/stud12.JPG",
    "/images/hero/stud3.JPG",
    "/images/hero/stud8.JPG",
    "/images/hero/stud13.JPG",
    "/images/hero/stud9.JPG",
    "/images/hero/ss8.JPG",
  ];

  const features = [
    {
      number: 1,
      title: "Fun Filled Learning",
      description:
        "Interactive lessons that make education exciting and memorable for every child.",
      color: "bg-gradient-to-br from-purple-100 to-purple-100",
      textColor: "text-school-blue-600 ",
      image: "/images/hero/stud5.JPG",
    },
    {
      number: 2,
      title: "Secured Atmosphere",
      description:
        "24/7 CCTV supervision and safe environment for peace of mind.",
      color: "bg-gradient-to-br from-purple-100 to-purple-100",
      textColor: "text-school-blue-600 ",
      image: "/images/hero/stud11.JPG",
    },
    {
      number: 3,
      title: "Furnished Classrooms",
      description:
        "Modern, colorful classrooms equipped with the latest learning technology.",
      color: "bg-gradient-to-br from-purple-100 to-purple-100",
      textColor: "text-school-blue-600 ",
      image: "/images/hero/ss13.JPG",
    },
  ];

  return (
   <div className="min-h-screen bg-[#ffff]">

      {/* Hero Section */}
      <HeroCarousel />

      {/* Our Aims and Ethos */}
      <section className="py-20 bg-[#ffff] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-30">
          <FaStar className="text-school-yellow-400 text-4xl animate-pulse" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-30">
          <FaRocket className="text-school-blue-400 text-5xl animate-float" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-20">
          <FaApple className="text-school-yellow-400 text-3xl animate-bounce" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-20">
          <FaLeaf className="text-school-blue-400 text-4xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-school-blue-600 mb-8 font-playful">
              E.K Royals – Educating for Tomorrow
              <FaStar
                className="inline-block ml-4 text-school-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </h2>
            <div className="max-w-5xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-school-blue-200">
              <p>
                At E.K Royals School Complex, education is more than just lessons
                and exams—it's about shaping well-rounded, compassionate, and
                capable individuals. We are dedicated to fostering not only
                academic success but also the social values and essential life
                skills that will serve our pupils far beyond their school years.
              </p>
              <p>
                Our passionate educators are not only subject experts but also
                mentors who guide, encourage, and inspire each learner's unique
                journey. We believe in creating an atmosphere that sparks
                curiosity, nurtures good character, and equips students with the
                knowledge and abilities to positively impact their communities
                and the wider world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our School Section */}
      <section className="py-20  bg-[#ffff] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600 mb-8 font-playful">
                Our School
                <FaHeart className="inline-block ml-3 text-school-blue-600 animate-pulse" />
              </h2>

              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-purple-200">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  E.K Royals School Complex is a forward-thinking institution
                  offering a safe, welcoming, and stimulating environment where
                  children can learn, grow, and thrive. Our balanced approach
                  blends strong academics, rich co-curricular opportunities, and
                  dedicated pastoral care.
                </p>

                <div className="space-y-6">
                  <div className="bg-purple-100 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-school-blue-600  mb-4 flex items-center">
                      <FiShield className="h-6 w-6 text-school-blue-600  mr-3" />
                      A Safe and Supportive Community
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We work every day to ensure that our learners feel secure,
                      valued, and supported. Building self-esteem is central to
                      our mission, enabling students to face the future with
                      confidence and resilience.
                    </p>
                  </div>

                  <div className="bg-purple-100 rounded-2xl p-6">
                    <h3 className="text-xl font-semibold text-school-blue-600  mb-4 flex items-center">
                      <FiTarget className="h-6 w-6 text-school-blue-600  mr-3" />
                      An Inclusive Curriculum for Every Learner
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      We recognise that every child is unique, with individual
                      strengths and needs. Our inclusive curriculum caters to
                      all learners—whether they are excelling or need additional
                      support. Through a variety of academic and co-curricular
                      experiences, E.K Royals nurtures future leaders who embody
                      integrity, excellence, and active citizenship—regardless
                      of background or circumstance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/hero/stud10.JPG"
                  alt="Our School Community"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                {/* Decorative elements around image */}
                <FaStar className="absolute -top-4 -left-4 text-yellow-400 text-3xl animate-pulse" />
                <FaStar className="absolute -top-2 -right-6 text-green-400 text-2xl animate-bounce" />
                <FaStar className="absolute -bottom-4 -left-6 text-green-400 text-2xl animate-pulse" />
                <FaStar className="absolute -bottom-2 -right-4 text-orange-400 text-3xl animate-bounce" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cross Disciplinary Curriculum Features */}
      <section className="py-20 bg-[#ffff]  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600  mb-4 font-playful">
              Cross Disciplinary Curriculum
            </h2>
            <p className="text-lg text-gray-600 uppercase tracking-wider font-nunito font-semibold">
              INNOVATIVE LEARNING APPROACH
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="/images/hero/stud7.JPG"
                  alt="Happy children learning"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                {/* Decorative swirls and dots */}
                <div
                  className="absolute -top-6 -left-6 w-12 h-12 border-4 border-school-blue-90 opacity-20 rounded-full border-dashed animate-spin"
                  style={{ animationDuration: "4s" }}
                ></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
                <div className="absolute top-4 -right-8 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${feature.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-20 h-20 rounded-xl object-cover shadow-md"
                      />
                    </div>
                    <div
                      className={`w-12 h-12 ${feature.textColor} bg-white rounded-xl flex items-center justify-center font-bold text-xl shadow-lg flex-shrink-0`}
                    >
                      {feature.number}
                    </div>
                    <div className="flex-grow">
                      <h3
                        className={`text-xl font-bold ${feature.textColor} mb-2`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Programs Section */}
      <section className="py-20 bg-[#ffff]  relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <FaStar className="absolute top-20 left-20 text-6xl text-yellow-400 animate-pulse" />
          <FaRocket className="absolute top-40 right-20 text-5xl text-orange-400 animate-float" />
          <FaPalette className="absolute bottom-40 left-10 text-4xl text-school-blue-90 animate-bounce" />
          <FaGamepad className="absolute bottom-20 right-40 text-5xl text-purple-400 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600  mb-4 font-playful">
              Our Amazing Programs
              <FaStar
                className="inline-block ml-3 text-yellow-400 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture growth at
              every magical stage of learning!
            </p>
          </motion.div>

          {/* Updated grid container with proper centering */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl">
              {programs.map((program, index) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div
                    className={`${program.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border-4 border-white relative overflow-hidden h-full`}
                  >
                    {/* Decorative corner elements */}
                    <FaStar className="absolute top-2 right-2 text-yellow-400 text-lg animate-pulse" />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/50 rounded-full"></div>

                    {/* Program Image */}
                    <div className="mb-6">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-32 object-cover rounded-2xl shadow-lg"
                      />
                    </div>

                    <div
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${program.color} ${program.hoverColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <program.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-school-blue-600  mb-4 text-center font-playful">
                      {program.title}
                    </h3>
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      {program.description}
                    </p>
                    <Link
                      to="/academics/curriculum"
                      className="block w-full py-3 text-center 
             bg-gradient-to-r from-[#2c3e50] to-[#3a506b] 
             text-white font-nunito  
             rounded-2xl shadow-lg 
             transition-all duration-300 
             hover:from-[#3a506b] hover:to-[#4b5563] 
             hover:shadow-xl transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

       {/* Gallery Section */}
      <section className="py-20 bg-[#fffff]  relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600 mb-4 font-playful">
              Campus Gallery
              <FaPalette className="inline-block ml-3 text-school-blue-90 animate-bounce" />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a colorful visual tour of our modern facilities and vibrant
              learning environment!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${
                  index === 0 ? "sm:col-span-2 md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <div className="w-full h-full">
                  <img
                    src={image}
                    alt={`Campus ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      height: index === 0 ? "400px" : "200px",
                      minHeight: index === 0 ? "400px" : "200px",
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 md:pb-6">
                  <span className="text-white font-bold text-sm md:text-lg bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full">
                    View Image
                  </span>
                </div>
                {/* Decorative corner star */}
                <FaStar className="absolute top-2 right-2 text-yellow-400 text-sm md:text-xl opacity-80" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Status Modal */}
<AnimatePresence>
  {showMessageModal && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={() => setShowMessageModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 text-center ${modalType === 'success' ? 'bg-green-100' : 'bg-red-100'}`}>
          <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
            modalType === 'success' ? 'bg-accent-green' : 'bg-red-500'
          }`}>
            {modalType === 'success' ? (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            )}
          </div>
          
          <h3 className="mt-4 text-xl font-bold text-green-900">
            {modalType === 'success' ? 'Success!' : 'Error'}
          </h3>
          
          <p className="mt-2 text-gray-700">
            {modalMessage}
          </p>
        </div>
        
        <div className="p-4 bg-gray-50 flex justify-center">
          <button
            onClick={() => setShowMessageModal(false)}
            className={`px-6 py-2 rounded-full font-medium ${
              modalType === 'success' 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            } transition-colors duration-200`}
          >
            OK
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Image Modal */}
<AnimatePresence>
  {selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      onClick={() => setSelectedImage(null)}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl max-h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Mobile Optimized */}
        <button
          className="absolute -top-12 right-0 md:-top-10 md:-right-10 bg-black/70 text-white text-3xl md:text-4xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-all duration-300 z-10 shadow-lg"
          onClick={() => setSelectedImage(null)}
          aria-label="Close image"
        >
          &times;
        </button>
        
        {/* Image Container */}
        <div className="rounded-lg overflow-hidden shadow-2xl mx-auto">
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="w-full h-auto max-h-[75vh] md:max-h-[80vh] object-contain"
          />
        </div>
        
        {/* Mobile-friendly backdrop click area */}
        <div className="absolute inset-0 -z-10" onClick={() => setSelectedImage(null)}></div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* Contact Section */}
      <section className="py-20 bg-[#fffcf5] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-20">
          <FaRocket className="text-orange-400 text-6xl animate-float" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-20">
          <FaStar className="text-yellow-400 text-5xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600  mb-8 font-playful">
                Get in Touch
                <FaHeart className="inline-block ml-3 text-school-blue-90 animate-pulse" />
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to join our magical school family? Contact us today to
                learn more about admissions and how we can help your child
                thrive and shine!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="bg-blue-200 p-4 rounded-2xl">
                    <FiMapPin className="h-6 w-6 text-school-blue-90 " />
                  </div>
                  <div>
                    <h4 className="font-bold text-school-blue-90  mb-1 text-lg">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Lawyer Y.S kese, AE-0172-3256 – Ejisu Jamasi
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="bg-blue-200 p-4 rounded-2xl">
                    <FiPhone className="h-6 w-6 text-school-blue-90" />
                  </div>
                  <div>
                    <h4 className="font-bold text-school-blue-90  mb-1 text-lg">
                      Phone
                    </h4>
                    <p className="text-gray-600">
                      {" "}
                      +233 53 167 9337 / +233 25 692 8572
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <div className="bg-purple-200 p-4 rounded-2xl">
                    <FiMail className="h-6 w-6 text-school-blue-90" />
                  </div>
                  <div>
                    <h4 className="font-bold text-school-blue-90 mb-1 text-lg">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      ekroyalsschoolcomplex@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-purple-200 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <FaStar className="absolute top-4 right-4 text-yellow-400 text-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full"></div>

                <h3 className="text-2xl font-bold text-school-blue-90  mb-6 font-playful text-center">
                  Send Us a Message!
                </h3>
                 {/* Status Message */}
                {formStatus.message && (
                  <div className={`mb-6 p-4 rounded-2xl text-center ${
                    formStatus.isSuccess 
                      ? 'bg-green-100 text-green-700' 
                      : formStatus.isError
                      ? 'bg-red-100 text-red-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

             <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-school-blue-600 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-school-blue-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 shadow-lg"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-school-blue-600 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-700 resize-none shadow-lg"
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  whileHover={{ scale: formStatus.isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus.isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-[#1a293f] hover:bg-[#111c35] disabled:bg-gray-400 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl text-lg"
                >
                  {formStatus.isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <FiSend className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
