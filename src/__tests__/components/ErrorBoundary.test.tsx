import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
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
    // NODE_ENV is inlined at build/transform time by Next.js's SWC transform,
    // so it can't be toggled at test runtime — use the explicit prop instead.
    render(
      <ErrorBoundary showErrorDetails>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Détails de l'erreur/)).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
  });

  it('calls retry function when retry button is clicked', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow={true} />
      </ErrorBoundary>
    );

    // Simulate the underlying issue being resolved: children no longer throw.
    // The boundary still shows the fallback because `hasError` state persists
    // until retry is triggered.
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    );

    const retryButton = screen.getByText('Réessayer');
    fireEvent.click(retryButton);

    expect(screen.getByText('No error')).toBeInTheDocument();
  });
});

describe('SectionErrorFallback', () => {
  it('renders section error fallback with section name', () => {
    const mockRetry = jest.fn();

    render(
      <SectionErrorFallback 
        retry={mockRetry} 
        sectionName="Hero Section" 
      />
    );

    expect(screen.getByText(/Erreur de chargement - Hero Section/)).toBeInTheDocument();
    expect(screen.getByText(/Cette section n'a pas pu se charger/)).toBeInTheDocument();
  });

  it('calls retry function when retry button is clicked', () => {
    const mockRetry = jest.fn();

    render(
      <SectionErrorFallback 
        retry={mockRetry} 
      />
    );

    const retryButton = screen.getByText('Réessayer');
    fireEvent.click(retryButton);

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });
});