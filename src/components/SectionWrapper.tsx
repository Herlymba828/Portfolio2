"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/animations/variants";
import { cn } from "@/utils/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("relative py-20 px-4 md:px-8 lg:px-16", className)}
    >
      {children}
    </motion.section>
  );
}
