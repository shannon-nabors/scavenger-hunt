import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function HomePage() {
  return (
    <div id="home-page">
        <div>
            Uh-oh, looks like you went to a route that doesn't exist!  Try re-wording your destination, or ask Shannon if you need some clarification.
        </div>
      <Button
        color="yellow"
        as={Link}
        to="/home"
      >Home</Button>
    </div>
  )
}

export default HomePage