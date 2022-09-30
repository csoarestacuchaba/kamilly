import React from 'react';
import Cabecera from './componentes/cabecera/cabecera';
import Pie from './componentes/pie/pie';
import Carrucel from './componentes/carrucel/carrucel';
import Card from './componentes/card/card';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  <>
   <Router>
  <Cabecera />
    <Pie />
    </Router>
  </>
      

  );
}

export default App;
