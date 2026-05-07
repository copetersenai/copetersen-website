// Sections.jsx — About, Proof Strip, Peer Group, The Call, Thinking sections

const S = {
  // Shared
  eyebrow: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#c80815', marginBottom: '16px', display: 'block',
  },
  eyebrowLight: { color: '#e02030' },
  h2: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 200, fontSize: 'clamp(32px, 4vw, 52px)',
    letterSpacing: '-0.02em', lineHeight: 1.1,
    color: '#1A1A2E', marginBottom: '20px',
  },
  h2Light: { color: '#FFFFFF' },
  lead: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300, fontSize: '17px', lineHeight: 1.7,
    color: '#6B6560', marginBottom: '24px',
  },
  leadLight: { color: 'rgba(255,255,255,0.7)' },
  body: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300, fontSize: '15px', lineHeight: 1.75,
    color: '#6B6560',
  },
  bodyLight: { color: 'rgba(255,255,255,0.65)' },
  section: {
    padding: '96px 80px',
    maxWidth: '1280px',
    margin: '0 auto',
  },
  sectionWrap: { width: '100%' },
};

// ── Proof Strip ────────────────────────────────────────────────────────────
const ProofStrip = () => {
  const stats = [
    { number: '17+', label: 'Years as Vistage Chair' },
    { number: '200+', label: 'CEOs coached' },
    { number: '10', label: 'Members per peer group' },
    { number: '6×', label: 'Meetings per year' },
  ];
  return React.createElement('div', {
    style: { background: '#F7F5F2', borderTop: '1px solid #EAE7E2', borderBottom: '1px solid #EAE7E2' }
  },
    React.createElement('div', { style: { ...S.section, padding: '40px 80px', display: 'flex', gap: '0', alignItems: 'center' } },
      stats.map((s, i) => React.createElement(React.Fragment, { key: s.number },
        React.createElement('div', { style: { flex: 1, textAlign: 'center' } },
          React.createElement('div', {
            style: {
              fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
              fontSize: '40px', letterSpacing: '-0.02em', color: '#1A1A2E', lineHeight: 1,
            }
          }, s.number),
          React.createElement('div', {
            style: { fontFamily: "'Open Sans', sans-serif", fontSize: '12px', fontWeight: 300, color: '#A09B94', marginTop: '6px', letterSpacing: '0.03em' }
          }, s.label)
        ),
        i < stats.length - 1 && React.createElement('div', {
          style: { width: '1px', height: '40px', background: '#D4CFC9', flexShrink: 0 }
        })
      ))
    )
  );
};

