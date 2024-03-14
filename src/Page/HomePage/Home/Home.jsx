import React from 'react';
import Navbar from '../../Sheard/Navbar';
import Banner from '../Banner/Banner';
import Publications from '../Publications/Publications';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import FooterBanner from '../FooterBanner/FooterBanner';
import Footer from '../../Sheard/Footer';



const Home = () => {
    return (
        <div className='bg-[#0c1a28] h-full'>
            <Navbar />
            <Banner />
            <Publications />
            {/* <GameStoreCard /> */}
            <Features />
            <Contact />
            <FooterBanner />
            <Footer />
        </div>
    );
};

export default Home;