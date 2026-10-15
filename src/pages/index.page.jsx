/* eslint-disable react/jsx-props-no-spreading */
import { ConceptsSection, FaqSection, FilmSection, FoundingSection, ProcessSection, ProofBar, ServicesSection, WorkSection } from '@src/ui/Sections';
import CtaBand from '@src/ui/CtaBand';
import CustomHead from '@src/components/dom/CustomHead';
import Hero from '@src/sections/home/Hero';
import Showcase from '@src/sections/home/Showcase';

const seo = {
  title: 'Nument | AI and software studio for growing businesses',
  description: 'Nument is an AI and software studio in Gurugram. We design and build websites, apps, AI assistants and automation for founders and growing businesses, with fixed prices from ₹50K.',
  keywords: ['Nument', 'AI and software studio', 'website development Gurugram', 'app development India', 'AI assistant for business', 'WhatsApp automation', 'AI agency India'],
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
