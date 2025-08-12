"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, ExternalLink, Users, Code, Brain, Award, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const publicationsData = [
  {
    id: "cseet-2024",
    title: "Navigating the AI Frontier: A Critical Literature Review on Integrating Artificial Intelligence into Software Engineering Education",
    authors: "C. K. Sah, L. Xiaoli, M. M. Islam and M. K. Islam",
    conference: "2024 36th International Conference on Software Engineering Education and Training (CSEE&T)",
    location: "Würzburg, Germany",
    year: "2024",
    pages: "pp. 1–5",
    doi: "https://ieeexplore.ieee.org/document/10663054",
    description: "A comprehensive literature review examining the integration of artificial intelligence into software engineering education, analyzing current trends, challenges, and future directions in this emerging field.",
    abstract: "The swift development of Artificial Intelligence (AI), namely the introduction of Large Language Models (LLMs), is drastically altering various industries and necessitating a major change in the way software engineering is taught. To equip upcoming software engineers with the knowledge and abilities to function in this AI-powered environment, curriculum and pedagogical techniques must be critically reevaluated. To better understand the integration of AI and LLMs into software engineering education, this study gives a thorough and critical analysis of the literature, looking at existing models, pedagogical frameworks, and enduring issues. We explore various approaches utilized by educational establishments, including as specialized AI and LLM courses, incorporating modules into pre-existing curricula, and utilizing open-source LLM materials. Our analysis, which is based on case studies and research data, thoroughly assesses how well these strategies enable software engineers to comprehend, make use of, and ethically create AI and LLMs. Key obstacles to the successful integration of AI and LLM are also identified by our analysis, including the inexperienced status of LLM educators, resource limitations, potential biases in AI and LLM algorithms, and insufficient instructor knowledge. Building on these discoveries, we provide solid answers to these problems and suggest interesting avenues for further study to improve the integration of AI and LLM. In the end, this study advocates for a multimodal strategy to get future software engineers ready for the impending AI and LLM future and secure their place in this quickly changing field.",
    technologies: ["Literature Review", "AI Integration", "Software Engineering Education", "Systematic Review"],
    icon: Brain,
  },
];

export default function PublicationsSection() {
  const [expandedPublication, setExpandedPublication] = useState<string | null>(null);

  const togglePublication = (id: string) => {
    setExpandedPublication(expandedPublication === id ? null : id);
  };

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
    <section id="publications" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Publications</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {publicationsData.map((publication, index) => {
            const Icon = publication.icon;
            const isExpanded = expandedPublication === publication.id;
            
            return (
              <motion.div
                key={publication.id}
                className="relative"
                variants={itemVariants}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="publication-content">
                    {/* Publication Header */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-3">
                        <Icon className="h-7 w-7 text-blue-600" />
                        {publication.title}
                      </h2>
                      
                      {/* Authors */}
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{publication.authors}</span>
                      </div>
                      
                      {/* Conference Details */}
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span>{publication.conference}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{publication.year}</span>
                          <span className="text-gray-400">|</span>
                          <span>{publication.location}</span>
                          <span className="text-gray-400">|</span>
                          <span>{publication.pages}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {publication.description}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <button
                        onClick={() => togglePublication(publication.id)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                      >
                        <Eye className="h-4 w-4" />
                        {isExpanded ? 'Hide Details' : 'Show Details'}
                        {isExpanded ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      
                      <a 
                        href={publication.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Publication
                      </a>
                    </div>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-gray-200 dark:border-gray-700 pt-6"
                      >
                        {/* Abstract */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-blue-600" />
                            Abstract
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                            {publication.abstract}
                          </p>
                        </div>

                        {/* Research Areas */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                            <Code className="h-5 w-5 text-blue-600" />
                            Research Areas
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {publication.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-lg"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
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