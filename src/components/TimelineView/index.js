// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = () => {
    timelineItemsList.map(item => {
      if (item.categoryId === 'PROJECT') {
        return <ProjectTimelineCard key="projectTitle" projectDetails={item} />
      }
      return <CourseTimelineCard key="courseTitle" courseDetails={item} />
    })
  }

  return (
    <div style={{width: '500px', height: '400px'}}>
      <div>
        <h1>MY JOURNEY OF CCBP 4.0</h1>
      </div>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
