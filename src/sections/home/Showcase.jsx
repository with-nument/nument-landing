import { AppMock, AssistantMock, AutomationMock, WebsiteMock } from '@src/ui/mocks';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import styles from '@src/sections/home/home.module.scss';

// Kit "glass frame" with a sliding-pill tab bar. Each tab is a real HTML mock of something we build (sample data).

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const TABS = [
  { id: 'web', label: 'Website', icon: 'globe', Mock: WebsiteMock },
  { id: 'app', label: 'App', icon: 'phone', Mock: AppMock },
  { id: 'ai', label: 'AI assistant', icon: 'sparkle', Mock: AssistantMock },
  { id: 'auto', label: 'Automation', icon: 'flow', Mock: AutomationMock },
];

export default function Showcase() {
  const [tab, setTab] = useState('web');
  const btnRefs = useRef({});
  const [pill, setPill] = useState(null);

  // The pill slides and resizes to the active tab (kit "sliding-pill filter").
  useIsoLayoutEffect(() => {
    const place = () => {
      const el = btnRefs.current[tab];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    place();
    window.addEventListener('resize', place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener('resize', place);
  }, [tab]);

  return (
    <section className={clsx('container', 'showcase', styles.showcase)} aria-label="Examples of what we build">
      <div className="showcase__band" />
      <div className="showcase__frame">
        <div className={clsx('showcase__panel', styles.panel)}>
          <div className={styles.dots} aria-hidden="true" />
          <div className={styles.segWrap}>
            <div className={styles.seg} role="tablist">
              {pill && <span className={styles.segPill} style={{ transform: `translateX(${pill.left}px)`, width: pill.width }} />}
              {TABS.map((t) => (
                <button
                  key={t.id}
                  ref={(el) => {
                    btnRefs.current[t.id] = el;
                  }}
                  type="button"
                  role="tab"
                  className={styles.segBtn}
                  aria-selected={tab === t.id}
                  onClick={() => setTab(t.id)}
                >
                  <Icon name={t.icon} size={17} /> {t.label}
                </button>
              ))}
            </div>
          </div>
          {TABS.map(({ id, Mock }) => (
            <div key={id} className={clsx(styles.mock, tab === id && styles.mockOn)} hidden={tab !== id} role="tabpanel">
              <Mock active={tab === id} floats={false} />
            </div>
          ))}
          <p className={styles.sample}>
            <Icon name="sparkle" size={13} /> Sample screens with sample data. Every project is designed for your business.
          </p>
        </div>
      </div>
    </section>
  );
}
