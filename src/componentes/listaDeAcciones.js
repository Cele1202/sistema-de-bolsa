
// const ListaDesordenada = () => {
//   return (
//     <ul>
//       <li>Elemento 1</li>
//       <li>Elemento 2</li>
//       <li>Elemento 3</li>
//       <li>Elemento 4</li>
//     </ul>
//   );
// }

// export default ListaDesordenada;

//Modificacion

// ListaDeAcciones.js (renombrado para seguir la convención de nombres)

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
