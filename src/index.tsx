// import App from './App'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router-dom'

// const container = document.getElementById('root') as Element
// const root = createRoot(container)
// root.render(
//   <Router>
//     <App />
//   </Router>
// )

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root') as Element
const root = createRoot(container)

class Root extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    )
  }
}

root.render(<Root />)
