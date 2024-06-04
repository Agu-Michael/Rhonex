import React from 'react';
import { RhonexLogoTwo } from '../ui/icons';

const Footer = () => {
    console.log('Rendering Footer component'); // Add this line for debugging

    return (
        <footer className='bck_blue'>
            <div className='footer_logo'>
                <RhonexLogoTwo
                    width='135px'
                    height='120px'
                    link='true'
                    linkTo='/'
                />
            </div>
            <div className='footer_discl'>
                Rhonex Solicitors & Attorneys 2024. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
