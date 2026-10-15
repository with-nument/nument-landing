// 1.5px rounded line icons (Lucide geometry), 24px grid. Colour comes from currentColor.
const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7M8 7h9v9" />,
  check: <path d="M20 6 9 17l-5-5" />,
  checkBadge: (
    <>
      <path d="M12 2.5 14.4 4l2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.5 9.6 20l-2.8.2-.9-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.2Z" />
      <path d="m8.5 12 2.3 2.3 4.7-4.6" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  chevronRight: <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M18 6 6 18M6 6l12 12" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M4.5 19.5 5.6 16A8.5 8.5 0 1 1 8.3 18.6Z" />
      <path d="M9.2 8.6c-.3 1.6.6 3.4 2 4.8s3.2 2.3 4.8 2l.6-1.6-1.8-.9-.9.9c-.9-.4-2.1-1.6-2.5-2.5l.9-.9-.9-1.8Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.5v.01M11.5 16v-3.2c0-1.4 1-2.3 2.2-2.3s2 .9 2 2.3V16M11.5 10.5V16" />
    </>
  ),
  play: <path d="M8 5.5v13l10.5-6.5Z" />,
  volume: (
    <>
      <path d="M11 5 6.5 9H3.5v6h3L11 19Z" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  volumeOff: (
    <>
      <path d="M11 5 6.5 9H3.5v6h3L11 19Z" />
      <path d="m16 10 4 4M20 10l-4 4" />
    </>
  ),
  sparkle: <path d="M12 3c.6 4.2 2.8 6.4 7 7-4.2.6-6.4 2.8-7 7-.6-4.2-2.8-6.4-7-7 4.2-.6 6.4-2.8 7-7Z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  rupee: <path d="M7 5h10M7 9h10M10.5 5c3.5 0 5 1.6 5 4s-1.5 4-5 4H8l7 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.3 2.4 3.4 5.2 3.4 8.5s-1.1 6.1-3.4 8.5c-2.3-2.4-3.4-5.2-3.4-8.5s1.1-6.1 3.4-8.5Z" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  message: <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.2A8 8 0 1 1 20 12Z" />,
  flow: (
    <>
      <circle cx="5.5" cy="6" r="2" />
      <circle cx="18.5" cy="18" r="2" />
      <path d="M7.5 6h5a3 3 0 0 1 3 3v6a3 3 0 0 0 3 3" />
    </>
  ),
  sheet: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="M4 9h16M4 14.5h16M10 9v11.5" />
    </>
  ),
  bell: <path d="M6 16.5V11a6 6 0 1 1 12 0v5.5l1.5 1.5h-15ZM10 20.5h4" />,
  user: (
    <>
      <circle cx="12" cy="8.5" r="3.5" />
      <path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
    </>
  ),
  star: <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9Z" />,
  send: <path d="M20.5 3.5 10 14M20.5 3.5 14 20.5l-4-6.5-6.5-4Z" />,
};

export default function Icon({ name, size = 20, stroke = 1.5, className, style, fill = 'none' }) {
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
