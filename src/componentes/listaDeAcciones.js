import React from 'react';

const listaDesordenada = ({ acciones }) => {
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
