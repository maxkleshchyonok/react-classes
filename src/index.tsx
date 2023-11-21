import { App } from './App'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(
  <Router>
    <App />
  </Router>
)
