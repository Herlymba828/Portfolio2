import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary, { SectionErrorFallback } from '@/components/ErrorBoundary';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('ErrorBoundary', () => {
  // Suppress console.error for these tests
  const originalError = console.error;
  beforeAll(() => {
    console.error = jest.fn();
  });
  afterAll(() => {
    console.error = originalError;
  });

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  it('renders error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Quelque chose s'est mal passé/)).toBeInTheDocument();
    expect(screen.getByText('Réessayer')).toBeInTheDocument();
    expect(screen.getByText('Recharger la page')).toBeInTheDocument();
  });

  it('shows error details in development mode', () => {
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Détails de l'erreur/)).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();

    process.env.NODE_ENV = originalEnv;
  });

  it('calls retry function when retry button is clicked', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('Réessayer');
    fireEvent.click(retryButton);

    // After retry, component should try to render children again
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    expect(screen.getByText('No error')).toBeInTheDocument();
  });
});

describe('SectionErrorFallback', () => {
  it('renders section error fallback with section name', () => {
    const mockRetry = jest.fn();
    const mockError = new Error('Section error');

    render(
      <SectionErrorFallback 
        error={mockError} 
        retry={mockRetry} 
        sectionName="Hero Section" 
      />
    );

    expect(screen.getByText(/Erreur de chargement - Hero Section/)).toBeInTheDocument();
    expect(screen.getByText(/Cette section n'a pas pu se charger/)).toBeInTheDocument();
  });

  it('calls retry function when retry button is clicked', () => {
    const mockRetry = jest.fn();
    const mockError = new Error('Section error');

    render(
      <SectionErrorFallback 
        error={mockError} 
        retry={mockRetry} 
      />
    );

    const retryButton = screen.getByText('Réessayer');
    fireEvent.click(retryButton);

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });
});