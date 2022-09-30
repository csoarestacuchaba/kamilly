import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListarUsuario from './ListarUsuario';
import { MDBContainer, MDBRow,MDBCol,MDBNavbarItem,MDBNavbarLink,MDBNavbarNav,MDBNavbarBrand } from 'mdb-react-ui-kit';
import Menu from './menu';
function Dashboard() {





  return (
  <>
  <br />
  <MDBContainer>
  <MDBRow className='mb-3'>
        <MDBCol size='3'>
        <Menu />
        </MDBCol>
        <MDBCol size='9'>
          <ListarUsuario/>
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    
  </>
      

  );
}

export default Dashboard;