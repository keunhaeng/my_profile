document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1. 메뉴 클릭 시 해당 영역으로 스크롤 이동 + 활성 메뉴 표시 ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav-link, .nav-link-mobile'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      const isMatch = link.getAttribute('data-path') === id;
      link.classList.toggle('is-active', isMatch);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveNav(href.slice(1));
      closeMobileMenu();
      history.pushState(null, '', href);
    });
  });

  /* ---------- 모바일 메뉴 토글 ---------- */
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuIcon = document.getElementById('mobileMenuIcon');
  const mobileNav = document.getElementById('mobileNav');

  function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileNav.classList.remove('hidden');
    mobileNav.classList.add('flex');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileMenuIcon.textContent = 'close';
  }
  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('flex');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileMenuIcon.textContent = 'menu';
  }
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }
  // 창 크기가 데스크톱으로 바뀌면 모바일 메뉴 자동 닫기
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) closeMobileMenu();
  });

  /* ---------- 2. 프로젝트 카드 클릭 시 관련 링크로 이동 ---------- */
  document.querySelectorAll('.project-card').forEach((card) => {
    const link = card.getAttribute('data-link');
    if (!link) return;

    card.addEventListener('click', (e) => {
      // 카드 내부의 개별 링크(Live Demo/GitHub/Case Study)를 클릭한 경우 해당 링크 동작을 그대로 사용
      if (e.target.closest('.project-inner-link')) return;
      window.open(link, '_blank', 'noopener,noreferrer');
    });

    // 키보드 접근성: Enter/Space로도 이동 가능
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(link, '_blank', 'noopener,noreferrer');
      }
    });
  });

  /* ---------- 3. 이메일 클릭 시 메일 작성창 열기 + 주소 복사 ---------- */
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyMsg = document.getElementById('copyMsg');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email');
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      copyMsg.classList.remove('opacity-0');
      setTimeout(() => copyMsg.classList.add('opacity-0'), 2000);
    });
  }

  /* ---------- 문의 폼 (데모용: 실제 전송 없이 성공 메시지만 표시) ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('formSuccessMsg');
      successMsg.classList.remove('hidden');
      contactForm.reset();
    });
  }

  /* ---------- 4. 모바일 레이아웃은 Tailwind 반응형 클래스(sm/md/lg)로 자동 처리됨 ---------- */
});
