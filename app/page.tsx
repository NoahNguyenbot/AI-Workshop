export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <h1>Noah Nguyen</h1>
        <p>a Junior at UH Manoa studying Computer Science.</p>
      </header>

      <main>
        <section className="section">
          <h2>This Semester</h2>
          <ul className="semester-list">
            <li>SLS 480E</li>
            <li>my AIR project</li>
            <li>learning to surf</li>
          </ul>
        </section>

        <section className="section">
          <h2>About</h2>
          <p>
            Noah is a Junior at the University of Hawaiʻi at Mānoa, where he
            is studying Computer Science. He&apos;s drawn to the way software
            lets you build things that are both useful and interesting, and
            he enjoys the process of learning how systems work under the
            hood. Outside of coursework, he&apos;s always looking for new
            ideas and skills to explore.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          Noah Nguyen &middot; {year}
        </p>
        <p>Built with Claude Code</p>
      </footer>
    </>
  );
}
