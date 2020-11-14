import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false);

  // Extraer valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //Funcion que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (evt) => {
    console.log(evt.target.value);
    actualizarCita({
      ...cita,
      [evt.target.name]: evt.target.value,
    });
  };
  //Cuando el usuario envia el formulario
  const submitCita = (evt) => {
    evt.preventDefault();

    // Validacion
    console.log(mascota);
    if (
      mascota.trim() == "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    var datosCita = {
      ...cita,
    };
    // Asignar un ID
    datosCita.id = uuid();
    // Crear la Cita
    crearCita(Object.freeze(datosCita));
    // Reiniciar el form
  };
  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
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
