import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import { FaGraduationCap, FaStar } from 'react-icons/fa';
import TopBar from './TopBar';
// import logoImage from '../public/images/hero/ROYALS SCHOOL COMPLEX.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{[key: string]: boolean}>({});
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { 
      name: 'About Us', 
      path: null,
      dropdown: [
        { name: 'Our Story', path: '/about/story' },
        { name: 'Careers at E.K Royals', path: '/about/careers' }
      ]
    },
    {
      name: 'Academics',
      path: null,
      dropdown: [
        { name: 'Academic Curriculum', path: '/academics/curriculum' },
        { name: 'Academic Facilities', path: '/academics/facilities' },
        { name: 'Co-Curriculum', path: '/academics/co-curriculum' }
      ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-xl border-b-4 border-gradient-to-r from-school-blue-400 to-school-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
<Link to="/" className="flex items-center space-x-2 group">
  <div className="relative">
    <div className="group-hover:scale-110 transition-transform duration-300">
      <img 
        src='/images/hero/logo.png'
        alt="E.K Royals School Complex Logo" 
        className="h-12 w-auto" // Adjust height as needed
      />
    </div>
    <FaStar className="absolute -top-1 -right-1 h-3 w-3 text-yellow-400 animate-pulse" />
  </div>
<div className="block">
  <h1 className="text-sm sm:text-base md:text-lg font-bold text-[#172f49] font-nunito">
    E.K Royals School Complex
  </h1>
  <p className="text-xs text-[#172f49] font-medium block">Knowledge, Integrity and Law Immutable</p>
</div>
</Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                {item.path === null ? (
  <span className="flex items-center px-3 py-2 text-sm font-bold font-nunito rounded-full transition-all duration-300 text-[#172f49] hover:bg-school-blue-50 hover:scale-105 cursor-pointer">
    {item.name}
    {item.dropdown && (
      <FiChevronDown
        className={`ml-1 h-3 w-3 transition-transform duration-200 ${
          activeDropdown === item.name ? "rotate-180" : ""
        }`}
      />
    )}
  </span>
) : (
  <Link
    to={item.path}
    className={`flex items-center px-3 py-2 text-sm font-bold font-nunito rounded-full transition-all duration-300 ${
  location.pathname === item.path
    ? "bg-[#172f49] text-white shadow-md"
    : "text-[#172f49] hover:bg-school-blue-50 hover:scale-105"
}`}

  >
    {item.name}
  </Link>
)}
                  {/* Desktop Dropdown Menu */}
                  <AnimatePresence>
                    {item.dropdown && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                       className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-school-blue-100 py-2 overflow-hidden"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-yellow-50 hover:text-slate-800 transition-all duration-200 font-semibold"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              {/* Apply Now Button */}
          <Link
   to="/admissions"
  className="hidden sm:inline-flex px-4 py-2 bg-[#32CD32] hover:bg-[#2CBD2D] text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow hover:shadow-md text-sm"
>
  Apply Now 
</Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-800 bg-slate-50 rounded-full hover:bg-slate-100 transition-colors"
              >
                {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t-2 border-school-blue-100 max-h-96 overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.path === null ? (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold rounded-xl text-slate-800 hover:bg-slate-50 transition-colors"
                      >
                        <span>{item.name}</span>
                        <FiChevronRight className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdowns[item.name] ? 'rotate-90' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-4 py-3 text-sm font-bold font-nunito rounded-xl transition-colors duration-200 ${
                          location.pathname === item.path
                          ? 'bg-[#172f49] text-white'
                            : 'text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                    
                    {/* Mobile Dropdown */}
                    <AnimatePresence>
                      {item.dropdown && mobileDropdowns[item.name] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-1 border-l-2 border-school-blue-200 pl-4"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-slate-700 hover:text-yellow-600 font-semibold hover:bg-slate-50 rounded-lg transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                {/* Mobile Apply Now Button */}
               <Link
  to="/admissions"
  onClick={() => setIsMenuOpen(false)}
  className="block w-full mt-4 px-4 py-3 bg-[#9ACD32] hover:bg-[#8AB82D] text-white font-bold rounded-full text-center text-sm transition-all duration-300 transform hover:scale-105 shadow hover:shadow-md"
>

  Apply Now 
</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;