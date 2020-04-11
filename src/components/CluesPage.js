import React from 'react'
import {Grid} from 'semantic-ui-react'
import MapButton from './MapButton'

const clues = [
    {number: "1", text: "Mind your own BUSiness."},
    {number: "3", text: "This is obviously a false clue."},
    {number: "8", text: "It's fine by me if it's fine by you."},
    {number: "11", text: "Sell a mill and I'll kill Bill."},
    {number: "12", text: "I love going as Tubby."},
    {number: "15", text: "Small 'n rural."},
    {number: "21", text: "Too bad, Joe."},
    {number: "28", text: "qrupsgklcbn"},
    {number: "32", text: "The wine tells me things."},
    {number: "33", text: "She lived in the Garden of Even."},
    {number: "40", text: "Forever, plus one."},
    {number: "51", text: "Socrates would get this one."},
    {number: "55", text: "So crates would get that one."},
    {number: "56", text: "The time has come, the Walrus said."},
    {number: "57", text: "The first part is wrts."},
    {number: "63", text: "To stalk of many sings."},
    {number: "67", text: "Then, part your hair."},
    {number: "70", text: "Pay him (or Razzy Raza) to bail."},
    {number: "72", text: "What if the world forgot the Beatles ever existed and only you remembered?"},
    {number: "89", text: "Get loads and wash them up."},
    {number: "98", text: "Go to /mango"},
    {number: "105", text: "The second part's not important..."},
    {number: "122", text: "Don't tell me the meaning, tell me the consequences."},
    {number: "169", text: "Do you mean to tell me you've forgotten?!"},
    {number: "190", text: "Unless I'm mistaken, that's definitely an osprey."},
    {number: "207", text: "ALL CAPS ALL THE TiME"},
    {number: "335", text: "Planet X is self X planetary."},
    {number: "800", text: "Part of being human is airing."},
    {number: "1,111", text: "Give a hoot (or many) if ye can."},
    {number: "1,500", text: "Oily caviar, if Amy will buy 11"},
    {number: "2,888", text: "Disgust -- or aww?"},
    {number: "10,000", text: "Give me an F! Give me a U! Stop right there."},
    {number: "11,111", text: "Don't give me that you-know-what."},
    {number: "15,628", text: "Unless...UNLESS"},
    {number: "19,100", text: "Double secret probation is only half as bad."},
    {number: "23,005", text: "My word is 'law'."},
    {number: "27,869", text: "Similar pork, on a scalawag."},
    {number: "40,000", text: "No, I don't remember. Remind me."},
    {number: "51,257", text: "Words to live by: Whatever Michael does, do the opposite."},
    {number: "67,670", text: "Gall his senses, or aim low."},
    {number: "88,229", text: "The pope is his driver!"},
    {number: "100,792", text: "Slip out the back, Zach.  Make a new plan, Fran."},
    {number: "111,111", text: "It's so sad, but there's meaning somewhere in it."}
]

function CluesPage() {
  return (
    <div id="clues-page">
        <MapButton/>
        <Grid centered columns={3}>
            <Grid.Column id="clue-column">
                {clues.map(clue => {
                    return (
                        <div>
                            <span class="clue-number">{clue.number}</span>
                            <span class="clue-text">{clue.text}</span>
                        </div>
                    )
                })}
            </Grid.Column>
        </Grid>
        
    </div>
  )
}

export default CluesPage