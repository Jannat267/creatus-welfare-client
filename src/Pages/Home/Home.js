import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Banner from './Banner/Banner';
import BecomeVolunteer from './BecomeVolunteer/BecomeVolunteer'
import Volunteers from './Volunteers/Vlounteers'
import Causes from './Caueses/Causes'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Causes></Causes>
            <BecomeVolunteer></BecomeVolunteer>
            <Volunteers></Volunteers>
            <Footer></Footer>
        </div>
    );
};

export default Home;