import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const EventActivity = () => {
  return (
    <div>
      <Header attached='top' content='recent activity'/>
      <Segment attached>
       <p> Recent activity</p>
      </Segment> 
    </div>
  )
}

export default EventActivity
