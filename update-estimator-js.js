const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf-8');

const newEstimatorLogic = `// ==========================================================================
// 2. PROJECT PRICE ESTIMATOR STATE & CONFIG (Developer Brief Page 4 & 5)
// ==========================================================================
let currentTrack = 'starter_mvp';
let currentCurrency = 'USD';

const currencyRates = {
  USD: { symbol: '$', rate: 1 }
};

const tracksConfig = {
  starter_mvp: {
    title: 'Starter SaaS MVP',
    baseName: 'Starter MVP (Core Workflow, Auth & Admin)',
    baseCost: 2200,
    baseWeeks: 4,
    timelineStr: '4 to 6 Weeks',
    contactOption: 'SaaS MVP Development for Startups'
  },
  custom_app: {
    title: 'Custom Web App / Portal',
    baseName: 'Business Web Application or Client Portal',
    baseCost: 2500,
    baseWeeks: 6,
    timelineStr: '6 to 8 Weeks',
    contactOption: 'Custom Web Application Development'
  },
  platform_saas: {
    title: 'Custom Platform or SaaS',
    baseName: 'Multi-Tenant Custom Platform / SaaS Engine',
    baseCost: 3000,
    baseWeeks: 8,
    timelineStr: '8 to 12 Weeks',
    contactOption: 'Full-Stack Web App (Laravel / React / Next.js)'
  },
  dedicated_dev: {
    title: 'Dedicated Senior Developer',
    baseName: 'Senior Full-Stack Developer (Billed Monthly)',
    baseCost: 1500,
    baseWeeks: 4,
    timelineStr: 'Monthly Retainer',
    contactOption: 'Dedicated Developer / White-Label Team'
  },
  quick_solutions: {
    title: 'Quick Solutions & Integrations',
    baseName: 'Fast-Track Setup or API Webhook Integration',
    baseCost: 400,
    baseWeeks: 1,
    timelineStr: '1 to 2 Weeks',
    contactOption: 'Custom API Integration Services'
  }
};

function formatMoney(usdAmount) {
  return '$' + Math.round(usdAmount).toLocaleString();
}

function selectTrack(trackKey) {
  currentTrack = trackKey;
  document.querySelectorAll('.track-btn').forEach(btn => {
    if (btn.getAttribute('data-track') === trackKey) {
      btn.className = 'track-btn text-left p-4 rounded-2xl border-2 border-brand-600 bg-white shadow-md transition flex items-start gap-3.5 ring-2 ring-brand-500/10';
    } else {
      btn.className = 'track-btn text-left p-4 rounded-2xl border-2 border-purple-100 bg-white/70 hover:bg-white transition flex items-start gap-3.5';
    }
  });
  updateEstimate();
}

function selectEstimatorPreset(trackKey) {
  selectTrack(trackKey);
}

function updateEstimate() {
  const cfg = tracksConfig[currentTrack];
  if (!cfg) return;

  // Calculate Addons
  let addonsCost = 0;
  const addonsListEl = document.getElementById('breakdownAddonsList');
  if (addonsListEl) {
    addonsListEl.innerHTML = '';
  }

  const selectedAddonNames = [];
  document.querySelectorAll('.addon-check:checked').forEach(chk => {
    const name = chk.getAttribute('data-name');
    const cost = parseInt(chk.getAttribute('data-cost'), 10) || 0;
    addonsCost += cost;
    selectedAddonNames.push(name);

    if (addonsListEl) {
      const row = document.createElement('div');
      row.className = 'flex items-center justify-between text-purple-200 py-1 text-xs border-b border-white/5';
      row.innerHTML = \`
        <span class="flex items-center gap-1.5"><i class="fa-solid fa-check text-[10px] text-emerald-400"></i> \${name}</span>
        <span class="font-bold text-white">\${formatMoney(cost)}</span>
      \`;
      addonsListEl.appendChild(row);
    }
  });

  const totalBaseUsd = cfg.baseCost + addonsCost;
  // Range calculation per Developer Brief Page 4 (about plus or minus 10 percent)
  const lowRangeUsd = Math.round((totalBaseUsd * 0.90) / 50) * 50;
  const highRangeUsd = Math.round((totalBaseUsd * 1.10) / 50) * 50;

  // Update Summary Card
  const summaryTrackTitle = document.getElementById('summaryTrackTitle');
  const summaryTotalDisplay = document.getElementById('summaryTotalDisplay');
  const summaryTimeline = document.getElementById('summaryTimeline');
  const summaryBaseCost = document.getElementById('summaryBaseCost');

  if (summaryTrackTitle) summaryTrackTitle.textContent = cfg.title;
  if (summaryTotalDisplay) summaryTotalDisplay.textContent = \`\${formatMoney(lowRangeUsd)} – \${formatMoney(highRangeUsd)}\`;
  if (summaryBaseCost) summaryBaseCost.textContent = formatMoney(cfg.baseCost);
  if (summaryTimeline) summaryTimeline.textContent = cfg.timelineStr;

  // Breakdown items
  const baseNameEl = document.getElementById('breakdownBaseName');
  const baseCostEl = document.getElementById('breakdownBaseCost');
  if (baseNameEl) baseNameEl.textContent = cfg.baseName;
  if (baseCostEl) baseCostEl.textContent = formatMoney(cfg.baseCost);

  // Conversion tracking helper
  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('calculate_estimate', {
      track: cfg.title,
      low: lowRangeUsd,
      high: highRangeUsd
    });
  }
}

function resetEstimator() {
  document.querySelectorAll('.addon-check').forEach(c => { c.checked = false; });
  selectTrack('starter_mvp');
}

function applyEstimateToContact() {
  const cfg = tracksConfig[currentTrack];
  if (!cfg) return;

  const priceRange = document.getElementById('summaryTotalDisplay')?.textContent.trim() || '';
  const timeline = document.getElementById('summaryTimeline')?.textContent.trim() || '';

  const selectedAddons = [];
  document.querySelectorAll('.addon-check:checked').forEach(chk => {
    selectedAddons.push(chk.getAttribute('data-name'));
  });

  const projectSelect = document.getElementById('contactProjectType');
  if (projectSelect) projectSelect.value = cfg.contactOption;

  const summaryText =
    \`Hi Yankee Tech Team,\\n\\nI configured an estimate using your Project Price Estimator:\\n\` +
    \`• Project Type: \${cfg.title}\\n\` +
    \`• Base Architecture: \${cfg.baseName} (\${formatMoney(cfg.baseCost)})\\n\` +
    \`• Selected Features: \${selectedAddons.length ? selectedAddons.join(', ') : 'Base Scope'}\\n\` +
    \`• Estimated Range: \${priceRange} (\${timeline})\\n\` +
    \`• Payment Terms: Milestone-Based (30% / 30% / 40%)\\n\\n\` +
    \`Let's book a scoping call to confirm technical specs and lock in the timeline!\`;

  const contactMessage = document.getElementById('contactMessage');
  if (contactMessage) contactMessage.value = summaryText;

  const notesField = document.getElementById('msNotes');
  if (notesField) notesField.value = summaryText;

  if (typeof window.trackConversionEvent === 'function') {
    window.trackConversionEvent('schedule_call', {
      source: 'estimator_button',
      project: cfg.title
    });
  }

  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
  }
}`;

const estStartIndex = js.indexOf('// ==========================================================================\n// 2. PROJECT PRICE ESTIMATOR STATE & CONFIG');
const faqSectionIndex = js.indexOf('// ==========================================================================\n// 3. FAQ ACCORDION');

if (estStartIndex !== -1 && faqSectionIndex !== -1) {
  js = js.slice(0, estStartIndex) + newEstimatorLogic + '\n\n' + js.slice(faqSectionIndex);
  console.log('Successfully replaced estimator in script.js!');
} else {
  console.log('Not found:', estStartIndex, faqSectionIndex);
}

fs.writeFileSync('script.js', js, 'utf-8');
console.log('Saved script.js');
