"use client";

import { motion } from "framer-motion";
import { Github, Database, ChartLine, Brain, Code, Award, ExternalLink, Calendar, Tag } from "lucide-react";
import ProjectSlider from "@/components/ui/ProjectSlider";

const projectsData = [
  {
    id: "digiscan360",
    title: "DigiScan360",
    period: "February 2024 – June 2024",
    category: "Big Data Analytics, ML, LLMs, Knowledge Graphs",
    status: "Completed",
    description: "DigiScan360 is a visual tool for competitive intelligence based on various data sources such as e-commerce, expert reviews and social media. It enables comprehensive analysis and insights through a combination of data collection, processing, and visualization.",
    technologies: ["PySpark", "LLMs", "SQL Server", "Microsoft Fabric", "Azure Data Factory", "Power BI", "GraphDB", "SPARQL"],
    achievements: [
      "Developed a competitive intelligence platform and pitched it as a startup prototype at UPC's entrepreneurship initiative",
      "Built end-to-end data pipeline processing large-scale datasets using PySpark and Azure Data Factory with real-time Power BI dashboards",
      "Implemented LLaMA-3 for sentiment analysis and trend extraction, uncovering actionable business insights from multiple data sources",
      "Constructed knowledge graph in GraphDB with SPARQL queries for advanced grpah-based analytics",
    ],
    links: {
      github: "https://github.com/kamrulkonok/DigiScan360",
    },
    icon: Database,
    color: "from-blue-500 to-indigo-600",
    type: "Academic Project"
  },
  {
    id: "anomaly-detection",
    title: "Anomaly Detection in Diesel Train Cooling Systems",
    period: "September 2023 – December 2023",
    category: "Data Mining, ML, Anomaly Detection, Time Series Analysis",
    status: "Completed",
    description: "The Cool Train project, sponsored by SNCB's rolling stock team, focuses on analyzing and improving cooling systems of Belgian Railways Class 41 diesel trains. The initiative aims to detect anomalies in cooling systems that could indicate potential failures in engine or transmission operations, helping avoid train delays and ensure operational efficiency.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Streamlit", "OpenWeatherMap API", "Time Series Analysis"],
    achievements: [
      "Collaborated with SNCB's rolling stock team on a large scale time-series dataset analysis of diesel train cooling systems",
      "Implemented comprehensive data preprocessing, weather data integration from OpenWeatherMap API",
      "Developed anomaly detection using K-means clustering and Isolation Forest algorithms to distinguish between sensor noise and genuine cooling system deviations",
      "Created real-time Tableau dashboard for anomaly visualization, enabling data-driven decision-making for the rolling stock team to prevent operational disruptions",
    ],
    links: {
      github: "https://github.com/kamrulkonok/Anomaly-Detection-in-Diesel-Train-Cooling-Systems",
    },
    icon: ChartLine,
    color: "from-green-500 to-emerald-600",
    type: "Academic Project"
  },
  {
    id: "brain-tumor-detection",
    title: "Brain Tumor Detection and Classification using CNN",
    period: "September 2021 – December 2021",
    category: "Bachelor Thesis, DL, Data Augmentation, Medical Imaging",
    status: "Completed",
    description: "Our CNN model achieved validation accuracy of 98% surpassing traditional architectures like VGG-16 (94%), Xception (97%), ResNet-50 (94%), and Inception-V3 (96%). Utilized T1-weighted contrast-enhanced MRI images for tumor classification.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "LaTeX"],
    achievements: [
      "CNN model achieved validation accuracy of 98% surpassing VGG-16 (94%), Xception (97%), ResNet-50 (94%), and Inception-V3 (96%)",
      "Utilized T1-weighted contrast-enhanced MRI images for tumor classification",
      "Enhanced detection accuracy through extensive data augmentation",
      "Classified tumors into meningioma, glioma, pituitary tumor, and no tumor categories",
    ],
    links: {
      github: "https://github.com/kamrulkonok/brain_tumor_detection-classification",
    },
    icon: Brain,
    color: "from-purple-500 to-pink-600",
    type: "Bachelor Thesis"
  },
  {
    id: "disease-prediction",
    title: "AI-Based Disease Prediction System",
    period: "March 2021 – June 2021",
    category: "Full-Stack Web App, ML, Healthcare, Computer Vision",
    status: "Completed",
    description: "A comprehensive healthcare platform developed as part of the 'Software Project Management' course at Sichuan University. The system provides quick and accurate disease predictions using multiple AI algorithms, including symptom-based disease prediction, skin/lung cancer detection via image uploads, and risk assessment for diabetes, breast cancer, and heart disease using various ML models.",
    technologies: ["Python", "React JS", "Django", "REST API", "Scikit-learn", "TensorFlow", "Keras", "Bootstrap", "Machine Learning", "Deep Neural Networks"],
    achievements: [
      "Built a full-stack healthcare platform with secure user authentication for patients and doctors, featuring symptom-based prediction of over 40 diseases using Machine Learning algorithms",
      "Implemented computer vision capabilities for skin and lung cancer detection through deep neural networks, enabling users to upload medical images for instant AI-powered analysis",
      "Developed multiple ML models including Random Forest for breast cancer, SVM for heart disease, and Gradient Boosting for diabetes prediction, providing comprehensive health risk assessment",
      "Created responsive web interface using React JS with Material-UI and Bootstrap, backed by robust Django REST Framework API for scalable healthcare data processing",
    ],
    links: {
      github: "https://github.com/kamrulkonok/disease_prediction_system/tree/main",
    },
    icon: Code,
    color: "from-orange-500 to-red-600",  
    type: "Academic Project"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Featured Projects</h2>
        </motion.div>

        {/* Project Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectSlider projects={projectsData} />
        </motion.div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/kamrulkonok?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
            View More Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 