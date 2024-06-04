import React from 'react';
import PracticeThree from '../../../Resources/images/practice_one.jpg';
// import { Tag } from '../../ui/misc'

import Blocks from './block'
import { Height } from '@material-ui/icons';
const PracticesHome =()=>{
    return(
        <div className='home_matches_wrapper' style={{
            background: `url(${PracticeThree}) no-repeat`,
            

        
            
        }}>
            <div className='container'>
            <h3 className='practice_header'>Our Practices</h3>
                {/* <Tag
                    color = '#ffffff'   
                    size = '50px'
                    bck = '#0e1731'
                
                >
                    Matches

                </Tag>
                    */}
             
           <Blocks/>
{/*                 
                <Tag
                    color = '#0e1731'
                    size = '22px'
                    bck = '#ffffff'
                    link = {true}
                    linkTo= '/the_team'
                >
                    See matches
                </Tag> */}
            </div>
            
        </div>
    )
};
export default PracticesHome