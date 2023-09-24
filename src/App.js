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
  const [colorMode, setColorMode] = useState(false);
  const [coderColor, setCoderColor] = useState('#e96747')
  const [designerColor, setDesignerColor] = useState('#7d2588')
  const [Role, setRole] = useState(true);
  const [update,setUpdate] = useState(true);
  const sec = useRef();

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', window.innerHeight + "px");
    sec.current.style.scrollBehavior = ""
    sec.current.scrollTop = 0
    sec.current.style.scrollBehavior = "smooth"
  }, [])

  useEffect(() => {
    if(colorMode){
      setCoderColor('#F8914E');
      setDesignerColor('#A37DF6');
      document.documentElement.style.setProperty('--bg', 'linear-gradient(103deg, #212429 0%, rgba(33, 36, 41, 1) 101.55%');
      document.documentElement.style.setProperty('--bw', 'white');
      document.documentElement.style.setProperty('--wb', '#212429');
      document.documentElement.style.setProperty('--g1', '#24272C');
      document.documentElement.style.setProperty('--g2', '#404147');
      document.documentElement.style.setProperty('--glow', '0px 0px 20px var(--primary)');
    }
    else{
      setCoderColor('#e96747');
      setDesignerColor('#7d2588');
      document.documentElement.style.setProperty('--bg', 'white');
      document.documentElement.style.setProperty('--bw', 'black');
      document.documentElement.style.setProperty('--wb', 'white');
      document.documentElement.style.setProperty('--g1', 'white');
      document.documentElement.style.setProperty('--g2', '#dfe7f2');
      document.documentElement.style.setProperty('--glow', '0px 0px 0px var(--primary)');
    }
    setUpdate(pre => !pre)
  },[colorMode])

  useEffect(() => {
    if (Role) {
      document.documentElement.style.setProperty('--primary', coderColor);
      document.documentElement.style.setProperty('--filter', "invert(51%) sepia(39%) saturate(1069%) hue-rotate(324deg) brightness(95%) contrast(92%)");
      document.querySelector('meta[name="theme-color"]').setAttribute('content', coderColor);
    }
    else {
      document.documentElement.style.setProperty('--primary', designerColor);
      document.documentElement.style.setProperty('--filter', "invert(18%) sepia(44%) saturate(3798%) hue-rotate(277deg) brightness(91%) contrast(93%)");
      document.querySelector('meta[name="theme-color"]').setAttribute('content', designerColor);

    }
  }, [Role,update,coderColor,designerColor])

  const handleScroll = (e) => {
    const height = e.target.offsetHeight - 1
    const pos = parseInt(e.target.scrollTop / height);
    if (pos !== activePage) {
      setAcivePage(pos);
    }
  }

  return (
    <div className="App">
      <Nav activePage={activePage} setShowProfile={setShowProfile} setColorMode={setColorMode}/>
      {
        showProfile ?
          <>
            <div className='profile-cover' onClick={() => setShowProfile(false)}></div>
            <Profile setShowProfile={setShowProfile} />
          </> : <></>
      }
      <div ref={sec} className='Sections' onScroll={handleScroll}>
        <Home Role={Role} setRole={setRole} setShowProfile={setShowProfile} colorMode={colorMode}/>
        <Skills Role={Role} />
        <Project Role={Role} />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
