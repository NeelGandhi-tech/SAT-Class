// Minimal analytics shim. Replace console.log with GA4/Meta/Tinybird, etc.
export function trackEvent(eventName, properties = {}) {
  try {
    // Example GA4 usage:
    // window.gtag && window.gtag('event', eventName, properties)
    // For now, log so you can verify in dev tools
    console.log('[analytics]', eventName, properties)
  } catch (_) {}
}

export function trackScrollTo(sectionId) {
  trackEvent('scroll_to_section', { sectionId })
}

