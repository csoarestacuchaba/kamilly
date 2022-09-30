import React, { useEffect,useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse
} from 'mdb-react-ui-kit';
import {
  Route,Routes,Link,useNavigate
} from "react-router-dom";
import Nosotros from '../../nosotros';
import Inicio from '../inicio';
import Catalogo from '../../catalogo';
import CatalogoAdulto from '../../catalogoadulto';
import CatalogoInfantil from '../../catalogoinfantil';
import Contactos from '../../contactos';
import Login from '../../login';
import Dashboard from '../../dashboard';
import CrearUsuario from '../../CrearUsuario';
import ListarPrendas from '../../ListarPrendas';
import CrearPrenda from '../../CrearPrenda';
import logo from '../../img/logo.png';
function cabecera()  {
    var sesion='Invitado';
    var opcion='Ingresar';
    cargarSession(localStorage.getItem('login'));
    const [showBasic] = useState(false);
    
    function cargarSession(nombre){
      if(nombre){
        sesion=nombre;
        opcion='Cerrar';
      }
      else{
        sesion='Invitado';
        opcion='Ingresar';
      }
      
    }  

    

  return (
    <header>
       
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
          <img 
              src={logo}
              height='60'
              alt='40'
              loading='lazy'
            />
            KAMILLY
          </MDBNavbarBrand>
          <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink>
              <Link to="/inicio">Inicio</Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink to="/">
            <Link to="/nosotros" tag='a'>Nosotros</Link>
            </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  Catalogo
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link><Link to="/catalogo/">Ropa Bebe</Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to="/catalogoInfantil/">Ropa Infantil</Link></MDBDropdownItem>
                  <MDBDropdownItem link><Link to="/catalogoAdulto/">Ropa Adultos</Link></MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'><Link to="/contactos">Contactos</Link></MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <div>
        
          <MDBIcon color='white' fas icon="user-tie" />
          <MDBNavbarLink style={{ backgroundColor: 'rgba(240, 240, 240)' }}>{sesion}</MDBNavbarLink>
          <Link to="/login">{opcion}</Link>
      </div>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/catalogo/" element={<Catalogo />} />
          <Route path="/catalogoAdulto/" element={<CatalogoAdulto />} />
          <Route path="/catalogoInfantil/" element={<CatalogoInfantil />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crearUsuario" element={<CrearUsuario />} />
          <Route path="/listarPrendas" element={<ListarPrendas />} />
          <Route path="/crearPrenda" element={<CrearPrenda />} />

          
          
          <Route index element={<Inicio />} />

        </Routes>
    
    </header>
    
  );
}

export default cabecera;