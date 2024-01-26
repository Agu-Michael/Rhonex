import React from 'react';
import { RhonexLogo } from '../ui/icons';
const Footer = () =>{
    return(
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <RhonexLogo
                    width = '70px'
                    height = '70px'
                    link = 'true'
                    linkTo= '/'
                />
            </div>
            <div className='footer_discl'>
                Rhonex Solicitors & Attorneys 2024. All rights reserved.
            </div>

        </footer>
    )
}
export default Footer;