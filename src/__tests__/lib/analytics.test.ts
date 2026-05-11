import { analytics, trackEvent, trackPageView } from '@/lib/analytics';

// Mock window.gtag
const mockGtag = jest.fn();
Object.defineProperty(window, 'gtag', {
  value: mockGtag,
  writable: true,
});

// Mock environment variable
process.env.NEXT_PUBLIC_GA_ID = 'GA-TEST-ID';

describe('Analytics', () => {
  beforeEach(() => {
    mockGtag.mockClear();
  });

  describe('trackEvent', () => {
    it('calls gtag with correct parameters', () => {
      trackEvent('test_action', 'test_category', 'test_label', 100);

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: 'test_label',
        value: 100,
      });
    });

    it('works without optional parameters', () => {
      trackEvent('test_action', 'test_category');

      expect(mockGtag).toHaveBeenCalledWith('event', 'test_action', {
        event_category: 'test_category',
        event_label: undefined,
        value: undefined,
      });
    });
  });

  describe('trackPageView', () => {
    it('calls gtag config with correct parameters', () => {
      trackPageView('/test-page', 'Test Page');

      expect(mockGtag).toHaveBeenCalledWith('config', 'GA-TEST-ID', {
        page_title: 'Test Page',
        page_location: '/test-page',
      });
    });
  });

  describe('analytics object', () => {
    it('trackNavigation calls trackEvent with correct parameters', () => {
      analytics.trackNavigation('hero');

      expect(mockGtag).toHaveBeenCalledWith('event', 'navigate', {
        event_category: 'navigation',
        event_label: 'hero',
        value: undefined,
      });
    });

    it('trackThemeChange calls trackEvent with correct parameters', () => {
      analytics.trackThemeChange('dark');

      expect(mockGtag).toHaveBeenCalledWith('event', 'theme_change', {
        event_category: 'ui',
        event_label: 'dark',
        value: undefined,
      });
    });

    it('trackContactFormSubmit calls trackEvent with correct parameters', () => {
      analytics.trackContactFormSubmit();

      expect(mockGtag).toHaveBeenCalledWith('event', 'submit', {
        event_category: 'contact_form',
        event_label: 'form_submission',
        value: undefined,
      });
    });

    it('trackCVDownload calls trackEvent with correct parameters', () => {
      analytics.trackCVDownload();

      expect(mockGtag).toHaveBeenCalledWith('event', 'download', {
        event_category: 'cv',
        event_label: 'pdf_download',
        value: undefined,
      });
    });

    it('trackSocialClick calls trackEvent with correct parameters', () => {
      analytics.trackSocialClick('github');

      expect(mockGtag).toHaveBeenCalledWith('event', 'click', {
        event_category: 'social',
        event_label: 'github',
        value: undefined,
      });
    });
  });
});