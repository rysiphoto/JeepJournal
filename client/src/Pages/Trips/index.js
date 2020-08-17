import './style.css';
import React from 'react';
import { Segment } from 'semantic-ui-react'

const Trips = () => {
  return (
    <div className="container">
      <Segment>
        <p>
          Which trails did I run in Moab and when? Enter that info here!
        </p>
      </Segment>
    </div>
  )
}
export default Trips;