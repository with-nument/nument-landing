/* eslint-disable react/jsx-props-no-spreading */
import { FaqSection, PageHero } from '@src/ui/Sections';
import Cal from '@calcom/embed-react';
import { FAQ } from '@src/constants/site';
import CustomHead, { faqSchema } from '@src/components/dom/CustomHead';
import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import contact, { whatsappUrl } from '@src/constants/contact';
import s from '@src/sections/contact/contact.module.scss';

const seo = {
  title: 'Contact Nument | Book a Free 30 Minute Call',
  description: 'Book a free 30 minute call with Nument. Tell us what you want to build and get honest advice and a fixed quote within 48 hours.',
  breadcrumbs: [{ name: 'Contact', path: '/contact' }],
  schema: [faqSchema(FAQ.slice(0, 5))],
};

const NEXT = [
  { t: 'Free 30 minute call', d: 'We listen, ask questions and give honest advice.' },
  { t: 'Plan and fixed quote in 48 hours', d: 'Scope, timeline and one price, in plain language.' },
  { t: 'First version in 7 days', d: 'Then a live demo every week until launch.' },
];

export default function ContactPage() {
  return (
    <>
      <CustomHead {...seo} />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s talk about
            <br />
            <span className="em">your project</span>
          </>
        }
        sub="Pick a time that suits you. It is free, it takes 30 minutes, and you will leave with a clear next step."
        actions={false}
      />

      <section className={clsx('container', s.grid)}>
        <div className={s.cal}>
          {contact.calLink ? (
            <Cal namespace="nument-inline" calLink={contact.calLink} style={{ width: '100%', height: '100%', minHeight: 640, overflow: 'auto' }} config={{ layout: 'month_view', theme: 'light' }} />
          ) : (
            <a href={`mailto:${contact.email}`}>Email us to book a call</a>
          )}
        </div>

        <aside className={s.side}>
          <div className={s.card}>
            <span className="label-mono">Prefer to write?</span>
            {contact.whatsapp && (
              <a className={s.row} href={whatsappUrl()} target="_blank" rel="noopener noreferrer" data-event="whatsapp">
                <span className={s.rowIcon}>
                  <Icon name="whatsapp" size={18} />
                </span>
                <span>
                  <b>WhatsApp</b>
                  <small>Quick replies on working days</small>
                </span>
              </a>
            )}
            <a className={s.row} href={`mailto:${contact.email}`} data-event="email">
              <span className={s.rowIcon}>
                <Icon name="mail" size={18} />
              </span>
              <span>
                <b>{contact.email}</b>
                <small>We reply within one working day</small>
              </span>
            </a>
            <div className={s.row}>
              <span className={s.rowIcon}>
                <Icon name="globe" size={18} />
              </span>
              <span>
                <b>Based in {contact.location}</b>
                <small>Working with businesses across India</small>
              </span>
            </div>
          </div>

          <div className={s.card}>
            <span className="label-mono">What happens next</span>
            <ol className={s.steps}>
              {NEXT.map((n, i) => (
                <li key={n.t}>
                  <span className={s.stepNum}>{i + 1}</span>
                  <span>
                    <b>{n.t}</b>
                    <small>{n.d}</small>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>

      <FaqSection items={FAQ.slice(0, 5)} />
    </>
  );
}
