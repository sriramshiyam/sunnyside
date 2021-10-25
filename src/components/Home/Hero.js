import React, { useEffect, useState } from 'react';
import './Hero.css';

function Hero() {
    const [trans, setTrans] = useState(0);

    function translate() {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setTrans(scrollPercentRounded);
    }

    useEffect(() => {
        document.addEventListener('scroll', translate);
        return () => {
            document.removeEventListener('scroll', translate);
        }
    }, [translate]);

    return (
        <div id="he">
            <div className="hero" style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-header.jpg)`, backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}>
                <h1 style={{ transform: `translateY(-${trans * 20}px)` }}>WE ARE {window.innerWidth <= 480 ? <div><br /> <br /></div> : ''} CREATIVES</h1>
                <svg style={{ transform: `translateY(${trans * 20}px) translateX(45%)` }} className="arrow" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" stroke-width="6" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g></svg>
            </div>
        </div >
    );
}

export default Hero;
