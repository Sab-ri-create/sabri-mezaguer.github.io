/* ==========================================================================
   DATA — approved brand / KPI content. Do not invent numbers here.
   ========================================================================== */
const BRANDS = [
  {
    id: 'clear',
    name: 'Clear Men',
    category: 'Brand Management / Social Media / Campaign Strategy',
    logo: 'assets/logos/clear.png',
    role: [
      'Social media strategy',
      'Content planning & production',
      'Campaign development',
      'Influencer management',
      'Community management',
      'Performance tracking'
    ],
    objective: 'Leverage the global partnership with FIFA to strengthen brand relevance and drive engagement around men\u2019s confidence and performance.',
    description: 'Developed and executed the digital strategy around the partnership, with locally relevant content, engaging influencer activations and community management.',
    kpis: [
      { num: '100K+', label: 'Followers' },
      { num: '#1', label: 'Worldwide ranking' },
      { num: 'Millions', label: 'Of impressions' }
    ],
    cardKpis: ['100K+ Followers', '#1 Worldwide ranking', 'Millions of impressions'],
    visual: 'assets/images/clear-visual.jpg'
  },
  {
    id: 'bionnex',
    name: 'Bionnex',
    category: 'Brand Management / Content Strategy / Social Media',
    logo: 'assets/logos/bionnex.png',
    role: ['Brand management', 'Content strategy', 'Social media planning', 'Creative direction'],
    objective: 'Position Bionnex as a trusted dermo-cosmetics brand and build a consistent content ecosystem across channels.',
    description: 'Built and managed the brand\u2019s content system, aligning a dermo-cosmetics positioning with an editorial, credibility-first social presence.',
    kpis: [
      { num: '60+', label: 'Content pieces managed' },
      { num: 'Coherent', label: 'Feed' },
      { num: 'Engaged', label: 'Community' },
      { num: 'Strong', label: 'Brand image' }
    ],
    cardKpis: ['60+ Content pieces managed', 'Coherent feed', 'Engaged community'],
    visual: 'assets/images/bionnex-visual.jpg'
  },
  {
    id: 'signal',
    name: 'Signal White Now',
    category: 'Brand Management · Social Media · Influencer / Creator-led content',
    logo: 'assets/logos/signal.png',
    role: ['Brand management', 'Community management', 'Influencer coordination'],
    objective: 'Build community and engagement for the Signal White Now range through consistent, creator-led brand communication.',
    description: 'Managed the brand\u2019s social community and coordinated influencer touchpoints to support the product range\u2019s visibility.',
    kpis: [
      { num: '13.4K', label: 'Followers' },
      { num: 'Authentic', label: 'Community' },
      { num: 'Engaging', label: 'Content' },
      { num: 'Positive', label: 'Impact' }
    ],
    cardKpis: ['13.4K Followers', 'Authentic community', 'Engaging content'],
    visual: 'assets/images/signal-visual.jpg'
  },
  {
    id: 'cheezy',
    name: 'Cheezy',
    category: 'Brand Management · Campaign Strategy · Digital Activation',
    logo: 'assets/logos/cheezy.png',
    role: ['Campaign strategy', 'Content production', 'Community management', 'UGC sourcing'],
    objective: 'Drive engagement and community participation through a high-volume, UGC-led content strategy.',
    description: 'Ran a UGC-led campaign strategy that turned the community into a content engine, sustaining a high volume of organic participation.',
    kpis: [
      { num: '120+', label: 'Content pieces managed' },
      { num: 'High', label: 'Community engagement' },
      { num: 'Strong', label: 'Brand loyalty & interaction' }
    ],
    cardKpis: ['120+ Content pieces managed', 'High community engagement', 'Strong brand loyalty'],
    visual: 'assets/images/cheezy-visual.jpg'
  },
  {
    id: 'lg',
    name: 'LG',
    category: 'Consumer Electronics / Brand Communication / Social Media / UGC Management',
    logo: 'assets/logos/lg.png',
    role: ['Content production', 'Social media management', 'Brand communication', 'UGC coordination'],
    objective: 'Support LG\u2019s brand communication with a steady stream of relevant, high-frequency content and managed UGC.',
    description: 'Delivered a high-frequency content operation and managed a network of UGC profiles to keep the brand consistently present.',
    kpis: [
      { num: '100+', label: 'Content pieces managed' },
      { num: 'High', label: 'Engagement' },
      { num: '15+', label: 'UGC profiles managed' }
    ],
    cardKpis: ['100+ Content pieces managed', 'High engagement', '15+ UGC profiles managed'],
    visual: 'assets/images/lg-visual.jpg'
  },
  {
    id: 'festival',
    name: 'Festival des Sports d\u2019Alger',
    category: 'Sports / Event / Activation / Social Media',
    logo: 'assets/logos/festival.png',
    role: ['Communication strategy', 'Social media management', 'Content production', 'Live coverage'],
    objective: 'Build awareness and drive attendance for a large-scale sports and lifestyle festival through full-rush live content production.',
    description: 'Led the on-the-ground content operation across the festival, publishing in real time to communicate the scale and intensity of the event.',
    kpis: [
      { num: '150', label: 'Content pieces posted' },
      { num: '3 days', label: 'Full-rush production' },
      { num: 'High', label: 'Engagement' }
    ],
    cardKpis: ['150 Content pieces posted', '3 days of full-rush production', 'High engagement'],
    visual: 'assets/images/festival-visual.jpg'
  },
  {
    id: 'facteur-x',
    name: 'Facteur X',
    category: 'Entertainment / Media / Social Media / Campaign Execution',
    logo: 'assets/logos/facteur-x.png',
    role: ['Social media management', 'Content strategy', 'Real-time publishing', 'Campaign execution'],
    objective: 'Grow the digital presence of an entertainment media brand with a content approach built for real-time relevance.',
    description: 'Managed the brand\u2019s social presence end to end \u2014 strategy, production and real-time publishing \u2014 to support full campaign execution.',
    kpis: [],
    qualitative: [
      'End-to-end social media management',
      'Content strategy & production',
      'Real-time publishing',
      'Full campaign execution'
    ],
    cardKpis: ['End-to-end social media management', 'Real-time publishing', 'Full campaign execution'],
    visual: 'assets/images/facteur-x-visual.jpg'
  },
  {
    id: 'ifri',
    name: 'Ifri',
    category: 'FMCG / Beverage / Influencer Marketing / Content',
    logo: 'assets/logos/ifri.png',
    role: ['Influencer management', 'Content strategy', 'Campaign coordination'],
    objective: 'Extend brand reach through creator partnerships and a strong influencer marketing operation.',
    description: 'Built and ran an influencer marketing engine, from creator sourcing to campaign coordination and content review.',
    kpis: [
      { num: '20+', label: 'Influencers collaborated with' },
      { num: '60+', label: 'Content pieces managed' },
      { num: 'Millions', label: 'Of views generated' }
    ],
    cardKpis: ['20+ Influencers collaborated with', '60+ Content pieces managed', 'Millions of views generated'],
    visual: 'assets/images/ifri-visual.jpg'
  }
];

