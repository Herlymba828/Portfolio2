"use client";

import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personal } from "@/data/personal";

interface CVDownloaderProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showIcon?: boolean;
  className?: string;
}

export default function CVDownloader({
  variant = "default",
  size = "default",
  showIcon = true,
  className = "",
}: CVDownloaderProps) {
  const isExternalLink = personal.cvFile.startsWith('http');
  const IconComponent = isExternalLink ? ExternalLink : Download;
  const buttonText = isExternalLink ? "Voir CV" : "Télécharger CV";
  const ariaLabel = isExternalLink ? "Voir le CV (s'ouvre dans un nouvel onglet)" : "Télécharger le CV";

  const handleDownload = () => {
    if (isExternalLink) {
      window.open(personal.cvFile, '_blank');
    } else {
      // Si c'est un fichier local, télécharger directement
      const link = document.createElement("a");
      link.href = personal.cvFile;
      link.download = "CV-Herly-Charmand-MAMBOUNDOU-MOULOUNGUI.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      className={className}
      aria-label={ariaLabel}
    >
      {showIcon && <IconComponent className="mr-2 h-4 w-4" />}
      {buttonText}
    </Button>
  );
}
