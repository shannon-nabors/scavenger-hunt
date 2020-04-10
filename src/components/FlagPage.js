import React from 'react'
import {Container} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'
import FlagPic from './FlagPic'

const flagNumbers = ['1', '2', '3', '4', '5', '6', '7']

function FlagPage() {
    return (
        <div id="flag-page">
            <Container id="flag-text">Find what belongs in each (order is important)...
            <Container id="flag-pics">
                {flagNumbers.map(num => <FlagPic key={num} number={num}/>)}
            </Container>
            ...and find the answer.
            <Container id="flag-letters">
                <span className="gray letter">t</span>
                <span className="gray letter">W</span>
                <span className="black letter">+</span>
                <span className="gray letter">1</span>
                <span className="gray letter">k</span>
                <span className="gray letter">0</span>
                <span className="orange letter">e</span>
                <span className="gray letter">L</span>
                <span className="gray letter">e</span>
                <span className="gray letter">n</span>
                <span className="gray letter">1</span>
                <span className="gray letter">N</span>
                <span className="gray letter">p</span>
                <span className="blue letter">E</span>
                <span className="gray letter">f</span>
                <span className="red letter">5</span>
                <span className="gray letter">R</span>
                <span className="green letter">n</span>
                <span className="gray letter">8</span>
                <span className="gray letter">4</span>
                <span className="gray letter">S</span>
                <span className="white letter">v</span>
                <span className="gray letter">2</span>
                <span className="gray letter">1</span>
                <span className="yellow letter">y</span>
                <span className="gray letter">h</span>
                <span className="gray letter">-</span>
                <span className="gray letter">3</span>
            </Container>
            </Container>
            <ButtonSet/>
        </div>
    )
}

export default FlagPage