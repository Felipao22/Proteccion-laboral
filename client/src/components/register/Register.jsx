import React from 'react'
import bgImg from '../../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import './Register.css'
import NavBar from '../navbar/NavBar'
export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
      <NavBar />
        <div className="register">
            <div className="col-1">
                <h2>Registrarse</h2>
                <span>Registre su empresa</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="mail">Ingrese su mail:</label>
                    <input type="text" {...register("username")} placeholder='example@gmail.com' />
                    <label htmlFor="password">Ingrese su contraseña:</label>
                    <input type="password" {...register("password")} placeholder='Contraseña' />
                    <label htmlFor="confirmpwd">Confirme su contraseña:</label>
                    <input type="password" {...register("confirmpwd")} placeholder='Confirmar contraseña' />
                    <label htmlFor="namebusiness">Ingrese el nombre de la empresa:</label>
                    <input type="text" {...register("namebusiness")} placeholder='Nombre de la empresa' />
                    <label htmlFor="province">Provincia:</label>
                    <select
                  name="province"
                  value={''}
                 
                >
                  <option value="">{ } </option>
                </select>
                <label htmlFor="city">Ciudad:</label>
                    <select
                  name="city"
                  value={''}
                 
                >
                  <option value="">{} </option>
                </select>
                <input type="text" {...register("adress")} placeholder='Dirección de la empresa' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Número de celular' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Registrarse</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}