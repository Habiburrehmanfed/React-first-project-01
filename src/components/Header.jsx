const Header = () => {
    return (
        <div className="header-container container-fluid">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <img src="./images/brand_logo.png" alt="logo" />
                    </div>
                    <div className="nav-box">
                        <ul className="nav-list">
                            <li className="nav-item">Menu</li>
                            <li className="nav-item">Location</li>
                            <li className="nav-item">About</li>
                            <li className="nav-item">Contact</li>
                        </ul>
                    </div>
                    <button className="button">Login</button>
                </nav>
            </header>
        </div>
    );
};

export default Header;
