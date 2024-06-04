import React from 'react';
import Button from '@material-ui/core/Button';

// import Ticketicon from '../../resources/images/icons/ticket.png'

const myButton = (props) =>{
    return(
        <Button
            variant = 'contained'
            href = {props.link}
            size = 'small'
            style = {{
                backgroundColor: props.bck,
                color: props.color,
                fontStyle: 'italic',
                textTransform: 'lowercase',
                fontFamily: '"Playfair Display", serif',
                fontSize: '17px'
                
            }}
            >
           
            {props.text}
            {/* <img
                src= {ArrowRight}
                alt='icon_button'
                className='iconImage'
            /> */}
        </Button>
    )
};
export default myButton;