// ── About ─────────────────────────────────────────────────────────────────
const About = () => React.createElement('div', { style: S.sectionWrap, id: 'about' },
  React.createElement('div', { style: { ...S.section, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' } },
    React.createElement('div', null,
      React.createElement('span', { style: S.eyebrow }, 'About Christian'),
      React.createElement('h2', { style: S.h2 }, "Peer wisdom has always been my north star."),
      React.createElement('p', { style: { ...S.lead, marginBottom: '20px' } },
        "I've been a Vistage Chair on the mid peninsula for over 17 years. Before that, I spent two decades as a CEO myself — so I know what the chair feels like."
      ),
      React.createElement('p', { style: S.body },
        "Today I work with a small group of CEOs and business owners who are serious about growth — their companies' and their own. I run peer advisory groups, do 1:1 executive coaching, and help leaders think through what AI actually means for their business."
      ),
      React.createElement('button', {
        style: {
          marginTop: '32px', background: 'none', border: 'none',
          fontFamily: "'Open Sans', sans-serif", fontSize: '14px', fontWeight: 400,
          color: '#c80815', cursor: 'pointer', padding: 0,
          display: 'flex', alignItems: 'center', gap: '6px',
        }
      }, 'More about Christian ', React.createElement('span', null, '→'))
    ),
    React.createElement('div', {
      style: {
        borderRadius: '4px', overflow: 'hidden',
        boxShadow: '0 12px 32px rgba(26,26,46,0.12)',
        aspectRatio: '3/4',
      }
    },
      React.createElement('img', {
        src: '../../assets/photo-portrait.jpg',
        alt: 'Christian O. Petersen',
        style: { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' },
      })
    )
  )
);

// ── Peer Group ─────────────────────────────────────────────────────────────
const PeerGroup = () => {
  const items = [
    { title: 'Ten CEOs', body: 'Groups stay small — around 10 members. Everyone is a peer. No vendors, no competitors.' },
    { title: 'Six times a year', body: 'Full-day monthly meetings. Expert speakers. Real conversation about real challenges.' },
    { title: 'One-to-one coaching', body: 'Between meetings, I work with each member individually on their biggest priorities.' },
    { title: 'Confidential by design', body: "What's said in the room stays in the room. That's what makes honest conversation possible." },
  ];
  return React.createElement('div', {
    style: { ...S.sectionWrap, background: '#1A1A2E' }, id: 'peer-groups'
  },
    React.createElement('div', { style: S.section },
      React.createElement('span', { style: { ...S.eyebrow, ...S.eyebrowLight } }, 'Peer Advisory'),
      React.createElement('h2', { style: { ...S.h2, ...S.h2Light, maxWidth: '600px' } },
        "A room full of people who actually understand."
      ),
      React.createElement('p', { style: { ...S.lead, ...S.leadLight, maxWidth: '520px', marginBottom: '56px' } },
        "Vistage peer advisory groups bring together CEOs who are committed to growing — as leaders and as people."
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' } },
        items.map(item => React.createElement('div', {
          key: item.title,
          style: {
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '4px', padding: '28px 24px',
          }
        },
          React.createElement('div', {
            style: {
              width: '32px', height: '2px', background: '#c80815', marginBottom: '20px'
            }
          }),
          React.createElement('h4', {
            style: {
              fontFamily: "'Open Sans', sans-serif", fontWeight: 300,
              fontSize: '18px', color: '#FFFFFF', letterSpacing: '-0.01em',
              marginBottom: '10px', lineHeight: 1.3,
            }
          }, item.title),
          React.createElement('p', { style: { ...S.body, ...S.bodyLight, fontSize: '14px' } }, item.body)
        ))
      )
    )
  );
};

// ── The Call ───────────────────────────────────────────────────────────────
const TheCall = () => React.createElement('div', {
  style: {
    ...S.sectionWrap, background: '#F7F5F2',
    borderTop: '1px solid #EAE7E2', borderBottom: '1px solid #EAE7E2',
  },
  id: 'the-call'
},
  React.createElement('div', {
    style: { ...S.section, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', padding: '72px 80px' }
  },
    React.createElement('div', { style: { maxWidth: '560px' } },
      React.createElement('span', { style: S.eyebrow }, 'Start here'),
      React.createElement('h2', { style: { ...S.h2, marginBottom: '16px' } }, "Let's talk."),
      React.createElement('p', { style: S.lead },
        "A 30-minute call is enough to know if we're a fit. No pressure. I'm genuinely curious about where you are and where you're trying to go."
      )
    ),
    React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '14px', flexShrink: 0 } },
      React.createElement('button', {
        style: {
          background: '#c80815', color: 'white', border: 'none', borderRadius: '4px',
          padding: '16px 40px', fontFamily: "'Open Sans', sans-serif",
          fontSize: '15px', fontWeight: 400, cursor: 'pointer', letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
        }
      }, 'Schedule a 30-minute call'),
      React.createElement('button', {
        style: {
          background: 'transparent', color: '#c80815',
          border: '1.5px solid #c80815', borderRadius: '4px',
          padding: '14px 40px', fontFamily: "'Open Sans', sans-serif",
          fontSize: '15px', fontWeight: 300, cursor: 'pointer', letterSpacing: '0.03em',
          whiteSpace: 'nowrap',
        }
      }, 'Send a message')
    )
  )
);

// ── Thinking ───────────────────────────────────────────────────────────────
const Thinking = () => {
  const posts = [
    { eyebrow: 'AI Strategy', title: 'What CEOs get wrong about AI', date: 'April 2026', excerpt: "Most executives are either too early or too late. Here's how to find the right moment." },
    { eyebrow: 'Leadership', title: 'The question that changes everything', date: 'March 2026', excerpt: 'In 17 years of peer groups, I keep coming back to one question that unlocks clarity.' },
    { eyebrow: 'Peer Advisory', title: 'Why smart people need dumb questions', date: 'February 2026', excerpt: "The most useful thing a peer group can do is ask the obvious question you've been avoiding." },
  ];
  return React.createElement('div', { style: S.sectionWrap, id: 'thinking' },
    React.createElement('div', { style: S.section },
      React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' } },
        React.createElement('div', null,
          React.createElement('span', { style: S.eyebrow }, 'Thinking'),
          React.createElement('h2', { style: { ...S.h2, marginBottom: 0 } }, 'Ideas worth sitting with.')
        ),
        React.createElement('button', {
          style: {
            background: 'none', border: 'none', fontFamily: "'Open Sans', sans-serif",
            fontSize: '13px', fontWeight: 400, color: '#c80815', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '5px',
          }
        }, 'All posts →')
      ),
      React.createElement('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' } },
        posts.map((p, i) => React.createElement('div', {
          key: p.title,
          style: {
            borderTop: '2px solid #EAE7E2',
            paddingTop: '24px',
            cursor: 'pointer',
          }
        },
          React.createElement('span', {
            style: {
              fontFamily: "'Open Sans', sans-serif", fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.14em', textTransform: 'uppercase', color: '#c80815',
              display: 'block', marginBottom: '12px',
            }
          }, p.eyebrow),
          React.createElement('h3', {
            style: {
              fontFamily: "'Open Sans', sans-serif", fontWeight: 300,
              fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.3,
              color: '#1A1A2E', marginBottom: '12px',
            }
          }, p.title),
          React.createElement('p', {
            style: { ...S.body, fontSize: '14px', lineHeight: 1.65, marginBottom: '16px' }
          }, p.excerpt),
          React.createElement('span', {
            style: { fontFamily: "'Open Sans', sans-serif", fontSize: '11px', fontWeight: 300, color: '#A09B94' }
          }, p.date)
        ))
      )
    )
  );
};

Object.assign(window, { ProofStrip, About, PeerGroup, TheCall, Thinking });
