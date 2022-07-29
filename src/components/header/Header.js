import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="container d-flex">
                <div className="logo"><h1>Logo</h1></div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/login">Prisijungti</Link></li>
                        <li><Link to="/register">Registruotis</Link></li>
                        <li><Link to="/logout">Atsijungti</Link></li>
                        <li><Link to="/admin">Administratorius</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header