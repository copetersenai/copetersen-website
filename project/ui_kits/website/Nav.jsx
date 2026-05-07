// Nav.jsx — copetersen.ai navigation component
// Depends on: React (global), window.LogoMark (inline SVG component)

const LogoMark = ({ color = '#1A1A2E', accentColor = '#c80815', size = 32 }) => (
  React.createElement('svg', {
    height: size,
    viewBox: '100 0 900 1080',
    xmlns: 'http://www.w3.org/2000/svg',
    style: { display: 'block' }
  },
    React.createElement('path', { fill: color, d: 'M458.48,52.39v68.91l-5.27.8c-194.29,39.78-340.44,211.76-340.44,417.9s146.15,378.12,340.44,417.9l5.27.8v68.91l-18.91-3.38c-225.13-46.09-394.48-245.37-394.48-484.23S214.44,101.86,439.57,55.77l18.91-3.38Z' }),
    React.createElement('path', { fill: color, d: 'M458.48,212.11v69.74l-24.69,9.03c-97.05,41.04-165.14,137.13-165.14,249.12s68.1,208.08,165.14,249.12l24.69,9.03v69.74l-19.95-5.13c-137.59-42.79-237.48-171.11-237.48-322.76s99.9-279.97,237.48-322.76l19.95-5.13Z' }),
    React.createElement('path', { fill: color, d: 'M620.07,212.11l19.95,5.13c137.59,42.79,237.48,171.11,237.48,322.76s-99.9,279.97-237.48,322.76l-19.95,5.13v-69.74l24.69-9.03c97.05-41.04,165.14-137.13,165.14-249.12s-68.1-208.08-165.14-249.12l-24.69-9.03v-69.74Z' }),
    React.createElement('path', { fill: color, d: 'M501.7,45.81h37.18l50.57,2.55c249.4,25.31,444.02,235.76,444.02,491.63,0,238.82-169.53,438.07-394.91,484.15l-18.98,3.39c-.03-22.96-.05-45.92-.08-68.88l5.41-.82c194.5-39.77,340.81-211.72,340.81-417.82,0-220.82-167.96-402.45-383.19-424.29l-5.9-.3v918.77h-74.92V45.81Z' }),
    React.createElement('path', { fill: accentColor, d: 'M458.48,391.56v296.89l-13.91-8.45c-44.89-30.34-74.41-81.72-74.41-139.99s29.52-109.65,74.41-139.99l13.91-8.45Z' }),
    React.createElement('path', { fill: accentColor, d: 'M620.07,391.56l13.91,8.45c44.89,30.34,74.41,81.72,74.41,139.99s-29.52,109.65-74.41,139.99l-13.91,8.45v-296.89Z' })
  )
);

const navStyles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 48px', height: '68px',
    transition: 'all 300ms ease',
  },
  navDefault: {
    background: 'transparent',
    borderBottom: '1px solid transparent',
  },
  navScrolled: {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid rgba(212,207,201,0.4)',
    boxShadow: '0 1px 8px rgba(26,26,46,0.06)',
  },
  logoArea: { display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' },
  wordmark: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 200,
    fontSize: '16px',
    letterSpacing: '0.03em',
    color: '#1A1A2E',
    lineHeight: 1,
  },
  wordmarkLight: { color: '#FFFFFF' },
  wordmarkDot: { color: '#c80815' },
  wordmarkDotLight: { color: '#e02030' },
  links: { display: 'flex', alignItems: 'center', gap: '28px' },
  link: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '13px', fontWeight: 300,
    color: '#3D3935', letterSpacing: '0.02em',
    textDecoration: 'none', cursor: 'pointer',
    background: 'none', border: 'none', padding: 0,
    transition: 'color 150ms',
  },
  linkLight: { color: 'rgba(255,255,255,0.8)' },
  cta: {
    background: '#c80815', color: 'white',
    border: 'none', borderRadius: '4px',
    padding: '9px 22px',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '13px', fontWeight: 400,
    cursor: 'pointer', letterSpacing: '0.03em',
    transition: 'background 200ms, transform 150ms',
  },
};

const Nav = ({ scrolled = false, onNavClick }) => {
  const [hovered, setHovered] = React.useState(null);
  const isLight = !scrolled;
  const links = ['About', 'Peer Groups', 'Coaching', 'AI Strategy', 'Thinking'];

  return React.createElement('nav', {
    style: { ...navStyles.nav, ...(scrolled ? navStyles.navScrolled : navStyles.navDefault) }
  },
    React.createElement('div', { style: navStyles.logoArea, onClick: () => onNavClick && onNavClick('hero') },
      React.createElement(LogoMark, {
        color: scrolled ? '#1A1A2E' : '#FFFFFF',
        accentColor: scrolled ? '#c80815' : '#e02030',
        size: 28
      }),
      React.createElement('span', { style: { ...navStyles.wordmark, ...(isLight ? navStyles.wordmarkLight : {}) } },
        'Christian O. Petersen',
        React.createElement('span', { style: isLight ? navStyles.wordmarkDotLight : navStyles.wordmarkDot }, '.ai')
      )
    ),
    React.createElement('div', { style: navStyles.links },
      links.map(l => React.createElement('button', {
        key: l,
        style: {
          ...navStyles.link,
          ...(isLight ? navStyles.linkLight : {}),
          color: hovered === l ? '#c80815' : (isLight ? 'rgba(255,255,255,0.85)' : '#3D3935'),
        },
        onMouseEnter: () => setHovered(l),
        onMouseLeave: () => setHovered(null),
        onClick: () => onNavClick && onNavClick(l.toLowerCase().replace(' ', '-')),
      }, l)),
      React.createElement('button', { style: navStyles.cta }, 'Schedule a call')
    )
  );
};

Object.assign(window, { Nav, LogoMark });
