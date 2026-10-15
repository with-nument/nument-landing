import { BookButton, WhatsAppButton } from '@src/ui/Button';
import clsx from 'clsx';
import contact from '@src/constants/contact';
import styles from '@src/ui/ctaBand.module.scss';

// The one dark moment on a page: the kit's dusk CTA band.
export default function CtaBand({ title = 'Have an idea for your business?\nLet’s build it together.', note }) {
  return (
    <section className="container" data-reveal>
      <div className="cta-band">
        <div className="cta-band__inner">
          <div className="cta-band__noise" />
          <div className="cta-band__rings" />
          <div className={styles.top}>
            <img src="/brand/ornament.svg" alt="" className={styles.orn} />
            <h2 className={clsx('cta-band__title', styles.title)}>{title}</h2>
            <p className={styles.note}>{note || 'A free 30 minute call. You leave with honest advice and a rough price, whether or not we work together.'}</p>
          </div>
          <div className={styles.actions}>
            <BookButton variant="ink" arrow className={styles.ink}>
              Book a free call
            </BookButton>
            <WhatsAppButton variant="outline" className={styles.ghost} />
            {!contact.whatsapp && (
              <a className={styles.mail} href={`mailto:${contact.email}`}>
                or email {contact.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
