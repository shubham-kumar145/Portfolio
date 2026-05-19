import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience,Education, Feedbacks, Hero, Navbar, Tech, Works, MyClick, StarsCanvas } from "./components";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Coding from "./components/Coding";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#000000]  via-[#160726] to-[#0e0013]'>
        <div>
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Education/>
        <Experience />
        <Tech />
        <Works />
       <Certifications/>
        {/* <Feedbacks /> */}
        <Achievements/>
        <Coding/>
        {/* <MyClick /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;