import Style from '../css/nav.module.css'
import Logo from './Logo'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <nav>
            <Logo></Logo>
            <div id={Style.header}>
                <ol>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/addmovie'>Addmovies</Link>
                    </li>
                    <li>
                        <Link to='/viewmovie'>Viewmovies</Link>
                    </li>
                </ol>
            </div>
        </nav>
    </div>
  )
}

export default Nav