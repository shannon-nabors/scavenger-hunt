import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import MapButton from './MapButton'
import CluesButton from './CluesButton'

function ButtonSet() {
  return (
    <div>
      <MapButton/>
      <CluesButton/>
    </div>
  )
}

export default ButtonSet