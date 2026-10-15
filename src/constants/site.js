// All website copy that is shared between pages lives here, so prices, promises and work are edited in one place.
// Copy rules: plain words, no em or en dashes, never invent clients or numbers.

export const NAV = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/#services' },
  {
    label: 'Industries',
    href: '/for/clinics',
    children: [
      { label: 'Clinics and healthcare', href: '/for/clinics', desc: 'Booking, reminders and a website patients trust', thumb: '/img/concept-clinic.webp' },
      { label: 'D2C brands', href: '/for/d2c-brands', desc: 'Fast stores and assistants that sell while you sleep', thumb: '/img/concept-d2c.webp' },
      { label: 'Coaching institutes', href: '/for/coaching', desc: 'Enquiry follow-up, student apps and fee reminders', thumb: '/img/concept-coaching.webp' },
    ],
  },
  { label: 'About', href: '/about' },
];

// Starting prices are public on purpose: they filter for serious enquiries (₹50K and up).
export const SERVICES = [
  {
    id: 'websites',
    tile: '/img/svc-web.webp',
    title: 'Websites that sell',
    desc: 'Fast, beautiful websites and landing pages that turn visitors into enquiries, with booking, payments and WhatsApp built in.',
    from: '₹50K',
    examples: ['Business websites', 'Landing pages', 'Booking and payments'],
  },
  {
    id: 'apps',
    tile: '/img/svc-app.webp',
    title: 'Web and mobile apps',
    desc: 'Customer apps, portals and dashboards, designed and built end to end, from the first screen to the app store.',
    from: '₹1.5L',
    examples: ['Customer apps', 'Admin dashboards', 'Client portals'],
  },
  {
    id: 'ai',
    tile: '/img/svc-ai.webp',
    title: 'AI assistants',
    desc: 'Chat and voice assistants that answer customers, qualify leads and book appointments, day and night.',
    from: '₹1L',
    examples: ['WhatsApp assistants', 'Voice agents', 'Support bots'],
  },
  {
    id: 'automation',
    tile: '/img/svc-auto.webp',
    title: 'Automation and tools',
    desc: 'Replace spreadsheets and manual follow-ups with simple tools that do the busywork for your team.',
    from: '₹75K',
    examples: ['Lead follow-up', 'CRM and Sheets sync', 'Daily reports'],
  },
];

export const TRUSTED_BY = [
  { name: 'IIM Rohtak', sector: 'Education' },
  { name: 'IIM Shillong', sector: 'Education' },
  { name: 'Veraawell', sector: 'Mental health' },
];

