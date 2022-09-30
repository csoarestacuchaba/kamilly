import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import { MDBContainer, MDBRow,MDBCol,MDBNavbarItem,MDBNavbarLink,MDBNavbarNav,MDBNavbarBrand } from 'mdb-react-ui-kit';
function Menu() {





  return (
  <>
  <br />
  <MDBContainer>
  <MDBRow className='mb-3'>
        <MDBCol size='3'>
        <MDBNavbarBrand href='#'>
            <h2>DASHBOARD</h2>
          </MDBNavbarBrand>
        <MDBNavbarNav>
             <MDBNavbarItem>
              <MDBNavbarLink>
              <Link to="/dashboard">USUARIO</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBNavbarNav>
             <MDBNavbarItem>
              <MDBNavbarLink>
              <Link to="/listarPrendas">PRENDA</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>

        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
    
  </>
      

  );
}

export default Menu;