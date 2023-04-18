// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList} = courseDetails
  console.log(courseDetails)

  return (
    <>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <ul>
            {tagsList.map(each => (
              <li key={each.id}>
                <p>{each}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p key="description">{description}</p>
    </>
  )
}

export default CourseTimelineCard
