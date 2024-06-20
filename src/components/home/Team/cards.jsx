import React, { Component } from 'react';

import Stripes from '../../../Resources/images/stripes.png'
import { Tag } from '../../ui/misc';
import Reveal from 'react-reveal/Reveal'

class MeetPlayers extends Component{
    state = {
        show: false
    }

    render(){
        return (
          <Reveal
            fraction={0.7}
            onReveal={() => {
              this.setState({
                show: true
              });
            }}
          >
            <div
              className="home_meetplayers"
              style={{ background: `#ffffff url(${Stripes})`,
              maxHeight: '160px'
            
            }}
            >
              <div className="container">
                <div className="home_meetplayers_wrapper">
                  
                  <div>
                    
                  
                    <div>
                      <Tag
                      
                        bck="#ffffff"
                        size="40px"
                        color="#0e1731"
                        link={true}
                        linkTo="/the_team"
                        add={{
                          display: "inline-block",
                          marginBottom: "27px",
                          marginTop: '20px',
                          marginLeft: '360px',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          left: '50px',
                          border: "1px solid #0e1731",
                        }}
                      >
                        Meet The Team
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
    }
}
export default MeetPlayers;