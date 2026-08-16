(function () {
  'use strict';

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Sticky nav contrast on scroll ---------- */
  var nav = document.getElementById('nav');
  var onScrollNav = function () {
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- Mobile menu ---------- */
  var burger = document.getElementById('navBurger');
  var mobileMenu = document.getElementById('navMobile');
  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    burger.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
    mobileMenu.classList.toggle('is-open', !open);
  });
  mobileMenu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
    });
  });

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Touch-friendly brand card reveal ---------- */
  var cards = document.querySelectorAll('.brand-card');
  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (window.matchMedia('(hover: none)').matches && !card.classList.contains('is-touch-active')) {
        cards.forEach(function (c) { c.classList.remove('is-touch-active'); });
        card.classList.add('is-touch-active');
        e.preventDefault();
        return;
      }
      var targetId = card.getAttribute('data-target');
      if (targetId) {
        var targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.classList.add('is-highlighted');
          setTimeout(function () { targetEl.classList.remove('is-highlighted'); }, 1600);
        }
      }
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /* ---------- Selected Work carousel ---------- */
  var track = document.getElementById('carouselTrack');
  var viewport = document.getElementById('carouselViewport');
  var prevBtn = document.getElementById('prevArrow');
  var nextBtn = document.getElementById('nextArrow');
  var dotsWrap = document.getElementById('carouselDots');
  var cardsList = Array.prototype.slice.call(track.children);
  var totalCards = cardsList.length;

  var perView = 3;
  var page = 0;

  function getPerView() {
    var w = window.innerWidth;
    if (w <= 640) return 1;
    if (w <= 980) return 2;
    return 3;
  }

  function totalPages() {
    return Math.max(1, Math.ceil(totalCards / perView));
  }

  function buildDots() {
    dotsWrap.innerHTML = '';
    var pages = totalPages();
    for (var i = 0; i < pages; i++) {
      var b = document.createElement('button');
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Show brand group ' + (i + 1));
      b.addEventListener('click', function (idx) {
        return function () { goToPage(idx); };
      }(i));
      dotsWrap.appendChild(b);
    }
    updateDots();
  }

  function updateDots() {
    Array.prototype.forEach.call(dotsWrap.children, function (b, i) {
      b.classList.toggle('is-active', i === page);
    });
  }

  function cardStep() {
    var cardEl = cardsList[0];
    var rect = cardEl.getBoundingClientRect();
    var styles = getComputedStyle(track);
    var gap = parseFloat(styles.columnGap || styles.gap || 0);
    return rect.width + gap;
  }

  function updateArrows() {
    var pages = totalPages();
    prevBtn.disabled = page === 0;
    nextBtn.disabled = page >= pages - 1;
  }

  function goToPage(p) {
    var pages = totalPages();
    page = Math.max(0, Math.min(p, pages - 1));
    var offset = page * perView * cardStep();
    var maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
    track.style.transform = 'translateX(-' + Math.min(offset, maxOffset) + 'px)';
    updateArrows();
    updateDots();
  }

  function refresh() {
    perView = getPerView();
    buildDots();
    goToPage(0);
  }

  prevBtn.addEventListener('click', function () { goToPage(page - 1); });
  nextBtn.addEventListener('click', function () { goToPage(page + 1); });

  /* keyboard support on viewport */
  viewport.setAttribute('tabindex', '0');
  viewport.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') { goToPage(page + 1); }
    if (e.key === 'ArrowLeft') { goToPage(page - 1); }
  });

  /* touch swipe */
  var touchStartX = null;
  viewport.addEventListener('touchstart', function (e) {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  viewport.addEventListener('touchend', function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) goToPage(page + 1);
      else goToPage(page - 1);
    }
    touchStartX = null;
  }, { passive: true });

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(refresh, 150);
  });

  refresh();

  /* ---------- Backstage marquee: duplicate track for seamless loop ---------- */
  var backstageTrack = document.getElementById('backstageTrack');
  if (backstageTrack) {
    var clone = backstageTrack.innerHTML;
    backstageTrack.insertAdjacentHTML('beforeend', clone);
  }
})();
