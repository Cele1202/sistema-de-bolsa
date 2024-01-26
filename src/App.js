// import ListaDesordenada from "./componentes/listaDeAcciones";
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Lista de Acciones</h1>
//         <ListaDesordenada></ListaDesordenada>
//     </div>
//   );
// }

// export default App;
//modificación
// App.js

import React from 'react';
import listaDesordenada from "./componentes/listaDeAcciones";  // Asegúrate de la ruta correcta
import './App.css';

function App() {
  // Definir un objeto de acciones
  const acciones = [
    { "Nombre": "Banco Santander", "PER": 15 },
    { "Nombre": "CAP", "PER": 5 },
    { "Nombre": "Banco de Chile", "PER": 10 }
  ];

  return (
    <div className="App">
      <h1>Lista de Acciones</h1>
      {/* Pasar el objeto de acciones como prop */}
      <listaDesordenada acciones={acciones} />
    </div>
  );
}

export default App;

