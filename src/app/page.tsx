"use client";
import UseForm from "@/components/UseForm";
import PacientesList from "@/components/PacientesList";
import { useState } from "react";

type Inputs = {
  namePet: string;
  nameOwner: string;
  email: string;
  dateAlta: string;
  symptoms: string;
};

function Home() {
  const [pacientes, setPacientes] = useState<Inputs[]>([]);

  const deletePaciente = (paciente: Inputs) => {
    setPacientes(pacientes.filter((p) => p.namePet !== paciente.namePet));
  };
  const updatePaciente = (paciente: Inputs) => {
    
  };

  const addPaciente = (data: Inputs) => {
    setPacientes([...pacientes, data]);
  };
  return (
    <div className="w-screen h-screen flex text-center items-center flex-col mt-6">
      <h1 className="font-bold text-4xl mb-2 bg-">
        Seguimientos Pacientes{" "}
        <span className="text-violet-700">Veterinaria</span>
      </h1>
      <div className=" flex w-full min-h-full">
        <div className="w-1/2 ">
          <h3 className="font-bold text-2xl mt-6 ">Seguimiento Pacientes</h3>
          <p className="font-semibold mt-2 ">
            Añade Pacientes y{" "}
            <span className="text-violet-700 font-bold ">Administralos</span>{" "}
          </p>
          <div className="w-full flex justify-center">
            <div className="w-3/4 rounded-lg bg-white shadow">

              <UseForm onAddPaciente={addPaciente} />

            </div>
          </div>
        </div>
        <div className="w-1/2 flex mr-4 flex-col items-center overflow-auto ">
          <div className="flex flex-col items-center w-10/12">
            <h3 className="font-bold text-2xl mt-6 ">Listado Pacientes</h3>
            <p className="font-semibold mt-2 ">
              Administra tus{" "}
              <span className="text-violet-700 font-bold ">
                Pacientes y Citas
              </span>{" "}
            </p>

            <PacientesList 
              pacientes={pacientes}
              deletePaciente={deletePaciente}
              updatePaciente={updatePaciente}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
