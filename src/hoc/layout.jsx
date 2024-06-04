import React from 'react';
import Header from '../components/header_footer/header';
import Footer from '../components/header_footer/footer';
import WhatsAppButton from '../components/whatsappButton'; // Adjust the path based on your project structure

const Layout = (props) => {
  const hrWhatsAppNumber = 'YourHRWhatsAppNumber'; // Replace with the actual HR's WhatsApp number

  return (
    <div>
      <Header />
      {props.children}
      <Footer />
      <WhatsAppButton phoneNumber={hrWhatsAppNumber} />
    </div>
  );
};

export default Layout;
