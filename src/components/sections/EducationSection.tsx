"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {MapPin, Calendar, Award, Star, FileText } from "lucide-react";

const educationData = [
  {
    id: "bdma",
    title: "Erasmus Mundus Masters in Big Data Management and Analytics (BDMA)",
    period: "2023 – Present",
    type: "Masters Program",
    logo: "/images/bdma-logo.png",
    semesters: [
      {
        semester: "Semester 1",
        university: "Université libre de Bruxelles (ULB)",
        location: "Brussels, Belgium",
        degree: "Master of Science in Computer Science and Engineering",
        logo: "/images/ulb-logo.png",
        period: "Sept 2023 – Jan 2024",
      },
      {
        semester: "Semester 2",
        university: "Universitat Politècnica de Catalunya (UPC)",
        location: "Barcelona, Spain",
        degree: "Master Erasmus Mundus in Big Data Management and Analytics",
        logo: "/images/upc-logo.png",
        period: "Feb 2024 – Jun 2024",
      },
      {
        semester: "Semester 3 & 4",
        university: "CentraleSupélec (CS), Université Paris-Saclay",
        location: "Paris, France",
        degree: "Master of Science in Engineering",
        logo: "/images/cs-logo.jpg",
        period: "Sept 2024 – Present",
      },
    ],
  },
  {
    id: "scu",
    title: "Sichuan University",
    period: "2018 – 2022",
    location: "Chengdu, China",
    type: "Bachelor's Degree",
    logo: "/images/scu-logo.png",
    achievements: [
      { icon: Star, text: "Average Grade: 87/100" },
      { icon: FileText, text: "Bachelor Thesis: Brain Tumor Detection and Classification using CNN" },
      { icon: Award, text: "Best Bachelor Thesis Award" },
    ],
  },
];

export default function EducationSection() {
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
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-lg text-foreground mb-4">Education</h2>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((education, index) => (
            <motion.div
              key={education.id}
              className="relative"
              variants={itemVariants}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="card-modern p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col gap-6">
                  {/* Header Section - Matching your HTML structure */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={education.logo}
                        alt={`${education.title} logo`}
                        fill
                        className="object-contain rounded-full bg-white p-2 shadow-sm"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-semibold text-foreground leading-tight mb-2 flex items-center gap-3">
                        <Award className="h-7 w-7 text-primary" />
                        {education.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{education.period}</span>
                        </div>
                        {education.location && (
                          <>
                            <span className="text-muted-foreground">|</span>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-primary" />
                              <span>{education.location}</span>
                            </div>
                          </>
                        )}
                      </div>
                      {/* Degree title for bachelor's - positioned same as master's */}
                      {education.id === "scu" && (
                        <em className="text-muted-foreground text-sm block mt-2">
                          Bachelor of Engineering in Software Engineering
                        </em>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-4">
                    {/* Semesters for BDMA */}
                    {education.semesters && (
                      <ul className="space-y-6 pl-2">
                        {education.semesters.map((semester, semIndex) => (
                          <motion.li
                            key={semester.semester}
                            className="flex items-start gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * semIndex }}
                            viewport={{ once: true }}
                          >
                            <div className="relative w-[180px] h-[70px] flex-shrink-0">
                              <Image
                                src={semester.logo}
                                alt={`${semester.university} logo`}
                                fill
                                className="object-contain bg-white rounded p-1 shadow-sm"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="mb-1">
                                <strong className="text-foreground font-medium">
                                  {semester.semester}:
                                </strong>
                              </div>
                              <div className="text-foreground font-semibold mb-1">
                                {semester.university}
                              </div>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-3 w-3 text-primary" />
                                  <span>{semester.period}</span>
                                  <span className="text-muted-foreground">|</span>
                                  <MapPin className="h-3 w-3 text-primary" />
                                  <span>{semester.location}</span>
                                </div>
                                <em className="text-muted-foreground text-sm block mt-1">
                                  {semester.degree}
                                </em>
                              </div>
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {/* Bachelor Details for Sichuan University */}
                    {education.id === "scu" && (
                      <div className="pl-2">
                        {/* Achievements with small space above */}
                        <div className="space-y-4 mt-2">
                          {education.achievements && education.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achievement.text}
                              className="flex items-center gap-3"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * achIndex }}
                              viewport={{ once: true }}
                            >
                              <achievement.icon className="h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-muted-foreground text-base">{achievement.text}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 