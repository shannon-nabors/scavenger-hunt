import React from 'react'
import {Grid} from 'semantic-ui-react'
import Letter from './Letter'

const row1 = ['S', 'e', 'l', 'l', ' ', 'a', ' ', 'm', 'i', 'l', 'l', ' ', 'a', 'n', 'd', ' ', 'I', "'", 'l', 'l', ' ', 'k', 'i', 'l', 'l', ' ', 'B', 'i', 'l', 'l', '.']
const row2 = ['S', 'm', 'a', 'l', 'l', ' ', "'", 'N', ' ', 'R', 'u', 'r', 'a', 'l', '.']
const row3 = ['P', 'a', 'y', ' ', 'h', 'i', 'm', ' ', '(', 'o', 'r', ' ', 'R', 'a', 'z', 'z', 'y', ' ', 'R', 'a', 'z', 'a', ')', ' ', 't', 'o', ' ', 'b', 'a', 'i', 'l', '.']
const row4 = ['O', 'i', 'l', 'y', ' ', 'c', 'a', 'v', 'i', 'a', 'r', ',', ' ', 'i', 'f', ' ', 'A', 'm', 'y', ' ', 'w', 'i', 'l', 'l', ' ', 'b', 'u', 'y', ' ', '1', '1']
const row5 = ['S', 'i', 'm', 'i', 'l', 'a', 'r', ' ', 'p', 'o', 'r', 'k', ',', ' ', 'o', 'n', ' ', 'a', ' ', 's', 'c', 'a', 'l', 'a', 'w', 'a', 'g', '.']
function WhalenPage() {
  return (
    <div id="map-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
            The five clues are important, but you need to use only upper <span className="red-underline">case</span> letters.  When you do, you should know what the last step is.<br/><br/>
            <input /><br/><br/>
            <div style={{fontSize: "30px", lineHeight: "35px"}}>
              {row1.map(l => <Letter letter={l}/>)}<br/>
              {row2.map(l => <Letter letter={l}/>)}<br/>
              {row3.map(l => <Letter letter={l}/>)}<br/>
              {row4.map(l => <Letter letter={l}/>)}<br/>
              {row5.map(l => <Letter letter={l}/>)}<br/>
            </div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default WhalenPage