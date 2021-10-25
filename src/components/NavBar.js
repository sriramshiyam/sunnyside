import './NavBar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [menuicon, setMenuicon] = useState(true);

    function menIco() {
        return menuicon ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 352 512" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>;
    }

    return (
        <nav>
            <h2>sunnyside</h2>
            <ul>
                <Link onClick={() => window.scroll(0, 0)} to="/"><li>Home</li></Link>
                <Link onClick={() => window.scroll(0, 0)} to="/about"><li>About</li></Link>
                <Link onClick={() => window.scroll(0, 0)} to="/contact"><li id="contact">Contact</li></Link>
            </ul>
            <div className="menu-icon"><span onClick={() => { setMenuicon(prev => !prev) }}>{menIco()}</span>
            </div>
            <ul style={{ display: `${menuicon ? 'none' : 'flex'}` }} className="mobile-menu">
                <div style={{ height: '4%' }}></div>
                <Link to="/" onClick={() => {
                    setMenuicon(prev => !prev);
                    window.scroll(0, 0);
                }}><li >Home</li></Link>
                <Link to="/about" onClick={() => {
                    setMenuicon(prev => !prev);
                    window.scroll(0, 0);
                }}><li>About</li></Link>
                <Link to="/contact" onClick={() => {
                    setMenuicon(prev => !prev);
                    window.scroll(0, 0);
                }}><li id="contact">Contact</li></Link>
            </ul>
        </nav>
    );
}

export default NavBar;
