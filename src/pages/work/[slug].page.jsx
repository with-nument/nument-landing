/* eslint-disable react/jsx-props-no-spreading */
import { WORK } from '@src/constants/site';
import CtaBand from '@src/ui/CtaBand';
import CustomHead from '@src/components/dom/CustomHead';
import Icon from '@src/ui/Icon';
import Link from 'next/link';
import clsx from 'clsx';
import s from '@src/sections/work/case.module.scss';
import work from '@src/constants/work';

// Case story template: hero, meta, banner, challenge / what we built / result, stack, next story.
export default function CasePage({ slug }) {
  const c = work[slug];
  const next = WORK.find((w) => w.id === c.next);

  return (
    <>
      <CustomHead title={`${c.title} | Nument work`} description={c.summary} />

      <section className={clsx('container', s.hero)}>
        <Link href="/work" className={s.back}>
          <Icon name="arrow" size={16} className={s.backIcon} /> All work
        </Link>
        <div className="meta">
          <span className={clsx('tag', c.kind === 'Client work' && 'tag--indigo')}>{c.kind}</span>
        </div>
        <h1 className={clsx('h-hero', s.title)}>{c.title}</h1>
        <p className={clsx('lead', s.summary)}>{c.summary}</p>
        <dl className={s.meta}>
          {c.meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container" data-reveal="scale">
        {c.banner ? (
          <figure className={s.banner}>
            <img src={c.banner} alt="" />
            {c.privacyNote && (
              <figcaption>
                <Icon name="checkBadge" size={14} /> {c.privacyNote}
              </figcaption>
            )}
          </figure>
        ) : (
          <div className={clsx(s.banner, s.bannerShot)}>
            <div className={s.browser}>
              <div className={s.browserBar}>
                <i />
                <i />
                <i />
              </div>
              <img src={c.screen} alt={`${c.title} website`} />
            </div>
            <div className={s.phone}>
              <img src={c.phone} alt={`${c.title} on a phone`} />
            </div>
          </div>
        )}
      </section>

      <section className={clsx('container', s.story)}>
        <div className={s.block} data-reveal>
          <span className="eyebrow">The challenge</span>
          <p className={s.big}>{c.challenge}</p>
        </div>

        <div className={clsx(s.block, s.split)} data-reveal>
          <div>
            <span className="eyebrow">What we built</span>
            <ul className="checklist">
              {c.built.map((b) => (
                <li key={b}>
                  <Icon name="checkBadge" size={18} /> {b}
                </li>
              ))}
            </ul>
          </div>
          {c.builtArt && (
            <div className={s.sideArt}>
              <img src={c.builtArt} alt="" loading="lazy" />
            </div>
          )}
        </div>

        <div className={s.block} data-reveal>
          <span className="eyebrow">The result</span>
          <div className={clsx(s.metrics, s[`tint_${c.tint}`])}>
            {c.metrics.map((m) => (
              <div key={m.label}>
                <b className="tabular">{m.value}</b>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          {c.resultArt && (
            <div className={s.wideArt}>
              <img src={c.resultArt} alt="" loading="lazy" />
            </div>
          )}
        </div>

        <div className={clsx(s.block, s.stackRow)} data-reveal>
          <span className="eyebrow">Built with</span>
          <div className={s.tags}>
            {c.stack.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {next && (
        <section className="container" data-reveal>
          <Link href={next.href} className={s.next}>
            <span className="eyebrow">Next story</span>
            <span className={s.nextTitle}>
              {next.title} <Icon name="arrow" size={28} />
            </span>
            <span className={s.nextSub}>{next.summary}</span>
          </Link>
        </section>
      )}

      <CtaBand title={'Have a product in mind?\nLet’s build it together.'} />
    </>
  );
}

export function getStaticPaths() {
  return { paths: Object.keys(work).map((slug) => ({ params: { slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
