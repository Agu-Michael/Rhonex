import React from 'react';
import Fade from 'react-reveal/Fade'


const Description = ()=>{
    return (
      <Fade>
        <div className="center_wrapper">
          <div className="about_header">
            <h2>About Us</h2>
            <h3 style={{
                justifyContent: 'center',
                textAlign: 'center',
                display: 'inline-block',
                color: '#ff4800',
                fontFamily: ''
            }}>Rhonex Solicitors & Attorneys</h3>
            <div className="highlight_description">
              Established in 2000, Rhonex Solicitors and Attorneys has grown
              into one of Nigeria's premier business law firms, renowned for
              addressing the complex and critical legal challenges of our
              demanding clientele. From our inception, we have maintained an
              international perspective, consistently delivering top-tier legal
              services that meet the highest standards of excellence. Our firm
              boasts a stellar reputation for executing innovative and intricate
              legal work. Our commitment to excellence is reflected in our
              impressive track record of advising and representing clients on
              pivotal developments within the Nigerian business law landscape.
              
            </div>
          </div>
        </div>
      </Fade>
    );
}
export default Description;


