import React from 'react'
import { Icon } from '@iconify/react';
import './Nav.css'

const Nav = ({activePage,setShowProfile}) => {
  return (
    <div className="nav">
        <div className="inav">
            <div className="icon" onClick={()=>{setShowProfile(true)}} ></div>
            <ul className="nav-link">
                <a href='#Skills'  className={"links " + (activePage===1?"active":"") }>Skills<div className="line"></div></a>
                <a href='#Projects' className={"links " + (activePage===2?"active":"") }>Project<div className="line"></div></a>
                <a href='#About' className={"links " + (activePage===3?"active":"") }>About me<div className="line"></div></a>
                <a href='#Contact' className={"links " + (activePage===4?"active":"") }>Contact<div className="line"></div></a>
            </ul>
            <Icon className='toogle' onClick={(e)=>{
              let cur = e.target;
              if(cur.previousElementSibling){
                if(cur.previousElementSibling.style.width === "0%")
                cur.previousElementSibling.style.width = "50%"
                else
                cur.previousElementSibling.style.width = "0%"
              }
              else{
                if(cur.parentElement.previousElementSibling.style.width === "0%")
                cur.parentElement.previousElementSibling.style.width = "50%"
                else
                cur.parentElement.previousElementSibling.style.width = "0%"
              }
            }} icon="heroicons-solid:menu-alt-3" />
        </div>
    </div>
  )
}

export default Nav