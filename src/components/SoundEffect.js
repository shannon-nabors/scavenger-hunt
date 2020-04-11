import React from 'react'
import {Button, Icon} from 'semantic-ui-react'
import sound from './flush.mp3'

class Music extends React.Component {
    constructor(props) {
    super(props);
    // this.url = "http://www.tripletsandus.com/disney/midi/undersea.mp3";
    this.audio = new Audio(sound);
  }

  play = () => {
    this.audio.play();
  }
  
  render() {
    
  return (
    <Button.Group>
      <Button icon id="button1" onClick={this.play}>
        <Icon name="play"/>
      </Button>
      <Button icon id="button2" onClick={this.pause}>
      <Icon name="pause"/>
      </Button>
    </Button.Group>
    );
  }
}

export default Music