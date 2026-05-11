"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as SimpleIcons from "react-icons/si";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations/variants";
import { skills, skillCategories, type SkillCategory, type Skill } from "@/data/skills";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionWrapper from "@/components/SectionWrapper";

function getSkillIcon(iconName: string) {
  const icon = (SimpleIcons as any)[iconName];
  // Filter out non-component exports
  if (typeof icon === 'function' && icon.length === 1) {
    return icon;
  }
  return null;
}

function SkillCard({ skill }: { skill: Skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = getSkillIcon(skill.icon);

  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      className="glass-card p-6 rounded-xl hover:scale-105 transition-all group"
      whileHover={{
        boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)",
        borderColor: "rgba(124, 58, 237, 0.5)",
      }}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        {IconComponent && (
          <div className="p-4 rounded-lg bg-accent-violet/10 group-hover:bg-accent-violet/20 transition-colors">
            <IconComponent className="h-8 w-8 text-accent-violet" />
          </div>
        )}

        {/* Name */}
        <h3 className="text-lg font-semibold text-text-primary">
          {skill.name}
        </h3>

        {/* Progress Bar */}
        <div className="w-full space-y-2">
          <div className="flex justify-between text-xs text-text-muted">
            <span>Niveau</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 bg-background-tertiary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("Frontend");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <SectionWrapper id="skills" className="bg-background-primary">
      <div className="container mx-auto max-w-6xl">
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
              Compétences Techniques
            </h2>
            <p className="text-text-secondary text-lg">
              Technologies et outils que je maîtrise
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={fadeInUp}>
            <Tabs
              value={activeCategory}
              onValueChange={(value) => setActiveCategory(value as SkillCategory)}
              className="w-full"
            >
              <TabsList className="w-full flex flex-wrap justify-center gap-2 mb-12 bg-transparent">
                {skillCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-6 py-3"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skillCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                  >
                    {filteredSkills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
