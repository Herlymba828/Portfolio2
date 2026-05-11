"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { education, type Education } from "@/data/education";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/SectionWrapper";

function EducationCard({ edu }: { edu: Education }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent-cyan border-4 border-background-secondary z-10" />

      {/* Timeline Line */}
      <div className="absolute left-[7px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan to-transparent" />

      {/* Content */}
      <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className="p-3 rounded-lg bg-accent-cyan/10">
            <GraduationCap className="h-6 w-6 text-accent-cyan" />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-3">
            {/* Institution */}
            <h3 className="text-xl font-bold text-text-primary">
              {edu.institution}
            </h3>

            {/* Degree */}
            <p className="text-accent-violet font-semibold">{edu.degree}</p>

            {/* Period */}
            <div className="flex items-center gap-2">
              <Badge variant={edu.current ? "default" : "secondary"}>
                {edu.period}
              </Badge>
              {edu.current && (
                <Badge variant="outline" className="border-green-500 text-green-500">
                  En cours
                </Badge>
              )}
            </div>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed">
              {edu.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EducationSection() {
  return (
    <SectionWrapper id="education" className="bg-background-secondary">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Formation
            </h2>
            <p className="text-text-secondary text-lg">
              Parcours académique et diplômes
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={staggerContainer} className="relative">
            {education.map((edu) => (
              <EducationCard key={edu.id} edu={edu} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
