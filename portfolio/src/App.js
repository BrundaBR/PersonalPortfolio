import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro/Intro";
import Skills from "./Components/Skills/skills";
import Works from "./Components/Works/works";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;