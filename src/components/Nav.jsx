import { useState } from 'react'

const links = [
  { label: 'About',      href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Contact',    href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="nav">
      <div className="nav__inner wrap">
        <a href="#" className="nav__brand" onClick={close}>
          Chandika Rathnayake
        </a>

        <ul className="nav__links" role="list">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="nav__link" onClick={close}>{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span className={open ? 'open' : ''} /><span className={open ? 'open' : ''} /><span className={open ? 'open' : ''} />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          <ul role="list">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="nav__mobile-link" onClick={close}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          background: var(--c-nav-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--c-border);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--nav-h);
          max-width: var(--max-w);
        }
        .nav__brand {
          font-size: 0.9375rem;
          font-weight: var(--w-bold);
          color: var(--c-ink);
          letter-spacing: -0.01em;
        }
        .nav__links {
          display: flex;
          gap: var(--sp-8);
          align-items: center;
        }
        .nav__link {
          font-size: 0.8125rem;
          font-weight: var(--w-medium);
          color: var(--c-ink-2);
          transition: color var(--dur-fast) ease;
        }
        .nav__link:hover { color: var(--c-ink); }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--sp-2);
        }
        .nav__burger span {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--c-ink);
          transition: transform var(--dur-base) ease, opacity var(--dur-base) ease;
        }
        .nav__mobile {
          border-top: 1px solid var(--c-border);
          padding: var(--sp-6);
          background: var(--c-bg);
        }
        .nav__mobile ul { display: flex; flex-direction: column; gap: var(--sp-4); }
        .nav__mobile-link {
          font-size: var(--text-lg);
          font-weight: var(--w-medium);
          color: var(--c-ink);
        }
        @media (max-width: 767px) {
          .nav__links { display: none; }
          .nav__burger { display: flex; }
        }
      `}</style>
    </nav>
  )
}
