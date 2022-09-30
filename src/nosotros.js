import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tienda from './img/tienda.jpg';

import {
  MDBContainer,MDBRow,
  MDBCol,MDBCardImage
} from 'mdb-react-ui-kit';
function Nosotros() {
  return (
  <>
  <br />
  <MDBContainer>
      <MDBRow>
        <MDBCol size
        ='md'>
        <h1>NUESTRA MARCA KAMILLY</h1>
<p>Somos una empresa Brasilera dedicada a la venta de ropa en tienda física con sede en Calle avaroa, municipio San Matias  y en Calle Santa Cruz 31, San ignacio Velasco -calle velasco y Santa cruz segundo anillo Av.charagua. </p>
<p>Nuestro equipo de trabajo esta compuesto por gente joven motivada, dinámica y con especial interés en el mundo de la moda.</p>
<p>Nuestro objetivo es vestir a la mujer de hoy en sus momentos más importantes y en el día a día, siempre con la máxima calidad, ofreciendo moda actual y juvenil en todas las tallas y para todas las edades.</p>
<p>La amplia selección de marcas se caracteriza por su calidad, diseño, cortes originales, novedosos y favorecedores en tallas 34 a 56.</p>
<p>Boutique KAMILLY se caracteriza por su selección en colecciones actuales, inspiradas en las últimas tendencias y ofreciendo una experiencia de compra cómoda, rápida y segura, siempre con un trato al cliente personalizado y garantía de servicio. </p>

        </MDBCol>
        <MDBCol size='md'>
          
       <MDBCardImage src={tienda}
        loading='lazy'
        fluid alt='...' />
        <a></a>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    
  </>
      

  );
}

export default Nosotros;
