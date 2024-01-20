import './ConnexionBox.css';
import { useNavigate } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { UserContext } from '../../model/utils/context/UserContext';
import { auth } from '../../firebase.config'
import { signOut } from "firebase/auth"


export default function ConnexionBox() {

	const inputs = useRef([])
	const [validation, setValidation] = useState("")
	const { user, signIn } = useContext(UserContext)
	const navigate = useNavigate()

	const logOut = async () => {
		await signOut(auth)
		navigate("/")
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

			// formRef.current.reset()
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
		<div className="ConnexionBox">
			{
				!!!user && (
					<div className="sign-in">
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
			}
			{
				user && (
					<button onClick={logOut}>
						Log out
					</button>
				)
			}


		</div>
	)

};