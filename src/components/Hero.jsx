function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Elmeri Nieminen</h1>

          <p className="eyebrow">SOFTWARE - GAMES - MUSIC</p>
          <p className="hero-description">TODO</p>

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
