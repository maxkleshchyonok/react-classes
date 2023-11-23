import { Link } from 'react-router-dom'
import './style.scss'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
