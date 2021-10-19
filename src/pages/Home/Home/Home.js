import React from 'react';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';
import HomeServices from '../HomeServices/HomeServices';
import OurDoctors from '../OurDoctors/OurDoctors';
import Patient from '../Patient/Patient';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Doctor></Doctor>
            <OurDoctors></OurDoctors>
            <Patient></Patient>


        </div>
    );
};

export default Home;