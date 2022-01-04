import { Link } from 'react-router-dom'

function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Acceuil</Link>
          </li>
          <li>
            <Link to='/restaurants'>Restaurants</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
