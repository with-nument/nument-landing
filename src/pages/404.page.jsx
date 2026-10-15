import Button, { BookButton } from '@src/ui/Button';
import CustomHead from '@src/components/dom/CustomHead';
import { PageHero } from '@src/ui/Sections';

export default function Custom404() {
  return (
    <>
      <CustomHead title="Page not found | Nument" description="This page does not exist. Head back home or book a free call with Nument." noindex />
      <PageHero
        eyebrow="404"
        title={
          <>
            This page
            <br />
            <span className="em">took a day off</span>
          </>
        }
        sub="The link may be old or mistyped. Everything else is right where you left it."
        actions={false}
      >
        <div className="hero__actions">
          <Button href="/" variant="hero-primary" arrow>
            Back to home
          </Button>
          <BookButton variant="hero-outline">Book a free call</BookButton>
        </div>
      </PageHero>
    </>
  );
}
