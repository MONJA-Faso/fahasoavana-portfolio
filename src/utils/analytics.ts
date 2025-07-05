export const gtagEvent = (action: string, category: string, label: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
      });
    }
  };
  