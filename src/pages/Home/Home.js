import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import ContactUs from './ContactUs';
import Services from './Services';
import Care from './Care';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;