import './header.css'
import logoImg from './../../img/fashion-images/icons/logo.svg'

function Header () {
    return (
        <header className="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-logo">
                        <img src={logoImg} alt="Logo"/>
                        <span>fashion</span>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li><a href="#!">CATALOGUE</a></li>
                            <li><a href="#!">FASHION</a></li>
                            <li><a href="#!">FAVOURITE</a></li>
                            <li><a href="#!">LIFESTYLE</a></li>
                            <li><a className='header-nav-btn' href="#!">SIGN&nbsp;UP</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;