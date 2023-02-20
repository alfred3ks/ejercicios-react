import React from "react";

// Contenedor de presentación: Aqui no procesamos nada solo mostramos la informacion: Quien procesa es List.jsx
// Recibe por props
const ListView = ({ elements, funcFilterItems }) => {
  return (
    <>
      <div>
        <h1>Filtrado de elementos de la lista.</h1>
        <label htmlFor="filtro">Introduce la palabra de búsqueda.</label>
      </div>
      <input
        type="text"
        name="filtro"
        id="filtro"
        onChange={(e) => {
          funcFilterItems(e.target.value);
        }}
      />
      {/* Iteramos para mostrar los elementos de la lista */}
      <ul>
        {elements.map((element, index) => {
          // Aqui retornamos cuando ambos son true: De verdad poco entiendo porque hacerlos asi:
          return element && <li key={index}>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default ListView;
