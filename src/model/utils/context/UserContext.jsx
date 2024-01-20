import { auth } from '../../../firebase.config'
import { useEffect, useState, createContext } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


export const UserContext = createContext()

export default function UserContextProvider( { children } ) {
	
	const [user, setCurrentUser] = useState()
    const [loadingData, setLoadingData] = useState(true)

	const signIn = (email, password)  => {
		signInWithEmailAndPassword(auth, email, password).then((e) => console.log('e', e))
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user)
			setLoadingData(false)
		})

		return unsubscribe
	}, [])

    return (
        <UserContext.Provider value={{ user, signIn }}>
            { !loadingData && children }
        </UserContext.Provider>
    )
} 