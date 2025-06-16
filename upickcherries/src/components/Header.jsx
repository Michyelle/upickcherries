import React from 'react';

export default function Header() {
    // Manage dropdown state
    const [dropdown, setDropdown] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);

    // If mouse hovers over the "Visit Us" link, show the dropdown
    function handleMouseEnter() {
        setDropdown(true);
    }

    // If mouse leaves the "Visit Us" link, hide the dropdown
    function handleMouseLeave() {
        setDropdown(false);
    }
    
    // Toggle the hamburger menu
    function hamburgerToggle() {
        setMenuOpen(prev => {
            return !prev;
        })
    }
    
    return (
        <header>
            <a href="/">
                <img src="src/assets/villadelsol_logo.jpg" className="header-img" alt="Villa Del Sol Logo" />
            </a>

            <div>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={hamburgerToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
                <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>

                <ul className="header-links">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="/visit">Visit Us</a>
                        {dropdown && (
                            <ul>
                                <li><a href="">Picnic Area</a></li>
                                <li><a href="">Map</a></li>
                                <li><a href="">FAQs</a></li>
                            </ul>)}
                    </li>
                    <li><a href="">Gallery</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">Health Benefits</a></li>
                    <li><a href="" className={window.location.pathname == '/'}>Join Our List</a></li>
                </ul>
                </nav>
            </div>
        </header>
    )
}