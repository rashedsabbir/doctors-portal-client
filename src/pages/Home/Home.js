import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;