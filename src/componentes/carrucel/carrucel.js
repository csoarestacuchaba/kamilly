import React from 'react';
import uno from '../../img/uno.jpg';
import tres from '../../img/tres.jpg';
import familia from '../../img/familia.png';
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselItem
} from 'mdb-react-ui-kit';
import inicio from '../inicio';
function Carrucel() {
  return (
  <>

  <MDBContainer >

  <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={uno}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={tres}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={familia}
        alt='...'
      />
    </MDBCarousel>

  </MDBContainer>

  </>
      

  );
}

export default Carrucel;