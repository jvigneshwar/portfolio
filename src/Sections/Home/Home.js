import React, { useEffect, useState } from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import FrontendAvatar from "../../Asserts/FrontendAvatar.png";
import DesignAvatar from "../../Asserts/DesignAvatar.png";


const Home = ({ Role, setRole, setShowProfile, colorMode }) => {
  const [divNames, setDivNames] = useState(['home-right', 'home-center']);
  const switchRole = () => {
    setRole(!Role);
    const newArr = [...divNames]
    if (Role) {
      newArr[0] = 'home-right-active'
      newArr[1] = 'home-center-active'
    }
    else {
      newArr[0] = 'home-right'
      newArr[1] = 'home-center'
    }
    setDivNames(newArr)
  }

  useEffect(()=>{
    const newArr = [...divNames]
    if(colorMode)
      if(Role)
        newArr[1] = newArr[1] + ' home-b-d'
      else
        newArr[1] = newArr[1] + ' home-a-d'
    else
      if(Role)
      newArr[1] = 'home-center'
      else
      newArr[1] = 'home-center-active'
    setDivNames(newArr)
  },[colorMode,Role,divNames])

  return (
    <div id='Home' className='Section'>
      <div className='home-left'>
        <div className="home-left-content">
          <div className="home-left-greet">Hi, I'm</div>
          <div className="home-left-name">VIGNESH</div>
          <div className="home-left-role">Frontend Developer</div>
          <div className="home-left-view-link">
            <div onClick={() => setShowProfile(true)} className="home-left-view-btn">
              <p>VIEW PROFILE</p>
              <Icon icon="octicon:arrow-right-16" style={{ color: 'white' }} />
            </div>
          </div>
        </div>
      </div>

      <div className={divNames[1]}>
        <div className="home-center-content">
          <div className="fd-wrap">
            <img src={FrontendAvatar} alt='Frontend Developer' className="fd-img" />
          </div>
          <div className="gd-wrap">
            <img src={DesignAvatar} alt='Graphic Designer' className="gd-img" />
          </div>
          <div className="home-circle" onDoubleClick={switchRole}></div>
        </div>
      </div>

      <div className={divNames[0]}>
        <div className="home-right-content">
          <div className="home-right-greet">Hi, I'm</div>
          <div className="home-right-name">VIGNESH</div>
          <div className="home-right-role">Graphic Designer</div>
          <div className="home-right-viewa-link">
            <div onClick={() => setShowProfile(true)} className="home-right-view-btn">
              <p>VIEW PROFILE</p>
              <Icon icon="octicon:arrow-right-16" style={{ color: 'white' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home