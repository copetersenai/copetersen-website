// Hero.jsx — copetersen.ai hero section

const heroStyles = {
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '640px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-end',
  },
  bg: {
    position: 'absolute', inset: 0,
    backgroundImage: 'url(../../assets/photo-hotel-lobby.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    transform: 'scale(1.03)',
    transition: 'transform 0.6s ease',
  },
  overlay: {
    position: 'absolute', inset: 0,
    background: 'linear-gradient(to bottom, rgba(26,26,46,0.22) 0%, rgba(26,26,46,0.75) 60%, rgba(26,26,46,0.92) 100%)',
  },
  content: {
    position: 'relative', zIndex: 2,
    padding: '0 80px 96px',
    maxWidth: '1280px',
    width: '100%',
  },
  eyebrow: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '11px', fontWeight: 600,
    letterSpacing: '0.18em', textTransform: 'uppercase',
    color: '#e02030', marginBottom: '20px',
  },
  headline: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 200, fontSize: 'clamp(48px, 6vw, 88px)',
    letterSpacing: '-0.02em', lineHeight: 1.05,
    color: '#FFFFFF',
    marginBottom: '24px',
    maxWidth: '780px',
  },
  subhead: {
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: 300, fontSize: '18px',
    lineHeight: 1.65, color: 'rgba(255,255,255,0.75)',
    maxWidth: '560px', marginBottom: '40px',
  },
  ctaRow: { display: 'flex', gap: '14px', alignItems: 'center' },
  ctaPrimary: {
    background: '#c80815', color: 'white',
    border: 'none', borderRadius: '4px',
    padding: '14px 32px',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '15px', fontWeight: 400,
    cursor: 'pointer', letterSpacing: '0.03em',
    transition: 'all 200ms ease',
  },
  ctaSecondary: {
    background: 'transparent', color: 'rgba(255,255,255,0.85)',
    border: '1.5px solid rgba(255,255,255,0.4)',
    borderRadius: '4px', padding: '13px 32px',
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '15px', fontWeight: 300,
    cursor: 'pointer', letterSpacing: '0.03em',
    transition: 'all 200ms ease',
  },
  scrollCue: {
    position: 'absolute', bottom: '32px', right: '80px', zIndex: 2,
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
    color: 'rgba(255,255,255,0.4)', cursor: 'pointer',
  },
  scrollLine: {
    width: '1px', height: '40px',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
  },
  scrollText: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: '9px', fontWeight: 600,
    letterSpacing: '0.14em', textTransform: 'uppercase',
    writingMode: 'vertical-rl',
    color: 'rgba(255,255,255,0.4)',
  },
};

const Hero = () => {
  const [ctaHover, setCtaHover] = React.useState(false);
  return React.createElement('section', { style: heroStyles.section, id: 'hero' },
    React.createElement('div', { style: heroStyles.bg }),
    React.createElement('div', { style: heroStyles.overlay }),
    React.createElement('div', { style: heroStyles.content },
      React.createElement('div', { style: heroStyles.eyebrow }, 'Vistage Chair · Executive Coach · AI Advisor'),
      React.createElement('h1', { style: heroStyles.headline }, 'Make better\ndecisions.'),
      React.createElement('p', { style: heroStyles.subhead },
        'I help CEOs and business owners on the mid peninsula think more clearly, lead more confidently, and grow with trusted peers.'
      ),
      React.createElement('div', { style: heroStyles.ctaRow },
        React.createElement('button', {
          style: {
            ...heroStyles.ctaPrimary,
            ...(ctaHover ? { background: '#b00612', transform: 'translateY(-1px)', boxShadow: '0 6px 20px rgba(139,26,46,0.3)' } : {}),
          },
          onMouseEnter: () => setCtaHover(true),
          onMouseLeave: () => setCtaHover(false),
        }, 'Schedule a call'),
        React.createElement('button', { style: heroStyles.ctaSecondary }, 'About Christian')
      )
    ),
    React.createElement('div', { style: heroStyles.scrollCue },
      React.createElement('div', { style: heroStyles.scrollLine }),
      React.createElement('span', { style: heroStyles.scrollText }, 'Scroll')
    )
  );
};

Object.assign(window, { Hero });
