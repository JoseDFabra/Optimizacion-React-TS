import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

type Inputs = {
  namePet: string;
  nameOwner: string;
  email: string;
  dateAlta: string;
  symptoms: string;
};
type UseFormProps = {
  onAddPaciente: (data: Inputs) => void;
}

const UseForm: React.FC<UseFormProps> = ({ onAddPaciente }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();



  const habdleSubmit: SubmitHandler<Inputs> = (data) => {
    onAddPaciente(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(habdleSubmit)} className="flex flex-col ">
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
            value: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,

            message: "Ingresa una fecha válida en el formato DD/MM/YYYY",
          },
        })}
      />
      <div className="h-6 w-full  ">
        {errors.dateAlta && (
          <span className="text-red-600">{errors.dateAlta.message}</span>
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
  );
};

export default UseForm;
