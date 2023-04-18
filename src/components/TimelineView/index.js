// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div style={{width: '500px', height: '400px'}}>
      <div>
        <h1>
          MY JOURNEY OF <br /> CCBP 4.0
        </h1>
      </div>
      <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
        {timelineItemsList.map(item => {
          if (item.categoryId === 'PROJECT') {
            return <ProjectTimelineCard key={item.id} projectDetails={item} />
          }
          return <CourseTimelineCard key={item.id} courseDetails={item} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
