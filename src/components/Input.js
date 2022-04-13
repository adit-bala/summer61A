import React from "react";
import { useForm } from "react-hook-form";
import "../styles/Input.css";

const Input = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="top-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("tree", { pattern: /^[A-Za-z]+$/i })} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Input;
