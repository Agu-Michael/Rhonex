import React from 'react';
import Layout from './hoc/layout';
import {Switch, Route} from 'react-router-dom'
import Home from './components/home'
const Routes = (props) => {
    return (
        <div>
            <Layout>
                <Switch>

                    <Route exact component = {Home} path = '/' {...props}/>

                </Switch>


            </Layout>
        
        </div>
    );
};

export default Routes;