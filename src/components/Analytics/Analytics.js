import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Google Analytics 4 tracking code
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 tracking ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Track page views on route changes
    const trackPageView = (url) => {
      gtag('config', GA_TRACKING_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Track custom events
    const trackEvent = (action, category, label, value) => {
      gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    };

    // Make tracking functions globally available
    window.trackPageView = trackPageView;
    window.trackEvent = trackEvent;

    // Track scroll depth
    let maxScrollDepth = 0;
    const trackScrollDepth = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100);
      
      if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0) {
        maxScrollDepth = scrollPercent;
        trackEvent('scroll_depth', 'engagement', `${scrollPercent}%`, scrollPercent);
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', 'engagement', 'seconds', timeSpent);
    };

    // Add event listeners
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Track form submissions
    const trackFormSubmission = (e) => {
      const form = e.target;
      if (form.tagName === 'FORM') {
        trackEvent('form_submit', 'engagement', form.className || 'contact_form', 1);
      }
    };

    // Track button clicks
    const trackButtonClick = (e) => {
      const button = e.target.closest('button, a');
      if (button) {
        const buttonText = button.textContent?.trim() || button.className;
        trackEvent('button_click', 'engagement', buttonText, 1);
      }
    };

    document.addEventListener('submit', trackFormSubmission);
    document.addEventListener('click', trackButtonClick);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      document.removeEventListener('submit', trackFormSubmission);
      document.removeEventListener('click', trackButtonClick);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default Analytics;
