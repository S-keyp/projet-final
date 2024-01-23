import './ConnexionForm.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../../model/utils/context/UserContext';
import { auth } from '../../../firebase.config'


export default function OrderValidationForm() {

	const inputs = useRef([])
	const [validation, setValidation] = useState("")
	const { user, signIn, logOut } = useContext(UserContext)
	const navigate = useNavigate()

	function handleLogOut() {
		logOut()
		navigate("/")
	}

	function resetAll() {
		inputs.current = []
		console.log(inputs.current)
	}

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
			await signIn(
				inputs.current[0].value,
				inputs.current[1].value
			)

			// setValidation("")
			navigate("/admin/home")

		} catch (e) {
			// if(e.code === "auth/invalid-email") {
			// 	setValidation("Error in email")
			// }
			setValidation("Error, email or password incorrect")
		}

		resetAll()
	}


	return (
		<div className="connexion-box">
			{
				!!!user && (
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

						{
							validation !== "" && (
								<p>{validation}</p>
							)
						}
						<button type='submit'>Send</button>
					</form>
				)
			}
			{
				user && (
					<button onClick={handleLogOut}>
						Log out
					</button>
				)
			}


		</div>
	)

};