import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProjectsPage.css'
import ProjectsData from '../Data/ProjectsData.json';

const ProjectsPage = () => {
    const { role } = useParams();
    const [activeProject,setActiveProject] = useState(0);
    
    return (
        <div className='ProjectsPage'>
            <div className='project-title'>PROJECTS</div>
            <div className='ProjectsPageInner'>
            <div className='projects-menu'>
                {
                    ProjectsData[role]['projects'].map((ele, ind) => {
                        return (
                            ind !== 0?
                            <>
                                <input type="radio" id={ind} name="project-name"/>
                                <label className='menu-item' id={ind} onClick={()=>setActiveProject(ind)} for={ind}>{ele.name}</label>
                            </>
                            :
                            <></>
                        )
                    })
                }
            </div>
            <div className='projects-details'>
                {Object.entries(ProjectsData[role]['projects'][activeProject]).map((ele)=>{
                    return(
                        <div className='details-item'>
                            <div className='details-key'>{ele[0]}</div>
                            <div className='details-value'>{ele[1]}</div>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default ProjectsPage