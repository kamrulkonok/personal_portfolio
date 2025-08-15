"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building, Brain, TestTube, Database, ExternalLink, Code, Users, Server, Cpu, Network, Zap, Cloud, GitBranch, Bot, BookOpen, CheckCircle, Cog, ChartLine, Users as UsersIcon, Github, Microscope, Database as DatabaseIcon, Workflow, Brain as BrainIcon, Cpu as CpuIcon, GraduationCap, Briefcase, Target, TrendingUp, Shield } from "lucide-react";

const experienceData = [
  {
    id: "lissi",
    company: "Laboratoire Images, Signaux et Systèmes Intelligents (LISSI)",
    position: "Research Engineer Intern",
    period: "May 2024 - Present",
    location: "Paris, France",
    institution: "Université Paris-Est Créteil",
    icon: Brain,
    researchArea: "Cybersecurity, Business Process Modeling, and LLMs",
    researchProblem: "Manual security requirement extraction from multimodal documents is time-consuming and error-prone, leading to incomplete security specifications in business process workflows.",
    researchSolution: "Developing an LLM-assisted solution that automatically extracts security and data-sharing requirements from multimodal inputs to generate BPMN workflows with semantically valid SecBPMN annotations.",
    achievements: [
      { icon: Target, text: "Research Focus: Automated security requirement extraction using multimodal AI for business process modeling" },
      { icon: Shield, text: "Novel Approach: Integration of LLM-based text analysis for security annotated BPMN workflow generation" },
      { icon: Workflow, text: "Technical Innovation: Development of SecBPMN-compliant workflow generation with context-aware data protection mechanisms" },
      { icon: Code, text: "Technologies: Python, React-JS, LangChain, Retrieval-Augmented Generation, SecBPMN, Knowledge Graphs" }
    ]
  },
  {
    id: "lisn",
    company: "Laboratoire Interdisciplinaire des Sciences du Numérique (LISN)",
    position: "Graduate Research Assistant",
    period: "Oct 2024 – Present",
    location: "Gif-sur-Yvette, France",
    institution: "CentraleSupélec",
    icon: Microscope,
    link: "https://github.com/kamrulkonok/BDRP",
    researchArea: "Deep Learning, Medical Image Analysis, and Self-Supervised Learning",
    researchProblem: "Traditional deep clustering methods lack geometric invariance, leading to poor performance on medical images with varying orientations and requiring extensive data augmentation.",
    researchSolution: "Developed a novel deep clustering architecture integrating Group Equivariant CNNs to encode geometric symmetries directly in network architecture, eliminating the need for explicit data augmentation.",
    achievements: [
      { icon: BookOpen, text: "Research Project: 'Enhancing Self-Supervised Learning for Image Clustering Using Geometric Deep Learning'" },
      { icon: BrainIcon, text: "Novel Architecture: Developed Group Equivariant CNN-based clustering model that preserves geometric invariances in medical image analysis" },
      { icon: TrendingUp, text: "Performance Results: 15% improvement in clustering accuracy on NIH chest X-ray datasets compared to baseline methods" },
      { icon: CheckCircle, text: "Technical Innovation: Eliminated need for explicit data augmentation while improving clustering performance and generalization" },
      { icon: CpuIcon, text: "Scalability: Built optimized training pipeline using PyTorch DistributedDataParallel and automatic mixed precision for multi-GPU systems" },
      { icon: Code, text: "Technologies: PyTorch, OpenCV, LaTeX, HPC, NIH Chest X-ray Dataset" }
    ]
  },
  {
    id: "suncape",
    company: "Chengdu Suncape Data Co., Ltd",
    position: "Software Engineer Intern",
    period: "December 2020 - May 2021",
    location: "Chengdu, China",
    icon: DatabaseIcon,
    achievements: [
      { icon: Database, text: "Data Engineering: Developed and optimized Apache Spark pipelines for large-scale data processing and analysis" },
      { icon: ChartLine, text: "Performance Improvement: Enhanced data preprocessing workflows achieving 20% increase in predictive model accuracy" },
      { icon: Briefcase, text: "Collaboration: Worked with cross-functional teams using Agile Scrum methodology for code quality and version control" },
      { icon: Code, text: "Technologies: Python, PySpark, SciKit-Learn, Agile Scrum, Jira, Git" }
    ]
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Research & Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My research focuses on AI-driven solutions for real-world challenges, from medical image analysis to security automation
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <motion.div
                key={experience.id}
                className="relative"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="experience-item">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                          <Icon className="h-7 w-7 text-blue-600" />
                          {experience.company}
                        </h2>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                          {experience.id === "suncape" ? (
                            <Briefcase className="h-5 w-5 text-green-500" />
                          ) : (
                            <Microscope className="h-5 w-5 text-green-500" />
                          )}
                          {experience.position}
                        </h3>
                        
                        {/* Research/Industry Label */}
                        <div className="mb-3">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                            experience.id === "suncape" 
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" 
                              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          }`}>
                            {experience.id === "suncape" ? (
                              <>
                                <Briefcase className="h-3 w-3" />
                                Industry
                              </>
                            ) : (
                              <>
                                <Microscope className="h-3 w-3" />
                                Research
                              </>
                            )}
                          </span>
                        </div>
                        
                        <div className="experience-details flex flex-wrap items-center gap-2 text-sm text-gray-900 dark:text-white mb-5">
                          <span className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-gray-900 dark:text-white" />
                            {experience.period}
                          </span>
                          <span className="text-gray-400">|</span>
                          {experience.institution && (
                            <>
                              <span className="flex items-center gap-2">
                                <GraduationCap className="h-4 w-4 text-gray-900 dark:text-white" />
                                {experience.institution}
                              </span>
                              <span className="text-gray-400">|</span>
                            </>
                          )}
                          <span className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-gray-900 dark:text-white" />
                            {experience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Research Focus Section for Research Positions */}
                    {experience.id !== "suncape" && (
                      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg border border-blue-200 dark:border-blue-700">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Target className="h-5 w-5 text-blue-600" />
                          Research Focus: {experience.researchArea}
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <div>
                              <span className="font-medium text-gray-800 dark:text-gray-200">Problem: </span>
                              <span className="text-gray-700 dark:text-gray-300">{experience.researchProblem}</span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <span className="font-medium text-gray-800 dark:text-gray-200">Solution: </span>
                              <span className="text-gray-700 dark:text-gray-300">{experience.researchSolution}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <ul className="mt-4 space-y-3">
                      {experience.achievements.map((achievement, achievementIndex) => {
                        const AchievementIcon = achievement.icon;
                        return (
                          <li key={achievementIndex} className="relative pl-6 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            <AchievementIcon className="absolute left-0 top-1 h-4 w-4 text-green-500" />
                            {achievement.text}
                          </li>
                        );
                      })}
                    </ul>

                    {/* Project Link Button for LISN */}
                    {experience.link && (
                      <div className="project-buttons mt-6">
                        <a 
                          href={experience.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                          <Github className="h-4 w-4" />
                          View Research Project
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 