import React from 'react';

const listaDesordenada = ({ acciones }) => {
  //Esta funcion retorna un componente
  return (
    <ul>
      {acciones.map((accion, index) => (
        <li key={index}>
          <strong>{accion.Nombre}:</strong> PER {accion.PER}
        </li>
      ))}
    </ul>
  );
};

export default listaDesordenada;