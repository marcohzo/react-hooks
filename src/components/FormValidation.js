import React from "react";
import { useForm } from "react-hook-form";

const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Register = registrar su comportamiento en el form es como id/name
  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-react">
        <div className="form-control">
          <label>Name </label>
          <input
            type="text"
            {...register("name", {
              required: true,
              minLength: 4,
              maxLength: 15,
            })}
          />
          {errors.name?.type === "required" && (
            <small className="fail">This field is required</small>
          )}
          {errors.name?.type === "maxLength" && (
            <small className="fail">The maximum characters is 15</small>
          )}
          {errors.name?.type === "minLength" && (
            <small className="fail">The minimum characters is 4</small>
          )}
        </div>
        <div className="form-control">
          <label>Age </label>
          <input
            type="number"
            {...register("age", {
              required: true,
              min: 10,
              max: 100,
            })}
          />
          {errors.age?.type === "required" && (
            <small className="fail">This field is required</small>
          )}
          {errors.age?.type === "max" && (
            <small className="fail">The maximum age is 100</small>
          )}
          {errors.age?.type === "min" && (
            <small className="fail">The minimum age is 10</small>
          )}
        </div>
        <div className="form-control">
          <label>Country </label>
          <input
            type="text"
            {...register("country", {
              required: {
                value: true,
                message: "Custom Message: add your country",
              },
            })}
          />
          {errors.country && (
            <small className="fail">{errors.country.message}</small>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormValidation;
