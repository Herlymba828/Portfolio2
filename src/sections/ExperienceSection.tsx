"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/animations/variants";
import { experiences, type Experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import SectionWrapper from "@/components/SectionWrapper";

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      variants={isLeft ? slideInLeft : slideInRight}
      className="relative flex items-center"
    >
      {/* Timeline Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-violet border-4 border-background-primary z-10" />

      {/* Content */}
      <div
        className={`w-full lg:w-[calc(50%-2rem)] ${
          isLeft ? "lg:pr-8 lg:text-right" : "lg:pl-8 lg:ml-auto"
        }`}
      >
        <div className="glass-card p-6 rounded-xl hover:scale-105 transition-transform">
          {/* Type Badge */}
          <Badge variant="outline" className="mb-3">
            {experience.type}
          </Badge>

          {/* Title */}
          <h3 className="text-xl font-bold text-text-primary mb-2">
            {experience.title}
          </h3>

          {/* Period */}
          <p className="text-sm text-accent-cyan mb-4">{experience.period}</p>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className={`flex flex-wrap gap-2 ${isLeft ? "lg:justify-end" : ""}`}>
            {experience.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="bg-background-primary">
      <div className="container mx-auto max-w-5xl">
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
              Expériences Techniques
            </h2>
            <p className="text-text-secondary text-lg">
              Projets avancés & réalisations d&apos;ingénierie
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 timeline-line hidden lg:block" />

            {/* Experience Cards */}
            <motion.div variants={staggerContainer} className="space-y-12">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={experience.id}
                  experience={experience}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
