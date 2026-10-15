import contact from '@src/constants/contact';
import { getCalApi } from '@calcom/embed-react';

const CAL_NAMESPACE = 'nument';
const CAL_CONFIG = { layout: 'month_view', theme: 'light' };

// Cal.com is loaded only when someone shows intent (hover or tap on a booking button), so pages stay
// fast and set no third-party cookies until then. Returns props for a link, or null when no booking
// link is configured (callers keep their mailto fallback).
const load = () =>
  getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
    cal('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view', cssVarsPerTheme: { light: { 'cal-brand': '#2a2c33' } } });
    return cal;
  });

const useCalEmbed = (enabled = true) => {
  if (!enabled || !contact.calLink) return null;
  return {
    onPointerEnter: () => {
      load();
    },
    onClick: (e) => {
      // Ctrl/Cmd-click still opens the booking page in a new tab.
      if (e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      load().then((cal) => cal('modal', { calLink: contact.calLink, config: CAL_CONFIG }));
    },
  };
};

export default useCalEmbed;
