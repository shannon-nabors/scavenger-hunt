import React from 'react'
import {Grid} from 'semantic-ui-react'

class FinalClue extends React.Component {
    constructor(props) {
        super(props)
        this.audio = new Audio('https://webdocs.cs.ualberta.ca/~bmw/Noises/TOILET.WAV')
    }

    handleClick = () => {
        this.audio.play()
    }

    render() {
        return (
            <div id="final-page">
                <Grid centered columns={2}>
                    <Grid.Column>
                        <div id="toilet-container">
                            <img onClick={this.handleClick} src={require(`../toilet.png`)}/>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default FinalClue