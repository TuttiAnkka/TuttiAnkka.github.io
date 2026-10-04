function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          ELMERI NIEMINEN
        </a>

        <nav className="nav-links">
          <a href="#projects">PROJECTS</a>
          <a href="#hero">ABOUT</a>
        </nav>

        <a href="#contact" className="nav-button">
          CONTACT ME
        </a>
      </div>
    </header>
  );
}

export default Navbar;
