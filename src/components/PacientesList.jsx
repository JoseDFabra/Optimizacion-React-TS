import React from "react";

const PacientesList = ({ pacientes, deletePaciente, updatePaciente }) => {
  return (
    <>
      {pacientes.map((paciente, index) => (
        <div
          className="shadow bg-white rounded p-2 mt-4 text-left w-full"
          key={index}
        >
          <p>mascota: {paciente.namePet}</p>
          <p>propietario: {paciente.nameOwner}</p>
          <p>Email: {paciente.email}</p>
          <p>Fecha de alta: {paciente.dateAlta}</p>
          <p>Síntomas: {paciente.symptoms}</p>
          <div className="flex justify-between">
            <button
              onClick={() => {
                updatePaciente(paciente);
              }}
              className="bg-cyan-500 hover:bg-cyan-400 rounded p-1"
            >
              Update
            </button>
            <button
              onClick={() => {
                deletePaciente(paciente);
              }}
              className="bg-red-500 hover:bg-red-400 rounded p-1"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PacientesList;
