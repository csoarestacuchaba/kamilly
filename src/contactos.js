import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mapa from './img/mapa.jpg';
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage 
} from 'mdb-react-ui-kit';
function Contactos() {
  return (
  <>
  <br />
  <MDBContainer>
  <MDBRow>
  <h1>CONTACTOS</h1>
  </MDBRow>

      <MDBRow>
        
        <MDBCol size='md'>
        <form>
      <MDBInput id='form4Example1' wrapperClass='mb-4' label='Nombre' />
      <MDBInput type='email' id='form4Example2' wrapperClass='mb-4' label='Email' />
      <MDBInput wrapperClass='mb-4' textarea id='form4Example3' rows={8} label='mensaje' />

     

      <MDBBtn type='submit' className='mb-4' block>
        ENVIAR
      </MDBBtn>
    </form>
        </MDBCol>
        <MDBCol size='md'>
        <MDBCardImage src={mapa} 
         height='300'
         
         alt='70'
         loading='lazy'
         />
      
        </MDBCol>
      </MDBRow>

      
    </MDBContainer>
    <br/>
  </>
      

  );
}

export default Contactos;