import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBContainer,MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {Link} from "react-router-dom";
import axios from './axio/axios';
const ListarUsuario = () => {

  const [usuarios, setUsuarios] =useState([]);
 
    useEffect(() => {
        getUsuarios();
    },[]);
 
    const getUsuarios = async () => {
        const usuarios = await axios.get('http://localhost/kamilly/Usuario');
        setUsuarios(usuarios.data);
        console.log(usuarios.data);
    }
  return (
  <>
  <br />
  <MDBContainer>
  <Link to="/crearUsuario">AGREGAR USUARIO</Link>
  <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nro</th>
          <th scope='col'>Nombre</th>
          <th scope='col'>Apellido</th>
          <th scope='col'>Login</th>
          <th scope='col'>Telefono</th>
          <th scope='col'>Direccion</th>
          <th scope='col'>Estado</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      { usuarios.map((usuario, index) => (
        <tr key={usuario.id_usuario}>
        
          <td>
          {index + 1}
          </td>
          <td>{usuario.nombre_usuario}</td>
          <td>{usuario.apellido_usuario}</td>
          <td>{usuario.login}</td>
          <td>{usuario.telefono}</td>
          <td>{usuario.direccion}</td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Editar
            </MDBBtn>
          </td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Eliminar
            </MDBBtn>
          </td>
        </tr>   
        
        )) }
        
      </MDBTableBody>
    </MDBTable>
  
      
    </MDBContainer>
    
  </>
      

  );
}


export default ListarUsuario;