import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import FeaturedPlayer from '../../../Resources/images/objectThree.png';
import ObjectTwo from '../../../Resources/images/objectTwo.png';

class Texts extends Component {
    animateObjectTwo = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                rotate: 0
            }}
            enter={{
                opacity: [1],
                timing: { duration: 1500, ease: easePolyOut },
                rotate: [360]
            }}
        >
            {({ rotate, opacity }) => (
                <div
                    className='object_two'
                    style={{
                        opacity,
                        transform: `translate(260px, 170px) rotateY(${rotate}deg)`,
                        background: `url(${ObjectTwo}) no-repeat center center`,
                        backgroundSize: '450px',
                        width: '650px',  // Adjust the size as needed
                        height: '280px',  // Adjust the size as needed
                       
                        marginTop: '10px',
                        marginLeft:'15px',
                        marginRight: '1500px',
                        marginBottom: '150px',
                        padding: '10px',
                        position: 'absolute'
                    }}
                />
            )}
        </Animate>
    );

    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 450
            }}
            enter={{
                opacity: [1],
                x: [273],
                y: [450],
                timing: { duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => (
                <div
                    className='featured_first'
                    style={{
                        opacity,
                        transform: `translate(${x}px, ${y}px)`
                    }}
                >
                    Litigation
                </div>
            )}
        </Animate>
    );

    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 586
            }}
            enter={{
                opacity: [1],
                x: [273],
                y: [586],
                timing: { duration: 500, delay: 300, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => (
                <div
                    className='featured_second'
                    style={{
                        opacity,
                        transform: `translate(${x}px, ${y}px)`
                    }}
                >
                    Strategist
                </div>
            )}
        </Animate>
    );

    animatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity: 0
            }}
            enter={{
                opacity: [1],
                timing: { duration: 500, delay: 800, ease: easePolyOut }
            }}
        >
            {({ opacity }) => (
                <div
                    className='featured_player'
                    style={{
                        opacity,
                        background: `url(${FeaturedPlayer}) no-repeat center center`,
                        
                        transform: `translate(550px, 201px)`,
                       
                    }}
                />
            )}
        </Animate>
    );

    render() {
        return (
            <div className='featured_text'>
                {this.animatePlayer()}
                {this.animateObjectTwo()}
                {this.animateFirst()}
                {this.animateSecond()}
            </div>
        );
    }
}

export default Texts;
