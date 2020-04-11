import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'

function HomeButton() {
  return (
      <Button
        id="button1"
        as={Link}
        to="/home"
      >Home</Button>
  )
}

export default HomeButton