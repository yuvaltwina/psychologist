import "./App.css";

import { Contact } from "./pages/Contact/Contact";
import { Experience } from "./pages/Experience/Experience";
import { Experties } from "./pages/Experties/Experties";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Lecture } from "./pages/Lecture/Lecture";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import { Treatment } from "./pages/Treatment/Treatment";
import { useRef } from "react";

function App() {
  document.title = "פסיכולוג שחר ברורמן ";
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
      {/* <div className="home-and-treatment"> */}
      <Home refList={refList} />
      {/* </div> */}
      <div>
        <Treatment />
        <div className="lecture-and-experties" ref={lectureRef}>
          <Lecture />
          <Experties />
        </div>
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
