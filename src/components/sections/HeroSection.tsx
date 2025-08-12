"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Brain, Network, Database, Zap, Eye, Sparkles } from "lucide-react";

export default function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/CV_PhD_Kamrul.pdf";
    link.download = "Md_Kamrul_Islam_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05, // Further reduced from 0.1
        staggerChildren: 0.05, // Further reduced from 0.1
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
    { icon: Sparkles, text: "Large Language Models", color: "from-purple-500 to-pink-500" },
    { icon: Brain, text: "Deep Learning", color: "from-blue-500 to-cyan-500" },
    { icon: Zap, text: "Generative AI", color: "from-green-500 to-emerald-500" },
    { icon: Database, text: "Big Data", color: "from-orange-500 to-red-500" },
    { icon: Network, text: "Knowledge Graphs", color: "from-indigo-500 to-purple-500" },
    { icon: Eye, text: "Computer Vision", color: "from-teal-500 to-blue-500" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Tagline */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Transforming{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                  Data
                </span>{" "}
                into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Intelligence
                </span>
              </h1>
            </motion.div>



            {/* Inspirational Quote - Replaced the old line */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-gray-800/60 dark:to-gray-700/60 p-6 rounded-2xl border border-blue-200/50 dark:border-gray-600/50 shadow-lg backdrop-blur-sm">
                <blockquote className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 font-semibold leading-relaxed text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    "Mathematics reveals timeless truths; code turns them into real‑world impact."
                  </span>
                  <span className="block mt-3 text-lg font-medium text-gray-600 dark:text-gray-400">
                    — that's the journey I&apos;m on 🚀
                  </span>
                </blockquote>
              </div>
            </motion.div>

            {/* Key Highlights - Moved above Research Interests */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
                <motion.div 
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Erasmus Mundus Scholar
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                  Research Engineer
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-sm border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                  International Experience
                </motion.div>
              </div>
            </motion.div>

            {/* Research Interests Grid */}
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                Research Interests
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {researchInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.text}
                      className="bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -1,
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
                      }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${interest.color}`}></div>
                      <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{interest.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download CV
                <span className="text-sm opacity-80">(PDF)</span>
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                Let's Connect
              </motion.button>
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
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Profile Image Container */}
            <motion.div
              className="relative z-10"
              variants={profileVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Profile Image */}
              <motion.div
                className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                animate="float"
                variants={floatingVariants}
              >
                <img
                  src="/images/profile_picture.png"
                  alt="Kamrul Islam - AI Researcher & Data Scientist"
                  className="w-full h-full object-contain" // Changed from object-cover to object-contain
                  style={{
                    transform: "translateZ(0)",
                    backfaceVisibility: "hidden"
                  }}
                />
                
                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              
              {/* Enhanced Floating Elements - Simplified */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl"
                animate={{
                  y: [0, -8, 0], // Simplified animation
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Brain className="h-8 w-8" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-xl"
                animate={{
                  y: [0, 8, 0], // Simplified animation
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <Network className="h-8 w-8" />
              </motion.div>
              
              {/* Removed AI/ML text badges - keeping only the icon elements */}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 