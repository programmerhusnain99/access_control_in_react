import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({CURRENT_USER_TYPE}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/public'>Public</Link>
            </li>
            {(CURRENT_USER_TYPE === 'Normal User' || CURRENT_USER_TYPE === 'Admin User') ?
              (<li className="nav-item">
                <Link className="nav-link" to='/user'>User</Link>
              </li>) : null}
            {(CURRENT_USER_TYPE === 'Admin User') ?
              (<li className="nav-item">
                <Link className="nav-link" to='/admin'>Admin</Link>
              </li>) : null}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar