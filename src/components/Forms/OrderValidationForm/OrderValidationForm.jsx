import './OrderValidationForm.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"


export default function OrderValidationForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm()

	const navigate = useNavigate()
	const onSubmit = (data) => {
		navigate('/order-validation')
	}


	return (
		<form className="order-form" onSubmit={handleSubmit(onSubmit)}>

			<label htmlFor="name">Name:</label>
			<input name='name' defaultValue="John" {...register("name", { required: true })} />
			{errors.name && errors.name.type === "required" && (
				<span role="alert">This field is required</span>
			)}
			
			<label htmlFor="surname">Surname:</label>
			<input name='surname' defaultValue="Doe" {...register("surname", { required: true })} />
			{errors.surname && errors.surname.type === "required" && (
				<span role="alert">This field is required</span>
			)}

			<label htmlFor="email">Email:</label>
			<input name='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
			{errors.email && errors.email.type === "pattern" && (
				<span role="alert">Wrong email format</span>
			)}
			{errors.email && errors.email.type === "required" && (
				<span role="alert">This field is required</span>
			)}

			<label htmlFor="phoneNumber">Phone number:</label>
			<input name='phoneNumber' {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} />
			{errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
				<span role="alert">Wrong phone number format</span>
			)}
			{errors.phoneNumber && errors.phoneNumber.type === "required" && (
				<span role="alert">This field is required</span>
			)}

			<label htmlFor="adress">Adress:</label>
			<input name='adress' {...register("adress", { required: true })} />
			{errors.adress && errors.adress.type === "required" && (
				<span role="alert">This field is required</span>
			)}

			<label htmlFor="city">City:</label>
			<input name='city' {...register("city", { required: true })} />
			{errors.city && errors.city.type === "required" && (
				<span role="alert">This field is required</span>
			)}


			<input type="submit" />
		</form>
	)

};