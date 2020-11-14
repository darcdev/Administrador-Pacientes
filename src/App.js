import React, { useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
const App = () => {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  // Arreglo de citas
  let [citas, guardarCitas] = useState(citasIniciales);

  // Acciones citas localstorage
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Toma las citas actuales y agrega nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Elimina una cita por su id

  const eliminarCita = (citaId) => {
    const actualizacionCitas = citas.filter((cita) => cita.id !== citaId);
    guardarCitas(actualizacionCitas);
  };

  // Mensaje condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
