// Write your code here
// .chrono-container {
//   width: 400px;
//   height: 600px;
// }

// .image {
//   width: 200px;
//   height: 200px;
// }
// import {Chrono} from 'react-chrono'

// const App = () => (
//   <div className="chrono-container">
//     <Chrono mode="VERTICAL">
//       <div>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
//           className="image"
//           alt="chennai-super-kings"
//         />
//       </div>
//       <div>
//         <h1>Mumbai Indians</h1>
//         <p>IPL Team winner for the year 2019 is Mumbai Indians.</p>
//       </div>
//     </Chrono>
//   </div>
// )

// export default App
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="app-container">
        <h1 className="main-heading">
          MY JOURNEY OF
          <h1 className="ccbp-heading">CCBP 4.0</h1>
        </h1>

        <div className="chrono-container">
          <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
            {timelineItemsList.map(eachItem => {
              if (eachItem.categoryId === 'COURSE') {
                return (
                  <CourseTimelineCard
                    courseDetails={eachItem}
                    key={eachItem.id}
                  />
                )
              }
              return (
                <ProjectTimelineCard
                  projectDetails={eachItem}
                  key={eachItem.id}
                />
              )
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
