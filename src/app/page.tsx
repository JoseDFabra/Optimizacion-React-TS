"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  namePet: string;
  nameOwner: string;
  email: string;
  dateAlta: string;
  symptoms: string;
};

function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [pacientes, setPacientes] = useState<Inputs[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setPacientes([...pacientes, data]);
    reset();
  };

  const deletePaciente = (paciente: Inputs) => {
    setPacientes(pacientes.filter((p) => p.namePet !== paciente.namePet));
  };
  const updatePaciente = (paciente: Inputs) => {
    //cambiar los datos de este paciente y poner los que esten el el formulario
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
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col "
              >
                <label htmlFor="namePet" className="font-bold text-left pl-10 mt-2">
                  Nombe Mascota
                </label>
                <input
                  className="mx-10 rounded text-center border-2"
                  {...register("namePet", { required: true })}
                />
                <div className="h-6 w-full ">
                  {errors.namePet && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <label htmlFor="nameOwner" className="font-bold text-left pl-10">
                  Nombe Propietario
                </label>
                <input
                  className="mx-10 rounded text-center border-2"
                  {...register("nameOwner", { required: true })}
                />
                <div className="h-6 w-full  ">
                  {errors.nameOwner && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <label htmlFor="email" className="font-bold text-left pl-10">
                  Email
                </label>
                <input
                  className="mx-10 rounded text-center border-2"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ingresa un correo electrónico válido",
                    },
                  })}
                />
                <div className="h-6 w-full  ">
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <label htmlFor="alta" className="font-bold text-left pl-10">
                  Alta
                </label>
                <input
                  className="mx-10 rounded text-center border-2"
                  placeholder="DD/MM/YYYY"
                  {...register("dateAlta", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,

                      message:
                        "Ingresa una fecha válida en el formato DD/MM/YYYY",
                    },
                  })}
                />
                <div className="h-6 w-full  ">
                  {errors.dateAlta && (
                    <span className="text-red-600">
                      {errors.dateAlta.message}
                    </span>
                  )}
                </div>
                <label htmlFor="sintomas" className="font-bold text-left pl-10">
                  Sintomas
                </label>
                <input
                  className="mx-10 rounded text-center border-2"
                  {...register("symptoms", { required: true })}
                />
                <div className="h-6 w-full  ">
                  {errors.symptoms && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="flex justify-center my-4">
                  <input
                    type="submit"
                    value="Send"
                    className="bg-slate-400 hover:bg-slate-300 cursor-pointer px-6 py-2 rounded"
                  />
                </div>
              </form>
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
            {pacientes.map((paciente, index) => (
              <div className="shadow bg-white rounded p-2 mt-4 text-left w-full" key={index}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
