// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = projectDetails
  return (
    <>
      <img src={imageUrl} alt="project" />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p key="duration">{duration}</p>
        </div>
      </div>
      <p key="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </>
  )
}

export default ProjectTimelineCard
