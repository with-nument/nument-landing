/* eslint-disable react/jsx-props-no-spreading */
import Icon from '@src/ui/Icon';
import Link from 'next/link';
import clsx from 'clsx';
import contact, { calUrl, whatsappUrl } from '@src/constants/contact';
import useCalEmbed from '@src/hooks/useCalEmbed';

// Pill button from the design kit (.btn + variant). Renders a Next link for internal paths,
// a plain anchor for external ones, and a <button> without href. The cursor glow is wired globally in _app.
export default function Button({ href, variant = 'ink', size, arrow, icon, className, children, block, ...rest }) {
  const cls = clsx('btn', `btn--${variant}`, variant.startsWith('hero') && 'btn--hero', size === 'sm' && 'btn--sm', block && 'btn--block', className);
  const inner = (
    <>
      <span className="btn__glow" />
      <span>
        {icon && <Icon name={icon} size={18} />}
        {children}
        {arrow && <Icon name="arrow" size={16} className="btn__arrow" />}
      </span>
    </>
  );
  if (!href) {
    return (
      <button type="button" className={cls} {...rest}>
        {inner}
      </button>
    );
  }
  if (/^(https?:|mailto:|tel:)/.test(href)) {
    return (
      <a href={href} className={cls} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

// "Book a call": opens the Cal.com popup, or the booking page / email when the embed is not available.
export function BookButton({ children = 'Book a free call', ...rest }) {
  const cal = useCalEmbed();
  return (
    <Button href={calUrl} data-event="book_call" {...(cal || {})} {...rest}>
      {children}
    </Button>
  );
}

// WhatsApp button. Renders nothing until a number is set in constants/contact.js.
export function WhatsAppButton({ text, children = 'WhatsApp us', ...rest }) {
  if (!contact.whatsapp) return null;
  return (
    <Button href={whatsappUrl(text)} icon="whatsapp" data-event="whatsapp" {...rest}>
      {children}
    </Button>
  );
}
