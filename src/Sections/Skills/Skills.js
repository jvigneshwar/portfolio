import React, { useEffect, useRef, useState } from 'react'
import './Skills.css'
import SkillsData from '../../Data/SkillsData';
import { Icon } from '@iconify/react';

const Skills = ({ Role }) => {
  const [skillClassName, setSkillClassName] = useState([]);
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeSkillPercent, setActiveSkillPercent] = useState(0);

  const container = useRef();

  useEffect(()=>{
    container.current.scrollLeft = 0;
  },[Role])

  useEffect(() => {
    let l = SkillsData[Role ? 'frontendRole' : 'designer'].length;
    let arr = new Array(l)
    arr.fill("");
    arr[activeSkill] = "active"
    setSkillClassName(arr)
    Role ?
      setActiveSkillPercent(SkillsData.frontendRole[activeSkill].percentage)
      :
      setActiveSkillPercent(SkillsData.designer[activeSkill]?.percentage)
  }, [Role, activeSkill])

  const handleScroll = (e) => {
    const index = parseInt(e.target.scrollLeft / 185);
    if (index !== activeSkill) {
      setActiveSkill(index)
    }
  }

  return (
    <div id='Skills' className='Section'>
      <div className='skills-outer-container'>
        <div className='skills-left-btn' onClick={(e) => {
          if (e.target.nextElementSibling)
            e.target.nextElementSibling.scrollLeft = e.target.nextElementSibling.scrollLeft - 200;
        }}><Icon icon="ep:arrow-left-bold" /></div>
        <div ref={container} className='skills-inner-container' onScroll={handleScroll}>
          {Role ?
            SkillsData.frontendRole && SkillsData.frontendRole.map((ele, ind) => {
              return (
                <div key={ind} className={`skills-item ${skillClassName[ind]}`}>
                  <div className='skills-inner-item'>
                    <Icon icon={ele.svg} color="var(--primary)" />
                  </div>
                </div>
              )
            })
            :
            SkillsData.designer && SkillsData.designer.map((ele, ind) => {
              return (
                <div key={ind} className={`skills-item ${skillClassName[ind]}`}>
                  <div className='skills-inner-item'>
                    <Icon icon={ele.svg} color="var(--primary)" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className='skills-right-btn' onClick={(e) => {
          if (e.target.previousElementSibling)
            e.target.previousElementSibling.scrollLeft = e.target.previousElementSibling.scrollLeft + 200;
        }}><Icon icon="ep:arrow-left-bold" /></div>
      </div>
      <div className='skills-range'>
        <div className='skills-inner-range' style={{ width: activeSkillPercent }}></div>
        <div className='skils-range-hover'
          style={{ left: activeSkillPercent }}>{activeSkillPercent}</div>
      </div>
      <pre className='skills-details'>
        {Role ?
          SkillsData && SkillsData.frontendRole[activeSkill].description
          :
          SkillsData && SkillsData.designer[activeSkill]?.description
        }
      </pre>
    </div>
  )
}

export default Skills