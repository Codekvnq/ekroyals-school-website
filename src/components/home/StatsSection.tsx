import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiUser, FiBook, FiHeart } from 'react-icons/fi';
import { FaStar, FaRocket } from 'react-icons/fa';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true);
    }
  }, [isInView]);

  const stats = [
    {
      icon: FiUsers,
      value: 500,
      label: 'Happy Students',
      suffix: '+',
      color: 'text-primary-600',
      bgColor: 'bg-pastel-blue',
      borderColor: 'border-primary-300'
    },
    {
      icon: FiUser,
      value: 25,
      label: 'Amazing Teachers',
      suffix: '+',
      color: 'text-accent-orange',
      bgColor: 'bg-pastel-orange',
      borderColor: 'border-accent-orange/30'
    },
    {
      icon: FiBook,
      value: 20,
      label: 'Fun Courses',
      suffix: '+',
      color: 'text-accent-purple',
      bgColor: 'bg-pastel-purple',
      borderColor: 'border-accent-purple/30'
    },
    {
      icon: FiHeart,
      value: 15,
      label: 'Exciting Clubs',
      suffix: '+',
      color: 'text-accent-pink',
      bgColor: 'bg-pastel-pink',
      borderColor: 'border-accent-pink/30'
    }
  ];

  const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startAnimation) return;

      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, duration, startAnimation]);

    return <span>{count}</span>;
  };

  return (
    <section 
      ref={ref}
      className="py-20 bg-gradient-to-br from-pastel-purple/40 via-white to-pastel-blue/40 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <FaStar className="text-accent-yellow text-5xl animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <FaRocket className="text-accent-orange text-6xl animate-float" />
      </div>
      <div className="absolute top-1/2 left-1/4 opacity-10">
        <div className="w-20 h-20 border-4 border-accent-pink rounded-full border-dashed animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-school-blue-600  mb-4 font-playful">
            Our Amazing Impact in Numbers
            <FaStar className="inline-block ml-3 text-accent-yellow animate-spin" style={{ animationDuration: '3s' }} />
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our thriving community of learners, educators, and achievers making magic happen every day!
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group relative"
            >
              <div className={`${stat.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-4 ${stat.borderColor} relative overflow-hidden`}>
                {/* Decorative corner elements */}
                <FaStar className="absolute top-2 right-2 text-accent-yellow text-sm animate-pulse" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-white/50 rounded-full"></div>
                
                <div className="mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 ${stat.color} border-4 border-white`}>
                    <stat.icon className="h-10 w-10" />
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-accent-blueblack font-playful">
                    <Counter target={stat.value} />
                    {stat.suffix}
                  </span>
                </div>
                
                <p className="text-lg font-nunito font-bold text-gray-600">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center mt-12 space-x-4"
        >
          <div className="w-4 h-4 bg-accent-pink rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-4 h-4 bg-accent-purple rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-accent-yellow rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-accent-orange rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;