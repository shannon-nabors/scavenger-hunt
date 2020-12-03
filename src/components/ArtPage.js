import React from 'react'
import ReactPlayer from 'react-player'
import {Grid} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'

function ArtPage() {
  return (
    <div id="art-page">
      <Grid centered columns={3}>
        <Grid.Column textAlign="center">
          <img id="stop-painting" src={require('../stop-painting.jpg')}/>
          <ButtonSet/>
        </Grid.Column>
        <Grid.Column style={{backgroundColor: "white", paddingTop: "60px"}}textAlign="center">
          <div style={{fontSize: "50px"}}>Stop.</div>
          <div style={{fontSize: "20px", paddingTop: "15px"}}>Oil on Canvas, 1962<br/>Diego el Finito (1917-1989)</div>
          <div style={{fontSize: "16px", paddingTop: "15px", textAlign: "justify"}}>When an artist makes the first mark on the canvas, he/she starts the process of defining him/herself through a language of signs and symbols.  It becomes a visual object, presenting a non-verbal, sometimes conscious or sub-conscious, pattern or structure which lends identity to the canvas mirroring the intent of the creator, i.e., the artist.  Along with defining the identity of the artist through the thought, the canvas acts as a mirror for the viewer to experience this non-verbal language through his/her own cultural understandings and experiences.  The intent of this piece is to ask each viewer to experience it through his/her own understanding, each forming his/her own interpretation, leaving out the connotations attached to the artist him/herself, known and discoverable through textual references or media.  Every time we view a canvas, it reminds us of a sign or a symbol we have seen, a pointillist impression shaped by our cultural understanding and our subconscious, both assuming and subsuming our own core identity.  Using art to dwell within ourselves, to question or gauge how we feel, brings us closer to ourselves and the artist as an individual.<br/><br/>This masterwork challenges the viewer to put aside chronology and significance in time to ponder the meaning of image, for image's sake, as well as for the sake of its own intrinsic meaning.  El Finito confronts us with an uncommonly pure visual aesthetic language, i.e., not only a tactile medium, but a medium which is synonymous with communication, and to look for references/idioms which will help them come closer to understanding the artist behind the canvas and in turn their own identity, i.e., liberation.</div>
        </Grid.Column>
      </Grid>
      <Grid centered columns={3}>
        <Grid.Column style={{paddingLeft: "60px"}}>
          Watch Art Basel's lecture on the painting:
          <ReactPlayer
            url="https://www.youtube.com/watch?v=9Dp3Nnbckm0&feature=youtu.be"
          />
        </Grid.Column>
        <Grid.Column></Grid.Column>
      </Grid>
    </div>
  )
}

export default ArtPage