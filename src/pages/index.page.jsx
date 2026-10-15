/* eslint-disable react/jsx-props-no-spreading */
import { ConceptsSection, FaqSection, FilmSection, FoundingSection, ProcessSection, ProofBar, ServicesSection, WorkSection } from '@src/ui/Sections';
import CtaBand from '@src/ui/CtaBand';
import CustomHead, { faqSchema, rupees, serviceSchema } from '@src/components/dom/CustomHead';
import { FAQ, SERVICES } from '@src/constants/site';
import Hero from '@src/sections/home/Hero';
import Showcase from '@src/sections/home/Showcase';

const seo = {
  title: 'Nument | Website, App and AI Development Studio in Gurugram',
  description: 'Nument designs and builds websites, apps, AI assistants and WhatsApp automation for growing businesses in India. Fixed quotes, first version in 7 days.',
  schema: [...SERVICES.map((sv) => serviceSchema({ name: sv.title, description: sv.desc, url: '/#services', minPrice: rupees(sv.from) })), faqSchema(FAQ)],
};

function Page() {
  return (
    <>
      <CustomHead {...seo} />
      <Hero />
      <Showcase />
      <ProofBar tight />
      <ServicesSection />
      <WorkSection />
      <ConceptsSection />
      <ProcessSection />
      <FoundingSection />
      <FilmSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}

export default Page;
