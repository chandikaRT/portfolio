export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner wrap">
        <h1 className="hero__name">Chandika Rathnayake</h1>

        <p className="hero__role">
          Technical Project Manager,<br />
          Techno-Functional Consultant &amp; AI Specialist
        </p>

        <hr className="hero__rule" />

        <p className="hero__meta">
          Colombo, Sri Lanka · Open to remote work globally
        </p>

        <div className="hero__links">
          <a
            href="https://linkedin.com/in/chandika-rathnayake-b68909188/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__cta"
          >
            LinkedIn ↗
          </a>
          <a href="mailto:chandika.rt@gmail.com" className="hero__cta">
            chandika.rt@gmail.com
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: var(--nav-h);
        }
        .hero__inner {
          padding-top: var(--sp-16);
          padding-bottom: var(--sp-16);
        }
        .hero__name {
          font-size: var(--text-display);
          font-weight: var(--w-bold);
          line-height: var(--leading-tight);
          letter-spacing: -0.04em;
          color: var(--c-ink);
        }
        .hero__role {
          font-size: var(--text-lg);
          font-weight: var(--w-regular);
          color: var(--c-ink-2);
          line-height: var(--leading-snug);
          margin-top: var(--sp-6);
          max-width: 480px;
        }
        .hero__rule {
          margin: var(--sp-8) 0;
          width: 48px;
          border-top: 1px solid var(--c-border);
        }
        .hero__meta {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-ink-3);
        }
        .hero__links {
          display: flex;
          gap: var(--sp-8);
          margin-top: var(--sp-8);
          flex-wrap: wrap;
        }
        .hero__cta {
          font-size: var(--text-sm);
          font-weight: var(--w-medium);
          color: var(--c-ink);
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 2px;
          transition: color var(--dur-fast) ease, border-color var(--dur-fast) ease;
        }
        .hero__cta:hover {
          color: var(--c-accent);
          border-color: var(--c-accent);
        }
      `}</style>
    </section>
  )
}
