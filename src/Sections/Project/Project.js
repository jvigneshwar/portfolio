import { Icon } from '@iconify/react';
import ProjectsData from "../../Data/ProjectsData.json";
import "./Project.css"
import { useNavigate } from 'react-router-dom';


const Project = ({ Role }) => {

  const navigate = useNavigate();
   
  const handleLoad = (e,ind) => {
    if(ind===0){
      let width = e.target.clientWidth*3+60;
      document.documentElement.style.setProperty('--scrollImageWidth', "-"+width+"px");
    }
    else{
      return
    }
  }

  return (
    <div id='Projects' className='Section'>
      <div className='project-sliding-outer'>
        <div className='project-left-shadow'>Projects</div>
        <div className="project-sliding">
          <div className='project-sliding-hover' onClick={() => { navigate(Role ? '/projectPage/frontend' : '/projectPage/designer') }}>
            <Icon icon="mdi:eye" color="white" className='eye' />
            <p className='view-projects'>View Projects</p>
          </div>
          <div className="project-slide-top">
            {
              Role ?
                ProjectsData && ProjectsData['frontend']['top-slide'].map((ele, ind) => {
                  return (
                    <img key={ind} onLoad={(e)=>handleLoad(e,ind)} alt='project' src={ele} className="project-slide-item" />
                  );
                })
                :
                ProjectsData && ProjectsData['designer']['top-slide'].map((ele, ind) => {
                  return (
                    <img key={ind} alt='project' src={ele} className="project-slide-item" />
                  );
                })
            }
          </div>
          <div className="project-slide-bottom">
            {
              Role ?
                ProjectsData && ProjectsData['frontend']['bottom-slide'].map((ele, ind) => {
                  return (
                    <img key={ind} alt='project' src={ele} className="project-slide-item" />
                  );
                })
                :
                ProjectsData && ProjectsData['designer']['bottom-slide'].map((ele, ind) => {
                  return (
                    <img key={ind} alt='project' src={ele} className="project-slide-item" />
                  );
                })
            }
          </div>
        </div>
        <div className='project-right-shadow'></div>
      </div>
    </div>
  )
}

export default Project