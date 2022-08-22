import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        
        <input defaultValue={loggedInUser.name} {...register("name",  { required: true })} placeholder='Your Name' />
        {errors.exampleRequired && <span className='ship-form' >Name is required</span>}

        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder='Your Email' />
        {errors.exampleRequired && <span className='ship-form' >Email required</span>}

        <input {...register("<address></address>", { required: true })} placeholder='Yor Address' />
        {errors.exampleRequired && <span className='ship-form' >Address required</span>}

        <input defaultValue={loggedInUser.phone} {...register("phone", { required: true })} placeholder='Your Phone number' />
        {errors.exampleRequired && <span className='ship-form' >Phone Number required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;