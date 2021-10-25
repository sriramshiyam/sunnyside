import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './Grid.css';

function Grid() {
    const controls = useAnimation();
    const controls2 = useAnimation();

    const [ref, inView] = useInView({rootMargin: '-10px 0px'});
    const [ref2, inView2] = useInView({rootMargin: '-10px 0px'});

    const Variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
        hidden: { opacity: 0, scale: 0 }
    };

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);
    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
        }
    }, [controls2, inView2]);

    return (
        <div className="grid">
            <motion.div ref={ref}
                animate={controls} variants={Variants}
                initial="hidden" className="box textbox">
                <h3>Transform your <br /> brand</h3>
                <p>We are a full-service creative agency specializing in helping brand grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
            </motion.div>
            <div className="box" style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-transform.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="box" style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-stand-out.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <motion.div ref={ref2}
                animate={controls2} variants={Variants}
                initial="hidden" className="box textbox">
                <h3>Stand out to the right <br /> audience</h3>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
            </motion.div>
            <div className="box textbox2" style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-graphic-design.jpg)`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3>Graphic Design</h3>
                <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
            </div>
            <div className="box textbox2" style={{ background: `url(images/${window.innerWidth <= 480 ? "mobile" : 'desktop'}/image-photography.jpg)`, backgroundPosition: 'top', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h3>Photography</h3>
                <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
        </div>
    );
}

export default Grid;
