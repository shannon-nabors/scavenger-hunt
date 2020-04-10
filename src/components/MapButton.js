import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function MapButton() {
  return (
      <Button
        id="button1"
        as={Link}
        to="/map"
      >Map</Button>
  )
}

export default MapButton