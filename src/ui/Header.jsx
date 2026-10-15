import { useEffect, useState } from 'react';

import Button, { BookButton } from '@src/ui/Button';
import Icon from '@src/ui/Icon';
import Link from 'next/link';
import { NAV } from '@src/constants/site';
import clsx from 'clsx';
import contact, { whatsappUrl } from '@src/constants/contact';
import styles from '@src/ui/header.module.scss';
import { useRouter } from 'next/router';

// Kit header: transparent over the hero, white with a hairline once the page scrolls.
// Desktop: wordmark, nav (Industries opens a small dropdown), Contact + Book a call. Mobile: Book + menu drawer.
export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setDrop(null);
    };
    router.events.on('routeChangeStart', close);
    return () => router.events.off('routeChangeStart', close);
  }, [router]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={clsx('site-header', (scrolled || drop) && 'is-scrolled', open && 'is-open')} onMouseLeave={() => setDrop(null)}>
      <div className="site-header__bg" />
      <div className={clsx('container', 'site-header__row')}>
        <div className="site-header__brand">
          <Link href="/" className="wordmark" aria-label="Nument home">
            nument
          </Link>
        </div>

        <nav className="site-header__nav" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className={styles.dropWrap} onMouseEnter={() => setDrop(item.label)}>
                <button type="button" className="nav-item" aria-expanded={drop === item.label} onClick={() => setDrop(drop ? null : item.label)}>
                  {item.label}
                  <Icon name="chevronDown" size={16} className={clsx(styles.chev, drop === item.label && styles.chevOpen)} />
                </button>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="nav-item" onMouseEnter={() => setDrop(null)}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="site-header__actions">
          <Button href="/contact" variant="soft" size="sm">
            Contact
          </Button>
          <BookButton size="sm">Book a call</BookButton>
        </div>

        <div className="site-header__mobile">
          <BookButton variant="soft" size="sm">
            Book a call
          </BookButton>
          <button type="button" className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            <Icon name={open ? 'x' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {drop && <div className="mega-backdrop" onMouseEnter={() => setDrop(null)} />}
      {drop && (
        <div className="mega">
          <div className={clsx('container', styles.megaInner)}>
            <div>
              <div className="label-mono">Industries we build for</div>
              <div className={styles.megaGrid}>
                {NAV.find((n) => n.label === drop).children.map((c) => (
                  <Link key={c.href} href={c.href} className="mega-item">
                    <img className={styles.megaThumb} src={c.thumb} alt="" width="56" height="56" />
                    <span>
                      <span className="mega-item__title">{c.label}</span>
                      <span className={clsx('mega-item__desc', styles.block)}>{c.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/work" className={clsx('mega-feature', styles.feature)}>
              <span className={styles.featureImg} />
              <span className={clsx('mega-feature__caption', styles.featureCap)}>
                See what we have built <Icon name="arrow" size={16} />
              </span>
            </Link>
          </div>
        </div>
      )}

      {open && (
        <div className={clsx('drawer', styles.drawer)}>
          <div className={styles.drawerHead}>
            <Link href="/" className="wordmark">
              nument
            </Link>
            <button type="button" className="burger" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="x" size={24} />
            </button>
          </div>
          {NAV.flatMap((item) => (item.children ? item.children.map((c) => ({ ...c, label: c.label })) : [item])).map((item) => (
            <Link key={item.href} href={item.href} className="drawer__row">
              {item.label}
              <Icon name="chevronRight" size={18} />
            </Link>
          ))}
          <Link href="/contact" className="drawer__row">
            Contact
            <Icon name="chevronRight" size={18} />
          </Link>
          <div className="drawer__actions">
            <BookButton>Book a call</BookButton>
            {contact.whatsapp ? (
              <Button href={whatsappUrl()} variant="soft" icon="whatsapp">
                WhatsApp
              </Button>
            ) : (
              <Button href={`mailto:${contact.email}`} variant="soft">
                Email us
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
