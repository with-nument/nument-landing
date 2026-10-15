import { useEffect, useState } from 'react';

import Icon from '@src/ui/Icon';
import Link from 'next/link';
import { NAV, SERVICES } from '@src/constants/site';
import clsx from 'clsx';
import contact, { calUrl, whatsappUrl } from '@src/constants/contact';
import sound from '@src/sound/engine';
import styles from '@src/ui/footer.module.scss';

function SoundToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const sync = () => setOn(sound.isEnabled());
    sync();
    return sound.subscribe(sync);
  }, []);
  return (
    <button type="button" className={styles.sound} aria-pressed={on} onClick={() => sound.unlock().then(() => sound.toggle())}>
      <Icon name={on ? 'volume' : 'volumeOff'} size={16} />
      Sound {on ? 'on' : 'off'}
    </button>
  );
}

// Kit footer: brand column, link columns, then the giant gradient wordmark (same art as the Playbook cover).
export default function Footer() {
  const industries = NAV.find((n) => n.children).children;
  const cols = [
    { title: 'Services', links: SERVICES.map((s) => ({ label: s.title, href: `/#services` })) },
    { title: 'Industries', links: industries.map((c) => ({ label: c.label, href: c.href })) },
    {
      title: 'Company',
      links: [
        { label: 'Work', href: '/work' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Talk to us',
      links: [
        { label: 'Book a free call', href: calUrl },
        contact.whatsapp && { label: 'WhatsApp', href: whatsappUrl() },
        { label: contact.email, href: `mailto:${contact.email}` },
        contact.linkedin && { label: 'LinkedIn', href: contact.linkedin },
      ].filter(Boolean),
    },
  ];

  return (
    <footer className="site-footer">
      <div className={clsx('container', 'footer-grid')}>
        <div className={clsx('footer-brand', styles.brand)}>
          <div>
            <Link href="/" className="wordmark wordmark--footer">
              nument
            </Link>
            <p className={styles.tagline}>AI and software studio. Websites, apps and AI assistants for growing businesses.</p>
          </div>
          <div className="footer-legal">
            Based in {contact.location}.<br />
            Working with businesses across India.
          </div>
        </div>
        <div className={clsx('footer-cols', styles.cols)}>
          {cols.map((col) => (
            <div key={col.title} className="footer-col">
              <div className="label-mono">{col.title}</div>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    {/^(https?:|mailto:)/.test(l.href) ? (
                      <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={clsx('container', styles.bottom)}>
        <span>
          © {new Date().getFullYear()} Nument. All rights reserved.{' '}
          <Link href="/privacy" className={styles.legalLink}>
            Privacy
          </Link>
        </span>
        <SoundToggle />
      </div>
      <div className={clsx('container', styles.giantWrap)} aria-hidden="true">
        <span className={clsx('footer-giant', styles.giant)}>nument</span>
      </div>
    </footer>
  );
}
