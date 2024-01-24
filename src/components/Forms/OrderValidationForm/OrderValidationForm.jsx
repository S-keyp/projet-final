import './OrderValidationForm.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"


export default function OrderValidationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const navigate = useNavigate()
	const onSubmit = (data) => {
		navigate('/order-validation')
	}


	return (
		<form className="order-form" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<div className="order-form-row">
					<div>
						<label htmlFor="name">Name:</label>
						<input name='name' defaultValue="John" {...register("name", { required: true })} />
						{errors.name && errors.name.type === "required" && (
							<p role="alert">This field is required</p>
						)}
					</div>

					<div>
						<label htmlFor="surname">Surname:</label>
						<input name='surname' defaultValue="Doe" {...register("surname", { required: true })} />
						{errors.surname && errors.surname.type === "required" && (
							<p role="alert">This field is required</p>
						)}
					</div>
				</div>

				<div className="order-form-row">
					<div>
						<label htmlFor="email">Email:</label>
						<input name='email' {...register("email", { required: true, pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
						{errors.email && errors.email.type === "pattern" && (
							<p role="alert">Wrong email format</p>
						)}
						{errors.email && errors.email.type === "required" && (
							<p role="alert">This field is required</p>
						)}
					</div>

					<div>
						<label htmlFor="phoneNumber">Phone number:</label>
						<input name='phoneNumber' {...register("phoneNumber", { required: true, pattern: /^[0-9]{10}$/ })} />
						{errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
							<p role="alert">Wrong phone number format</p>
						)}
						{errors.phoneNumber && errors.phoneNumber.type === "required" && (
							<p role="alert">This field is required</p>
						)}
					</div>
				</div>
			</div>

			<div className='order-form-row'>
				<div>
					<label htmlFor="adress">Adress:</label>
					<input name='adress' {...register("adress", { required: true })} />
					{errors.adress && errors.adress.type === "required" && (
						<p role="alert">This field is required</p>
					)}
				</div>

				<div>
					<label htmlFor="city">City:</label>
					<input name='city' {...register("city", { required: true })} />
					{errors.city && errors.city.type === "required" && (
						<p role="alert">This field is required</p>
					)}
				</div>
			</div>


			<button type="submit">Submit</button>
		</form>
	)

};