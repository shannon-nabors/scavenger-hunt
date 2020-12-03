import React from 'react'
import {Grid} from 'semantic-ui-react'
import ButtonSet from './ButtonSet'

function HomePage() {
  return (
    <div id="home-page">
      <Grid centered columns={2}>
        <Grid.Column>
          <div className="reg-container">
          <div style={{fontSize: "30px", marginBottom: "10px"}}>Welcome to the hunt!</div>
            Below are links to two pages you'll find helpful: the hunt map and the list of clues.
            <div style={{height: "15px"}}></div>
            <ButtonSet/>
            <div style={{height: "25px"}}></div>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>What do the clues mean?</div>
            The clues won't really be important until the end of the game, so don't worry too much about them now.  The main thing you should know is that you'll be solving <span className="red-underline">five puzzles</span>, and each puzzle's answer will be a <span className="red-underline">number</span>.  The five numbers you get from solving these puzzles will tell you which of the clues are important.  As the final part of the hunt, Shannon will give you one final clue that will (hopefully) help you figure out how these five clues fit together.<br/><br/>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>How do we use the map?</div>
            In order to find these five puzzles, you'll have to "visit" five places on the map.  The way you'll visit them is by replacing "home" in the URL above with a word or two describing what you see at that location.  For example, if you were told to visit <span className="red-underline">F15</span> on the map, you would navigate to <span className="red-underline">/crab</span>. You'll know if you've gone to the right address.  Keep in mind that there may be interactive features on each page, but these are just to help you — you don't need to submit anything to solve the puzzle.<br/><br/>
            <div style={{fontSize: "20px", marginBottom: "10px"}}>How do we start?</div>
            You'll start by figuring out the answers to the questions below!  Answering each question will give you a letter.  At the start of the hunt, Shannon will announce five numbers that you can pair with these letters (in order) to give you <span className="red-underline">five sets of coordinates</span>. (These questions are not meant to be difficult, so don't overthink them.)<br/><br/>

            <div style={{textAlign: "left"}}>
            1. Bob wishes to travel from 14th and K streets NW to the U.S. Capitol. What means of transportation should Bob probably NOT take?<br/><br/>T. Metro<br/>N. taxi<br/>Z. Uber<br/>D. gyrocopter<br/><br/>
            2. Which of the following people have not played college football?<br/><br/>A. Silverberry Mouhon<br/>B. Taco Charlton<br/>C. Munchie Legaux<br/>D. Cassanova McKinzy<br/>J. Nancy Pelosi<br/><br/>
            3. Complete this song verse by filling in the blank:
            <br/>"She’ll be coming ’round the mountain when she comes
            <br/>"She’ll be coming ’round the mountain when she comes
            <br/>"She’ll be coming ’round the mountain
            <br/>"She’ll be coming ’round the mountain
            <br/>"She’ll be coming ’round the mountain...
            <br/><br/>B. "In time for the 4:30 staff meeting."
            <br/>C. "Because there is no tunnel through the mountain."
            <br/>D. "When she comes."<br/><br/>
            4. What is the capital of Montana?<br/><br/>M. Montpelier<br/>S. Boise<br/>U. Some city in Montana<br/><br/>
            5. The three bones of the middle ear are:<br/><br/>O. The tweezer, the spoon and the doorstop.<br/>R. The hammer, the anvil and the stirrup.<br/>X. The frog, the geranium and the harmonica.<br/>Z. Crosby, Stills and Nash.<br/><br/>
            </div>
            <div style={{fontSize: "30px", marginBottom: "20px"}}>Good luck!</div>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default HomePage