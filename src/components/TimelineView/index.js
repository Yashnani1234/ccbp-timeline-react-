// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = items => {
    if (items.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={items.id} projectDetails={items} />
    }
    return <CourseTimelineCard key={items.id} courseDetails={items} />
  }

  return (
    <div style={{width: '500px', height: '400px'}}>
      <div>
        <p>MY JOURNEY OF</p>
        <h1>CCBP 4.0</h1>
      </div>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
