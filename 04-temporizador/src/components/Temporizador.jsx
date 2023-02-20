import React, { useEffect, useState } from "react";

const Temporizador = () => {
  let [targetSeconds, setTargetSeconds] = useState(null);
  let [elapsedSeconds, setElapsedSeconds] = useState(0);

  // Usamos useEffect(), con el evitamos el efecto secundario del setInterval() ya que no es una funcion pura:
  useEffect(() => {
    // Si no dan el valor de conteo aqui matamos la funcion:
    if (targetSeconds === null) {
      return;
    }

    // Aqui ya targetSeconds tiene un valor:
    setElapsedSeconds(0);

    let interval = setInterval(() => {
      setElapsedSeconds((elapsedSeconds) => {
        return elapsedSeconds + 1;
      });
    }, 1000);

    // Esta funcion es importante cuando usamos setInterval(), es como hacer una limpieza, el useEffect() debe hacer ese return:
    return () => {
      clearInterval(interval);
    };
  }, [targetSeconds]);

  const parseForm = (e) => {
    e.preventDefault();
    let seconds = e.target.seconds.value;
    console.log(seconds);
    if (seconds === "") {
      setTargetSeconds(null);
    } else {
      setTargetSeconds(parseInt(seconds));
    }
  };

  // Funcion de reiniciar:
  const reiniciar = () => {
    setTargetSeconds(null);
  };

  // Cuando acaba el contador de ejecutarse se ejecuta:
  if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return (
      <>
        <p>Termino!!!!</p>
        <button onClick={reiniciar}>Reiniciar</button>
      </>
    );
  }

  // Aqui renderizamos cuando el usuario mete un valor y da al boton de iniciar:
  if (targetSeconds !== null) {
    return <p>Faltan {targetSeconds - elapsedSeconds} segundos...</p>;
  }

  return (
    <div>
      <p>¿Cuantos segundos quieres contar?</p>
      <form
        action="#"
        onSubmit={(e) => {
          return parseForm(e);
        }}
      >
        <input type="number" name="seconds" id="seconds" />
        <button>Iniciar</button>
      </form>
    </div>
  );
};

export default Temporizador;
