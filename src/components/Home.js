import React, { useEffect } from 'react';
import Grid from './Home/Grid';
import Hero from './Home/Hero';
import Testimonial from './Home/Testimonial';

function Home() {
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            <Hero />
            <Grid />
            <Testimonial />
        </div>
    );
}

export default Home
