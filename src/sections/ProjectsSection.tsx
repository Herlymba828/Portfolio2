"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { fadeInUp, staggerContainer, scaleIn } from "@/animations/variants";
import { type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      variants={scaleIn}
      className={`glass-card rounded-xl overflow-hidden group hover:scale-[1.02] transition-all ${
        featured ? "lg:col-span-3" : ""
      }`}
      whileHover={{
        boxShadow: "0 20px 40px rgba(124, 58, 237, 0.2)",
        borderColor: "rgba(124, 58, 237, 0.5)",
      }}
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-white/10">
            {project.title.split(" ")[0]}
          </div>
        </div>
        
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-accent-violet">
              <Star className="h-3 w-3 mr-1" />
              Projet phare
            </Badge>
          </div>
        )}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-background-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
          {!project.github && (
            <Badge variant="secondary">Projet privé</Badge>
          )}
          {project.demo && (
            <Button variant="default" size="sm" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 8 : 4).map((tech: string) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.stack.length > (featured ? 8 : 4) && (
            <Badge variant="outline" className="text-xs">
              +{project.stack.length - (featured ? 8 : 4)}
            </Badge>
          )}
        </div>

        {/* Features (only for featured) */}
        {featured && (
          <div className="pt-2">
            <p className="text-xs font-semibold text-accent-violet mb-2">
              Fonctionnalités clés :
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
              {project.features.slice(0, 4).map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent-cyan mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture (only for featured) */}
        {featured && (
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-semibold text-accent-cyan mb-2">
              Architecture :
            </p>
            <p className="text-xs text-text-secondary leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Results */}
        {project.results && project.results.length > 0 && (
          <div className="pt-2 border-t border-border">
            <p className="text-xs font-semibold text-accent-blue mb-2">
              Résultats :
            </p>
            <ul className="space-y-1 text-xs text-text-secondary">
              {project.results.slice(0, 2).map((result: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="bg-background-secondary">
      <div className="container mx-auto max-w-7xl">
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
              Projets Phares
            </h2>
            <p className="text-text-secondary text-lg">
              Réalisations techniques et projets d&apos;ingénierie avancés
            </p>
          </motion.div>

          {/* Featured Project */}
          {featuredProject && (
            <motion.div variants={fadeInUp}>
              <ProjectCard project={featuredProject} featured />
            </motion.div>
          )}

          {/* Other Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* GitHub Link */}
          <motion.div variants={fadeInUp} className="text-center pt-8">
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Herlymba828"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                Voir tous les projets sur GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
