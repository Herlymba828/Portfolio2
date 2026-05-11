"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { fadeInUp, staggerContainer } from "@/animations/variants";
import { personal } from "@/data/personal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionWrapper from "@/components/SectionWrapper";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Échec de l&apos;envoi du message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-background-secondary">
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
              Contact
            </h2>
            <p className="text-text-secondary text-lg">
              Discutons de votre prochain projet
            </p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-violet/10">
                    <Mail className="h-6 w-6 text-accent-violet" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Email</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-text-primary hover:text-accent-cyan transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-cyan/10">
                    <Phone className="h-6 w-6 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Téléphone</p>
                    <div className="space-y-1">
                      {personal.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone}`}
                          className="block text-text-primary hover:text-accent-cyan transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent-blue/10">
                    <MapPin className="h-6 w-6 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Localisation</p>
                    <p className="text-text-primary">{personal.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-sm text-text-muted">Réseaux sociaux</p>
                <div className="flex gap-4">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-light hover:glass transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-text-muted hover:text-accent-violet transition-colors" />
                  </a>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-light hover:glass transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-text-muted hover:text-accent-cyan transition-colors" />
                  </a>
                  <a
                    href={`https://wa.me/${personal.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-light hover:glass transition-all hover:scale-110 bg-green-500/10"
                    aria-label="WhatsApp"
                  >
                    <SiWhatsapp className="h-5 w-5 text-green-500" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    aria-describedby="email-error"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Sujet de votre message"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Votre message..."
                    rows={5}
                    aria-describedby="message-error"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm">
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