/* ==========================================================================
   HELPERS — image fallbacks (no broken images if assets aren't added yet)
   ========================================================================== */
function attachLogoFallback(imgEl, brandName){
  imgEl.addEventListener('error', () => {
    const span = document.createElement('span');
    span.className = 'wordmark';
    span.textContent = brandName;
    imgEl.replaceWith(span);
  }, { once: true });
}

function attachVisualFallback(imgEl, brandName){
  imgEl.addEventListener('error', () => {
    const span = document.createElement('span');
    span.className = 'pv-fallback';
    span.textContent = brandName;
    imgEl.replaceWith(span);
  }, { once: true });
}

/* ==========================================================================
   HEADER / MOBILE NAV
   ========================================================================== */
function initNav(){
  const burger = document.getElementById('burgerBtn');
  const links = document.getElementById('primaryNav');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   CAROUSEL
   ========================================================================== */
function initCarousel(){
  const track = document.getElementById('carTrack');
  const viewport = document.getElementById('carViewport');
  const prevBtn = document.getElementById('carPrev');
  const nextBtn = document.getElementById('carNext');
  const dotsWrap = document.getElementById('carDots');
  if (!track) return;

  const isTouchOnly = window.matchMedia('(hover: none)').matches;

  BRANDS.forEach((brand, i) => {
    const li = document.createElement('li');
    li.className = 'brand-card';
    li.setAttribute('role', 'group');
    li.setAttribute('aria-label', brand.name);

    const kpiItems = (brand.kpis.length ? brand.kpis.map(k => `<li><span class="kn">${k.num}</span>${k.label}</li>`)
      : brand.qualitative.map(q => `<li>${q}</li>`)).join('');

    li.innerHTML = `
      <div class="bc-top">
        <span class="bc-num">0${i + 1}</span>
      </div>
      <div class="bc-logo"><img src="${brand.logo}" alt="${brand.name} logo"></div>
      <div class="bc-name">${brand.name}</div>
      <div class="bc-cat">${brand.category}</div>
      <div class="bc-kpi">
        <div>
          <div class="kh">Key Results</div>
          <ul>${kpiItems}</ul>
        </div>
        <div class="bc-view">View project →</div>
      </div>
    `;

    const logoImg = li.querySelector('.bc-logo img');
    attachLogoFallback(logoImg, brand.name);

    const goToProject = () => {
      const target = document.getElementById(brand.id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    if (isTouchOnly){
      li.addEventListener('click', (e) => {
        if (!li.classList.contains('is-revealed')){
          document.querySelectorAll('.brand-card.is-revealed').forEach(c => c.classList.remove('is-revealed'));
          li.classList.add('is-revealed');
          e.preventDefault();
        } else {
          goToProject();
        }
      });
    } else {
      li.addEventListener('click', goToProject);
      li.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); goToProject(); }
      });
      li.setAttribute('tabindex', '0');
    }

    track.appendChild(li);
  });

  function cardStep(){
    const card = track.querySelector('.brand-card');
    if (!card) return 300;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    return card.getBoundingClientRect().width + gap;
  }

  prevBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: -cardStep(), behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: cardStep(), behavior: 'smooth' });
  });

  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight'){ e.preventDefault(); viewport.scrollBy({ left: cardStep(), behavior: 'smooth' }); }
    if (e.key === 'ArrowLeft'){ e.preventDefault(); viewport.scrollBy({ left: -cardStep(), behavior: 'smooth' }); }
  });

  BRANDS.forEach((_, i) => {
    const d = document.createElement('span');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    dotsWrap.appendChild(d);
  });

  let scrollTimer;
  viewport.addEventListener('scroll', () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      const idx = Math.round(viewport.scrollLeft / cardStep());
      dotsWrap.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === idx));
    }, 80);
  });
}

