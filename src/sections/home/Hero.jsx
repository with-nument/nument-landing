import Button, { BookButton } from '@src/ui/Button';
import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import contact, { whatsappUrl } from '@src/constants/contact';
import styles from '@src/sections/home/home.module.scss';

// Sunrise hero (kit), cropped like the Playbook cover. Kept deliberately quiet; the showcase rises into its lower edge.
export default function Hero() {
  return (
    <section className={clsx('hero', styles.hero)}>
      <img className={clsx('hero__gradient', styles.heroGradient)} src="/brand/hero-gradient.svg" alt="" aria-hidden="true" />
      <div className="hero__fade" />
      <div className={clsx('container', 'hero__content', styles.heroContent)}>
        <div className="hero__glow" />

        <img className={clsx('hero__ornament', styles.ornament)} src="/brand/ornament.svg" alt="" aria-hidden="true" />
        <a href="#founding" className={clsx('hero-badge', styles.badge)}>
          <div className="hero-badge__rule" />
          <span className="hero-badge__text">Now taking five founding clients for 2026</span>
          <div className="hero-badge__rule" />
        </a>
        <h1 className={clsx('h-hero', styles.h1)}>
          Websites, apps and AI
          <br />
          that <span className="em">grow your business</span>
        </h1>
        <p className={clsx('lead', styles.heroLead)}>One team to design, build and launch the software your business runs on.</p>
        <div className="hero__actions">
          <BookButton variant="hero-primary" arrow>
            Book a free call
          </BookButton>
          <Button href="#work" variant="hero-outline">
            See our work
          </Button>
        </div>
        {contact.whatsapp && (
          <a className={styles.heroWa} href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-event="whatsapp">
            <Icon name="whatsapp" size={16} /> Prefer WhatsApp? Message us
          </a>
        )}
      </div>
    </section>
  );
}
