import React from 'react'
import ReactPlayer from 'react-player'
import {Grid} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'

function MoviePage() {
  return (
    <div id="movie-page">
      <Grid centered columns={2}>
          <Grid.Column >
            <div id="video-container">
              Chris and Maria's Mystery
              <ReactPlayer
                  id="video"
                  url="https://youtu.be/TXJ_5fPg1ss"
              />
            </div>
              <ButtonSet/>
          </Grid.Column>
      </Grid>
    </div>
  )
}

export default MoviePage