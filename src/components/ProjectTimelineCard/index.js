// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimeline = props => {
  const {projectDetails} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails
  return (
    <div className="project-details-container">
      <div>
        <div>
          <img src={imageUrl} alt="project" className="project-image" />
          <div className="title-duration-container">
            <h1 className="course-title">{projectTitle}</h1>
            <div className="duration-con">
              <AiFillCalendar />
              <p className="duration">{duration}</p>
            </div>
          </div>
          <p>{description}</p>
          <a href={projectUrl} className="anchorEl">
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}
export default ProjectTimeline
