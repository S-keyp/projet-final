import { auth } from '../../../firebase.config'
import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from "firebase/auth"


export const UserContext = createContext()

export default function UserContextProvider({ children }) {

	const [user, setCurrentUser] = useState()
	const [loadingData, setLoadingData] = useState(true)

	const signIn = (email, password) => new Promise((resolve, reject) => signInWithEmailAndPassword(auth, email, password).then(resolve).catch(reject))

	const logOut = async () => {
		await signOut(auth)
		setCurrentUser(null)
	}


	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoadingData(false)
		})

		return unsubscribe
	}, [])

	return (
		<UserContext.Provider value={{ user, signIn, logOut }}>
			{!loadingData && children}
		</UserContext.Provider>
	)
} 