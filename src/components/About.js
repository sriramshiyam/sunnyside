import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import './About.css';

function About() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);
    const controls = useAnimation();
    const Variants = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 }
    };
    useEffect(() => {
        controls.start("visible");
    }, []);

    return (
        <div>
            <motion.div animate={controls} initial="hidden" variants={Variants} className="about">
                <h2>About</h2>
                <p>Unlike any advertising agency, The sunnyside is a brand-marketing firm whose approach is more like that of a fully-integrated marketing department. This means not only creating and developing marketing messages to be distributed among all selected media and managing those messages, but also making sure that the messages and promises can be delivered. This means working with management and staff to ensure every detail of “the experience” a client or customer may have meets and delivers on any promises made via the creative process.</p>
                <p>It also means being an integral part of the ongoing process, successes and failures, in building and developing a brand that will stand up and last no matter the shifts in the economy or other issues the client may face.</p>
                <p>From this standpoint, one could view our approach as more as a business consultant with a solution based,  brand-marketing emphasis. We provide branding from the inside-out, so when it comes to creating a logo or other elements, we've got you covered.</p>
            </motion.div>
            <div className="about-imgs">
                <div style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-gallery-milkbottles.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-gallery-orange.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-gallery-cone.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-gallery-sugarcubes.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            </div>
        </div>
    );
}

export default About;
