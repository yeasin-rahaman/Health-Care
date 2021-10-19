import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import HomeServices from '../HomeServices/HomeServices';
import OurDoctors from '../OurDoctors/OurDoctors';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Doctor></Doctor>
            <OurDoctors></OurDoctors>

        </div>
    );
};

export default Home;