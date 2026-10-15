import Icon from '@src/ui/Icon';
import clsx from 'clsx';
import m from '@src/ui/mocks/mocks.module.scss';

// Small, real HTML mocks of things we build. Sample data only; every place that shows them says so.
// Shared by the home showcase, the hero and the industry pages.

export function Float({ icon, tone = 'indigo', title, sub, className, delay = 0, style }) {
  return (
    <div className={clsx(m.float, m[`tone_${tone}`], className)} style={{ animationDelay: `${delay}s`, ...style }}>
      <span className={m.floatIcon}>
        <Icon name={icon} size={16} stroke={1.75} />
      </span>
      <span>
        <b>{title}</b>
        {sub && <small>{sub}</small>}
      </span>
    </div>
  );
}

export function SpeedRing({ value = 98, label = 'Page speed', className, style }) {
  return (
    <div className={clsx(m.speed, className)} style={style}>
      <svg viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="15" />
        <circle cx="18" cy="18" r="15" className={m.speedFill} style={{ strokeDashoffset: 94.2 * (1 - value / 100) }} />
      </svg>
      <span>
        <b>{value}</b>
        <small>{label}</small>
      </span>
    </div>
  );
}

export function WebsiteMock({ floats = true }) {
  return (
    <div className={m.stage}>
      <div className={m.browser}>
        <div className={m.browserBar}>
          <i />
          <i />
          <i />
          <span className={m.url}>
            <Icon name="globe" size={12} /> mehtadental.in
          </span>
        </div>
        <div className={m.site}>
          <div className={m.siteNav}>
            <b>Mehta Dental</b>
            <span>Treatments</span>
            <span>Doctors</span>
            <span>Prices</span>
            <em>Book a visit</em>
          </div>
          <div className={m.siteHero}>
            <div>
              <span className={m.kicker}>Sector 56, Gurugram</span>
              <div className={m.siteH}>
                Gentle dental care,
                <br />
                on your schedule.
              </div>
              <p>Clear prices, no waiting rooms. Book in 30 seconds and get reminders on WhatsApp.</p>
              <div className={m.siteBtns}>
                <em>Book a visit</em>
                <span>See prices</span>
              </div>
            </div>
            <div className={m.booking}>
              <div className={m.bookingHead}>
                <Icon name="calendar" size={14} /> Pick a time
              </div>
              <div className={m.days}>
                {['Mon 12', 'Tue 13', 'Wed 14', 'Thu 15'].map((d, i) => (
                  <span key={d} className={clsx(i === 1 && m.on)}>
                    {d}
                  </span>
                ))}
              </div>
              <div className={m.slots}>
                {['10:30', '11:15', '12:00', '4:30', '5:15', '6:00'].map((s) => (
                  <span key={s} className={clsx(s === '5:15' && m.on)}>
                    {s}
                  </span>
                ))}
              </div>
              <div className={m.bookingCta}>Confirm Tue, 5:15 pm</div>
            </div>
          </div>
        </div>
      </div>
      {floats && (
        <>
          <Float icon="bell" tone="green" title="New booking" sub="Riya S. · Tue, 5:15 pm" className={m.fTopRight} />
          <Float icon="whatsapp" tone="green" title="Reminder sent on WhatsApp" sub="2 hours before the visit" className={m.fBottomLeft} delay={1.2} />
          <SpeedRing className={clsx(m.fLeft, m.floaty)} />
        </>
      )}
    </div>
  );
}

export function AppMock({ floats = true }) {
  const bars = [38, 52, 44, 66, 58, 80, 72];
  return (
    <div className={clsx(m.stage, m.appRow)}>
      <div className={m.dash}>
        <div className={m.dashHead}>
          <b>This week</b>
          <span className={m.live}>
            <i /> Live
          </span>
        </div>
        <div className={m.kpis}>
          {[
            ['Enquiries', '48', '+12%'],
            ['Demos booked', '19', '+8%'],
            ['Fees collected', '₹3.2L', '+21%'],
          ].map(([k, v, d]) => (
            <div key={k}>
              <span>{k}</span>
              <b>{v}</b>
              <em>{d}</em>
            </div>
          ))}
        </div>
        <div className={m.chart}>
          {bars.map((h, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }} />
          ))}
        </div>
        <div className={m.chartAxis}>
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>
      <div className={m.phone}>
        <div className={m.notch} />
        <div className={m.phoneBody}>
          <span className={m.hello}>Hi Aarav</span>
          <div className={m.nextClass}>
            <span>Next class · 5:00 pm</span>
            <b>Physics: Laws of Motion</b>
            <em>Join class</em>
          </div>
          <div className={m.scoreRow}>
            <div className={m.ring}>
              <svg viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" />
                <circle cx="18" cy="18" r="15" className={m.ringFill} />
              </svg>
              <b>82%</b>
            </div>
            <div>
              <b>Last test</b>
              <span>Up 9% from last month</span>
            </div>
          </div>
          <div className={m.listItem}>
            <Icon name="calendar" size={14} /> Doubt session, Sat 11 am
          </div>
          <div className={m.listItem}>
            <Icon name="rupee" size={14} /> Fee due on 5 Nov
          </div>
        </div>
      </div>
      {floats && (
        <>
          <Float icon="rupee" tone="green" title="Fee received · ₹12,000" sub="Paid by UPI, receipt sent" className={m.fAppTop} />
          <Float icon="calendar" title="Demo class booked" sub="Sat, 11 am · from Instagram" className={m.fAppBottom} delay={1.4} />
        </>
      )}
    </div>
  );
}

