import React from 'react';
import { Link } from 'react-router-dom';
import rhonexSolicitorsLogo from '../../Resources/images/rhonex.png';

export const RhonexLogo = (props) =>{
    const template = <div
                        className='img_cover'
                        style={{
                            width: props.width,
                            height: props.height,
                            background: `url(${rhonexSolicitorsLogo}) no-repeat`
                        }}
                        ></div>

    if(props.link){
        return(
            <Link to={props.linkTo} className='link_logo'>
                {template}
            </Link>
        )
    }else{
        return template
    }
};
