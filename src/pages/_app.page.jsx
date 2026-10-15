/* eslint-disable react/jsx-props-no-spreading */
import '@src/styles/tokens.css';
import '@src/styles/kit.css';
import '@src/styles/site.scss';

import { Analytics, track } from '@vercel/analytics/react';
// eslint-disable-next-line camelcase
import { DM_Mono, Figtree, Newsreader } from 'next/font/google';
import { useEffect } from 'react';

import Footer from '@src/ui/Footer';
import Header from '@src/ui/Header';
import Lenis from 'lenis';
import useSoundEffects from '@src/sound/useSoundEffects';
import { useStore } from '@src/store';

// Kit fonts, self-hosted by Next (no layout shift, no Google request at runtime).
const display = Newsreader({ subsets: ['latin'], axes: ['opsz'], display: 'swap', adjustFontFallback: false });
const sans = Figtree({ subsets: ['latin'], display: 'swap' });
// eslint-disable-next-line camelcase
const mono = DM_Mono({ subsets: ['latin'], weight: ['400', '500'], display: 'swap' });

// Fade-up reveals (kit motion): [data-reveal] blocks and the children of [data-reveal-stagger].
function useReveal(path) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    const items = [...document.querySelectorAll('[data-reveal], [data-reveal-stagger] > *')];
    items.forEach((el) => {
      const parent = el.parentElement;
      if (parent?.hasAttribute('data-reveal-stagger')) el.style.transitionDelay = `${[...parent.children].indexOf(el) * 90}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, [path]);
}

function MyApp({ Component, pageProps, router }) {
  const setLenis = useStore((s) => s.setLenis);
  useSoundEffects(router);
  useReveal(router.asPath);

  // Smooth wheel scrolling on desktop only. Touch devices keep native scrolling.
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.12 });
    setLenis(lenis);
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      setLenis(null);
    };
  }, [setLenis]);

  // Button cursor glow (kit) and conversion events: any element with data-event is tracked on click.
  useEffect(() => {
    const onMove = (e) => {
      const btn = e.target.closest?.('.btn');
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--gx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--gy', `${e.clientY - r.top}px`);
    };
    const onClick = (e) => {
      const el = e.target.closest?.('[data-event]');
      if (el) track(el.dataset.event, { path: window.location.pathname });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('click', onClick, true);
    return () => {
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('click', onClick, true);
    };
  }, []);

  return (
    <>
      {/* The kit tokens read these on :root, so the font families must be defined there too. */}
      <style jsx global>{`
        :root {
          --nf-display: ${display.style.fontFamily};
          --nf-sans: ${sans.style.fontFamily};
          --nf-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Header />
      <main className="page-sheet">
        <Component {...pageProps} />
        <div className="page-sheet__end" />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default MyApp;
