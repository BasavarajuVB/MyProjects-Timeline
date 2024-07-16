// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeline = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-container">
      <div>
        <div className="title-duration-container">
          <h1 className="course-title">{courseTitle}</h1>
          <div className="duration-con">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <ul className="tags-container">
          {tagsList.map(eachTag => (
            <li>
              <button type="button" className="button">
                {eachTag.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CourseTimeline
