import React from 'react';
import { Router } from '@reach/router'
import Homepage from './Homepage'
import AboutUs from './AboutUs';
import OurKitchen from './OurKitchen';
import Contact from './Contact';
import Order from './Order';
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainPage = () => {
    return (
        <div>
            <Header />
            <div style={{ padding: '65px 0px 0px', minHeight:'calc(100vh - 305px)' }}>
                <Router>
                    <Homepage path='/' />
                    <AboutUs path='about-us' />
                    <OurKitchen path='our-kitchen' />
                    <Contact path='contact' />
                    <Order path='order' />
                </Router>
            </div>
            <Footer />
        </div>
    );
}

export default MainPage;