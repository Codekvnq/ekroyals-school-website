// components/gallery/GalleryPage.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiX, FiHome, FiChevronLeft } from 'react-icons/fi';
import { FaPalette, FaStar } from 'react-icons/fa';

// Define types for our data structures
interface GalleryImage {
  src: string;
  category: 'campus' | 'classrooms' | 'students' | 'activities';
  title: string;
}

interface Category {
  key: 'all' | 'campus' | 'classrooms' | 'students' | 'activities';
  label: string;
}

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<'all' | 'campus' | 'classrooms' | 'students' | 'activities'>('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extended gallery images with categories
  const galleryImages: GalleryImage[] = [
    {
      src: "/images/hero/stud12.JPG",
      category: "activities",
      title: "School Activities"
    },
    {
      src: "/images/hero/stud3.JPG",
      category: "activities",
      title: "Happy Students"
    },
    {
      src: "/images/hero/stud8.JPG",
      category: "activities",
      title: "School Activities"
    },
    {
      src: "/images/hero/stud13.JPG",
      category: "campus",
      title: "Modern Facilities"
    },
    {
      src: "/images/hero/ss15.JPG",
      category: "classrooms",
      title: "Classroom Environment"
    },
    {
      src: "/images/hero/ss8.JPG",
      category: "activities",
      title: "Learning Sessions"
    },
    // Additional images
    {
      src: "/images/hero/ss43.JPG",
      category: "students",
      title: "Group Learning"
    },
    {
      src: "/images/hero/ss24.JPG",
      category: "campus",
      title: "Teacher-Student Collaboration"
    },
    {
      src: "/images/hero/ss30.JPG",
      category: "campus",
      title: "Lovely Students"
    },
    {
      src: "/images/hero/ss9.JPG",
      category: "students",
      title: "Playtime Fun"
    },
    {
      src: "/images/hero/ss6.JPG",
      category: "campus",
      title: "Environment"
    },
    {
      src: "/images/hero/stud10.JPG",
      category: "campus",
      title: "School Building"
    },
    {
      src: "/images/hero/ss41.JPG",
      category: "classrooms",
      title: "Interactive Learning"
    },
    {
      src: "/images/hero/stud99.JPG",
      category: "classrooms",
      title: "Preschool Area"
    },
    {
      src: "/images/hero/ss14.JPG",
      category: "students",
      title: "Happy Students"
    },
    {
      src: "/images/hero/ss16.JPG",
      category: "activities",
      title: "Students Engagement"
    },
    {
      src: "/images/hero/ss43.JPG",
      category: "campus",
      title: "Playground"
    },
    {
      src: "/images/hero/ss55.jpg",
      category: "classrooms",
      title: "Kindergarten"
    },
     {
      src: "/images/hero/stud11.JPG",
      category: "campus",
      title: "School bus"
    },
     {
      src: "/images/hero/ss38.JPG",
      category: "campus",
      title: "Nice Buses"
    },
     {
      src: "/images/hero/ss39.JPG",
      category: "students",
      title: "Environment"
    },
    {
      src: "/images/hero/ss111.JPG",
      category: "students",
      title: "Students"
    },
     {
      src: "/images/hero/ss37.JPG",
      category: "students",
      title: "Students"
    },
    {
      src: "/images/hero/ss34.JPG",
      category: "classrooms",
      title: "Classroom"
    }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const categories: Category[] = [
    { key: 'all', label: 'All Photos' },
    { key: 'campus', label: 'Campus' },
    { key: 'classrooms', label: 'Classrooms' },
    { key: 'students', label: 'Students' },
    { key: 'activities', label: 'Activities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-16 md:pt-20">
      {/* Header - Improved for mobile */}
      <div className="relative bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 md:py-8">
          <div className="flex flex-col space-y-4 md:space-y-0">
            {/* Top Row: Back Button and Title */}
            <div className="flex items-center justify-between">
              <Link
                to="/"
                className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 bg-school-blue-600 text-white rounded-full hover:from-[#3a506b] hover:to-[#4b5563]  transition-colors duration-200 text-sm md:text-base"
              >
                <FiChevronLeft className="mr-1 h-3 w-3 md:h-4 md:w-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </Link>
              
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 shadow-lg border">
                <span className="text-xs md:text-sm font-medium text-gray-600">Photos:</span>
                <span className="bg-school-blue-600 text-white px-2 py-1 rounded-full text-xs md:text-sm font-bold">
                  {galleryImages.length}
                </span>
              </div>
            </div>

            {/* Bottom Row: Title and Description */}
            <div className="text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-school-blue-600 font-playful flex items-center justify-center md:justify-start">
                <FaPalette className="mr-2 md:mr-3 text-school-blue-90 h-5 w-5 md:h-6 md:w-6" />
                School Gallery
              </h1>
              <p className="text-gray-600 mt-1 text-sm md:text-base max-w-2xl mx-auto md:mx-0">
                Explore our vibrant learning environment and facilities
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons - Improved for mobile */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 md:py-6">
        <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium transition-all duration-200 text-xs md:text-sm ${
                filter === category.key
                  ? 'bg-school-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-school-blue-50 hover:text-school-blue-600 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Active Filter Indicator */}
        <div className="text-center mt-3">
          <span className="inline-block bg-school-blue-100 text-school-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Showing: {filter === 'all' ? 'All Photos' : categories.find(c => c.key === filter)?.label} 
            ({filteredImages.length} images)
          </span>
        </div>
      </div>

      {/* Gallery Grid - Improved for mobile */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 md:py-8">
        {filteredImages.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.src}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group cursor-pointer bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4">
                    <h3 className="text-white font-bold text-xs md:text-sm lg:text-base mb-1 line-clamp-2">
                      {image.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-xs capitalize bg-black/30 px-2 py-1 rounded-full">
                        {image.category}
                      </span>
                      <FaStar className="text-yellow-400 text-xs md:text-sm" />
                    </div>
                  </div>
                </div>

                {/* Mobile Touch Indicator */}
                <div className="md:hidden absolute top-2 right-2 bg-black/50 text-white rounded-full p-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-8 md:py-12">
            <FaPalette className="mx-auto text-4xl md:text-6xl text-gray-300 mb-3 md:mb-4" />
            <p className="text-gray-500 text-base md:text-lg">No images found for this category.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 px-4 py-2 bg-school-blue-600 text-white rounded-full hover:bg-school-blue-700 transition-colors duration-200 text-sm md:text-base"
            >
              Show All Photos
            </button>
          </div>
        )}
      </div>

      {/* Image Modal - Improved for mobile */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl lg:max-w-6xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Mobile optimized */}
              <button
                className="absolute -top-10 right-0 md:-top-12 md:-right-12 bg-black/70 text-white text-xl md:text-2xl w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-yellow-400 transition-all duration-300 z-10 shadow-lg"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <FiX />
              </button>

              {/* Image Container */}
              <div className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-2xl mx-auto">
                <div className="max-h-[60vh] md:max-h-[70vh] lg:max-h-[75vh] overflow-hidden">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-auto object-contain max-h-[60vh] md:max-h-[70vh] lg:max-h-[75vh]"
                  />
                </div>
                <div className="p-3 md:p-4 bg-white border-t border-gray-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {selectedImage.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-sm text-gray-600 capitalize bg-gray-100 px-3 py-1 rounded-full">
                      Category: {selectedImage.category}
                    </span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-sm text-school-blue-600 hover:text-school-blue-800 font-medium px-3 py-1 rounded-full hover:bg-school-blue-50 transition-colors duration-200"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                Tap anywhere to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 md:py-6">
          <div className="text-center">
            <p className="text-gray-600 text-sm md:text-base">
              © {new Date().getFullYear()} EK Royals School Complex. All rights reserved.
            </p>
            <Link
              to="/"
              className="inline-flex items-center mt-2 text-school-blue-600 hover:text-school-blue-800 text-sm md:text-base"
            >
              <FiHome className="mr-1 h-3 w-3 md:h-4 md:w-4" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;