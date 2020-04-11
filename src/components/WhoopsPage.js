import React from 'react'
import {Grid} from 'semantic-ui-react'
import HomeButton from './HomeButton'

function HomePage() {
  return (
    <div id="map-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
            Uh-oh, looks like you went to a route that doesn't exist!  Try re-wording your destination, or ask Shannon if you need some clarification.
            <br/><br/><HomeButton/>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default HomePage