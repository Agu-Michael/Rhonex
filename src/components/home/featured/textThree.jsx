import React from 'react';
import Zoom from 'react-reveal/Zoom';
const TextThree =()=>{
    return(
        <div className='text_animation_three'>
            <Zoom>
                <div>
                    <h1 className='text_header_three'>Novel Outlook</h1>
                    <hr
             
                    style={{
                        background: '#ffffff',
                        width:'30%',
                        height: '1px',
                        


                    }}
                    />
                    <div className='text_desc_three'>
                    We offer comprehensive legal services for businesses, covering corporate, financial, tax, energy, project development, and the evolving digital landscape.
                    </div>
                </div>
            </Zoom>
        </div>
    )
}
export default TextThree;