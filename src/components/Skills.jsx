const SKILLS = [
  {
    group: 'ERP & Platforms',
    items: 'Odoo, ERPNext, Frappe Framework, Accounting Software, Cloud Maintenance',
  },
  {
    group: 'Engineering',
    items: 'Python, JavaScript, SQL, Git & GitHub, REST APIs, Website Development',
  },
  {
    group: 'AI & QA',
    items: 'Claude Code, LLM Automation, Prompt Engineering, Playwright, Test Automation',
  },
  {
    group: 'Security',
    items: 'Burp Suite, Cybersecurity Fundamentals, IT Asset Management, Network Security',
  },
  {
    group: 'Systems',
    items: 'Linux, Windows, macOS, Hardware Troubleshooting, Technical Support',
  },
  {
    group: 'Project Management',
    items: 'Agile Delivery, Stakeholder Management, Business Process Analysis, Cross-Functional Leadership, Strategy & Roadmapping',
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="label">Skills</p>
        <div className="skills-list">
          {SKILLS.map((s, i) => (
            <div className="skill-row" key={i}>
              <span className="skill-group">{s.group}</span>
              <span className="skill-items">{s.items}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-list {
          display: flex;
          flex-direction: column;
        }
        .skill-row {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: var(--sp-8);
          padding: var(--sp-5) 0;
          border-bottom: 1px solid var(--c-border);
        }
        .skill-row:first-child {
          border-top: 1px solid var(--c-border);
        }
        .skill-group {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-ink-3);
          padding-top: 1px;
        }
        .skill-items {
          font-size: var(--text-sm);
          color: var(--c-ink-2);
          line-height: var(--leading-loose);
        }
        @media (max-width: 600px) {
          .skill-row {
            grid-template-columns: 1fr;
            gap: var(--sp-2);
          }
        }
      `}</style>
    </section>
  )
}
