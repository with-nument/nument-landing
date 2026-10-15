const contact = {
  email: 'contact@nument.in',
  // Cal.com booking link without the domain, e.g. 'yourname/30min'.
  // While empty, "Book a call" falls back to opening an email.
  calLink: 'abhigyan-numentai/intro-call',
  // WhatsApp number with country code and no "+" or spaces, e.g. '919876543210'.
  // While empty, every WhatsApp button and link is hidden.
  whatsapp: '',
  // Company LinkedIn page. While empty, the link is hidden.
  linkedin: '',
  location: 'Gurugram, India',
};

export const calUrl = contact.calLink ? `https://cal.com/${contact.calLink}` : `mailto:${contact.email}`;
export const whatsappUrl = (text = 'Hi Nument, I would like to discuss a project.') => (contact.whatsapp ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}` : '');

export default contact;
