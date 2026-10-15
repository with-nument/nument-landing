import CustomHead from '@src/components/dom/CustomHead';
import contact from '@src/constants/contact';
import s from '@src/sections/legal/legal.module.scss';

const UPDATED = '15 October 2026';

// Kit legal layout: one 680px column, plain language.
export default function PrivacyPage() {
  return (
    <>
      <CustomHead
        title="Privacy Policy | Nument"
        description="How Nument handles the little personal data this website collects: what we keep, why, and how to ask us to delete it."
        breadcrumbs={[{ name: 'Privacy', path: '/privacy' }]}
      />
      <article className={s.legal}>
        <span className="eyebrow">Privacy</span>
        <h1 className={s.title}>Privacy policy</h1>
        <p className={s.updated}>Last updated {UPDATED}</p>

        <h2>The short version</h2>
        <p>We collect as little as we can, we never sell it, and we use it only to reply to you and to improve this website.</p>

        <h2>What we collect</h2>
        <ul>
          <li>
            <b>When you book a call:</b> your name, email and anything you choose to tell us. Bookings are handled by Cal.com.
          </li>
          <li>
            <b>When you email or message us:</b> your message and contact details, so we can reply.
          </li>
          <li>
            <b>When you browse:</b> anonymous page views and button clicks through Vercel Analytics. It does not use cookies and does not identify you.
          </li>
        </ul>

        <h2>How we use it</h2>
        <p>To reply to you, to prepare for and follow up on calls you booked, and to see which pages help visitors. We do not sell or rent your data, and we do not use it for advertising.</p>

        <h2>Who else handles it</h2>
        <p>Cal.com (bookings), Vercel (hosting and analytics) and our email provider. Each handles data under its own privacy policy.</p>

        <h2>How long we keep it</h2>
        <p>Enquiries are kept for as long as we are in touch, and deleted within 12 months after that unless we work together.</p>

        <h2>Your choices</h2>
        <p>
          You can ask us to show, correct or delete what we hold about you at any time. Write to <a href={`mailto:${contact.email}`}>{contact.email}</a> and we will act within 30 days.
        </p>

        <h2>Contact</h2>
        <p>
          Nument, {contact.location}. Email <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      </article>
    </>
  );
}
