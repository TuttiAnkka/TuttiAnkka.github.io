function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        {/*<span className="eyebrow">PROJECTS</span>*/}

        <h2>Projects</h2>

        <p>
          A few chosen projects I've worked on, built, and experimented with.
          More can be found on my{" "}
          <a
            href="https://github.com/TuttiAnkka"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="projects-list">
        {/* Project 01 */}
        <article className="project">
          <div className="project-image">
            <img src="/images/morkkis.png" alt="Housing App Project" />
          </div>

          <div className="project-content">
            {/*<span className="project-number">01</span>*/}

            <h3>Mörkkis - Housing App</h3>

            <p>
              Cabin reservation desktop application made during the first year
              of my studies at Karelia. This project taught me a lot about XAML,
              WPF, SQL and C#.
            </p>

            <div className="project-meta">
              <span>C#</span>
              <span>SQL</span>
              <span>WPF</span>
              <span>XAML</span>
            </div>

            <a
              href="https://github.com/TuttiAnkka/Morkkis"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View repository <span>↗</span>
            </a>
          </div>
        </article>

        {/* Project 02 */}
        <article className="project project-reverse">
          <div className="project-image">
            <img src="/images/project-2.jpg" alt="Project 2" />
          </div>

          <div className="project-content">
            <span className="project-number">02</span>

            <h3>Project Name</h3>

            <p>TODO</p>

            <div className="project-meta">
              <span>Tech 1</span>
              <span>Tech 2</span>
              <span>Tech 3</span>
            </div>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View repository <span>↗</span>
            </a>
          </div>
        </article>

        {/* Project 03 */}
        <article className="project">
          <div className="project-image">
            <img src="/images/project-3.jpg" alt="Project 3" />
          </div>

          <div className="project-content">
            <span className="project-number">03</span>

            <h3>Project Name</h3>

            <p>TODO</p>

            <div className="project-meta">
              <span>Tech 1</span>
              <span>Tech 2</span>
              <span>Tech 3</span>
            </div>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View repository <span>↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
