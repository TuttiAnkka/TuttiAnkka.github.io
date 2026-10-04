function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Elmeri Nieminen</h1>

          <p className="eyebrow">SOFTWARE - GAMES - MUSIC</p>
          <p className="hero-description">
            Currently studying information technology at Karelia University of
            Applied Sciences, specializing in software development. Previously
            graduated as a Game Developer in 2020.
            <br />
            <br />
            During my career I have accumulated a lot of experience with varying
            technologies. These include, but are not limited to: C, C#, Python,
            JavaScript and Rust.{" "}
          </p>

          {/* Buttons might not be needed.. lets see
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">
              Contact me
            </a>

            <a href="#projects" className="button button-secondary">
              View projects
            </a>
          </div>
        */}
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image">
            <img src="/images/profile.jpg" alt="Elmeri" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
