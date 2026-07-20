const STATS = [
  { value: '70%',  label: 'Dev time reduced',       sub: 'with Claude Code' },
  { value: '$7M+', label: 'Revenue generated',       sub: 'for clients' },
  { value: '40%',  label: 'Efficiency gains',         sub: 'delivered' },
  { value: '90%',  label: 'Project success rate',     sub: 'across 3 countries' },
]

export default function Stats() {
  return (
    <section className="stats">
      <hr />
      <div className="wrap">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <div className="stat" key={i}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
              <span className="stat__sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <hr />

      <style>{`
        .stats > .wrap {
          padding-top: var(--sp-12);
          padding-bottom: var(--sp-12);
        }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--sp-8);
        }
        .stat {
          display: flex;
          flex-direction: column;
          gap: var(--sp-2);
        }
        .stat__value {
          font-size: clamp(2.25rem, 5vw, 3.5rem);
          font-weight: var(--w-bold);
          letter-spacing: -0.03em;
          color: var(--c-ink);
          line-height: 1;
        }
        .stat__label {
          font-size: var(--text-sm);
          font-weight: var(--w-medium);
          color: var(--c-ink-2);
          line-height: var(--leading-snug);
        }
        .stat__sub {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--c-ink-3);
        }
        @media (max-width: 767px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  )
}
