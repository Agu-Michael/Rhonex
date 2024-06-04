import React from 'react';
import { Fade } from 'react-reveal';
import Slide from 'react-reveal/Slide';
import ArrowRight from '../../../Resources/images/arrow_right.png'

import Button from '../../ui/button'

const textFour = ()=>{
    return(
        <div className='text_four_wrapper'>
            <Slide right>
                <div className='text_four_desc'>
                <h3> Collaborative Expertise</h3><hr
                    style={{
                        width: '50px',
                        background: '#ffffff',
                        height: '0.5px'
                    }}
                />
                <p>"Our team's collective expertise ensures comprehensive legal support."</p>
                <Fade>
                <Button
                                text='Find Out More'
                                bck= '#03989e'
                                color= '#ffffff'
                                link=''
                            >
                                <img src={ArrowRight} alt="arrow_right" className='iconImage' />
                    </Button>
                            
            </Fade>
                </div>
                
            </Slide>
           

        </div>
    )
}
export default textFour