/**
 * Sanskriti (Sanskruti) Kale - Premium Portfolio Script
 * Interactive behaviors, modals, calculators, scrollspy, and animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initCertificateLightbox();
  initProjectDemoModal();
  initContactForm();
  initCertificateFilter();
  initResumeModal();
  initBackToTop();
});

/* ==========================================================================
   Navigation & Scrollspy
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll Header Effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile Menu Toggle
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // Scrollspy logic
  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (targetLink && scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        targetLink.classList.add('active');
      }
    });
  }
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   Certificate Lightbox & Modal
   ========================================================================== */
const CERTIFICATES_DATA = {
  imarticus: {
    title: 'Certificate of Proficiency in C & C++ Programming',
    recipient: 'Kale Sanskruti Bhaskar',
    issuer: 'Imarticus Learning & NSDC (Skill India)',
    id: '21SVA3LP4E48J',
    date: '19 May 2026',
    grade: 'Grade: A+',
    signatory: 'Nikhil Barshikhar (Founder & CEO)',
    img: 'assets/images/cert-imarticus-c-cpp.png',
    desc: 'Awarded for demonstrating consistent excellence, diligence, and mastery throughout the comprehensive C & C++ Programming curriculum.'
  },
  bajaj: {
    title: 'Certificate of Appreciation – Bajaj Manufacturing Systems',
    recipient: 'Sanskruti Kale',
    issuer: 'Bajaj Auto Ltd. (CSR Initiative - BMS)',
    id: '552199-36-2026-09-10',
    date: '10 September 2026',
    grade: 'Verified Completion',
    signatory: 'Pradeep Shrivastava (Executive Director, Bajaj Auto Ltd.)',
    img: 'assets/images/cert-bajaj-bms.png',
    desc: 'Recognizing successful completion of the prestigious Bajaj Manufacturing Systems Certification Program.'
  },
  pms: {
    title: 'Industrial Automation, Robotics with IIoT',
    recipient: 'Ms. Sanskruti Kale (First Year Engineering)',
    issuer: 'PMS Robotics Research Center & Dr. D. Y. Patil COE & Innovation',
    id: 'Reg: UDYAM-MH-26-63666',
    date: '11.05.2026 to 13.05.2026',
    grade: 'Hands-on Industrial Training',
    signatory: 'Mr. Rajwardhan Salunke (Founder & Center Head)',
    img: 'assets/images/cert-pms-robotics-iiot.png',
    desc: 'Completed intensive 3-day practical industrial automation and robotics training organized by Department of Engineering Science & Humanities.'
  },
  promptwars: {
    title: 'PromptWars x BRAIN DYPCOEI – Vibe-Coding Hackathon',
    recipient: 'Sanskruti Kale',
    issuer: 'Google for Developers H2S / BRAIN DYPCOEI / Build with AI',
    id: 'Talegaon Pune Campus',
    date: '09-10-2026',
    grade: 'Deployed AI Prototype',
    signatory: 'Dr. Suresh Mali (Director), Dr. Dipannita Mondal (HOD AI&DS)',
    img: 'assets/images/cert-promptwars-antigravity.png',
    desc: 'Awarded for actively engaging in the one-day vibe-coding hackathon and deploying a working AI prototype using Google Antigravity.'
  },
  mycaptain: {
    title: 'Certificate of Achievement in C & C++',
    recipient: 'Kale Sanskruti Bhaskar',
    issuer: 'MyCaptain',
    id: '177918306363329D',
    date: '19 May 2026',
    grade: 'Industry-Relevant Skills',
    signatory: 'Sameer Ramesh (Chief Learning Officer)',
    img: 'assets/images/cert-mycaptain-c-cpp.png',
    desc: 'Awarded for successfully acquiring core programming skills and problem-solving techniques in C & C++.'
  }
};

function initCertificateLightbox() {
  const modal = document.getElementById('certModal');
  const closeBtn = document.getElementById('closeCertModal');
  const viewButtons = document.querySelectorAll('[data-cert-key]');

  if (!modal) return;

  viewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-cert-key');
      const data = CERTIFICATES_DATA[key];
      if (data) {
        openCertModal(data);
      }
    });
  });

  function openCertModal(data) {
    document.getElementById('modalCertImg').src = data.img;
    document.getElementById('modalCertImg').alt = data.title;
    document.getElementById('modalCertTitle').textContent = data.title;
    document.getElementById('modalCertIssuer').textContent = data.issuer;
    document.getElementById('modalCertRecipient').textContent = data.recipient;
    document.getElementById('modalCertId').textContent = data.id;
    document.getElementById('modalCertDate').textContent = data.date;
    document.getElementById('modalCertGrade').textContent = data.grade;
    document.getElementById('modalCertSignatory').textContent = data.signatory;
    document.getElementById('modalCertDesc').textContent = data.desc;
    document.getElementById('modalCertDownload').href = data.img;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCertModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCertModal();
    }
  });
}

/* ==========================================================================
   Certificate Filter Bar
   ========================================================================== */
function initCertificateFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      certCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });
}

/* ==========================================================================
   Project 1: Interactive Loan & EMI Simulator Modal
   ========================================================================== */
