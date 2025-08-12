"use client";

import { motion } from "framer-motion";
import { 
  Download, 
  Code, 
  Brain, 
  Database, 
  Zap, 
  Cpu, 
  Network, 
  Eye,
  Sparkles, 
  Cloud, 
  Server, 
  BarChart3, 
  GitBranch, 
  Container, 
  Users, 
  Settings,
  Layers,
  Workflow
} from "lucide-react";

const skills = [
  // Programming Languages & Frameworks
  { name: "Python", icon: Code },
  { name: "C/C++ (OOP)", icon: Code },
  { name: "SQL", icon: Database },
  { name: "JavaScript", icon: Code },
  { name: "React-JS", icon: Cpu },
  
  // Machine Learning & Deep Learning
  { name: "LLMs", icon: Sparkles },
  { name: "PyTorch", icon: Brain },
  { name: "TensorFlow", icon: Network },
  { name: "Keras", icon: Brain },
  { name: "Langchain", icon: Workflow },
  { name: "Scikit-Learn", icon: Brain },
  { name: "OpenCV", icon: Eye },
  
  // Big Data & Cloud Platforms
  { name: "PySpark", icon: Zap },
  { name: "Hadoop", icon: Database },
  { name: "Apache Airflow", icon: Workflow },
  { name: "Microsoft Azure", icon: Cloud },
  { name: "Microsoft Fabric", icon: Layers },
  { name: "HPC", icon: Server },
  
  // Databases
  { name: "SQL Server", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Neo4j", icon: Network },
  { name: "GraphDB", icon: Network },
  
  // Data Analytics & Visualization
  { name: "Pandas", icon: Database },
  { name: "NumPy", icon: Database },
  { name: "Matplotlib", icon: BarChart3 },
  { name: "Seaborn", icon: BarChart3 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Tableau", icon: BarChart3 },
  { name: "Streamlit", icon: Zap },
  { name: "D3.js", icon: BarChart3 },
  
  // Project Management & Collaboration
  { name: "Docker", icon: Container },
  { name: "Agile", icon: Users },
  { name: "Scrum", icon: Users },
  { name: "Git", icon: GitBranch },
  { name: "Jira", icon: Settings },
];

export default function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume/CV_PhD_Kamrul.pdf"; // Update with your CV filename
    link.download = "Md_Kamrul_Islam_Resume.pdf";
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* About Info Card */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Brain className="h-8 w-8 text-blue-600" />
                Introduction
              </h3>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Data scientist and AI researcher passionate about creating innovative solutions with real-world impact. My expertise spans <span className="text-blue-600 font-semibold">machine learning</span>, 
                <span className="text-blue-600 font-semibold"> deep learning</span>, <span className="text-blue-600 font-semibold">NLP</span>, 
                and <span className="text-blue-600 font-semibold">large language models</span>, with a focus on <span className="text-blue-600 font-semibold">knowledge graphs</span> and <span className="text-blue-600 font-semibold">multimodal data</span>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Skilled in <span className="text-blue-600 font-semibold">Python</span>, <span className="text-blue-600 font-semibold">PyTorch</span>, <span className="text-blue-600 font-semibold">LangChain</span>, and <span className="text-blue-600 font-semibold">graph databases</span>, I've developed data-driven applications across <span className="text-blue-600 font-semibold">healthcare</span>, <span className="text-blue-600 font-semibold">e-commerce</span>, and <span className="text-blue-600 font-semibold">cybersecurity</span>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                My academic journey has taken me through <span className="text-blue-600 font-semibold">five countries</span>—completing my bachelor's in <span className="text-blue-600 font-semibold">China</span> and pursuing an <span className="text-blue-600 font-semibold">Erasmus Mundus master's</span> across <span className="text-blue-600 font-semibold">Belgium</span>, <span className="text-blue-600 font-semibold">Spain</span>, 
                and <span className="text-blue-600 font-semibold">France</span>. This multicultural experience, supported by prestigious scholarships, has shaped my collaborative approach to problem-solving and given me fluency in multiple languages (<span className="text-blue-600 font-semibold">English C1</span>, <span className="text-blue-600 font-semibold">Chinese B2</span>, <span className="text-blue-600 font-semibold">French A1</span>).
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Outside work, I&apos;m an avid <span className="text-blue-600 font-semibold">cyclist</span> (completed the 100km Chengdu Tianfu Greenway), <span className="text-blue-600 font-semibold">tennis player</span>, and <span className="text-blue-600 font-semibold">traveler</span> who has explored <span className="text-blue-600 font-semibold">9 countries</span> with ambitions to see the world.
              </p>

              <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                Looking ahead, I&apos;m seeking <span className="text-blue-600 font-semibold">PhD opportunities</span> or <span className="text-blue-600 font-semibold">applied research roles</span> in industry to continue pushing the boundaries of AI and data science.
              </p>
            </motion.div>

            {/* Download CV Button - Fixed alignment */}
            <motion.div variants={itemVariants} className="mt-8 text-right">
              <motion.button
                onClick={handleDownloadCV}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Skills Card - Now below the introduction */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Zap className="h-8 w-8 text-blue-600" />
                Skills
              </h3>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
            >
              {/* Programming Languages - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <Code className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Programming Languages & Frameworks</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(0, 5).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* AI/ML/DL Research - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <Brain className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">AI, Machine Learning & Deep Learning</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(5, 12).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Big Data & Cloud - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <Cloud className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Big Data & Cloud Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(12, 18).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Databases - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <Database className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Databases & Knowledge Graphs</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(18, 22).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Data Analytics - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <BarChart3 className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Data Analytics & Visualization</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(22, 30).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>

              {/* Project Management - Classic Look */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3 pb-2 border-b border-gray-300 dark:border-gray-600">
                  <Settings className="h-5 w-5 text-gray-600 dark:text-gray-400 mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Project Management & Collaboration</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.slice(30, 35).map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <motion.span
                        key={skill.name}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -3 }}
                      >
                        <Icon className="h-4 w-4" />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 