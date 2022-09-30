import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu';
import { MDBContainer,MDBRow, MDBBtn, MDBCol, MDBCardTitle, MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from './axio/axios';
import { useNavigate } from "react-router-dom";
function CrearUsuario() {

  const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }


  const handleSubmit = (event) => {
	  event.preventDefault();

      const nombre_usuario= inputs['nombre_usuario'];
      const apellido_usuario= inputs['apellido_usuario'];
      const login= inputs['login'];
      const pasword= inputs['password'];
      const telefono= inputs['telefono'];
      const direccion= inputs['direccion'];

	  
	  axios.get('http://localhost/kamilly/CrearUsuario?nombre_usuario='+nombre_usuario+'&apellido_usuario='+apellido_usuario+'&login='+login+'&password='+pasword+'&telefono='+telefono+'&direccion='+direccion).then((response) => {
    
      navigate("/dashboard");
    
	  
    });
  }

  return (
  <>
  <br />
  
  <br />
  <MDBContainer>
      <MDBRow className='mb-3'>
        <MDBCol size='3'>
        <Menu />
        </MDBCol>
        <MDBCol size='5'>
        <MDBRow>
            <MDBCardTitle>NUEVO USUARIO</MDBCardTitle>
        </MDBRow> 
        <br />
        <form onSubmit={handleSubmit }>
      <MDBInput 
      className='mb-4' 
      type='text' 
      id='nombre_usuario' 
	  name='nombre_usuario'
      label='Nombre'
	  value={inputs.nombre_usuario || ""}
    onChange={handleChange}
      />

     <MDBInput 
      className='mb-4' 
      type='text' 
      id='apellido_usuario' 
	  name='apellido_usuario'
      label='Apellido'
	  value={inputs.apellido_usuario || ""}
    onChange={handleChange}
      />

<MDBInput 
      className='mb-4' 
      type='text' 
      id='login' 
	  name='login'
      label='Login'
	  value={inputs.login || ""} 
    onChange={handleChange}
      />

      <MDBInput 
      className='mb-4' 
      type='password' 
      id='password'
	  name='password'
      label='Password' 
	  value={inputs.password || ""} 
	  onChange={handleChange}
	  />

<MDBInput 
      className='mb-4' 
      type='text' 
      id='telefono' 
	  name='telefono'
      label='Telefono'
	  value={inputs.telefono || ""} 
    onChange={handleChange}
      />

<MDBInput 
      className='mb-4' 
      type='text' 
      id='direccion' 
	  name='direccion'
      label='Direccion'
	  value={inputs.direccion || ""}
    onChange={handleChange}
      />
      
      <MDBBtn type='submit' onClick={handleSubmit} block>
        NUEVO USUARIO
      </MDBBtn>
        </form>
        <br />
        </MDBCol>
        <MDBCol size='4'>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  </>
      

  );
}

export default CrearUsuario;