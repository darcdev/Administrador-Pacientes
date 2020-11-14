import React, { useState } from "react";

const Formulario = () => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  //Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (evt) => {
    console.log(evt.target.value);
    actualizarCita({
      ...cita,
      [evt.target.name]: [evt.target.value],
    });
  };
  //Cuando el usuario envia el formulario
  const submitCita = (evt) => {
    evt.preventDefault();

    // Validacion

    // Asignar un ID

    // Crear la Cita

    // Reiniciar el form
  };
  // Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <>
      <h2>Crear Cita</h2>
      <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la Mascota"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button className="u-full-width button-primary">agregar cita</button>
      </form>
    </>
  );
};

export default Formulario;
