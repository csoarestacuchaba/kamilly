import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from './axio/axios';
import { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  MDBContainer,MDBRow,
  MDBCol,MDBCardTitle,
  MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardHeader,
    MDBCardFooter,
    MDBRipple
} from 'mdb-react-ui-kit';
const CatalogoInfantil = () => {

  const [prendas, setPrendas] = useState([]);

  useEffect(() => {
    cargarPrendas();
},[]);

const cargarPrendas = async () => {

  const prendas = await axios.get('http://localhost/kamilly/Prenda/2');
  setPrendas(prendas.data);
}

  return (
  <>
  <br />
  <MDBContainer>
  <MDBRow>
  <MDBCardTitle>Catalogo</MDBCardTitle>
  </MDBRow>
  


  <MDBRow>
  { prendas.map((prenda, index) => (
        <MDBCol size='4'>

        

<MDBCard alignment='center'>
<MDBCardHeader>{prenda.prenda_nombre}</MDBCardHeader>
<MDBCardBody>
  <MDBCardTitle>{prenda.prenda_color}</MDBCardTitle>
  <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
  <MDBCardImage src={require("./img/"+prenda.prenda_imagen)} fluid alt='...' width={200} height={300}/>
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
    
  </>
      

  );
}

export default CatalogoInfantil;
