import React, { useState } from "react";

// Aqui vemos el hook useState(), vamos a poner estados.
const Counter = () => {
  let [valorInicial, setValorInicial] = useState(0);

  const incrementar = () => {
    setValorInicial(valorInicial + 1);
  };

  const disminuir = () => {
    setValorInicial(valorInicial - 1);
  };

  return (
    <div>
      <h1>Contador: {valorInicial}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Counter;
