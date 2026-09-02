"use client";

import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
  /** Show the raw error message in the fallback UI. Defaults to non-production environments. */
  showErrorDetails?: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    
    // Log to external service in production
    if (process.env.NODE_ENV === "production") {
      // Example: Sentry, LogRocket, etc.
      // logErrorToService(error, errorInfo);
    }

    this.setState({
      error,
      errorInfo,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} retry={this.handleRetry} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background-primary">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="mb-6">
              <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-text-primary mb-2">
                Oops! Quelque chose s&apos;est mal passé
              </h1>
              <p className="text-text-secondary">
                Une erreur inattendue s&apos;est produite. Veuillez réessayer.
              </p>
            </div>

            {(this.props.showErrorDetails ?? process.env.NODE_ENV === "development") &&
              this.state.error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-left">
                <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                  Détails de l&apos;erreur (développement):
                </h3>
                <pre className="text-xs text-red-700 dark:text-red-300 overflow-auto">
                  {this.state.error.message}
                </pre>
              </div>
            )}

            <div className="space-y-3">
              <Button onClick={this.handleRetry} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Réessayer
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Recharger la page
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook pour les composants fonctionnels
export function useErrorHandler() {
  return (error: Error, _errorInfo?: React.ErrorInfo) => {
    console.error("Error caught by useErrorHandler:", error, _errorInfo);
    
    if (process.env.NODE_ENV === "production") {
      // Log to external service
      // logErrorToService(error, _errorInfo);
    }
  };
}

// Composant d'erreur personnalisé pour les sections
export function SectionErrorFallback({
  retry,
  sectionName
}: {
  retry: () => void;
  sectionName?: string;
}) {
  return (
    <div className="py-20 px-4 text-center">
      <div className="max-w-md mx-auto">
        <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-text-primary mb-2">
          Erreur de chargement {sectionName && `- ${sectionName}`}
        </h3>
        <p className="text-text-secondary mb-4">
          Cette section n&apos;a pas pu se charger correctement.
        </p>
        <Button onClick={retry} size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Réessayer
        </Button>
      </div>
    </div>
  );
}

export default ErrorBoundary;