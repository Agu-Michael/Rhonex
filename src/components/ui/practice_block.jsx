import React from 'react';
import ButtonTwo from './buttonTwo';

const services = [
  'Arbitration',
  'Capital Markets',
  'Data Protection',
  'Mergers and Acquisitions',
  'Tax',
  'Litigation',
  'Intellectual Property',
  'Foreign Investment',
  'Employment Law',
  'Corporate Law',
  'Commercial Law',
  'Real Estate',
  'Energy',
  'Maritime and Shipping',
  'Oil and Gas',
  'Media and Entertainment',
  'Insurance',
  'Mining and Metals',
  'Manufacturing and Industrial',
  'Telecommunications',
  'Technology',
  'Insolvency'

];

const PracticeBlock = () => {
  return (
    <div className="practice_block">
      {services.map((service, index) => (
        <div className={`service_pair ${index % 4 === 0 || index % 4 === 1 ? 'left' : 'right'}`} key={index}>
          <div className="service_box">
            <div className="service_name">{service}</div>
            <ButtonTwo
              text="Learn More"
              bck="#03989e"
              color="#ffffff"
              link=""
              className="iconButton"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeBlock;
