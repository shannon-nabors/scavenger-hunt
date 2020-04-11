import React from 'react'
import {Grid} from 'semantic-ui-react'

function WhalenPage() {
  return (
    <div id="map-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
          The five clues are important, but you need to use only upper case letters.  When you do, you should know what the last step is.
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default WhalenPage