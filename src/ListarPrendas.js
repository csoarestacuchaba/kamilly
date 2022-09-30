import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menu';
import { MDBContainer,MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,MDBRow,MDBCol } from 'mdb-react-ui-kit';
import { useState,useEffect } from 'react';
import axios from './axio/axios';
import {Link} from "react-router-dom";
function listarPrendas() {

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
  <MDBContainer>
  <MDBRow className='mb-3'>
        <MDBCol size='3'>
        <Menu />
        </MDBCol>
  <MDBCol size='9'>
  <Link to="/crearPrenda">AGREGAR PRENDA</Link>
  <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Nro</th>
          <th scope='col'>Nombre</th>
          <th scope='col'>Marca</th>
          <th scope='col'>Costo</th>
          <th scope='col'>Stock</th>
          <th scope='col'>Color</th>
          <th scope='col'></th>
          <th scope='col'></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      { prendas.map((prenda, index) => (
        <tr key={prenda.id_prenda}>
          <td>
            {index+1}
          </td>
          <td>{prenda.prenda_nombre}</td>
          <td>{prenda.prenda_marca}</td>
          <td>{prenda.prenda_costo} Bs</td>
          <td>{prenda.prenda_stock} Unidades</td>
          <td>
          {prenda.prenda_color} 
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
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    
  </>
      

  );
}

export default listarPrendas;