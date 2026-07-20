const LINKS = [
  {
    label:    'Email',
    value:    'chandika.rt@gmail.com',
    href:     'mailto:chandika.rt@gmail.com',
  },
  {
    label:    'LinkedIn',
    value:    'linkedin.com/in/chandika-rathnayake',
    href:     'https://linkedin.com/in/chandika-rathnayake',
    external: true,
  },
  {
    label:    'Phone',
    value:    '+94 74 147 1037',
    href:     'tel:+94741471037',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <hr />
      <div className="wrap">
        <p className="label">Contact</p>
        <h2 className="contact__heading">Let's talk.</h2>
        <p className="contact__sub">
          Available for remote consulting and project-based work globally.
        </p>

        <div className="contact__links">
          {LINKS.map((l, i) => (
            <a
              key={i}
              href={l.href}
              className="contact__link"
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="contact__link-label">{l.label}</span>
              <span className="contact__link-value">
                {l.value} {l.external ? '↗' : ''}
              </span>
            </a>
          ))}
        </div>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Chandika Rathnayake · Colombo, Sri Lanka</p>
        </footer>
      </div>

      <style>{`
        .contact__heading {
          font-size: var(--text-xl);
          font-weight: var(--w-bold);
          letter-spacing: -0.02em;
          color: var(--c-ink);
          margin-bottom: var(--sp-4);
        }
        .contact__sub {
          font-size: var(--text-sm);
          color: var(--c-ink-2);
          margin-bottom: var(--sp-10);
        }
        .contact__links {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .contact__link {
          display: flex;
          align-items: baseline;
          gap: var(--sp-6);
          padding: var(--sp-5) 0;
          border-bottom: 1px solid var(--c-border);
          transition: color var(--dur-fast) ease;
        }
        .contact__link:first-child {
          border-top: 1px solid var(--c-border);
        }
        .contact__link:hover { color: var(--c-accent); }
        .contact__link-label {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-ink-3);
          width: 80px;
          flex-shrink: 0;
          transition: color var(--dur-fast) ease;
        }
        .contact__link:hover .contact__link-label { color: var(--c-accent); }
        .contact__link-value {
          font-size: var(--text-base);
          font-weight: var(--w-medium);
          color: var(--c-ink);
          transition: color var(--dur-fast) ease;
        }
        .contact__link:hover .contact__link-value { color: var(--c-accent); }
        .site-footer {
          margin-top: var(--sp-16);
          font-size: var(--text-label);
          color: var(--c-ink-3);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  )
}
