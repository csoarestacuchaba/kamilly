import React from 'react';
import { useState } from 'react';
import axios from './axio/axios';
import { useNavigate } from "react-router-dom";
import Menu from './menu';
import {
  MDBContainer,MDBRow,
  MDBCol,MDBInput,MDBBtn,
  MDBCheckbox,
  MDBCardTitle
} from 'mdb-react-ui-kit';

function CrearPrenda() {

  const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
	
  const handleSubmit = (event) => {
	  event.preventDefault();

      const prenda_nombre= inputs['prenda_nombre'];
      const prenda_marca= inputs['prenda_marca'];
      const prenda_costo= inputs['prenda_costo'];
      const prenda_color= inputs['prenda_color'];
      const prenda_stock= inputs['prenda_stock'];
      const prenda_imagen= inputs['prenda_imagen'];
      const prenda_categoria= inputs['prenda_categoria'];
	  
	  axios.get('http://localhost/kamilly/CrearPrenda?prenda_nombre='+prenda_nombre+'&prenda_marca='+prenda_marca+'&prenda_costo='+prenda_costo+'&prenda_color='+prenda_color+'&prenda_stock='+prenda_stock+'&prenda_imagen='+prenda_imagen+'&prenda_categoria='+prenda_categoria).then((response) => {
    
      navigate("/listarPrendas");
    
	  
    });
  }


  return (
  <>
  <br />
  <MDBContainer>
      <MDBRow>
      <MDBCol size='3'>
        <Menu />
        </MDBCol>
        <MDBCol size='5'>
        <MDBRow>
            <MDBCardTitle>INGRESAR PRENDA</MDBCardTitle>
        </MDBRow> 
        <br />
        <form onSubmit={handleSubmit }>
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_nombre' 
	  name='prenda_nombre'
      label='Nombre prenda'
	  value={inputs.prenda_nombre || ""}
	  onChange={handleChange}
      />
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_marca'
	  name='prenda_marca'
      label='Prenda marca' 
	  value={inputs.prenda_marca || ""}
	  onChange={handleChange}
	  />
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_costo'
	  name='prenda_costo'
      label='Prenda costo' 
	  value={inputs.prenda_costo || ""}
	  onChange={handleChange}
	  />
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_stock'
	  name='prenda_stock'
      label='Prenda stock' 
	  value={inputs.prenda_stock || ""}
	  onChange={handleChange}
	  />
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_color'
	  name='prenda_color'
      label='Prenda color' 
	  value={inputs.prenda_color|| ""}
    onChange={handleChange}
	  />
    <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_imagen'
	  name='prenda_imagen'
      label='Prenda imagen' 
	  value={inputs.prenda_imagen || ""}
	  onChange={handleChange}
	  />
    <MDBInput 
      className='mb-4' 
      type='text' 
      id='prenda_categoria'
	  name='prenda_categoria'
      label='Prenda Categoria' 
	  value={inputs.prenda_categoria || ""} 
	  onChange={handleChange}
	  />
     
      <MDBBtn type='submit' onClick={handleSubmit} block>
        ENVIAR
      </MDBBtn>
        </form>
        <br />
        </MDBCol>
        <MDBCol size='md'>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
 
  </>
  );
}

export default CrearPrenda;