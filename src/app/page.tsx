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
  const [pacientes, setpacientes] = useState<Inputs[]>([]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setpacientes((prev) => [...prev, data]);
    reset();
  };

  return (
    <div className="w-screen h-screen flex text-center items-center flex-col mt-6">
      <h1 className=" font-bold text-4xl">
        Seguimientos Pacientes{" "}
        <span className="text-violet-700">Veterinaria</span>
      </h1>
      <div className=" flex w-full min-h-full bg-yellow-100">
        <div className="w-1/2 bg-purple-200">
          <h3 className="font-bold text-2xl mt-6 ">Seguimiento Pacientes</h3>
          <p className="font-semibold mt-2 ">
            Añade Pacientes y{" "}
            <span className="text-violet-700 font-bold ">Administralos</span>{" "}
          </p>
          <div className="w-full flex justify-center">
            <div className="w-3/4 bg-gray-200 rounded-lg shadow">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col "
              >
                <label htmlFor="namePet" className="font-bold">
                  Nombe Mascota
                </label>
                <input
                  className="mx-10 rounded text-center"
                  {...register("namePet", { required: true })}
                />
                <div className="h-6 w-full bg-slate-500 ">
                  {errors.namePet && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <label htmlFor="nameOwner" className="font-bold">
                  Nombe Propietario
                </label>
                <input
                  className="mx-10 rounded text-center"
                  {...register("nameOwner", { required: true })}
                />
                <div className="h-6 w-full bg-slate-500 ">
                  {errors.nameOwner && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  className="mx-10 rounded text-center"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Ingresa un correo electrónico válido",
                    },
                  })}
                />
                <div className="h-6 w-full bg-slate-500 ">
                  {errors.email && (
                    <span className="text-red-600">{errors.email.message}</span>
                  )}
                </div>
                <label htmlFor="alta" className="font-bold">
                  Alta
                </label>
                <input
                  className="mx-10 rounded text-center"
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
                <div className="h-6 w-full bg-slate-500 ">
                  {errors.dateAlta && (
                    <span className="text-red-600">
                      {errors.dateAlta.message}
                    </span>
                  )}
                </div>
                <label htmlFor="sintomas" className="font-bold">
                  Sintomas
                </label>
                <input
                  className="mx-10 rounded text-center"
                  {...register("symptoms", { required: true })}
                />
                <div className="h-6 w-full bg-slate-500 ">
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
        <div className="w-1/2 flex flex-col items-center bg-green-200">
          <div className="flex flex-col items-center w-10/12">
          <h3 className="font-bold text-2xl mt-6 ">Listado Pacientes</h3>
          <p className="font-semibold mt-2 ">
            Administra tus{" "}
            <span className="text-violet-700 font-bold ">Pacientes y Citas</span>{" "}
          </p>
          {pacientes.map((paciente, index) => (
            <div className="bg-yellow-200 mt-4 text-left w-full" key={index}>
                <p>Nombre de la mascota: {paciente.namePet}</p>
                <p>Nombre del propietario: {paciente.nameOwner}</p>
                <p>Email: {paciente.email}</p>
                <p>Fecha de alta: {paciente.dateAlta}</p>
                <p>Síntomas: {paciente.symptoms}</p>
                <div className="flex justify-between">
                  <button className="bg-cyan-500 hover:bg-cyan-400">
                    Update
                  </button>
                  <button className="bg-red-500 hover:bg-red-400">
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
