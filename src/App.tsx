import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './app/main/Main'
import Characters from './app/characters/Characters'
import Navigation from './components/navigation/Navigation'
import LocationsComponent from './app/locations/Locations'

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Navigation />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/characters" Component={Characters} />
          <Route path="/locations" Component={LocationsComponent} />
        </Routes>
      </div>
    )
  }
}

export default App
