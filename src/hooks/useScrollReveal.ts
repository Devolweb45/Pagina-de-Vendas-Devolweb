import { useLayoutEffect } from 'react';
import type { CSSProperties } from 'react';

/**
 * Small helper to stagger reveals without touching the CSS file for every item.
 * Usage: <article data-reveal="up" style={revealDelay(120)} />
 */
export const revealDelay = (ms: number): CSSProperties =>
  ({ '--reveal-delay': `${ms}ms` }) as CSSProperties;

/**
 * Progressive-enhancement scroll reveal.
 *
 * Elements marked with [data-reveal="up|down|left|right|scale|fade"] stay
 * completely visible by default. Only after JS marks them with
 * `.reveal-pending` do they start hidden, and an IntersectionObserver reveals
 * them when they enter the viewport. If JS fails, is disabled or the user
 * prefers reduced motion, nothing is ever hidden.
 */
export function useScrollReveal() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (!('IntersectionObserver' in window)) return;

    // Preview escape hatch: ?motion=on (or #motion) re-enables the effects
    // even when the OS/browser asks for reduced motion. Default behavior
    // still fully respects the user preference.
    const forceMotion =
      new URLSearchParams(window.location.search).get('motion') === 'on' ||
      window.location.hash === '#motion';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && !forceMotion) return;
    if (forceMotion) document.documentElement.classList.add('force-motion');

    let observerActive = false;
    let frame = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        observerActive = true;
        for (const entry of entries) {
          if (entry.isIntersecting) revealEl(entry.target as HTMLElement);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );

    function revealEl(el: HTMLElement) {
      if (el.classList.contains('is-visible')) return;
      el.classList.remove('reveal-pending');
      el.classList.add('is-visible');
      observer.unobserve(el);
    }

    // Extra safety for very fast scrolls/flicks where the observer can skip
    // an element between two frames. Only runs while something is pending.
    const sweep = () => {
      frame = 0;
      const vh = window.innerHeight;
      document.querySelectorAll<HTMLElement>('[data-reveal].reveal-pending').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) return;
        if (rect.top < vh - 32 && rect.bottom > 32) revealEl(el);
      });
    };

    const scheduleSweep = () => {
      if (!frame) frame = window.requestAnimationFrame(sweep);
    };

    // Safety net: if the observer never reports back (broken environment),
    // reveal everything instead of leaving content hidden.
    const safetyTimer = window.setTimeout(() => {
      if (observerActive) return;
      document
        .querySelectorAll<HTMLElement>('[data-reveal].reveal-pending')
        .forEach((el) => el.classList.remove('reveal-pending'));
    }, 2500);

    const prepare = (el: Element) => {
      if (!(el instanceof HTMLElement)) return;
      if (el.classList.contains('is-visible') || el.classList.contains('reveal-pending')) return;
      el.classList.add('reveal-pending');
      observer.observe(el);
    };

    const scan = (root: ParentNode) => {
      if (root instanceof Element && root.matches('[data-reveal]')) prepare(root);
      root.querySelectorAll('[data-reveal]').forEach(prepare);
    };

    // Mark everything before the first paint so there is no flash of content.
    scan(document);
    scheduleSweep();

    // Sections that render after mount (filters, wizard steps, modals) also
    // get revealed, but anything the observer misses simply stays visible.
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) scan(node);
        });
      }
      scheduleSweep();
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('scroll', scheduleSweep, { passive: true });
    window.addEventListener('resize', scheduleSweep);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.clearTimeout(safetyTimer);
      window.removeEventListener('scroll', scheduleSweep);
      window.removeEventListener('resize', scheduleSweep);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.classList.remove('force-motion');
      document
        .querySelectorAll<HTMLElement>('[data-reveal].reveal-pending:not(.is-visible)')
        .forEach((el) => el.classList.remove('reveal-pending'));
    };
  }, []);
}
