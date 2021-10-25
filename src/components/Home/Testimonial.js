import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './Testimonial.css';

function Testimonial() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ rootMargin: '-300px 0px' });
    const Variants = {
        visible: { opacity: 1, transition: { duration: 0.8 } },
        hidden: { opacity: 0 }
    };
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const controls2 = useAnimation();
    const [ref2, inView2] = useInView({ rootMargin: '-300px 0px' });

    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
        }
    }, [controls2, inView2]);

    const controls3 = useAnimation();
    const [ref3, inView3] = useInView({ rootMargin: '-300px 0px' });

    useEffect(() => {
        if (inView3) {
            controls3.start("visible");
        }
    }, [controls3, inView3]);
    return (
        <div className="testimonials">
            <h3>CLIENT TESTIMONIALS</h3>
            <div class="test">
                <motion.div ref={ref}
                    animate={controls} variants={Variants}
                    initial="hidden" className="test1">
                    <img alt="" src="images\image-emily.jpg" />
                    <p>We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <h4>Emily R.</h4>
                    <h5>Marketing Director</h5>
                </motion.div>
                <motion.div ref={ref2}
                    animate={controls2} variants={Variants}
                    initial="hidden" className="test2">
                    <img alt="" src="images\image-thomas.jpg" />
                    <p>Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                    <h4>Thomas S.</h4>
                    <h5>Chief Operating Officer</h5>
                </motion.div>
                <motion.div ref={ref3}
                    animate={controls3} variants={Variants}
                    initial="hidden" className="test3">
                    <img alt="" src="images\image-jennie.jpg" />
                    <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <h4>Jennie F.</h4>
                    <h5>Business Owner</h5>
                </motion.div>
            </div>
        </div>
    );
}

export default Testimonial;
