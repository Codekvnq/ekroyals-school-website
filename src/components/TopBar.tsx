import React from 'react';
import { FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-white py-2 text-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <FiPhone className="h-4 w-4" />
              <span className="hidden sm:inline">+233 53 167 9337 / +233 25 692 8572</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-yellow-300 transition-colors">
              <FiMail className="h-4 w-4" />
              <span className="hidden md:inline">ekroyalsschoolcomplex@gmail.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-yellow-300 transition-colors p-1 rounded-full hover:bg-white/10">
              <FiFacebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors p-1 rounded-full hover:bg-white/10">
              <FiTwitter className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors p-1 rounded-full hover:bg-white/10">
              <FiInstagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors p-1 rounded-full hover:bg-white/10">
              <FiLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;