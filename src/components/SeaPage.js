import React from 'react'
import LetterGrid from './LetterGrid'
import Music from './Music'
import ButtonSet from './ButtonSet'
import { Container } from 'semantic-ui-react'

function SeaPage() {
  return (
      <div id="sea-page">
          <Container id="music"><Music/></Container>
          <Container id="letter-grid"><LetterGrid dimension={15}/></Container>
          <ButtonSet/>
      </div>
  )
}

export default SeaPage