import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'

function MetroMoverPage() {
  return (
    <div id="metro-page">
      <img src={require('../rebus.png')}/>
      <ButtonSet/>
    </div>
  )
}

export default MetroMoverPage