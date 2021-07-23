import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const AboutUs =() => {
    return(
        // adding fragment
        <>
        <AboutSection />
        <ServicesSection/>
        <FaqSection />
        <Footer/>
        </>
    )
}

export default AboutUs;