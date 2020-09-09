import './style.css';
import React from 'react';
import { Segment } from 'semantic-ui-react'

const Home = () => {
  return (
    <div className="container">
      <Segment>
        <p className="containerFont">
          Welcome to the Jeep Journal
        <br /><br />
          A place for Jeep owners to keep track of all of the things.
          <br /><br />
          On the Trips page, keep track of your trail adventures with setting the trail name, date and details about your adventure!
          <br /><br />
          Over on the Maintenance page, you can keep track of all of your mods and when they are due to be serviced.
        </p>
      </Segment>
    </div>
  )
}
export default Home;