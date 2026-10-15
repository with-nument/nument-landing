/* eslint-disable react/jsx-props-no-spreading */
import { AppMock, AssistantMock, AutomationMock, WebsiteMock } from '@src/ui/mocks';
import { FaqSection, FoundingSection, PageHero, ProcessSection, SectionHead } from '@src/ui/Sections';
import { BookButton } from '@src/ui/Button';
import CtaBand from '@src/ui/CtaBand';
import CustomHead from '@src/components/dom/CustomHead';
import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import industries from '@src/constants/industries';
import s from '@src/sections/industry/industry.module.scss';

// Industry page: the link the Growth Associate sends after a call. Pain, concept, outcomes, price, process, FAQ.
export default function IndustryPage({ slug }) {
  const d = industries[slug];
  const mocks = {
    website: <WebsiteMock floats={false} />,
    assistant: <AssistantMock script={d.chat} />,
    app: <AppMock floats={false} />,
    automation: <AutomationMock data={d.flow} />,
  };

  return (
    <>
      <CustomHead title={d.seo.title} description={d.seo.description} />
      <PageHero
        eyebrow={d.hero.eyebrow}
        title={
          <>
            {d.hero.title[0]}
            <br />
            <span className="em">{d.hero.title[1]}</span>
          </>
        }
        sub={d.hero.sub}
      />

      <section className={clsx('container', 'section')} data-reveal>
        <SectionHead
          eyebrow="Sound familiar?"
          title={
            <>
              What gets in the way
              <br />
              <span className="em">of growing</span>
            </>
          }
        />
        <div className={s.pains} data-reveal-stagger>
          {d.pains.map((p) => (
            <article key={p.t} className={s.pain}>
              <span className={s.painIcon}>
                <Icon name={p.icon} size={22} />
              </span>
              <h3 className="h-card">{p.t}</h3>
              <p className="body-muted">{p.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={clsx('container', 'section')}>
        <div data-reveal>
          <SectionHead
            eyebrow="What we would build for you"
            title={
              <>
                {d.build.title.split(' with ')[0]}
                <br />
                <span className="em">with {d.build.title.split(' with ')[1]}</span>
              </>
            }
          />
        </div>
        <div className={s.buildList}>
          {d.build.mocks.map((k) => (
            <div key={k} className={s.mockPanel} data-reveal="scale">
              <div className={s.dots} aria-hidden="true" />
              {mocks[k]}
            </div>
          ))}
        </div>
        <ul className={s.buildPoints} data-reveal-stagger>
          {d.build.points.map((p) => (
            <li key={p}>
              <Icon name="checkBadge" size={18} /> {p}
            </li>
          ))}
        </ul>
        <p className={s.sample}>
          <Icon name="sparkle" size={13} /> A concept with sample data. Your version is planned with you.
        </p>
      </section>

      <section className="container" data-reveal>
        <div className={clsx(s.offer, s[`tint_${d.tint}`])}>
          <div className={s.offerArt}>
            <img src={d.art} alt="" loading="lazy" />
            <span className={clsx('tag', 'tag--concept', s.offerTag)}>Concept</span>
          </div>
          <div className={s.offerBody}>
            <span className="eyebrow">What changes</span>
            <ul className="checklist">
              {d.outcomes.map((o) => (
                <li key={o}>
                  <Icon name="checkBadge" size={18} /> {o}
                </li>
              ))}
            </ul>
            <div className={s.offerFacts}>
              <div>
                <span>Timeline</span>
                <b>{d.timeline}</b>
              </div>
              <div>
                <span>Starting at</span>
                <b className="tabular">{d.from}</b>
              </div>
            </div>
            <p className={s.offerNote}>One fixed quote after a free call. Pay in milestones as the work is delivered.</p>
            <BookButton block arrow>
              Plan my project on a free call
            </BookButton>
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection
        items={d.faq}
        title={
          <>
            Questions from
            <br />
            <span className="em">{d.label.toLowerCase()}</span>
          </>
        }
      />
      <FoundingSection />
      <CtaBand />
    </>
  );
}

export function getStaticPaths() {
  return { paths: Object.keys(industries).map((slug) => ({ params: { slug } })), fallback: false };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}
