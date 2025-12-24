import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, MyClick, StarsCanvas } from "./components";
import Achievements from "./components/Achievements";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-b from-[#000000]  via-[#160726] to-[#0e0013]'>
        {/* <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> */}
          <Navbar />
          <Hero />
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* <Achievements/> */}
        <MyClick />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;