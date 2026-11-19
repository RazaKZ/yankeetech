const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf-8');

// 1. Add GA4 / Google Ads conversion tracking dispatcher at the top of script.js
const trackingDispatcherCode = `// ==========================================================================
// 1B. CONVERSION TRACKING & ANALYTICS (GA4 & Google Ads Event Hooks)
// ==========================================================================
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
window.gtag = window.gtag || gtag;

window.trackConversionEvent = function(eventName, eventParams) {
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString()
    });
    console.log('[Analytics Event Tracked]', eventName, eventParams);
  } catch (err) {
    console.warn('[Analytics Error]', err);
  }
};

// Global click tracking for WhatsApp & Consultation Booking
document.addEventListener('click', function(e) {
  const target = e.target.closest('a');
  if (!target) return;
  const href = target.getAttribute('href') || '';

  if (href.includes('wa.me') || href.includes('whatsapp.com')) {
    window.trackConversionEvent('click_whatsapp', {
      link: href,
      label: target.textContent.trim() || 'WhatsApp CTA'
    });
  } else if (href.includes('calendly.com') || (href.includes('#contact') && target.textContent.toLowerCase().includes('book'))) {
    window.trackConversionEvent('schedule_call', {
      link: href,
      label: target.textContent.trim() || 'Book Call CTA'
    });
  }
});
`;

if (!js.includes('1B. CONVERSION TRACKING & ANALYTICS')) {
  const marker = '// 2. PROJECT PRICE ESTIMATOR STATE & CONFIG';
  js = js.replace(marker, trackingDispatcherCode + '\n' + marker);
  console.log('Added conversion tracking dispatcher!');
}

// 2. Add generate_lead to handleMultiStepFormSubmit
const oldSubmitCode = `  if (formWrap) formWrap.classList.add('hidden');
  if (successScreen) successScreen.classList.remove('hidden');`;

const newSubmitCode = `  if (formWrap) formWrap.classList.add('hidden');
  if (successScreen) successScreen.classList.remove('hidden');

  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('generate_lead', {
      service: multiStepData.service || 'Custom Development',
      scope: multiStepData.scope || 'Standard',
      budget: multiStepData.budget || '$2,500+',
      timeline: multiStepData.timeline || '4-6 Weeks',
      name: name,
      email: email
    });
  }`;

if (js.includes(oldSubmitCode)) {
  js = js.replace(oldSubmitCode, newSubmitCode);
  console.log('Added generate_lead event to form submission!');
}

fs.writeFileSync('script.js', js, 'utf-8');
console.log('Saved script.js');
