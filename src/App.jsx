import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
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
