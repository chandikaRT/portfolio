const ROLES = [
  {
    role:     'Techno-Functional Consultant',
    company:  'Jinasena (Pvt) Ltd',
    location: 'Colombo, Sri Lanka',
    period:   'Apr 2024 – Present',
    bullets: [
      'Led Odoo ERP implementation across multiple departments, reducing manual processes by 40%.',
      'Integrated Claude Code into the engineering workflow and cut development cycles by 70%.',
      'Built Playwright end-to-end test suites for Odoo customisations; 60% reduction in QA effort.',
      'Designed and deployed AI-powered workflow automations using LLM tools and prompt engineering.',
    ],
  },
  {
    role:     'Technical Project Manager',
    company:  'PointersHub Ltd',
    location: 'Nairobi, Kenya',
    period:   'Aug 2023 – Jan 2024',
    bullets: [
      'Directed end-to-end delivery of multiple ERP initiatives, on time and within budget.',
      'Introduced agile methodologies that improved delivery timelines by 25%.',
      'Managed a diverse team of developers, analysts, and testers; achieved 90% project success rate.',
    ],
  },
  {
    role:     'Technical Project Manager',
    company:  'World Web IT Solutions L.L.C.',
    location: 'Muscat, Oman',
    period:   'Sep 2019 – Mar 2023',
    bullets: [
      'Owned product development and P&L for the OERP department.',
      'Implemented ERP across five organisations; three generated revenue growth exceeding $7 million.',
      'Raised product quality through UX research, performance benchmarking, and risk mitigation.',
    ],
  },
  {
    role:     'Administration / Accounts & IT Officer',
    company:  'Al Naif Group of Companies',
    location: 'Muscat, Oman',
    period:   'Sep 2017 – Sep 2019',
    bullets: [
      'Managed accounts and daily transactions for four companies, driving account and revenue growth.',
      'Handled IT support, network implementation, and maintenance across the group.',
      'Managed handover of two companies\' assets while maintaining operational continuity.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <p className="label">Experience</p>
        <div className="exp-list">
          {ROLES.map((r, i) => (
            <div className="exp-item" key={i}>
              <hr />
              <div className="exp-row">
                <div className="exp-meta">
                  <span className="exp-period">{r.period}</span>
                  <span className="exp-location">{r.location}</span>
                </div>
                <div className="exp-body">
                  <p className="exp-role">{r.role}</p>
                  <p className="exp-company">{r.company}</p>
                  <ul className="exp-bullets">
                    {r.bullets.map((b, j) => (
                      <li key={j}>— {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-list { display: flex; flex-direction: column; }
        .exp-item hr { margin-bottom: var(--sp-6); }
        .exp-item:last-child { padding-bottom: 0; }
        .exp-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: var(--sp-10);
          padding-bottom: var(--sp-10);
        }
        .exp-meta {
          display: flex;
          flex-direction: column;
          gap: var(--sp-2);
          padding-top: 2px;
        }
        .exp-period {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--c-ink-3);
          line-height: var(--leading-snug);
        }
        .exp-location {
          font-size: var(--text-label);
          color: var(--c-ink-3);
          line-height: var(--leading-snug);
        }
        .exp-role {
          font-size: var(--text-base);
          font-weight: var(--w-bold);
          color: var(--c-ink);
        }
        .exp-company {
          font-size: var(--text-sm);
          font-weight: var(--w-medium);
          color: var(--c-ink-2);
          margin-top: var(--sp-2);
        }
        .exp-bullets {
          margin-top: var(--sp-4);
          display: flex;
          flex-direction: column;
          gap: var(--sp-2);
        }
        .exp-bullets li {
          font-size: var(--text-sm);
          color: var(--c-ink-2);
          line-height: var(--leading-loose);
        }
        @media (max-width: 767px) {
          .exp-row {
            grid-template-columns: 1fr;
            gap: var(--sp-3);
          }
          .exp-meta {
            flex-direction: row;
            gap: var(--sp-3);
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  )
}
