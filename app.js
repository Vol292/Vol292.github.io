// Portfolio Data and Interactive Engine
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. DATASETS ---
  const PROJECT_DATA = [
    {
      id: 1,
      title: "LogiCore Headless E-Commerce",
      desc: "A high-performance headless marketplace engine built with Laravel and React. Implements Redis caching, database read-replicas, and a custom state management system.",
      category: "dev",
      tags: ["PHP", "Laravel", "React", "MySQL", "Redis"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
    },
    {
      id: 2,
      title: "TeleMetrix Scraper & API Engine",
      desc: "Python/Django metrics engine that scrapes, parses, and surfaces API endpoints for IoT data feeds. Uses Celery queues for processing parallel background scraping tasks.",
      category: "dev",
      tags: ["Python", "Django", "PostgreSQL", "Celery", "REST API"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>`
    },
    {
      id: 3,
      title: "Enterprise Revenue Dashboard",
      desc: "Comprehensive PowerBI dashboard built on SQL Server data. Modeled complex business rules to visualize sales efficiency, increasing operational forecast accuracy by 23%.",
      category: "analyst",
      tags: ["PowerBI", "SQL", "Data Modeling", "DAX", "Excel"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`
    },
    {
      id: 4,
      title: "Predictive Customer Analytics",
      desc: "Advanced SQL aggregation and Python clustering analyzing over 5 million customer profiles. Identifies high-churn risk cohorts and automates segment extraction.",
      category: "analyst",
      tags: ["Python", "Pandas", "SQL", "Scikit-Learn", "PostgreSQL"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`
    },
    {
      id: 5,
      title: "VentureScale B2B Logistics SaaS",
      desc: "Co-founded and engineered a delivery orchestration dashboard. Led architecture scaling, completed product-market fits, and reached critical active subscriber goals.",
      category: "founder",
      tags: ["SaaS Startup", "Laravel", "React", "AWS", "Product Operations"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    },
    {
      id: 6,
      title: "AgriPulse Precision Agriculture",
      desc: "Designed and launched an IoT sensor framework and web dashboard monitoring environmental soil analytics. Raised pre-seed funding and onboarded 40+ large scale farms.",
      category: "founder",
      tags: ["IoT Hardware", "Python/Django", "Business Model", "Investor Pitch"],
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`
    }
  ];

  const SKILLS_DATA = [
    { name: "React", category: "dev", icon: "react" },
    { name: "JavaScript", category: "dev", icon: "js" },
    { name: "PHP", category: "dev", icon: "php" },
    { name: "Laravel", category: "dev", icon: "laravel" },
    { name: "Python", category: "dev", icon: "python" },
    { name: "Django", category: "dev", icon: "django" },

    { name: "Power BI", category: "analyst", icon: "powerbi" },
    { name: "SQL", category: "analyst", icon: "sql" },
    { name: "Excel Analytics", category: "analyst", icon: "excel" },
    { name: "Python (Pandas)", category: "analyst", icon: "python-da" },
    { name: "Data Viz", category: "analyst", icon: "dataviz" },
    { name: "PostgreSQL", category: "analyst", icon: "postgres" },

    { name: "Product Strategy", category: "founder", icon: "product" },
    { name: "Growth Marketing", category: "founder", icon: "growth" },
    { name: "Operations", category: "founder", icon: "operations" },
    { name: "Financial Modeling", category: "founder", icon: "financial" },
    { name: "UI/UX Specs", category: "founder", icon: "uiux" },
    { name: "Investor Pitching", category: "founder", icon: "pitch" }
  ];

  const TIMELINE_DATA = [
    {
      date: "2024 - Present",
      role: "Co-Founder & CTO",
      company: "VentureScale B2B SaaS",
      desc: "Leading architecture scaling using React & Laravel microservices. Pitching to angel funds, designing automated distribution features, and hiring founding engineers.",
      type: "founder"
    },
    {
      date: "2022 - 2024",
      role: "Lead Systems Engineer & Analyst",
      company: "Apex Tech Inc.",
      desc: "Engineered scalable Python APIs with Django. Designed real-time Excel/PowerBI dashboards that tracked system health and database read efficiency across millions of logs.",
      type: "dev"
    },
    {
      date: "2020 - 2022",
      role: "Software Developer",
      company: "WebCraft Solutions",
      desc: "Developed modern web application platforms using core PHP, JS, and Laravel. Optimized database queries and automated secure transaction payment gateways.",
      type: "dev"
    },
    {
      date: "2018 - 2020",
      role: "Database Analyst",
      company: "Capital Growth Group",
      desc: "Wrote high-performance SQL queries, structured ETL data pipelines, and visualised client churn risk graphs to support marketing stakeholders.",
      type: "analyst"
    }
  ];

  const PERSPECTIVE_COPY = {
    dev: {
      tag: "DEVELOPER PERSPECTIVE",
      tagIcon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
      role: "Software Engineer",
      desc: "Building dynamic applications, robust APIs, and high-performance services using React, Laravel, Django, and modern cloud databases.",
      ctaPrimary: "View Projects",
      cardSub: "SYSTEM STATUS // ACTIVE",
      cardTitle: "Distributed Cloud Architectures",
      cardBody: "Constructing modular codebases, caching systems, and asynchronous task queues that survive real-world scale and demand.",
      cardBadge: "SCALE-TECH",
      cardVal: "v3.12.0"
    },
    analyst: {
      tag: "ANALYST PERSPECTIVE",
      tagIcon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
      role: "Data Analyst",
      desc: "Unlocking hidden patterns in enterprise data models. Automating custom SQL schemas, writing analytics pipelines, and rendering high-impact PowerBI stories.",
      ctaPrimary: "Explore Insights",
      cardSub: "METRIC RATIO // STABLE",
      cardTitle: "Business Intelligence Clusters",
      cardBody: "Converting chaotic raw logs into highly clean PostgreSQL tables and visual graphs to guide growth forecasting.",
      cardBadge: "ACCURACY",
      cardVal: "99.85%"
    },
    founder: {
      tag: "FOUNDER PERSPECTIVE",
      tagIcon: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      role: "Startup Founder",
      desc: "Driving vision and strategy. Transforming raw customer problems into profitable software MVP engines. Raising resources and scaling product operations.",
      ctaPrimary: "See Ventures",
      cardSub: "ROADMAP STAGE // LAUNCH",
      cardTitle: "Strategic Venture Pipeline",
      cardBody: "Forging valuable product-market fit, raising angel investment parameters, and directing collaborative engineer squads.",
      cardBadge: "VALUATION",
      cardVal: "$1.2M Cap"
    }
  };

  // SVG Icon sprites for tech tags
  const SKILL_ICONS = {
    react: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)"></ellipse><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)"></ellipse><circle cx="12" cy="12" r="2"></circle></svg>`,
    js: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10h10V2z"></path><path d="M22 12H12v10h10V12z"></path><path d="M12 12H2v10h10V12z"></path><path d="M22 2H12v10h10V2z"></path></svg>`,
    php: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="6"></ellipse><circle cx="12" cy="12" r="3"></circle></svg>`,
    laravel: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>`,
    python: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5v3H3a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h4v-3a5 5 0 0 1 5-5h3a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5h-4z"></path><path d="M12 22a5 5 0 0 0 5-5v-3h4a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-4v3a5 5 0 0 1-5 5h-3a5 5 0 0 0-5 5v3a5 5 0 0 0 5 5h4z"></path></svg>`,
    django: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>`,
    powerbi: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line></svg>`,
    sql: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"></path></svg>`,
    excel: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line></svg>`,
    "python-da": `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    dataviz: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>`,
    postgres: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>`,
    product: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    growth: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    operations: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    financial: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    uiux: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
    pitch: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  };

  // --- 2. SELECTORS ---
  const body = document.body;
  const switchBtns = document.querySelectorAll('.switch-btn');
  const heroTagText = document.querySelector('#hero-tag-text');
  const heroTitleRole = document.querySelector('#hero-title-role');
  const heroDescText = document.querySelector('#hero-desc-text');
  const ctaPrimary = document.querySelector('#cta-primary');
  const visualCardSub = document.querySelector('#visual-card-sub');
  const visualCardTitle = document.querySelector('#visual-card-title');
  const visualCardBody = document.querySelector('#visual-card-body');
  const visualCardBadge = document.querySelector('#visual-card-badge');
  const visualCardVal = document.querySelector('#visual-card-val');

  const widgetDev = document.querySelector('#widget-dev');
  const widgetAnalyst = document.querySelector('#widget-analyst');
  const widgetFounder = document.querySelector('#widget-founder');

  const projectGrid = document.querySelector('#project-grid');
  const skillsGrid = document.querySelector('#skills-grid');
  const timelineContainer = document.querySelector('#timeline-container');
  const projectFilters = document.querySelectorAll('.filter-btn');

  const mobileNavToggle = document.querySelector('#mobile-nav-toggle');
  const navMenu = document.querySelector('#nav-menu');
  const navLinks = document.querySelectorAll('.nav-links a');

  const contactForm = document.querySelector('#portfolio-contact-form');

  let currentMode = 'dev';
  let activeProjectFilter = 'all';

  // --- 3. PERSPECTIVE SWITCH ENGINE ---
  function switchPerspective(mode) {
    if (mode === currentMode) return;
    currentMode = mode;

    // A. Transition Styles
    body.className = `theme-${mode}`;

    // Update active toggles attributes
    switchBtns.forEach(btn => {
      const isCurrent = btn.getAttribute('data-mode') === mode;
      btn.classList.toggle('active', isCurrent);
      btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
    });

    // B. Fade transition for text
    const elementsToFade = [
      heroTagText, heroTitleRole, heroDescText, ctaPrimary,
      visualCardSub, visualCardTitle, visualCardBody, visualCardBadge, visualCardVal
    ];

    elementsToFade.forEach(el => {
      if (el) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(5px)';
        el.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      }
    });

    setTimeout(() => {
      // C. Inject Copy
      const copy = PERSPECTIVE_COPY[mode];

      heroTagText.innerHTML = `${copy.tagIcon} <span>${copy.tag}</span>`;
      heroTitleRole.textContent = copy.role;
      heroDescText.textContent = copy.desc;
      ctaPrimary.innerHTML = `${copy.ctaPrimary} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;

      visualCardSub.textContent = copy.cardSub;
      visualCardTitle.textContent = copy.cardTitle;
      visualCardBody.textContent = copy.cardBody;
      visualCardBadge.textContent = copy.cardBadge;
      visualCardVal.textContent = copy.cardVal;

      elementsToFade.forEach(el => {
        if (el) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });

      // D. Trigger Widget Initialization
      initializeWidget(mode);

      // E. Rehighlight Skills & Timeline
      renderSkills(mode);
      renderTimeline(mode);
    }, 250);
  }

  // Bind perspective toggle clicks
  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-mode');
      switchPerspective(mode);
    });
  });

  // --- 4. WIDGET INITIALIZATION ROUTINES ---
  let devConsoleInterval = null;

  function initializeWidget(mode) {
    // Toggle active classes on containers
    widgetDev.classList.toggle('active', mode === 'dev');
    widgetAnalyst.classList.toggle('active', mode === 'analyst');
    widgetFounder.classList.toggle('active', mode === 'founder');

    // Clean up past runtimes
    if (devConsoleInterval) clearInterval(devConsoleInterval);

    if (mode === 'dev') {
      runDevConsoleDemo();
    } else if (mode === 'analyst') {
      animateAnalystDashboard();
    } else if (mode === 'founder') {
      animateFounderMilestones();
    }
  }

  // A. Developer Console Typing Mockup
  function runDevConsoleDemo() {
    const consoleBody = document.querySelector('#dev-console-body');
    if (!consoleBody) return;

    // Reset console
    consoleBody.innerHTML = `
      <div class="console-line"><span class="prompt">guest@hyiaman:~$</span>npm run dev</div>
      <div class="console-line"><span class="comment">> booting dynamic developer perspective...</span></div>
      <div class="console-line"><span class="comment">> compiling packages [React, Laravel, Django, Python]</span></div>
    `;

    const commands = [
      { cmd: "cat backend_health.py", output: "Checking database replica feeds... OK. Redis server online." },
      { cmd: "php artisan route:list", output: "GET /api/v1/projects ............ ProjectsController@index\nPOST /api/v1/contact ............ ContactController@submit" },
      { cmd: "python -c 'import numpy'", output: "Modules loaded. Numerical libraries running at 100% capacity." }
    ];

    let cmdIdx = 0;

    function runNextCommand() {
      if (cmdIdx >= commands.length) {
        consoleBody.innerHTML += `<div class="console-line"><span class="prompt">guest@hyiaman:~$</span><span class="cursor" style="animation: pulse 1s infinite;">_</span></div>`;
        consoleBody.scrollTop = consoleBody.scrollHeight;
        return;
      }

      const item = commands[cmdIdx];
      const cmdLine = document.createElement('div');
      cmdLine.className = 'console-line';
      cmdLine.innerHTML = `<span class="prompt">guest@hyiaman:~$</span><span class="typing"></span>`;
      consoleBody.appendChild(cmdLine);
      consoleBody.scrollTop = consoleBody.scrollHeight;

      const spanText = cmdLine.querySelector('.typing');
      let charIdx = 0;

      devConsoleInterval = setInterval(() => {
        if (charIdx < item.cmd.length) {
          spanText.textContent += item.cmd.charAt(charIdx);
          charIdx++;
          consoleBody.scrollTop = consoleBody.scrollHeight;
        } else {
          clearInterval(devConsoleInterval);

          // Output result line
          setTimeout(() => {
            const outLine = document.createElement('div');
            outLine.className = 'console-line';
            outLine.style.color = '#94a3b8';
            outLine.style.whiteSpace = 'pre-line';
            outLine.textContent = item.output;
            consoleBody.appendChild(outLine);
            consoleBody.scrollTop = consoleBody.scrollHeight;
            cmdIdx++;
            setTimeout(runNextCommand, 1000);
          }, 400);
        }
      }, 50);
    }

    setTimeout(runNextCommand, 1000);
  }

  // B. Data Analyst Graph Pointer Tooltips
  function animateAnalystDashboard() {
    const points = document.querySelectorAll('.chart-point');
    const growthNum = document.querySelector('#dash-growth');

    // Growth number count up
    let val = 0;
    const interval = setInterval(() => {
      if (val < 45) {
        val++;
        growthNum.textContent = `+${val}%`;
      } else {
        clearInterval(interval);
      }
    }, 15);

    // Dynamic Tooltips on graph points
    points.forEach(point => {
      point.addEventListener('mouseenter', (e) => {
        const value = e.target.getAttribute('data-val');
        // Simple visual highlight
        e.target.setAttribute('r', '8');
        growthNum.textContent = value;
      });
      point.addEventListener('mouseleave', (e) => {
        e.target.setAttribute('r', '5');
        growthNum.textContent = "+45%";
      });
    });
  }

  // C. Founder Ventures Milestone Traction Slide
  function animateFounderMilestones() {
    const progress = document.querySelector('#founder-progress');
    const fStat1 = document.querySelector('#f-stat-1');
    const fStat2 = document.querySelector('#f-stat-2');
    const fStat3 = document.querySelector('#f-stat-3');

    // Trigger progressive layout sizing
    if (progress) {
      progress.style.width = '0%';
      setTimeout(() => {
        progress.style.width = '66.66%';
      }, 100);
    }

    // Number count animations
    animateCounter(fStat1, 10, 'k+', 0);
    animateCounter(fStat2, 150, 'k', '$');
    animateCounter(fStat3, 5, 'x', 0);
  }

  function animateCounter(element, target, suffix, prefix) {
    if (!element) return;
    let count = 0;
    const speed = Math.max(1, Math.round(target / 40));
    const timer = setInterval(() => {
      count += speed;
      if (count >= target) {
        clearInterval(timer);
        element.textContent = `${prefix ? prefix : ''}${target}${suffix}`;
      } else {
        element.textContent = `${prefix ? prefix : ''}${count}${suffix}`;
      }
    }, 20);
  }


  // --- 5. SHOWCASE FILTERING AND RENDERING ---
  function renderProjects(filter = 'all') {
    projectGrid.innerHTML = '';

    const filtered = PROJECT_DATA.filter(proj => {
      if (filter === 'all') return true;
      return proj.category === filter;
    });

    filtered.forEach(proj => {
      const card = document.createElement('div');
      card.className = `project-card ${proj.category}-proj`;
      card.style.animation = 'fadeIn 0.4s ease forwards';

      card.innerHTML = `
        <div class="project-thumb">
          ${proj.icon}
        </div>
        <div class="project-content">
          <div class="project-tags">
            ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.desc}</p>
          <div class="project-links">
            <a href="#" class="project-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              Live Demo
            </a>
            <a href="https://github.com/Vol292" target="_blank" class="project-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Code Repo
            </a>
          </div>
        </div>
      `;
      projectGrid.appendChild(card);
    });
  }

  // Bind Filter buttons
  projectFilters.forEach(btn => {
    btn.addEventListener('click', (e) => {
      projectFilters.forEach(f => f.classList.remove('active'));
      e.target.classList.add('active');
      activeProjectFilter = e.target.getAttribute('data-filter');
      renderProjects(activeProjectFilter);
    });
  });


  // --- 6. SKILLS RENDERING (Dynamic Ordering) ---
  function renderSkills(highlightMode = 'dev') {
    skillsGrid.innerHTML = '';

    // Sort skills so that the active mode's skills appear first
    const sortedSkills = [...SKILLS_DATA].sort((a, b) => {
      if (a.category === highlightMode && b.category !== highlightMode) return -1;
      if (a.category !== highlightMode && b.category === highlightMode) return 1;
      return 0;
    });

    sortedSkills.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'skill-card';
      if (skill.category === highlightMode) {
        card.style.borderColor = 'var(--accent-primary)';
        card.style.background = 'rgba(255, 255, 255, 0.04)';
      }

      const iconMarkup = SKILL_ICONS[skill.icon] || `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>`;

      card.innerHTML = `
        ${iconMarkup}
        <span class="skill-name">${skill.name}</span>
      `;
      skillsGrid.appendChild(card);
    });
  }


  // --- 7. TIMELINE RENDERING ---
  function renderTimeline(highlightMode = 'dev') {
    timelineContainer.innerHTML = '';

    TIMELINE_DATA.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'timeline-item';

      const isHighlighted = item.type === highlightMode;
      const dotColor = isHighlighted ? 'var(--accent-primary)' : 'var(--border-light)';
      const dotShadow = isHighlighted ? '0 0 10px var(--accent-primary)' : 'none';

      itemEl.innerHTML = `
        <div class="timeline-dot" style="border-color: ${dotColor}; box-shadow: ${dotShadow};"></div>
        <div class="timeline-card" style="${isHighlighted ? 'border-color: var(--accent-primary);' : ''}">
          <div class="timeline-date" style="${isHighlighted ? 'color: var(--accent-primary);' : 'color: var(--text-muted);'}">${item.date}</div>
          <h3 class="timeline-role">${item.role}</h3>
          <div class="timeline-company">${item.company}</div>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      `;

      timelineContainer.appendChild(itemEl);
    });
  }


  // --- 8. GENERAL UX & SCROLL SPY ---
  // A. Mobile Menu Toggle
  mobileNavToggle.addEventListener('click', () => {
    navMenu.classList.toggle('mobile-active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('mobile-active');
    });
  });

  // B. Scroll Spy for navigation highlighting
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // C. Form Submission Handling
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate submission animation
      const button = contactForm.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;

      button.disabled = true;
      button.innerHTML = `Sending... <svg class="spinning" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v4"></path></svg>`;

      // We will perform a simulated mock post request to keep the demo self-contained and clean.
      // In practice, this would submit to formspree or a backend.
      setTimeout(() => {
        contactForm.innerHTML = `
          <div style="text-align: center; padding: 40px 20px;">
            <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--accent-glow); color: var(--accent-primary); display: flex; justify-content: center; align-items: center; margin: 0 auto 20px; font-size: 2rem;">✓</div>
            <h3 style="font-family: var(--font-headings); font-size: 1.5rem; margin-bottom: 10px;">Message Sent!</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem;">Thank you for getting in touch. I will read your message and respond within 24 hours.</p>
          </div>
        `;
      }, 1500);
    });
  }


  // --- 9. INITIAL RENDERS ---
  renderProjects('all');
  renderSkills('dev');
  renderTimeline('dev');
  runDevConsoleDemo();

});
