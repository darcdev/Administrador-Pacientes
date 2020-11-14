import React, { useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
const App = () => {
  // Arreglo de citas

  const [citas, guardarCitas] = useState([]);

  // Toma las citas actuales y agrega nueva

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Elimina una cita por su id

  const eliminarCita = (citaId) => {
    console.log("hey");
    const actualizacionCitas = citas.filter((cita) => cita.id !== citaId);

    console.log(actualizacionCitas);
    guardarCitas(actualizacionCitas);
  };
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
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
