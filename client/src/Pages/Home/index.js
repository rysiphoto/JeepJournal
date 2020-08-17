import './style.css';
import React from 'react';
import { Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="container">
      <Segment>
        <p>
          A place for Jeep owners to keep track of all of the things.
        </p>
      </Segment>
    </div>
  )
}
export default Home;