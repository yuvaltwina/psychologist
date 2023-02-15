import { useRef } from "react";
import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { NotFound } from "./pages/NotFound/NotFound";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Treatment } from "./pages/Treatment/Treatment";
import { Home } from "./pages/Home/Home";
import { Lecture } from "./pages/Lecture/Lecture";
import { Experties } from "./pages/Experties/Experties";
import { Experience } from "./pages/Experience/Experience";
import { Contact } from "./pages/Contact/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const homeRef = useRef(null);
  const lectureRef = useRef(null);
  const exprienceRef = useRef(null);
  const contactRef = useRef(null);
  const navbarRef = useRef(null);
  const refList = {
    home: homeRef,
    lecture: lectureRef,
    exprience: exprienceRef,
    contact: contactRef,
    navbar: navbarRef,
  };
  return (
    <div className="app" ref={homeRef}>
      <Toaster />
      <Navbar refList={refList} />
      <div className="home-and-treatment">
        <Home />
        <Treatment />
      </div>
      <div className="lecture-and-experties" ref={lectureRef}>
        <Lecture />
        <Experties />
      </div>
      <div ref={exprienceRef}></div>
      <Experience />
      <div ref={contactRef}></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

{
  /* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/treatment" element={<Treatment />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes> */
}
