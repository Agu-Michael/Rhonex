import React from 'react';
import Featured from './featured'
import About from './about';
import PracticesHome from './practices';
import Sectors from './sectors';
import Team from './Team'
import Enroll from './enroll'

const Home = (props) => {
    return (
        <div>
            <Featured/>
            <About/>
            <PracticesHome/>
            <Sectors/>
            <Team/>
            <Enroll/>
        </div>
    );
};

export default Home;