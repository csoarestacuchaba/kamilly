import React from 'react';
import Carrucel from './carrucel/carrucel';
import Card from './card/card';
import axios from '../axio/axios';
import { useState,useEffect } from 'react';
import img from '../img/blanco.jpg';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCardHeader,
    MDBCardFooter,
    MDBRipple
} from 'mdb-react-ui-kit';
const inicio = () => {

  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    cargarPrendas();
},[]);

const cargarPrendas = async () => {
  const prendas = await axios.get('http://localhost/kamilly/Prenda');
  setPrendas(prendas.data);
}
 
  return (
    <>
    <br />
  <Carrucel />
  <br />
  <MDBContainer>

  <MDBRow>
  { prendas.map((prenda, index) => (
        <MDBCol size='4'>
      
      <MDBCard alignment='center'>
      <MDBCardHeader>{prenda.prenda_nombre}</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>{prenda.prenda_color}</MDBCardTitle>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={require("../img/"+prenda.prenda_imagen)} fluid alt='...' width={200} height={300}/>
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>{prenda.prenda_costo} Bs</MDBCardFooter>
    </MDBCard>

        <br />
        </MDBCol>
         
        
     )) }
        </MDBRow>
     
    </MDBContainer>
    <br />
    </>
  );
}

export default inicio;