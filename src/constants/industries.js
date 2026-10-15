// Industry pages (/for/[slug]). The associate's WhatsApp templates link here, so each page must sell on a phone in 30 seconds.
// Everything we would build is a clearly labelled concept with a real starting price.

const industries = {
  clinics: {
    slug: 'clinics',
    label: 'Clinics and healthcare',
    tint: 'indigo',
    art: '/img/concept-clinic.webp',
    seo: {
      title: 'Nument for clinics | Websites and WhatsApp booking assistants',
      description: 'A clinic website patients trust and an AI assistant that books visits and sends reminders on WhatsApp. Built by Nument, from ₹1L.',
    },
    hero: {
      eyebrow: 'For clinics and healthcare',
      title: ['More booked visits,', 'fewer missed calls'],
      sub: 'A clinic website patients trust, and an AI assistant that books, reschedules and reminds on WhatsApp, even after you close.',
    },
    pains: [
      { icon: 'phone', t: 'Calls go unanswered', d: 'Patients call during a consultation or after hours, get no answer, and book somewhere else.' },
      { icon: 'calendar', t: 'No-shows cost you slots', d: 'Without reminders, patients forget. The slot stays empty and the day runs late.' },
      { icon: 'globe', t: 'The website looks dated', d: 'Patients check you online first. An old site with no prices or booking makes them hesitate.' },
    ],
    build: {
      title: 'A clinic website with a WhatsApp booking assistant',
      points: [
        'A fast website with treatments, doctors and clear prices',
        'Online booking in 30 seconds',
        'A WhatsApp assistant that answers questions and books visits',
        'Automatic reminders before every visit',
      ],
      mocks: ['website', 'assistant'],
    },
    outcomes: ['Patients can book at 11 pm without calling', 'Fewer no-shows with reminders on WhatsApp', 'Your front desk spends less time on the phone', 'A website that matches the care you give'],
    timeline: '3 to 4 weeks',
    from: '₹1L',
    faq: [
      { q: 'Is patient data safe?', a: 'Yes. We collect only what booking needs, keep it in your own accounts, and you control who sees it. No patient data is used to train AI models.' },
      { q: 'Can it work with how we book today?', a: 'Usually, yes. We can work with your current calendar, a Google Sheet or your clinic software, so your team does not change how it works.' },
      { q: 'Does the assistant give medical advice?', a: 'No. It answers practical questions like timings, prices and directions, books visits, and hands anything medical to your team.' },
      { q: 'What does it cost to run every month?', a: 'Hosting and WhatsApp messages usually cost a few thousand rupees a month. We tell you the exact number before we start.' },
    ],
  },
  'd2c-brands': {
    slug: 'd2c-brands',
    label: 'D2C brands',
    tint: 'pink',
    art: '/img/concept-d2c.webp',
    seo: {
      title: 'Nument for D2C brands | Fast stores and AI shopping assistants',
      description: 'A fast store, an AI assistant that answers shoppers in seconds, and WhatsApp flows that bring back abandoned carts. Built by Nument, from ₹1.5L.',
    },
    hero: {
      eyebrow: 'For D2C brands',
      title: ['A store that', 'sells while you sleep'],
      sub: 'A fast store, an AI assistant that answers shoppers in seconds, and WhatsApp flows that bring abandoned carts back.',
    },
    pains: [
      { icon: 'message', t: 'Questions go unanswered', d: 'Sizing, delivery and returns questions pile up in DMs. Shoppers leave before anyone replies.' },
      { icon: 'rupee', t: 'Carts get abandoned', d: 'Most visitors who add to cart never pay, and nobody follows up with them.' },
      { icon: 'clock', t: 'The site is slow', d: 'Every extra second of loading on a phone loses buyers who came from your ads.' },
    ],
    build: {
      title: 'A fast store with an AI shopping assistant',
      points: [
        'A fast store on Shopify or custom-built',
        'An AI assistant for sizing, delivery and returns questions',
        'Abandoned cart reminders on WhatsApp',
        'Order updates without your team typing them',
      ],
      mocks: ['assistant', 'automation'],
    },
    outcomes: ['Shoppers get answers in seconds, day or night', 'More abandoned carts turn into orders', 'Fewer "where is my order" messages for your team', 'Pages that load fast on any phone'],
    timeline: '4 to 6 weeks',
    from: '₹1.5L',
    chat: {
      name: 'Kaira Studio',
      initials: 'KS',
      chat: [
        { me: false, t: 'Hi, is the linen kurta true to size? I am usually an M.', at: '11:12 pm' },
        { me: true, t: 'It runs slightly relaxed, so M will feel easy and comfortable. If you prefer a closer fit, S works well too.', at: '11:12 pm' },
        { me: false, t: 'When will it reach Pune?', at: '11:13 pm' },
        { me: true, t: 'Orders placed tonight reach Pune by Thursday. Delivery is free and returns are easy for 7 days.', at: '11:13 pm' },
        { me: false, t: 'Great, ordering the M', at: '11:14 pm' },
        { me: true, t: 'Lovely choice. I have saved your size, here is your checkout link.', at: '11:14 pm' },
      ],
      title: ['Your best salesperson,', 'online at midnight'],
      handles: ['Sizing and fit questions', 'Delivery dates and returns', 'Order status on WhatsApp', 'Hands complaints to your team'],
    },
    flow: {
      flow: [
        { icon: 'globe', t: 'Cart left', s: 'Shopper leaves checkout' },
        { icon: 'clock', t: 'Wait 1 hour', s: 'No payment yet' },
        { icon: 'message', t: 'WhatsApp nudge', s: 'With the items they picked' },
        { icon: 'bell', t: 'Second nudge', s: 'Next day, if still unpaid' },
        { icon: 'rupee', t: 'Order placed', s: 'Back on your dashboard' },
      ],
      log: [
        { at: '21:04', t: 'Cart left: 2 items, ₹3,480' },
        { at: '22:04', t: 'WhatsApp reminder sent with the cart link' },
        { at: '22:31', t: 'Shopper asked about delivery, assistant replied' },
        { at: '22:36', t: 'Order paid by UPI' },
      ],
      stats: [
        ['1 hour', 'to the first nudge'],
        ['0', 'carts left without a follow-up'],
      ],
    },
    faq: [
      { q: 'Shopify or a custom store?', a: 'Most brands do best on Shopify, and we build custom themes and apps for it. If you need something Shopify cannot do, we build a custom store.' },
      { q: 'Will the assistant say wrong things about products?', a: 'It answers only from your product details and policies, and passes anything it is unsure about to your team.' },
      { q: 'Can you move our current store?', a: 'Yes. We move products, customers and orders, and set up redirects so you do not lose Google traffic.' },
      { q: 'What are the running costs?', a: 'Store plan, hosting and WhatsApp messages. We give you the exact monthly number before we start.' },
    ],
  },
  coaching: {
    slug: 'coaching',
    label: 'Coaching institutes',
    tint: 'green',
    art: '/img/concept-coaching.webp',
    seo: {
      title: 'Nument for coaching institutes | Enquiry follow-up and student apps',
      description: 'Every enquiry answered in a minute, demo classes booked automatically, and one simple app for classes, tests and fees. Built by Nument, from ₹1.5L.',
    },
    hero: {
      eyebrow: 'For coaching institutes',
      title: ['Every enquiry answered,', 'every seat filled'],
      sub: 'Instant replies to every enquiry, demo classes booked automatically, and one simple app for classes, tests and fees.',
    },
    pains: [
      { icon: 'message', t: 'Enquiries go cold', d: 'Parents and students enquire on ads and forms. By the time someone calls back, they have joined elsewhere.' },
      { icon: 'sheet', t: 'Everything lives in sheets', d: 'Leads, batches and fees sit in different sheets and WhatsApp groups, and things slip.' },
      { icon: 'rupee', t: 'Fee follow-ups take hours', d: 'Your team spends days every month reminding parents about pending fees.' },
    ],
    build: {
      title: 'A student app with automatic enquiry follow-up',
      points: ['Instant WhatsApp replies to every enquiry', 'Demo class booking with reminders', 'A student app for classes, tests and results', 'Automatic fee reminders and receipts'],
      mocks: ['app', 'automation'],
    },
    outcomes: ['Every enquiry gets a reply within a minute', 'More demo classes booked and attended', 'Fees collected on time with less chasing', 'One dashboard for leads, batches and fees'],
    timeline: '4 to 6 weeks',
    from: '₹1.5L',
    flow: {
      flow: [
        { icon: 'globe', t: 'New enquiry', s: 'Ad, website or call' },
        { icon: 'message', t: 'Instant reply', s: 'Course details on WhatsApp' },
        { icon: 'calendar', t: 'Demo booked', s: 'Student picks a slot' },
        { icon: 'bell', t: 'Reminder', s: 'Day before the demo' },
        { icon: 'user', t: 'Admission', s: 'Added to a batch' },
      ],
      log: [
        { at: '18:20', t: 'Enquiry from Instagram ad: JEE weekend batch' },
        { at: '18:20', t: 'Course details and fees sent on WhatsApp' },
        { at: '18:24', t: 'Demo class booked for Sat, 11 am' },
        { at: 'Fri', t: 'Reminder sent to student and parent' },
      ],
      stats: [
        ['1 min', 'to first reply'],
        ['0', 'enquiries forgotten'],
      ],
    },
    faq: [
      { q: 'Will the app be on the Play Store and App Store?', a: 'Yes. We build one app for Android and iPhone and handle publishing under your institute name.' },
      { q: 'Can parents see progress and fees?', a: 'Yes. Parents can get their own login or WhatsApp updates for attendance, test scores and fees.' },
      { q: 'We already use a sheet for leads. Do we lose it?', a: 'No. We can keep your Google Sheet as the source and build on top of it, so nothing changes for your team on day one.' },
      { q: 'What are the running costs?', a: 'Hosting, app store accounts and WhatsApp messages. We give you the exact monthly number before we start.' },
    ],
  },
};

export default industries;
