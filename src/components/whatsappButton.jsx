// import React from 'react';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const WhatsAppButton = ({ phoneNumber }) => {
  const handleWhatsAppClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <Fab
      color="primary"
      style={{
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        backgroundColor: '#03989e',
      }}
      onClick={handleWhatsAppClick}
    >
      <WhatsAppIcon style={{ color: '#FFF' }} />
    </Fab>
  );
};

export default WhatsAppButton;
