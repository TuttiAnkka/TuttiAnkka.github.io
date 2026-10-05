function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="eyebrow">CONTACT</span>

          <h2>Get in touch</h2>

          <p>
            Interested in working together or just want to say hello? Feel free
            to reach out!
          </p>
        </div>

        <div className="contact-info">
          <a
            href="mailto:santtuelmeri.nieminen@gmail.com"
            className="contact-email"
          >
            santtuelmeri.nieminen@gmail.com
          </a>

          <div className="social-links">
            <a
              href="https://github.com/TuttiAnkka"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/santtu-elmeri-nieminen-261452184"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://www.youtube.com/@ElmeriN"
              target="_blank"
              rel="noreferrer"
            >
              Youtube ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