/* ==========================================================================
   PROJECT SECTIONS
   ========================================================================== */
function renderProjects(){
  const host = document.getElementById('projects');
  if (!host) return;

  BRANDS.forEach((brand, i) => {
    const section = document.createElement('section');
    section.id = brand.id;
    section.className = 'project-section' + (i % 2 === 1 ? ' dark' : '');

    const kpiHTML = brand.kpis.length
      ? `<div class="proj-kpis">${brand.kpis.map(k => `<div><div class="num">${k.num}</div><div class="lbl">${k.label}</div></div>`).join('')}</div>`
      : `<div class="proj-kpis">${brand.qualitative.map(q => `<div><div class="lbl" style="font-size:13px; font-weight:600;">${q}</div></div>`).join('')}</div>`;

    section.innerHTML = `
      <div class="wrap">
        <div class="project-inner">
          <div>
            <div class="proj-head">0${i + 1} — Case Study</div>
            <div class="proj-logo"><img src="${brand.logo}" alt="${brand.name} logo"></div>
            <div class="proj-cat">${brand.name} — ${brand.category}</div>
            <div class="proj-cols">
              <div>
                <div class="proj-h6">Objective</div>
                <p>${brand.objective}</p>
              </div>
              <div>
                <div class="proj-h6">My Role</div>
                <ul>${brand.role.map(r => `<li>${r}</li>`).join('')}</ul>
              </div>
            </div>
            <div class="proj-h6" style="margin-bottom:12px;">${brand.kpis.length ? 'Key Results' : 'Proof of Work'}</div>
            ${kpiHTML}
          </div>
          <div class="proj-visual">
            <img src="${brand.visual}" alt="${brand.name} project visual">
          </div>
        </div>
      </div>
    `;

    host.appendChild(section);

    const logoImg = section.querySelector('.proj-logo img');
    attachLogoFallback(logoImg, brand.name);
    const visualImg = section.querySelector('.proj-visual img');
    attachVisualFallback(visualImg, brand.name);
  });
}

/* ==========================================================================
   PORTRAIT FALLBACK
   ========================================================================== */
function initPortraitFallback(){
  const img = document.getElementById('portraitImg');
  if (!img) return;
  img.addEventListener('error', () => {
    const wrap = img.parentElement;
    img.remove();
    const span = document.createElement('span');
    span.className = 'av-fallback';
    span.textContent = 'SM.';
    wrap.appendChild(span);
  }, { once: true });
}

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  renderProjects();
  initCarousel();
  initPortraitFallback();
});
