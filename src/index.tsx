import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './style.scss'

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