export const CLINIC_CHAT = {
  name: 'Mehta Dental',
  initials: 'MD',
  chat: [
    { me: false, t: 'Hi, can I see Dr. Mehta tomorrow evening?', at: '7:42 pm' },
    { me: true, t: 'Of course. Dr. Mehta is free tomorrow at 5:15 pm and 6:00 pm. Which one works for you?', at: '7:42 pm' },
    { me: false, t: '5:15 please', at: '7:43 pm' },
    { me: true, t: 'Booked for Tue, 5:15 pm. I will send you a reminder 2 hours before.', at: '7:43 pm' },
    { me: false, t: 'How much is a cleaning?', at: '7:44 pm' },
    { me: true, t: 'Scaling and polishing is ₹1,500 and takes about 30 minutes.', at: '7:44 pm' },
  ],
  title: ['Your front desk,', 'awake at 11 pm'],
  handles: ['Answers common questions', 'Books and reschedules visits', 'Sends reminders on WhatsApp', 'Hands tricky chats to your team'],
};

export function AssistantMock({ active = true, script = CLINIC_CHAT, side = true }) {
  return (
    <div className={clsx(m.stage, m.assistRow)}>
      <div className={m.chatPhone}>
        <div className={m.chatHead}>
          <span className={m.avatar}>{script.initials}</span>
          <span>
            <b>{script.name}</b>
            <small>AI assistant · online</small>
          </span>
        </div>
        <div className={clsx(m.chatBody, active && m.play)}>
          <span className={m.dayChip}>Today</span>
          {script.chat.map((c, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={i} className={clsx(m.bubble, c.me ? m.out : m.in)} style={{ animationDelay: `${0.3 + i * 0.9}s` }}>
              {c.t}
              <time>
                {c.at}
                {c.me && <Icon name="check" size={11} stroke={2} />}
              </time>
            </div>
          ))}
          <div className={m.typing} style={{ animationDelay: `${0.3 + script.chat.length * 0.9}s` }}>
            <i />
            <i />
            <i />
          </div>
        </div>
        <div className={m.chatInput}>
          <span>Message</span>
          <i>
            <Icon name="send" size={14} />
          </i>
        </div>
      </div>
      {side && (
        <div className={m.handles}>
          <span className="eyebrow">What it handles</span>
          <div className={m.handlesTitle}>
            {script.title[0]}
            <br />
            {script.title[1]}
          </div>
          <ul>
            {script.handles.map((t) => (
              <li key={t}>
                <Icon name="check" size={14} stroke={2.25} /> {t}
              </li>
            ))}
          </ul>
          <div className={m.miniStats}>
            <div>
              <b>2 sec</b>
              <span>to reply</span>
            </div>
            <div>
              <b>24x7</b>
              <span>no days off</span>
            </div>
            <div>
              <b>हिं + En</b>
              <span>Hindi and English</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const LEAD_FLOW = {
  flow: [
    { icon: 'globe', t: 'New enquiry', s: 'Website form or ad' },
    { icon: 'message', t: 'Instant reply', s: 'WhatsApp, under 1 minute' },
    { icon: 'sheet', t: 'Saved and scored', s: 'Google Sheet or CRM' },
    { icon: 'bell', t: 'Follow-up', s: 'Automatic, on day 2' },
    { icon: 'calendar', t: 'Call booked', s: 'On your calendar' },
  ],
  log: [
    { at: '10:02', t: 'Enquiry from website: Neha, "price for braces?"' },
    { at: '10:02', t: 'WhatsApp reply sent with prices and slots' },
    { at: '10:03', t: 'Added to Leads sheet, tagged "Braces · hot"' },
    { at: '10:41', t: 'Consult booked for Thu, 4:30 pm' },
  ],
  stats: [
    ['1 min', 'to first reply'],
    ['0', 'enquiries forgotten'],
  ],
};

export function AutomationMock({ data = LEAD_FLOW }) {
  return (
    <div className={clsx(m.stage, m.flowWrap)}>
      <div className={m.flow}>
        <div className={m.track}>
          <i className={m.pulse} />
        </div>
        {data.flow.map((f, i) => (
          <div key={f.t} className={m.node} style={{ animationDelay: `${i * 0.5}s` }}>
            <span className={m.step}>{i + 1}</span>
            <span className={m.nodeIcon}>
              <Icon name={f.icon} size={20} />
            </span>
            <b>{f.t}</b>
            <span>{f.s}</span>
          </div>
        ))}
      </div>
      <div className={m.flowBottom}>
        <div className={m.log}>
          <div className={m.logHead}>
            <span className={m.live}>
              <i /> Running
            </span>
            <span>Activity · today</span>
          </div>
          <ul>
            {data.log.map((l) => (
              <li key={l.t}>
                <time>{l.at}</time>
                {l.t}
              </li>
            ))}
          </ul>
        </div>
        <div className={m.flowStats}>
          {data.stats.map(([v, l]) => (
            <div key={l}>
              <b>{v}</b>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
