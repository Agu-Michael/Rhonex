import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ObjectOne from '../../../Resources/images/objectOne.png'
const textTwo = ()=>{
    return(
        <div className='text_animation_wrapper'>
            <div className='container'>

            <div className='text_animation'>
            <Zoom>
                <div className='left'>
                    <span>Novel Outlook</span>
                    <span>We offer comprehensive legal services for businesses, covering corporate, financial, tax, energy, project development, and the evolving digital landscape.</span>
                </div>
            </Zoom>
            <Zoom>
                <div className='right'>
                    <div style={{background: `url(${ObjectOne}) no-repeat`}}></div>
                </div>
            </Zoom>
        </div>
            </div>
           
        </div>
        
    )
}
export default textTwo