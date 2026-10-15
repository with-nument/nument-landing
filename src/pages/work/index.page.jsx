/* eslint-disable react/jsx-props-no-spreading */
import { ConceptsSection, PageHero, WorkSection } from '@src/ui/Sections';
import CtaBand from '@src/ui/CtaBand';
import CustomHead from '@src/components/dom/CustomHead';

const seo = {
  title: 'Our Work: Veraawell and Voicely | Nument',
  description: 'Real products by Nument: Veraawell, a mental health platform used by 1,000+ people, and Voicely, our AI voice agent. Plus concepts for your industry.',
  breadcrumbs: [{ name: 'Work', path: '/work' }],
};

export default function WorkPage() {
  return (
    <>
      <CustomHead {...seo} />
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Real products,
            <br />
            <span className="em">real numbers</span>
          </>
        }
        sub="A mental health platform built for a client, and the voice agent we built in-house. Both are live and used every day."
      />
      <WorkSection head={false} />
      <ConceptsSection />
      <CtaBand title={'Want to be our next story?\nLet’s talk about what you need.'} />
    </>
  );
}
