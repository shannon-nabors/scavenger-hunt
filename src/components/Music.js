import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

class Music extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      play: false,
      pause: true,
    }
    this.url = "http://www.tripletsandus.com/disney/midi/undersea.mp3";
    this.audio = new Audio(this.url);
  }

  play = () => {
  this.setState({ play: true, pause: false })
    this.audio.play();
  }
  
  pause = () => {
  this.setState({ play: false, pause: true })
    this.audio.pause();
  }
  
  componentWillUnmount() {
    this.audio.pause()
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