// Tools we build with. These are tools, not clients, and are labelled that way.
export const TOOLS = [
  { name: 'Claude', logo: '/logos/claude.webp' },
  { name: 'Gemini', logo: '/logos/googlegemini.webp' },
  { name: 'Python', logo: '/logos/python.webp' },
  { name: 'Hugging Face', logo: '/logos/huggingface.webp' },
  { name: 'LangChain', logo: '/logos/langchain.webp' },
  { name: 'PyTorch', logo: '/logos/pytorch.webp' },
  { name: 'TensorFlow', logo: '/logos/tensorflow.webp' },
  { name: 'Docker', logo: '/logos/docker.webp' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.webp' },
  { name: 'NVIDIA', logo: '/logos/nvidia.webp' },
];

// Real work only. Veraawell is a client: its product UI is never shown anywhere on the site.
export const WORK = [
  {
    id: 'veraawell',
    kind: 'Client work',
    title: 'Veraawell',
    industry: 'Mental health',
    summary: 'A complete mental health platform for India, designed and built from scratch, with private video therapy right in the browser.',
    metrics: [
      { value: '1,000+', label: 'people healing on the platform' },
      { value: '50+', label: 'verified therapists and experts' },
    ],
    tags: ['Product design', 'Web platform', 'Video therapy'],
    art: '/img/veraawell.webp',
    tint: 'indigo',
    href: '/work/veraawell',
  },
  {
    id: 'voicely',
    kind: 'Nument Labs',
    title: 'Voicely',
    industry: 'Voice AI',
    summary: 'Our in-house AI voice agent. It holds natural phone conversations for outbound calls, lead qualification and support.',
    metrics: [
      { value: '~600 ms', label: 'response time on live calls' },
      { value: 'Real voice', label: 'LLM conversations, not IVR menus' },
    ],
    tags: ['Voice agents', 'LLMs', 'Real-time audio'],
    art: '/work/voicely-phone.webp',
    tint: 'blue',
    href: '/work/voicely',
  },
];

// Clearly labelled concepts: what we would build for each kind of business we work with.
export const CONCEPTS = [
  {
    id: 'clinics',
    industry: 'Clinics and healthcare',
    title: 'A clinic website with a WhatsApp booking assistant',
    summary: 'Patients book, reschedule and get reminders on WhatsApp, so the front desk stops chasing calls.',
    timeline: '3 to 4 weeks',
    from: '₹1L',
    art: '/img/concept-clinic.webp',
    tint: 'indigo',
    href: '/for/clinics',
  },
  {
    id: 'd2c',
    industry: 'D2C brands',
    title: 'A fast store with an AI shopping assistant',
    summary: 'Answers sizing and delivery questions in seconds and brings back abandoned carts on WhatsApp.',
    timeline: '4 to 6 weeks',
    from: '₹1.5L',
    art: '/img/concept-d2c.webp',
    tint: 'pink',
    href: '/for/d2c-brands',
  },
  {
    id: 'coaching',
    industry: 'Coaching institutes',
    title: 'A student app with automatic enquiry follow-up',
    summary: 'Every enquiry gets an instant reply and a demo class slot. Students get one app for classes, tests and fees.',
    timeline: '4 to 6 weeks',
    from: '₹1.5L',
    art: '/img/concept-coaching.webp',
    tint: 'green',
    href: '/for/coaching',
  },
];

export const PROCESS = [
  {
    title: 'Free call',
    short: 'Call',
    desc: 'A 30 minute call to understand your business and what you want to build. No cost and no pressure.',
    points: ['30 minutes', 'Google Meet or phone', 'Honest advice, even if it is "you do not need us"'],
    glow: ['#81a0e9', '#e8effc'],
  },
  {
    title: 'Plan and fixed quote',
    short: 'Plan',
    desc: 'Within 48 hours you get a clear plan: what we build, by when, and one fixed price. No surprises later.',
    points: ['Scope in plain language', 'Timeline by week', 'One fixed price'],
    glow: ['#f59970', '#feede6'],
  },
  {
    title: 'Build with weekly demos',
    short: 'Build',
    desc: 'You see a working first version within 7 days, then a live demo every week. You pay in milestones as work is delivered.',
    points: ['First version in 7 days', 'Weekly live demos', 'Milestone payments'],
    glow: ['#feb12b', '#fff0cf'],
  },
  {
    title: 'Launch and care',
    short: 'Launch',
    desc: 'We launch, train your team and stay on for 30 days of free support. The code, design and data are yours.',
    points: ['30 days free support', 'Team training', 'You own everything'],
    glow: ['#f581a6', '#fcd9e4'],
  },
];

export const FOUNDING = {
  points: ['Founding pricing on your first project', 'The founder on your project, a WhatsApp message away', 'One fixed quote, paid in milestones', 'You own the code, design and data'],
};

export const FAQ = [
  {
    q: 'How much does a project cost?',
    a: 'Most projects fall between ₹50K and ₹5L. A business website starts at ₹50K, an AI assistant at ₹1L and a custom app at ₹1.5L. After a free call you get one fixed price for your project.',
  },
  {
    q: 'How long does it take?',
    a: 'A website takes 2 to 4 weeks. Apps and AI assistants usually take 4 to 8 weeks. Either way, you see a working first version within 7 days.',
  },
  {
    q: 'I am not technical. Is that a problem?',
    a: 'Not at all. Most of the people we work with are not. We explain everything in plain language and take care of the technical side end to end.',
  },
  {
    q: 'Who owns the code and design?',
    a: 'You do, from day one. The code, design, accounts and data all belong to your business.',
  },
  {
    q: 'How do payments work?',
    a: 'In milestones. An advance to start, then a payment as each agreed part is delivered and approved.',
  },
  {
    q: 'Do you only work with businesses in Gurugram?',
    a: 'No. We are based in Gurugram and work with businesses across India over calls, WhatsApp and weekly demos.',
  },
  {
    q: 'What happens after launch?',
    a: 'You get 30 days of free support. After that there is an optional monthly plan for updates, hosting and improvements.',
  },
];
