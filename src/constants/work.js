// Case stories. Only facts we can stand behind. Veraawell's product screens are private to the client and never appear.

const work = {
  veraawell: {
    slug: 'veraawell',
    kind: 'Client work',
    title: 'Veraawell',
    tint: 'indigo',
    summary: 'A complete mental health platform for India, designed and built from scratch, with private video therapy right in the browser.',
    banner: '/img/veraawell.webp',
    meta: [
      ['Industry', 'Mental health'],
      ['What we did', 'Product design and engineering'],
      ['Platform', 'Web, with in-browser video'],
    ],
    privacyNote: 'Screens are private to our client, so we tell the story instead.',
    challenge:
      'Veraawell set out to make therapy in India easier to find and easier to start. They needed one complete platform: a place to discover verified experts, book a session and talk privately over video, without asking anyone to install an app.',
    built: [
      'Product design, from the first sketches to the final screens',
      'A web platform for people looking for help, and for the experts who help them',
      'Private video therapy that runs in the browser, with nothing to install',
      'Profiles for verified therapists and experts',
    ],
    builtArt: '/img/vera-talk.webp',
    metrics: [
      { value: '1,000+', label: 'people healing on the platform' },
      { value: '50+', label: 'verified therapists and experts' },
    ],
    resultArt: '/img/vera-path.webp',
    stack: ['Product design', 'Web platform', 'Video therapy', 'Booking'],
    next: 'voicely',
  },
  voicely: {
    slug: 'voicely',
    kind: 'Nument Labs',
    title: 'Voicely',
    tint: 'blue',
    summary: 'Our in-house AI voice agent. It holds natural phone conversations for outbound calls, lead qualification and support.',
    banner: null,
    meta: [
      ['Type', 'In-house product'],
      ['What we did', 'Design, engineering and voice AI'],
      ['Platform', 'Phone calls and web'],
    ],
    challenge:
      'Phone calls are still how most Indian businesses sell and support. IVR menus frustrate callers, and a team can only take so many calls a day. We wanted a voice agent that talks like a person and replies fast enough to feel natural.',
    built: [
      'Real-time speech in and speech out, tuned for low delay',
      'LLM conversations that follow your script and handle real questions',
      'Flows for outbound calls, lead qualification and support',
      'A sandbox to try an agent before it goes live',
    ],
    screen: '/work/voicely-screen.webp',
    phone: '/work/voicely-phone.webp',
    metrics: [
      { value: '~600 ms', label: 'response time on live calls' },
      { value: 'Real voice', label: 'LLM conversations, not IVR menus' },
    ],
    stack: ['Voice agents', 'LLMs', 'Real-time audio', 'Telephony'],
    next: 'veraawell',
  },
};

export default work;
