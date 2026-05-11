"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations/variants";
import { domains, type Domain } from "@/data/certifications";
import SectionWrapper from "@/components/SectionWrapper";

function DomainCard({ domain }: { domain: Domain }) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<any>>)[domain.icon];

  const colorClasses = {
    violet: "from-accent-violet/20 to-accent-violet/5 border-accent-violet/30 hover:border-accent-violet",
    cyan: "from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/30 hover:border-accent-cyan",
    blue: "from-accent-blue/20 to-accent-blue/5 border-accent-blue/30 hover:border-accent-blue",
    indigo: "from-accent-indigo/20 to-accent-indigo/5 border-accent-indigo/30 hover:border-accent-indigo",
  };

  const iconColorClasses = {
    violet: "text-accent-violet",
    cyan: "text-accent-cyan",
    blue: "text-accent-blue",
    indigo: "text-accent-indigo",
  };

  return (
    <motion.div
      variants={scaleIn}
      className={`relative p-6 rounded-xl border-2 bg-gradient-to-br ${colorClasses[domain.color as keyof typeof colorClasses]} transition-all hover:scale-105 group`}
      whileHover={{
        boxShadow: `0 20px 40px rgba(124, 58, 237, 0.2)`,
      }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        {IconComponent && (
          <div className={`p-4 rounded-lg bg-background-primary/50 ${iconColorClasses[domain.color as keyof typeof iconColorClasses]}`}>
            <IconComponent className="h-8 w-8" />
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary text-center mb-3 group-hover:text-accent-cyan transition-colors">
        {domain.title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm text-center leading-relaxed">
        {domain.description}
      </p>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className={`absolute inset-0 rounded-xl blur-xl ${colorClasses[domain.color as keyof typeof colorClasses]}`} />
      </div>
    </motion.div>
  );
}

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="bg-background-primary">
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
              Domaines d&apos;Expertise
            </h2>
            <p className="text-text-secondary text-lg">
              Compétences avancées et spécialisations techniques
            </p>
          </motion.div>

          {/* Domains Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {domains.map((domain) => (
              <DomainCard key={domain.id} domain={domain} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
