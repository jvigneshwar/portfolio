import { useEffect, useRef, useState } from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Sections/Home/Home';
import Skills from './Sections/Skills/Skills';
import Project from './Sections/Project/Project';
import About from './Sections/About/About';
import Contact from './Sections/Contact/Contact';
import Profile from './Components/Profile';

function App() {

  const [activePage, setAcivePage] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const sec = useRef();

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', window.innerHeight + "px");
    sec.current.style.scrollBehavior = ""
    sec.current.scrollTop = 0
    sec.current.style.scrollBehavior = "smooth"
  }, [])

  const [Role, setRole] = useState(true);

  useEffect(() => {
    if (Role) {
      document.documentElement.style.setProperty('--primary', "#E96747");
      document.documentElement.style.setProperty('--filter', "invert(51%) sepia(39%) saturate(1069%) hue-rotate(324deg) brightness(95%) contrast(92%)");
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#E96747');
    }
    else {
      document.documentElement.style.setProperty('--primary', "#7D2588");
      document.documentElement.style.setProperty('--filter', "invert(18%) sepia(44%) saturate(3798%) hue-rotate(277deg) brightness(91%) contrast(93%)");
      document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#7D2588');

    }
  }, [Role])

  const handleScroll = (e) => {
    const height = e.target.offsetHeight - 1
    const pos = parseInt(e.target.scrollTop / height);
    if (pos !== activePage) {
      setAcivePage(pos);
    }
    console.log()
  }

  return (
    <div className="App">
      <Nav activePage={activePage} setShowProfile={setShowProfile} />
      {
        showProfile ?
          <>
            <div className='profile-cover' onClick={() => setShowProfile(false)}></div>
            <Profile setShowProfile={setShowProfile}/>
          </> : <></>
      }
      <div ref={sec} className='Sections' onScroll={handleScroll}>
        <Home Role={Role} setRole={setRole} setShowProfile={setShowProfile}/>
        <Skills Role={Role} />
        <Project Role={Role} />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
