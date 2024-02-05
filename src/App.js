import React from 'react';
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

