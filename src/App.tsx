import { Routes, Route } from 'react-router-dom'
import Main from './app/main/Main'
import Characters from './app/characters/Characters'
import Locations from './app/locations/Locations'
import Navigation from './components/navigation/Navigation'

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="characters" Component={Characters} />
        <Route path="locations" Component={Locations} />
      </Routes>
    </>
  )
}

export default App
