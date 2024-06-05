import React, {Component} from 'react';
import ButtonTwo from '../../ui/buttonTwo'
import Zoom from 'react-reveal/Zoom'
class Sectors extends Component {
  state = {
    prices: [
      "Agribusiness",
      "Commercial Banking",
      "Commodities",
      " Construction",
      " Development Finance",
      "Electric Power",
      " Entertainment",
      "Fintech",
      " Foreign Trade",
      " Healthcare",
      " Infrastructure",
      " Insurance",
      " Investment Banking",
      "  Manufacturing",
      "  Media",
      "  Mining",
      " Oil and Gas",
      " Pensions",
      " Private Equity",
      "Real Estate",
      "  Retail-Distributorship Services",
      " Technology",
      "  Telecommunications",
      " Transport",
      " Venture Capital",
      " Government",
      "Private Clients",
    ],
    position: [],
    desc: [],
    linkto: ["", "", ""],
    delay: [500, 0, 500],
  };

  showBoxes = () =>
    this.state.prices.map((boxes, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item" key={i}>
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>{this.state.prices[i]}</span>
              <span>{this.state.position[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <ButtonTwo
                text="Learn more"
                bck="#00c2cb"
                color="#ffffff"
                link={this.state.linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Sectors</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
export default Sectors;
