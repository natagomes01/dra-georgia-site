/* Dra. Geórgia Peres — Site v3 · interações */

(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  if (!reduced && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '.hero__copy > *, .ident__list li, .ident__turn, ' +
      '.promise__body p, .promise__climax, .promise__signoff, ' +
      '.specialist__body > *, .pullquote, ' +
      '.path, .paths__close, ' +
      '.rs-row, .ruler__close, ' +
      '.case, ' +
      '.qcard, ' +
      '.value-stack li, .invest, .faq__item, .offer__cta'
    );
    targets.forEach(el => el.classList.add('reveal'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger
          setTimeout(() => entry.target.classList.add('is-visible'), Math.min(i, 6) * 60);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

    targets.forEach(t => io.observe(t));
  } else {
    // reveal everything immediately
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Tabs Sem/Com prótese (mobile) -------------------- */
  const tabs = document.querySelectorAll('.paths__tab');
  const panels = {
    'tab-sem': document.getElementById('path-sem'),
    'tab-com': document.getElementById('path-com'),
  };
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.setAttribute('aria-selected', 'false');
        t.tabIndex = -1;
      });
      tab.classList.add('is-active');
      tab.setAttribute('aria-selected', 'true');
      tab.tabIndex = 0;

      Object.entries(panels).forEach(([id, panel]) => {
        if (!panel) return;
        const active = id === tab.id;
        panel.classList.toggle('is-active', active);
        if (window.matchMedia('(max-width: 900px)').matches) {
          panel.hidden = !active;
        } else {
          panel.hidden = false;
        }
      });
    });

    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const list = Array.from(tabs);
      const idx = list.indexOf(tab);
      const next = e.key === 'ArrowRight' ? (idx + 1) % list.length : (idx - 1 + list.length) % list.length;
      list[next].focus();
      list[next].click();
    });
  });

  // Reset visibility when crossing breakpoint
  const mq = window.matchMedia('(max-width: 900px)');
  const syncPaths = () => {
    Object.values(panels).forEach(p => { if (p) p.hidden = mq.matches && !p.classList.contains('is-active'); });
  };
  mq.addEventListener?.('change', syncPaths);
  syncPaths();

  /* ---------- FAQ: only one open at a time --------------------- */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });

  /* ---------- Sticky CTA mobile: hide on scroll up near top ---- */
  const sticky = document.querySelector('.sticky-cta');
  if (sticky) {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY;
      const nearOffer = (() => {
        const offer = document.getElementById('oferta');
        if (!offer) return false;
        const rect = offer.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      })();
      // hide near top (hero shows the CTA already) and when offer is visible
      if (y < 400 || nearOffer) sticky.classList.add('is-hidden');
      else sticky.classList.remove('is-hidden');
      lastY = y;
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    }, { passive: true });
    onScroll();
  }

  /* ---------- Final CTA: subtle pulse on first viewport entry --- */
  const finalCta = document.querySelector('[data-final-cta]');
  if (finalCta && !reduced && 'IntersectionObserver' in window) {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          finalCta.animate(
            [
              { transform: 'scale(1)' },
              { transform: 'scale(1.02)' },
              { transform: 'scale(1)' },
            ],
            { duration: 600, easing: 'cubic-bezier(0.22,0.61,0.36,1)' }
          );
          ob.unobserve(finalCta);
        }
      });
    }, { threshold: 0.6 });
    ob.observe(finalCta);
  }
})();
