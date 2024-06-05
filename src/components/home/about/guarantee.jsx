import React, {Component}from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ButtonTwo from '../../ui/buttonTwo'

class Discount extends Component{
    state = {
        discountStart: 0,
        discountEnd: 100
    }

    percentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart : this.state.discountStart + 1
            })
        }
    }
    componentDidUpdate(){
        setTimeout(()=>this.percentage(), 4)
    }
    render(){
        return (
          <div className="center_wrapper">
            <div className="discount_wrapper">
              <Fade onReveal={() => this.percentage()}>
                <div className="discount_percentage">
                  <span>{this.state.discountStart}%</span>
                  <span>Guaranteed</span>
                </div>
              </Fade>

              <Slide right>
                <div className="discount_description">
                  <h4>Outstanding Legal Track Record</h4>
                  <p>
                    At Rhonex Solicitors and Attorneys, we offer comprehensive
                    legal services across a diverse range of practice areas
                  </p>
                  <div>
                    <ButtonTwo
                      text="Contact Us"
                      bck="#03989e"
                      color="#ffffff"
                      link=""
                      
                    />
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        );
    };
    }
    

export default Discount;