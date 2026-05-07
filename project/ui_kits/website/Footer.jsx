// Footer.jsx — copetersen.ai footer

const footerStyles = {
  wrap: { background: '#1A1A2E', color: 'rgba(255,255,255,0.55)' },
  inner: {
    maxWidth: '1280px', margin: '0 auto',
    padding: '64px 80px 40px',
  },
  top: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '56px' },
  logoArea: { display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '280px' },
  wordmark: {
    fontFamily: "'Open Sans', sans-serif", fontWeight: 200,
    fontSize: '16px', letterSpacing: '0.03em', color: '#FFFFFF',
  },
  tagline: {
    fontFamily: "'Open Sans', sans-serif", fontWeight: 300,
    fontSize: '13px', lineHeight: 1.6, color: 'rgba(255,255,255,0.45)',
  },
  cols: { display: 'flex', gap: '64px' },
  col: {},
  colHead: {
    fontFamily: "'Open Sans', sans-serif", fontSize: '10px',
    fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.3)', marginBottom: '16px',
  },
  colLink: {
    display: 'block', fontFamily: "'Open Sans', sans-serif",
    fontSize: '13px', fontWeight: 300,
    color: 'rgba(255,255,255,0.55)', textDecoration: 'none',
    marginBottom: '10px', cursor: 'pointer',
    background: 'none', border: 'none', padding: 0, textAlign: 'left',
    transition: 'color 150ms',
  },
  divider: { borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 0 24px' },
  bottom: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  copy: { fontFamily: "'Open Sans', sans-serif", fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,0.28)' },
  social: { display: 'flex', gap: '16px', alignItems: 'center' },
  socialIcon: {
    width: '32px', height: '32px', borderRadius: '4px',
    border: '1px solid rgba(255,255,255,0.12)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', color: 'rgba(255,255,255,0.4)',
    fontSize: '11px', fontFamily: "'Open Sans', sans-serif",
    fontWeight: 600, letterSpacing: '0.04em',
  },
};

const Footer = () => React.createElement('footer', { style: footerStyles.wrap },
  React.createElement('div', { style: footerStyles.inner },
    React.createElement('div', { style: footerStyles.top },
      React.createElement('div', { style: footerStyles.logoArea },
        React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
          React.createElement(window.LogoMark, { color: '#FFFFFF', accentColor: '#e02030', size: 24 }),
          React.createElement('span', { style: footerStyles.wordmark },
            'Christian O. Petersen',
            React.createElement('span', { style: { color: '#e02030' } }, '.ai')
          )
        ),
        React.createElement('p', { style: footerStyles.tagline },
          'Vistage Chair · Executive Coach · AI Advisor\nMid Peninsula, California'
        )
      ),
      React.createElement('div', { style: footerStyles.cols },
        React.createElement('div', { style: footerStyles.col },
          React.createElement('div', { style: footerStyles.colHead }, 'Services'),
          ['Peer Advisory Groups', 'Executive Coaching', 'AI Strategy', 'Vistage'].map(l =>
            React.createElement('button', { key: l, style: footerStyles.colLink }, l)
          )
        ),
        React.createElement('div', { style: footerStyles.col },
          React.createElement('div', { style: footerStyles.colHead }, 'Connect'),
          ['About', 'Thinking', 'Schedule a call', 'Contact'].map(l =>
            React.createElement('button', { key: l, style: footerStyles.colLink }, l)
          )
        )
      )
    ),
    React.createElement('hr', { style: footerStyles.divider }),
    React.createElement('div', { style: footerStyles.bottom },
      React.createElement('span', { style: footerStyles.copy },
        '© 2026 Christian O. Petersen · copetersen.ai · All rights reserved'
      ),
      React.createElement('div', { style: footerStyles.social },
        React.createElement('div', { style: footerStyles.socialIcon }, 'in'),
      )
    )
  )
);

Object.assign(window, { Footer });
