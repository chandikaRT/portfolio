const CERTS = [
  {
    name:   'BSc (Hons) Computer Networks & Security',
    issuer: 'Wrexham Glyndŵr University, UK',
    type:   'Education',
  },
  {
    name:   'Introduction to Cybersecurity Tools & Cyber Attacks',
    issuer: 'IBM',
    type:   'Certification',
  },
  {
    name:   'Introduction to Cybersecurity',
    issuer: 'Cisco',
    type:   'Certification',
  },
  {
    name:   'Foundation Certificate in Software Engineering',
    issuer: 'Asia Pacific Institute of Information Technology',
    type:   'Certification',
  },
  {
    name:   'IELTS — Overall Band 7',
    issuer: 'Listening 8.5 · Reading 7 · Writing 6 · Speaking 7',
    type:   'Language',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="wrap">
        <p className="label">Education & Certifications</p>
        <div className="cert-list">
          {CERTS.map((c, i) => (
            <div className="cert-item" key={i}>
              <hr />
              <div className="cert-row">
                <span className="cert-type">{c.type}</span>
                <div className="cert-body">
                  <p className="cert-name">{c.name}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>

      <style>{`
        .cert-list { display: flex; flex-direction: column; }
        .cert-item hr { margin-bottom: var(--sp-5); }
        .cert-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: var(--sp-10);
          padding-bottom: var(--sp-5);
          align-items: start;
        }
        .cert-type {
          font-size: var(--text-label);
          font-weight: var(--w-semi);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--c-ink-3);
          padding-top: 2px;
        }
        .cert-name {
          font-size: var(--text-sm);
          font-weight: var(--w-semi);
          color: var(--c-ink);
          line-height: var(--leading-snug);
        }
        .cert-issuer {
          font-size: var(--text-sm);
          color: var(--c-ink-2);
          margin-top: var(--sp-2);
        }
        @media (max-width: 600px) {
          .cert-row {
            grid-template-columns: 1fr;
            gap: var(--sp-2);
          }
        }
      `}</style>
    </section>
  )
}
