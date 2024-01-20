import React from 'react';
import PropTypes from 'prop-types';
import './SignIn.css';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../model/utils/context/UserContext';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {

	const { signIn } = useContext(UserContext)
	const navigate = useNavigate()

	const [validation, setValidation] = useState("")

	const inputs = useRef([])
	const addInputs = el => {
		if (el && !inputs.current.includes(el)) {
			inputs.current.push(el)
		}
	}
	const formRef = useRef()

	const handleForm = async (e) => {
		e.preventDefault()
		if ((inputs.current[1].value.length || inputs.current[2].value.length) < 6) {
			//pseudo validation côté front
			setValidation("6 chars min")
			return
		} 

		try {
			console.log(inputs.current[0].value, inputs.current[1].value)
			const cred = await signIn(
				inputs.current[0].value,
				inputs.current[1].value
			)
			console.log("it worked !")
			formRef.current.reset()
			setValidation("")
			navigate("/admin/dishlist")
		} catch (e) {
			// if(e.code === "auth/invalid-email") {
			// 	setValidation("Error in email")
			// }
			setValidation("Error, email or password incorrect")
		}


	}


	return (
		<div className="sign-in">
			SignIn Component

			<form
				ref={formRef}
				onSubmit={handleForm}
				className=''
			>
				<div className="sign-in-field">
					<label htmlFor="signInEmail">
						Email
					</label>
					<input
						ref={addInputs}
						name='email'
						required
						type='email'
						className=''
						id='signUpEmail'
					/>
				</div>

				<div className="sign-in-field">
					<label htmlFor="signInPwd">
						Password
					</label>
					<input
						ref={addInputs}
						name='pwd'
						required
						type='passwrod'
						className=''
						id='signUpPwd'
					/>
				</div>

				<p>{validation}</p>
				<button type='submit'>Send</button>
			</form>

		</div>
	)
};
