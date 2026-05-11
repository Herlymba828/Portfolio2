"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { MapPin, CheckCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { about } from "@/data/about";
import { personal } from "@/data/personal";
import SectionWrapper from "@/components/SectionWrapper";

type LucideIcon = React.ComponentType<any>;

function getIconComponent(iconName: string): LucideIcon | null {
  const icon = (LucideIcons as any)[iconName];
  // Filter out non-component exports like the Icon factory function
  if (typeof icon === 'function' && icon.length === 1) {
    return icon;
  }
  return null;
}

function AnimatedCounter({ value, isText = false }: { value: number | string; isText?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !isText) {
      motionValue.set(value as number);
    }
  }, [isInView, motionValue, value, isText]);

  useEffect(() => {
    if (isText) return;

    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue, isText]);

  if (isText) {
    return (
      <span ref={ref} className="text-4xl font-bold gradient-text">
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl font-bold gradient-text">
      0
    </span>
  );
}

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="bg-background-secondary">
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
              À Propos
            </h2>
            <p className="text-text-secondary text-lg">
              Développeur passionné par les défis techniques complexes
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="prose prose-invert max-w-none">
                {about.bio.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-light">
                  <MapPin className="h-4 w-4 text-accent-cyan" />
                  <span className="text-sm text-text-secondary">{personal.location}</span>
                </div>

                {personal.available && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-light">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-text-secondary">Disponible</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right Column - Stats */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 gap-6"
            >
              {about.stats.map((stat, index) => {
                const IconComponent = getIconComponent(stat.icon);

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="glass-card p-6 rounded-xl hover:scale-105 transition-transform"
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {IconComponent && (
                        <IconComponent className="h-8 w-8 text-accent-violet" />
                      )}
                      <div className="flex items-baseline gap-1">
                        <AnimatedCounter
                          value={stat.value}
                          isText={stat.isText}
                        />
                        {!stat.isText && (
                          <span className="text-2xl font-bold text-accent-cyan">
                            {stat.suffix}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-text-secondary font-medium">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