function initProjectDemoModal() {
  const modal = document.getElementById('projectDemoModal');
  const openBtns = document.querySelectorAll('.btn-launch-loan-demo');
  const closeBtn = document.getElementById('closeProjectDemoModal');

  if (!modal) return;

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      calculateLoanEMI();
    });
  });

  function closeDemoModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDemoModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeDemoModal();
  });

  // Simulator Inputs
  const loanAmountInput = document.getElementById('loanAmountSlider');
  const loanTenureInput = document.getElementById('loanTenureSlider');
  const loanRateInput = document.getElementById('loanRateSlider');
  const cibilScoreInput = document.getElementById('cibilScoreSlider');

  const amountDisplay = document.getElementById('loanAmountVal');
  const tenureDisplay = document.getElementById('loanTenureVal');
  const rateDisplay = document.getElementById('loanRateVal');
  const cibilDisplay = document.getElementById('cibilScoreVal');

  const emiOutput = document.getElementById('calculatedEmi');
  const interestOutput = document.getElementById('calculatedTotalInterest');
  const eligibilityBadge = document.getElementById('eligibilityResultBadge');
  const aiTipBtn = document.getElementById('generateAiTipBtn');
  const aiTipOutput = document.getElementById('aiFinancialTipOutput');

  function calculateLoanEMI() {
    if (!loanAmountInput) return;
    const P = parseFloat(loanAmountInput.value) * 100000; // in Lakhs
    const N = parseFloat(loanTenureInput.value) * 12; // months
    const R = (parseFloat(loanRateInput.value) / 12) / 100; // monthly rate
    const cibil = parseInt(cibilScoreInput.value, 10);

    amountDisplay.textContent = `₹ ${loanAmountInput.value} Lakhs`;
    tenureDisplay.textContent = `${loanTenureInput.value} Years (${N} Mos)`;
    rateDisplay.textContent = `${loanRateInput.value}% p.a.`;
    cibilDisplay.textContent = `${cibil}`;

    // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = Math.round((P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1));
    const totalPayment = emi * N;
    const totalInterest = Math.round(totalPayment - P);

    emiOutput.textContent = `₹ ${emi.toLocaleString('en-IN')} / mo`;
    interestOutput.textContent = `₹ ${(totalInterest / 100000).toFixed(2)} Lakhs`;

    // Eligibility check
    if (cibil >= 750) {
      eligibilityBadge.className = 'status-tag status-high';
      eligibilityBadge.textContent = 'High Approval Probability (96%)';
    } else if (cibil >= 680) {
      eligibilityBadge.className = 'status-tag status-medium';
      eligibilityBadge.textContent = 'Moderate Approval Probability (78%)';
    } else {
      eligibilityBadge.className = 'status-tag status-low';
      eligibilityBadge.textContent = 'Needs CIBIL Improvement (Score < 680)';
    }
  }

  if (loanAmountInput) {
    [loanAmountInput, loanTenureInput, loanRateInput, cibilScoreInput].forEach(slider => {
      slider.addEventListener('input', calculateLoanEMI);
    });
  }

  // Claude AI Tips Simulation
  const AI_TIPS = [
    'Claude AI Insight: Maintaining credit card utilization under 30% significantly boosts your loan eligibility and unlocks lower interest spreads.',
    'Claude AI Insight: Opting for a 15-year tenure instead of 20 years saves over 32% on cumulative interest outgo while keeping EMI within a safe 40% income ratio.',
    'Claude AI Insight: Pre-paying an additional 5% of the principal once every year cuts your loan tenure by up to 3.5 years.',
    'Claude AI Insight: Consolidating high-interest revolving credit before loan sanction improves your debt-to-income (DTI) profile for maximum sanction limit.'
  ];

  let tipIndex = 0;
  if (aiTipBtn && aiTipOutput) {
    aiTipBtn.addEventListener('click', () => {
      tipIndex = (tipIndex + 1) % AI_TIPS.length;
      aiTipOutput.style.opacity = '0';
      setTimeout(() => {
        aiTipOutput.textContent = AI_TIPS[tipIndex];
        aiTipOutput.style.opacity = '1';
        showToast('✨ Claude AI financial insight updated!');
      }, 200);
    });
  }
}

/* ==========================================================================
   Resume Modal / Download Action
   ========================================================================== */
function initResumeModal() {
  const resumeBtns = document.querySelectorAll('.btn-resume-action');
  const resumeModal = document.getElementById('resumeModal');
  const closeResumeModal = document.getElementById('closeResumeModal');

  if (!resumeModal) return;

  resumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      resumeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function hideModal() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeResumeModal) closeResumeModal.addEventListener('click', hideModal);
  resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) hideModal();
  });
}

/* ==========================================================================
   Contact Form & Copy Actions
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const copyEmailBtns = document.querySelectorAll('.btn-copy-email');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      if (!name || !email || !message) {
        showToast('⚠️ Please fill in all required fields.', 'warning');
        return;
      }

      // Generate mailto link
      const mailtoLink = `mailto:sanskrutikale.dy@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')')}`;
      window.location.href = mailtoLink;

      showToast('📬 Thank you, ' + name + '! Your message draft is open in your email client.');
      form.reset();
    });
  }

  copyEmailBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = 'sanskrutikale.dy@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('📋 Email address copied to clipboard: ' + email);
      }).catch(() => {
        showToast('Email: sanskrutikale.dy@gmail.com');
      });
    });
  });
}

/* ==========================================================================
   Toast Notification Helper
   ========================================================================== */
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
