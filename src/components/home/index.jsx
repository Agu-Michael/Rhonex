import React from 'react';
import Featured from './featured'
import About from './about';
import MatchesHome from './practices';


const Home = (props) => {
    return (
        <div>
            <Featured/>
            <About/>
            <MatchesHome/>
        </div>
    );
};

export default Home;