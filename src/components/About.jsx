export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <p className="label">About</p>
        <div className="about__body">
          <p>
            I've spent the last seven years doing one thing: taking the chaos out of ERP projects.
            From manufacturing floors in Colombo to logistics hubs in Muscat and trading enterprises
            in Nairobi, I've sat with operations teams, untangled their workflows, and built systems
            that people actually use. My background in computer networks and security means I never
            stop at the surface, I understand what's running underneath.
          </p>
          <p>
            The last two years changed how I work. Integrating Claude Code and LLM automation into
            my delivery pipeline cut development time by 70%. I write Python for automation, run
            Playwright end-to-end test suites, and keep a close eye on where AI tools create new
            risk surfaces. I care about shipping things that last, documented, tested, and handed
            over cleanly. Based in Colombo, open to remote consulting globally.
          </p>
        </div>
      </div>

      <style>{`
        .about__body {
          max-width: var(--max-w-text);
          display: flex;
          flex-direction: column;
          gap: var(--sp-6);
        }
        .about__body p {
          font-size: var(--text-base);
          line-height: var(--leading-loose);
          color: var(--c-ink);
        }
      `}</style>
    </section>
  )
}
