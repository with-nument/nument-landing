/* eslint-disable react/jsx-props-no-spreading */
import { FilmSection, LogoMarquee, PageHero, ProcessSection, SectionHead } from '@src/ui/Sections';
import CtaBand from '@src/ui/CtaBand';
import CustomHead from '@src/components/dom/CustomHead';
import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import s from '@src/sections/about/about.module.scss';

const seo = {
  title: 'About Nument | AI and Software Studio in Gurugram',
  description: 'Nument is an AI and software studio in Gurugram. We help founders and growing businesses build the websites, apps and AI tools they keep putting off.',
  breadcrumbs: [{ name: 'About', path: '/about' }],
};

const PRINCIPLES = [
  { icon: 'message', t: 'Plain language', d: 'No jargon. You always understand what we are building and why.' },
  { icon: 'rupee', t: 'One fixed price', d: 'Agreed before we start. No hourly meters and no surprise invoices.' },
  { icon: 'checkBadge', t: 'You own everything', d: 'Code, design, accounts and data belong to your business from day one.' },
  { icon: 'calendar', t: 'Weekly demos', d: 'You see real progress every week, on a live link you can try yourself.' },
  { icon: 'sparkle', t: 'Honest advice', d: 'If you do not need custom software, we will tell you, and point you to what you do need.' },
];

export default function AboutPage() {
  return (
    <>
      <CustomHead {...seo} />
      <PageHero
        eyebrow="About Nument"
        title={
          <>
            We build software
            <br />
            that <span className="em">earns its place</span>
          </>
        }
        sub="An AI and software studio in Gurugram, for founders and growing businesses across India."
      />

      <section className={clsx('container', s.story)} data-reveal>
        <span className="eyebrow">Why we exist</span>
        <p className={s.big}>
          Every business has an idea it never built. A tool that saves hours. An app customers love. An assistant that never sleeps.{' '}
          <span className={s.dim}>Most never get made, because there are not enough engineers and never enough time.</span>
        </p>
        <p className={s.big}>
          Nument changes that. We design and build websites, apps and AI tools <span className="em">around the way you already work</span>, and we ship them in weeks, not quarters.
        </p>
      </section>

      <section className={clsx('container', 'section')} data-reveal>
        <SectionHead
          eyebrow="What we believe"
          title={
            <>
              Five promises we keep
              <br />
              <span className="em">on every project</span>
            </>
          }
        />
        <div className={s.principles} data-reveal-stagger>
          {PRINCIPLES.map((p, i) => (
            <article key={p.t} className={s.principle}>
              <span className={s.num}>{String(i + 1).padStart(2, '0')}</span>
              <span className={s.icon}>
                <Icon name={p.icon} size={22} />
              </span>
              <h3 className="h-card">{p.t}</h3>
              <p className="body-muted">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <ProcessSection />

      <section className="container" data-reveal>
        <LogoMarquee />
      </section>

      <FilmSection />
      <CtaBand />
    </>
  );
}
