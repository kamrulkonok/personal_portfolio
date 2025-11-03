"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Brain, Network, Database, Zap, Eye, Sparkles } from "lucide-react";

export default function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05, 
        staggerChildren: 0.05, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 }, // Further reduced from 20
    visible: { y: 0, opacity: 1 },
  };

  const profileVariants = {
    hidden: { scale: 0.95, opacity: 0 }, // Simplified from rotation
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150, // Further reduced from 200
        damping: 30, // Increased from 25
        duration: 0.8 // Further reduced from 1.2
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -10, 0], // Further reduced from -15
      transition: {
        duration: 6, // Increased from 4 for smoother motion
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    },
    floatReverse: {
      y: [0, 10, 0], // Further reduced from 15
      transition: {
        duration: 6, // Increased from 4 for smoother motion
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: 3 // Increased from 2
      }
    }
  };

  const researchInterests = [
    { icon: Sparkles, text: "Foundation Model", color: "from-purple-500 to-pink-500" },
    { icon: Brain, text: "Deep Learning", color: "from-blue-500 to-cyan-500" },
    { icon: Database, text: "Big Data Analytics", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left pt-16 lg:pt-20 lg:col-span-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Bio Content */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Md Kamrul Islam</span> 👋
                </h1>
                
                <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
                  <p>
                    I specialize in <span className="font-semibold text-blue-600">Big Data Management</span>, <span className="font-semibold text-purple-600">Deep Learning</span>, and <span className="font-semibold text-pink-600">Foundation Models</span>, with hands-on experience building scalable pipelines and intelligent systems in domains such as healthcare and cybersecurity.
                  </p>
                  
                  <p>
                    I'm currently pursuing the <span className="font-semibold text-blue-600">Erasmus Mundus Joint Master's in Big Data Management & Analytics (BDMA)</span> at Université Paris-Saclay, CentraleSupélec. Before this, I earned my Bachelor of Engineering in Software Engineering from Sichuan University, China. My academic journey has taken me across China, Belgium, Spain, and now France. I speak English and Chinese fluently, and a bit of French.
                  </p>
                </div>
              </div>
            </motion.div>


            {/* Research Interests and Hobbies */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                    Research Interests
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Foundation Models, Deep Learning, Medical Imaging, Big Data Analytics
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-500" />
                    Hobbies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Tennis, Cycling, Traveling, Hiking
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="flex justify-center lg:justify-start gap-4">
                <motion.a
                  href="https://github.com/kamrulkonok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/kamrulkonok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:mdkamrul.islam@student-cs.fr"
                  className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
              
              {/* Link to old portfolio */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-blue-200 dark:border-purple-500"
              >
                <p className="text-center text-gray-700 dark:text-gray-300 mb-4 text-sm">
                  📎 Looking for my detailed research portfolio with publications and projects?
                </p>
                <motion.a
                  href="https://kamrulkonok.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Visit My Research Portfolio →
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Static Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative lg:col-span-4"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Static Background Elements */}
            <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-lg blur-3xl" />
            
            {/* Profile Image Container */}
            <div className="relative z-10">
              {/* Profile Image - Square */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-lg overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl hover:border-blue-300 dark:hover:border-blue-600">
                <img
                  src="/images/profile_picture.png"
                  alt="Kamrul Islam - AI Researcher & Data Scientist"
                  className="w-full h-full object-cover object-bottom transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 