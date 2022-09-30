import React from 'react';
import { useState } from 'react';
import axios from './axio/axios';
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,MDBRow,
  MDBCol,MDBInput,MDBBtn,
  MDBCheckbox,
  MDBCardTitle
} from 'mdb-react-ui-kit';

function Login() {
	
	  const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    OpcionSession();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  function GuardarSession(nombre){
    localStorage.setItem("login", nombre);
  };

  function OpcionSession(){
    if(localStorage.getItem('login')){
      localStorage.removeItem('login');
    }
  }
  
  const handleSubmit = (event) => {
	  event.preventDefault();

      const usuario= inputs['login'];
      const pasword= inputs['password'];
	  
	  axios.get('http://localhost/kamilly/Login?login='+usuario+'&password='+pasword).then((response) => {
    if(response.data.login==usuario){
      GuardarSession(response.data.login);
      navigate("/dashboard");
    }
	  
    });
  }


  return (
  <>
  <br />
  <MDBContainer>
      <MDBRow>
        <MDBCol size='md'>
        </MDBCol>
        <MDBCol size='md'>
        <MDBRow>
            <MDBCardTitle>INGRESAR</MDBCardTitle>
        </MDBRow> 
        <br />
        <form onSubmit={handleSubmit }>
      <MDBInput 
      className='mb-4' 
      type='email' 
      id='login' 
	  name='login'
      label='usuario'
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
      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
      </MDBRow>
      <MDBBtn type='submit' onClick={handleSubmit} block>
        INGESAR
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

export default Login;