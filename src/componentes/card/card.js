import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCardHeader,
    MDBCardFooter,
    MDBRipple
  } from 'mdb-react-ui-kit';
function Card() {
  return (
  
  <MDBCard alignment='center'>
      <MDBCardHeader>Vestido</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Tallas 2,5,6</MDBCardTitle>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>300 Bs</MDBCardFooter>
    </MDBCard>
  
  );
}

export default Card;