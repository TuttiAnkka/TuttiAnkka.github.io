import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Hero from "./components/Hero";
import AsciiBackground from "./components/AsciiBackground";

function App() {
  return (
    <>
      <AsciiBackground />
      <div className="site-frame">
        <Navbar />

        <main>
          <Hero />
          <Projects></Projects>
          <Contact></Contact>
        </main>
      </div>
    </>
  );
}

export default App;
