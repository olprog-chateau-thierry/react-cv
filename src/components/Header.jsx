const Header = () => {

    return (
        <header>
            <div className="header">
                <div className="header__image">
                    <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
                </div>
                <h1 className="header__name">Jon SIMPSON</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="index.html"><span className="material-symbols-outlined">home</span><span
                        className="link">Accueil</span></a>
                    </li>
                    <li><a href="experience.html"><span className="material-symbols-outlined">person</span><span
                        className="link">Experience</span></a>
                    </li>
                    <li><a href="portfolio.html"><span className="material-symbols-outlined">image</span><span
                        className="link">Portfolio</span></a>
                    </li>
                    <li><a href="contact.html"><span className="material-symbols-outlined">alternate_email</span><span
                        className="link">Contact</span></a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;