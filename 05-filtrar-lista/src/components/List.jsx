import React, { useState } from "react";
import itemsList from "./items";
import ListView from "./ListView";

// Componentes de presentación y componentes contenedores
// Componentes contenedor: Este se encarga de procesar toda la informacion y enviarla a ListView.jsx
const List = () => {
  let [items, setItems] = useState(itemsList);

  // Creamos la funcion que filtra las palabras:
  const filterItems = (searchWord) => {
    // Si el patron de busqueda esta vacio muestro toda la lista:
    if (searchWord === "") {
      // Mostramos toda la lista:
      setItems(itemsList);
    } else {
      // Le pasamos esta funcion:
      let newItems = filterItemsBySearchPattern(searchWord);
      setItems(newItems);
    }
  };

  // Funcion para filtrar elementos:
  const filterItemsBySearchPattern = (searchWord) => {
    let filterItems = itemsList.map((item) => {
      return item.toLowerCase().includes(searchWord.toLowerCase())
        ? item
        : null;
    });
    return filterItems;
  };
  return (
    <>
      <ListView elements={items} funcFilterItems={filterItems} />
    </>
  );
};

export default List;
