import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import MapPage from './MapPage'
import CluesPage from './CluesPage'
import FinalClue from './FinalClue'
import SeaPage from './SeaPage'
import FlagPage from './FlagPage'
import MoviePage from './MoviePage'
import MetroMoverPage from './MetroMoverPage'
import ArtPage from './ArtPage'
import WhalePage from './WhalePage'
import WhaledPage from './WhaledPage'
import WhalenPage from './WhalenPage'
import WhoopsPage from './WhoopsPage'

function App() {
  return (
    <Switch>
      <Route
        path="/whitehouse"
        component={SeaPage}
      />
      <Route
        path="/book"
        component={FlagPage}
      />
      <Route
        path="/bluebook"
        component={FlagPage}
      />
      <Route
        path="/openbook"
        component={FlagPage}
      />
      <Route
        path="/astronaut"
        component={MoviePage}
      />
      <Route
        path="/swiss"
        component={ArtPage}
      />
      <Route
        path="/swisscheese"
        component={ArtPage}
      />
      <Route
        path="/cheese"
        component={ArtPage}
      />
      <Route
        path="/diver"
        component={MetroMoverPage}
      />
      <Route
        path="/scuba"
        component={MetroMoverPage}
      />
      <Route
        path="/scubadiver"
        component={MetroMoverPage}
      />
      <Route
        path="/toilet"
        component={FinalClue}
      />
      <Route
        path="/whale"
        component={WhalePage}
      />
      <Route
        path="/whaled"
        component={WhaledPage}
      />
      <Route
        path="/whalen"
        component={WhalenPage}
      />
      <Route
        path="/map"
        component={MapPage}
      />
      <Route
        path="/clues"
        component={CluesPage}
      />
      <Route
        path="/home"
        component={HomePage}
      />
      <Route
        path="/"
        component={WhoopsPage}
      />
    </Switch>
  )
}

export default App
