import React from 'react'
import CluesButton from './CluesButton'
import {Grid} from 'semantic-ui-react'

function MapPage() {
  return (
    <div id="home-page">
          <CluesButton/>
          <img src={require('../hunt-map.png')}/>
    </div>
  )
}

export default MapPage