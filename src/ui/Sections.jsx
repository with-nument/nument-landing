import { useState } from 'react';

import { CONCEPTS, FAQ, FOUNDING, PROCESS, SERVICES, TOOLS, TRUSTED_BY, WORK } from '@src/constants/site';
import Button, { BookButton, WhatsAppButton } from '@src/ui/Button';
import Icon from '@src/ui/Icon';
import Link from 'next/link';
import clsx from 'clsx';
import s from '@src/ui/sections.module.scss';

// Shared page sections. Every page is assembled from these, so the whole site stays one design.

const FILM = { src: '/videos/project-film.mp4', poster: '/videos/project-film-poster.webp' };

export function SectionHead({ eyebrow, title, intro, left }) {
  return (
    <div className={clsx('section__head', left && 'section__head--left')}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="h-section">{title}</h2>
      {intro && <p className="intro">{intro}</p>}
    </div>
  );
}

// Inner-page hero: kit centred hero with ornament, glow and an indigo phrase in the H1.
export function PageHero({ eyebrow, title, sub, actions = true, children }) {
  return (
    <section className={clsx('hero', s.pageHero)}>
      <img className={clsx('hero__gradient', s.pageHeroGradient)} src="/brand/hero-gradient.svg" alt="" aria-hidden="true" />
      <div className="hero__fade" />
      <div className={clsx('container', 'hero__content', s.pageHeroContent)}>
        <div className="hero__glow" />
        <img className={clsx('hero__ornament', s.ornament)} src="/brand/ornament.svg" alt="" aria-hidden="true" />
        {eyebrow && (
          <div className="hero-badge">
            <div className="hero-badge__rule" />
            <span className="hero-badge__text">{eyebrow}</span>
            <div className="hero-badge__rule" />
          </div>
        )}
        <h1 className={clsx('h-hero', s.pageH1)}>{title}</h1>
        {sub && <p className={clsx('lead', s.pageLead)}>{sub}</p>}
        {actions && (
          <div className="hero__actions">
            <BookButton variant="hero-primary" arrow>
              Book a free call
            </BookButton>
            <WhatsAppButton variant="hero-outline" />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className={clsx('container', 'section')} data-reveal>
      <SectionHead
        eyebrow="What we build"
        title={
          <>
            Everything your business needs online,
            <br />
            <span className="em">built by one team</span>
          </>
        }
        intro="Design, engineering and AI under one roof. One team, one fixed price, and no hand-offs between agencies."
      />
      <div className={s.services} data-reveal-stagger>
        {SERVICES.map((sv) => (
          <article key={sv.id} className={clsx('mini-card', s.service)}>
            <img className={s.serviceTile} src={sv.tile} alt="" width="64" height="64" loading="lazy" />
            <div className={s.serviceText}>
              <h3 className="h-card">{sv.title}</h3>
              <p className="mini-card__desc">{sv.desc}</p>
            </div>
            <ul className={s.examples}>
              {sv.examples.map((e) => (
                <li key={e}>
                  <Icon name="check" size={15} stroke={2} /> {e}
                </li>
              ))}
            </ul>
            <div className={s.priceRow}>
              <span className={s.from}>From</span>
              <span className={clsx(s.price, 'tabular')}>{sv.from}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WorkCard({ w, reverse }) {
  return (
    <Link href={w.href} className={clsx(s.workCard, reverse && s.reverse, s[`tint_${w.tint}`])}>
      <div className={clsx(s.workArt, w.id === 'voicely' && s.workArtShot)}>
        {w.id === 'voicely' ? (
          <div className={s.shotPhone}>
            <img src={w.art} alt="Voicely, Nument's in-house AI voice agent, on a phone" loading="lazy" />
          </div>
        ) : (
          <img src={w.art} alt="" loading="lazy" />
        )}
      </div>
      <div className={s.workBody}>
        <div className={s.workTop}>
          <div className="meta">
            <span className={clsx('tag', w.kind === 'Client work' && 'tag--indigo')}>{w.kind}</span>
            <span>{w.industry}</span>
          </div>
          <h3 className={s.workTitle}>{w.title}</h3>
          <p className={s.workSummary}>{w.summary}</p>
        </div>
        <div className={s.metrics}>
          {w.metrics.map((mt) => (
            <div key={mt.label}>
              <b className="tabular">{mt.value}</b>
              <span>{mt.label}</span>
            </div>
          ))}
        </div>
        <div className={s.workFoot}>
          <div className={s.tags}>
            {w.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <span className="link-arrow">
            Read the story <Icon name="arrow" size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function WorkSection({ head = true, items = WORK }) {
  return (
    <section id="work" className={clsx('container', 'section')}>
      {head && (
        <div data-reveal>
          <SectionHead
            eyebrow="Our work"
            title={
              <>
                Real products,
                <br />
                <span className="em">real numbers</span>
              </>
            }
            intro="A mental health platform for a client, and the voice agent we built in-house. Both live, both used every day."
          />
        </div>
      )}
      <div className={s.workList} data-reveal-stagger>
        {items.map((w, i) => (
          <WorkCard key={w.id} w={w} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

export function ConceptCard({ c }) {
  return (
    <Link href={c.href} className={clsx(s.concept, s[`tint_${c.tint}`])}>
      <div className={s.conceptArt}>
        <img src={c.art} alt="" loading="lazy" />
        <span className={clsx('tag', 'tag--concept', s.conceptTag)}>Concept</span>
      </div>
      <div className={s.conceptBody}>
        <span className={s.conceptIndustry}>{c.industry}</span>
        <h3 className={s.conceptTitle}>{c.title}</h3>
        <p className={s.conceptSummary}>{c.summary}</p>
        <div className={s.conceptMeta}>
          <span>
            <Icon name="clock" size={15} /> {c.timeline}
          </span>
          <span>
            From <b className="tabular">{c.from}</b>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ConceptsSection({ items = CONCEPTS }) {
  return (
    <section className={clsx('container', 'section')}>
      <div data-reveal>
        <SectionHead
          eyebrow="Concepts"
          title={
            <>
              What we would build
              <br />
              <span className="em">for your business</span>
            </>
          }
          intro="Our thinking for the businesses we work with most, made concrete. Each concept is a real plan with a real starting price."
        />
      </div>
      <div className={s.concepts} data-reveal-stagger>
        {items.map((c) => (
          <ConceptCard key={c.id} c={c} />
        ))}
      </div>
    </section>
  );
}

export function ProcessSection({ steps = PROCESS }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="process" className={clsx('container', 'section')}>
      <div className={clsx('row-between', s.processHead)} data-reveal>
        <SectionHead
          left
          eyebrow="How we work"
          title={
            <>
              Four steps,
              <br />
              <span className="em">no surprises</span>
            </>
          }
          intro="You always know what is being built, what it costs and when it will be ready."
        />
        <BookButton variant="soft">Start with step one</BookButton>
      </div>
      <div className={clsx('h-accordion', s.acc)} data-reveal>
        {steps.map((p, i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
          <div
            key={p.title}
            className={clsx('h-acc__panel', open === i && 'is-open')}
            onClick={() => setOpen(i)}
            onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setOpen(i)}
            style={{ '--art-a': p.glow[0], '--art-b': p.glow[1] }}
          >
            <span className="h-acc__num">{String(i + 1).padStart(2, '0')}</span>
            <span className="h-acc__vlabel">{p.short}</span>
            <Icon name="plus" size={20} className="h-acc__plus" />
            {open === i && (
              <div className={s.accOpen}>
                <h3 className="h-acc__title">{p.title}</h3>
                <p className="h-acc__desc">{p.desc}</p>
                <div className="h-acc__art" />
                <div className={clsx('h-acc__mock', s.accMock)}>
                  <span className="label-mono">Step {i + 1}</span>
                  <ul className="checklist">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <Icon name="checkBadge" size={18} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function FoundingSection() {
  return (
    <section id="founding" className="container" data-reveal>
      <div className={s.founding}>
        <div className={s.foundingArt}>
          <img src="/img/doorway.webp" alt="" loading="lazy" />
        </div>
        <div className={s.foundingBody}>
          <span className="eyebrow">Founding clients</span>
          <h2 className="h-section">
            Be one of our first
            <br />
            <span className="em">five founding clients</span>
          </h2>
          <p className={s.foundingText}>
            Nument is a young studio, so we are choosing five businesses to work closely with. You get founding pricing and the founder on your project. We get an honest case study.
          </p>
          <ul className="checklist">
            {FOUNDING.points.map((p) => (
              <li key={p}>
                <Icon name="checkBadge" size={18} /> {p}
              </li>
            ))}
          </ul>
          <BookButton block arrow className={s.foundingBtn}>
            Apply for a founding spot
          </BookButton>
        </div>
      </div>
    </section>
  );
}

export function FilmSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className={clsx('container', 'section')} data-reveal>
      <SectionHead
        eyebrow="Inside Nument"
        title={
          <>
            Why we started
            <br />
            <span className="em">Nument</span>
          </>
        }
      />
      <div className={s.film}>
        {playing ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={FILM.src} poster={FILM.poster} autoPlay controls playsInline preload="none" />
        ) : (
          <button type="button" className={s.filmPoster} onClick={() => setPlaying(true)} aria-label="Watch the film, with sound">
            <img src={FILM.poster} alt="" loading="lazy" />
            <span className={s.play}>
              <Icon name="play" size={22} fill="currentColor" />
            </span>
            <span className={s.filmCaption}>Watch the film · with sound</span>
          </button>
        )}
      </div>
    </section>
  );
}

export function FaqSection({ items = FAQ, title }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className={clsx('container', s.faq)} data-reveal>
      <div className={s.faqHead}>
        <span className="eyebrow">Questions</span>
        <h2 className="h-section">
          {title || (
            <>
              Straight answers,
              <br />
              <span className="em">before you ask</span>
            </>
          )}
        </h2>
        <p className="intro">Something else on your mind? Ask us on a free call.</p>
        <Button href="/contact" variant="soft" arrow>
          Contact us
        </Button>
      </div>
      <div className={s.faqList}>
        {items.map((f, i) => (
          <div key={f.q} className={clsx(s.faqItem, open === i && s.faqOpen)}>
            <button type="button" className={s.faqQ} aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}
              <Icon name={open === i ? 'minus' : 'plus'} size={18} />
            </button>
            <div className={s.faqA}>
              <p>{f.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LogoMarquee() {
  return (
    <div className={clsx('marquee', s.tools)}>
      <span className="eyebrow">Built with the tools serious teams use</span>
      <div className={clsx('marquee__track', s.toolsTrack)}>
        <ul className={clsx('marquee__row', s.toolsRow)}>
          {[0, 1].map((half) =>
            TOOLS.map((t) => (
              <li key={`${half}-${t.name}`} aria-hidden={half ? 'true' : undefined}>
                <img src={t.logo} alt="" width="22" height="22" loading="lazy" />
                {t.name}
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  );
}

// Quiet proof: the real names once each, on one slim line.
export function ProofBar({ tight }) {
  return (
    <div className={clsx('container', s.trust, tight && s.proofTight)} data-reveal>
      <span className="eyebrow">Trusted by</span>
      <ul>
        {TRUSTED_BY.map((t) => (
          <li key={t.name} title={t.sector}>
            {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
